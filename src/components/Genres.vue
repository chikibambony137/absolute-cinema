<template>
  <div class="genres content__genres">
    <ul>
      <li>
        <label class="genres__checkbox">
          <input type="checkbox" />
          <span>Комедия</span>
        </label>
      </li>
      <li>
        <label class="genres__checkbox">
          <input type="checkbox" />
          <span>Драма</span>
        </label>
      </li>
      <li>
        <label class="genres__checkbox">
          <input type="checkbox" />
          <span>Фантастика</span>
        </label>
      </li>
      <li>
        <label class="genres__checkbox">
          <input type="checkbox" />
          <span>Триллер</span>
        </label>
      </li>
      <li>
        <label class="genres__checkbox">
          <input type="checkbox" />
          <span>Фэнтези</span>
        </label>
      </li>
      <li>
        <label class="genres__checkbox">
          <input type="checkbox" />
          <span>Мюзикл</span>
        </label>
      </li>
      <li>
        <label class="genres__checkbox">
          <input type="checkbox" />
          <span>Боевик</span>
        </label>
      </li>
      <li>
        <label class="genres__checkbox">
          <input type="checkbox" />
          <span>Хоррор</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style.scss";
@import "../var.scss";

.genres {
  border: {
    top: 1px solid #d5d5d5;
    bottom: 1px solid #d5d5d5;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
    list-style-type: none;
    padding-left: 1vw;
    padding-right: 1.5vw;
  }

  .genres__checkbox {
    display: inline-block;
    margin: 2%;
    user-select: none;
    position: relative;
  }
  .genres__checkbox input[type="checkbox"] {
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }
  .genres__checkbox span {
    display: inline-block;
    cursor: pointer;
    padding: 0px 10px;
    line-height: 30px;
    transition: background 0.2s ease;

    box-shadow: $global-shadow-box;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  /* Checked */
  .genres__checkbox input[type="checkbox"]:checked + span {
    background: #fdc9ff;

    @media (prefers-color-scheme: dark) {
      background-color: #aa0daf;
    }
  }

  /* Hover */
  .genres__checkbox:hover {
    span {
      background-color: rgb(246, 246, 246);

      @media (prefers-color-scheme: dark) {
        background-color: rgb(81, 81, 81);
      }
    }
  }

  /* Active */
  .genres__checkbox input[type="checkbox"]:active:not(:disabled) + span {
    background: #dedede;
    color: #000;

    @media (prefers-color-scheme: dark) {
      background-color: rgb(81, 81, 81);
      color: white;
    }
  }
}
</style>
