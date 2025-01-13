<script>
definePageMeta({
    layout: "unrestricted",
})
</script>

<template>
    <div class="
        d-flex 
        justify-content-center 
        align-items-center 
        position-absolute 
        top-50 
        start-50 
        translate-middle"
        style="width: 400px;"
    >
        <div class="container">
            <div class="card bg-black">
                <div class="card-body">
                    <h3 class="card-title text-center mb-4">Login</h3>

                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Usuário</label>
                            <input type="text" class="form-control" id="username" placeholder="Digite seu usuário"
                                required>
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="password" placeholder="Digite sua senha"
                                required>
                        </div>
                        <NuxtLink to="/auth/home">

                            <ButtonSubmit label="Entrar" />
                        </NuxtLink>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-control:focus {
    outline: none;
    box-shadow: none;
    border-color: #CDB4DB;
}
</style>