<template>
    <div class="d-flex justify-content-center align-items-center min-vh-100">
        <div class="container" style="max-width: 400px;">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center mb-4">Login</h3>

                    <!-- Formulário de Login -->
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

                        <div class="d-flex justify-content-between mb-4">
                            <div>
                                <input type="checkbox" id="rememberMe">
                                <label for="rememberMe" class="form-check-label">Lembrar-me</label>
                            </div>
                            <a href="#" class="text-decoration-none">Esqueceu a senha?</a>
                        </div>

                        <button type="submit" class="btn btn-primary w-100">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>