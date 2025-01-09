<!-- <script>
import { sequelize } from './server/api/model/db.js';
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
</script> -->

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtWelcome />

    </div>
</template>
