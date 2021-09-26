<template>
  <div class="create-event-container">
    <h2>Ajout d'un évenment </h2>
    <BackButton path="/admin"/>
    <div class="create-event-form">
      <p class="required-label"> Les champs obligatoire sont suivis par un <strong>
        <abbr title="required">*</abbr></strong>
      </p>
        <div class="row">
          <label>
            <span> Titre</span>
            <strong><abbr>*</abbr></strong>
            </label>
            <input type="text" id="title" name="title" v-model="title" />

        </div>
        <div>
          <label>
            <span>Description</span>
            <strong><abbr>*</abbr></strong>
            </label>
            <textarea type="text" id="description" v-model="description" rows="6"></textarea>

        </div>
        <div class="media-container">
         <button type="button" @click="addMedia" class="btn-add-file">Ajouter un media</button>
          <div v-for="(nb, i) of nbMedia" :key="`input-image-${i}`">
              <InputFile
                :ref="`uploadfile-${i}`" :id="`file${i}`"
                @fileChange="preventFiles" />
          </div>
        </div>
        <button type="button" @click="createEvent" class="btn-validate" >Créer</button>
    </div>
  </div>
</template>
<script>
import InputFile from '@/components/InputFile.vue';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'CreateEvent',
  components: {
    InputFile,
    BackButton,
  },
  data() {
    return {
      nbMedia: 0,
      title: null,
      description: null,
      files: null,
      errors: [],
      uploadFiles: [],
    };
  },
  methods: {
    addMedia() {
      if (this.nbMedia > 4) {
        return;
      }

      this.nbMedia += 1;
    },
    preventFiles(file) {
      if (file) {
        this.uploadFiles.push(file);
      }

      // controle poids de la photo ?
      if (this.checkImages()) {
        this.errors.push('La taille maximal d\'une photo ne doit pas excéder 5Mo');
      }
    },
    createEvent(e) {
      // validation data form
      if (this.isFormValid(e)) {
        return;
      }

      const eventData = {
        title: this.title,
        description: this.description,
        medias: this.uploadFiles.map((u) => u.origin),
      };

      // appel api
      // push data dans le store
      this.$store.dispatch('eventStore/create', eventData);
    //  this.$router.push('/admin/list-event');
    },
    // eslint-disable-next-line consistent-return
    isFormValid(e) {
      this.errors = [];

      if (!this.title) {
        this.errors.push('Veuillez renseigner un titre');
      }

      if (!this.description) {
        this.errors.push('Veuillez renseigner une petite description');
      }

      // eslint-disable-next-line no-console
      console.log(this.errors);
      e.preventDefault();

      return this.errors.length;
    },
    checkImages() {
      if (this.uploadFiles) {
        const bigFile = this.uploadFiles.filter((f) => f.size > 5 * 1024 * 1024);
        if (bigFile.length) {
          return true;
        }
      }
      return false;
    },
    getUplodFile() {
      const medias = [];
      // for (let i = 0; i < this.nbMedia; i += 1) {
      //   // eslint-disable-next-line no-console
      //   console.log(this.$refs, this.$refs[`uploadfile-${i}`].file);

      //   const file = this.$refs[`uploadfile-${i}`].file.files[0];
      //   medias.push(file);
      // }
      return medias;
    },
  },
};

</script>
<style lang="scss" scoped>
.create-event-container{
  position: relative;
  padding: 165px 10px 40px;

  .create-event-form{
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .required-label{
      font-family: Roboto, sans-serif ;
      font-size: 12px;
      text-align: center;
      padding-bottom: 8px;
      font-weight: 700;
    }

    input[type=text], input[type=file], textarea{
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      resize: vertical;
      font-size: 14px;
    }

    label {
      padding: 12px 12px 12px 0;
      display: inline-block;
      font-size: 16px;
    }

    .media-container{
      padding-top: 20px;
      position: relative;
      text-align: center;

      ::after{
        content: '';
        position:absolute;
        min-height: 70%;
        width: 100%;
        top: 70px;
        left: 0;
        right: 0;
        background: #f9f9f9;
        z-index: -1;
      }
    }

    .btn-validate, .btn-add-file{
      background-color: #4674f3;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      height: 40px;
    }

    .btn-validate{
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
    }
    .btn-add-file{
      background-color: #16a556;
      margin-bottom: 15px;
    }
  }
}
</style>
