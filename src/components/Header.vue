<template>
<div class="header">
    <div class="container">
        <nav>
            <ul class="header__list">
                <li class="header__item active">Все котики</li>
                <li class="header__item">Любимые котики</li>
            </ul>
        </nav>
    </div>
</div>
</template>



<script>

</script>

<style scoped>
.header{
    width: 100%;
    height: 64px;
    background-color: #2196F3;
}

ul{
    list-style-type: none;
}
.header__list{
    display: flex;
}

.header__item{
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    opacity: 0.7;
    padding: 22px 27px;
}

.header__item:hover{
    cursor: pointer;
    opacity: 1;
    transition: 0.3s;
}

.active{
    background-color: #1E88E5;
    opacity: 1;
}

</style>