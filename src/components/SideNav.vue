<!-- SideNav.vue -->
<template>
    <q-drawer show-if-above :value="true" color="primary">
        <q-list>
            <q-item clickable v-ripple>
                <q-item-section>Item 1</q-item-section>
            </q-item>

            <q-item>
                <q-item-section>
                    Item 2
                </q-item-section>
                <q-menu anchor="top end" self="top start">
                    <q-list>
                        <q-item clickable>
                            <q-item-section>Sub-item 1</q-item-section>
                        </q-item>
                        <q-item clickable>
                            <q-item-section>Sub-item 2</q-item-section>
                        </q-item>
                        <q-item clickable>
                            <q-item-section>Sub-item 3</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>Item 3</q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>

<script>
export default {
    name: 'SideNav',
    props: {
        drawer: Boolean  // recebe a propriedade drawer do componente pai
    },
    computed: {
        drawerModel: {
            get() {
                return this.drawer;
            },
            set(value) {
                this.$emit('update:drawer', value);
            }
        }
    }
}
</script>

<style lang="scss" >
.q-drawer {

    .q-item {
        &:hover {
            background-color: rgba(255, 255, 255, 0.1); // cor de fundo do item ao passar o mouse
        }
    }

    .q-btn-dropdown {
        .q-item {
            &:hover {
                background-color: rgba(255, 255, 255, 0.2); // cor de fundo do sub-item ao passar o mouse
            }
        }
    }
}
</style>
