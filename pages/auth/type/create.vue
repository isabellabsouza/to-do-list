<script setup>
import { ref } from 'vue';

const title = ref('');
const color = ref('');
const message = ref('');

const { createType } = useCreateType();

// Função para criar um novo tipo
const submitForm = async () => {
    try {
        const response = await createType({
            title: title.value,
            color: color.value
        });

        if (response.success) {
            message.value = {
                success: true,
                message: 'Tipo criado com sucesso!'
            };
        } else {
            message.value = {
                success: false,
                message: `Erro: ${response.message}`
            };
        }
    } catch (error) {
        message.value = {
            success: false,
            message: error.message
        };
    } finally {
        title.value = '';
        color.value = '';

        setTimeout(() => {
            message.value = '';
        }, 3000);
    }
};
</script>

<template>
    <div class="container-fluid p-5">
        <h2 class="my-4">Novo Tipo</h2>

        <Alert :message="message" />

        <form @submit.prevent="submitForm">

            <div class="mb-4">
                <label for="title" class="form-label">Título</label>
                <input v-model="title" type="text" class="form-control" id="title" placeholder="Digite o título"
                    required />
            </div>

            <div class="mb-3">
                <label class="form-label">Escolha a cor</label>
                <div class="d-flex gap-3">
                    <div>
                        <input type="radio" class="btn-check" name="colorOption" id="color-purple" value="#CDB4DB"
                            autocomplete="off" v-model="color"/>
                        <label class="btn-circle" for="color-purple" style="background-color: var(--purple);"></label>
                    </div>
                    <div>
                        <input type="radio" class="btn-check" name="colorOption" id="color-pink" value="#FFAFCC"
                            autocomplete="off" v-model="color"/>
                        <label class="btn-circle" for="color-pink" style="background-color: var(--pink);"></label>
                    </div>
                    <div>
                        <input type="radio" class="btn-check" name="colorOption" id="color-blue" value="#BDE0FE"
                            autocomplete="off" v-model="color"/>
                        <label class="btn-circle" for="color-blue" style="background-color: var(--dark-blue);"></label>
                    </div>
                    <div>
                        <input type="radio" class="btn-check" name="colorOption" id="color-green" value="#92cb9c"
                            autocomplete="off" v-model="color"/>
                        <label class="btn-circle" for="color-green" style="background-color: var(--green);"></label>
                    </div>
                    <div>
                        <input type="radio" class="btn-check" name="colorOption" id="color-orange" value="#e9cc8b"
                            autocomplete="off" v-model="color"/>
                        <label class="btn-circle" for="color-orange" style="background-color: var(--orange);"></label>
                    </div>
                    
                </div>
            </div>
            <ButtonSubmit label="Salvar" />
        </form>

    </div>
</template>

<style scoped>
.btn-circle {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
}

.btn-circle:hover {
    border-color: #000;
    filter: brightness(1.5);
}

.btn-check:checked+.btn-circle {
    border-color: #000;
    /* Cor de seleção */
}
</style>