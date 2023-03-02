<template>
  <!-- <NuxtWelcome /> -->
  <header class="app-header">
    <div class="app-logo"></div>
    <div class="header-menu">
      <a href="#" id="logInButton" class="
      button 
      button-small 
      button-dark
      ">Вхід</a>
      <a href="#" class="
      button 
      button-small 
      button-main
      ">Реєстрація</a>
    </div>
  </header>
  <main class="app-content">

    <section class="content-about">
      <h1>Володарі Трафіку</h1>
      <p>SC Partners – нова партнерська мережа з величезним досвідом та експертизою. Кожен наш партнер отримує очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід. Ми будемо поряд з вами: на відстані одного повідомлення в месенджері або дзвінка, адже ми працюємо поряд з вами.</p>
      <div></div>
    </section>

    <section class="content-benefits">
      <h2>Тим, хто нагоняє Траф</h2>
      <ul class="content-benefits-list">
        <li>
          <div class="icon icon-megaphone"><i></i></div>
          <p>Круті акції, призи та прибуткова <br>бонусна програма</p>
          <span>Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!</span>
        </li>
        <li>
          <div class="icon icon-smile"><i></i></div>
          <p>Особлива підтримка <br>для кожного 24/7</p>
          <span>У вас буде свій персональний менеджер</span>
        </li>
        <li>
          <div class="icon icon-chart"><i></i></div>
          <p>Детальна <br>статистика</p>
          <span>Миттєве оновлення, зрозуміла система відображення статистики</span>
        </li>
      </ul>
    </section>

  </main>

  <div class="modal-bg"></div>
  <section class="signin-modal">
    <button type="button" class="signin-modal-close"></button>
    <div class="signin-modal-slider">
      <header>
        <h4>Зможеш обрати <br>свій варіант</h4>
      </header>
      <section class="signin-slider">
        <ul class="signin-slider-list">
          <li class="signin-slider-item">
            <ul class="benefits-content">
              <li>
                <strong>CPA</strong><br>$25 і вище
              </li>
              <li>
                <strong>REVSHARE</strong><br>Піднімай до 60%
              </li>
              <li>
                <strong>Гібрід</strong><br>Зробимо як скажеш
              </li>
            </ul>
          </li>
          <li class="signin-slider-item">test</li>
        </ul>
        <div class="signin-slider-actions">
          <button class="slider-prev"></button>
          <ul class="slider-dots">
            <li class="active"></li>
            <li></li>
            <li></li>
          </ul>
          <button class="slider-next"></button>
        </div>
      </section>
    </div>
    <div class="signin-modal-form">
      <header>
        <div class="icon icon-green icon-singin"><i></i></div>
        <h3>Реєстрація</h3>
      </header>
      <div class="signin-form form">
        <form>
          <label class="form-item">
            <input type="text" placeholder="Ваше імʼя" />
            <p>Display error message here.</p>
            <span></span>
          </label>
          <label class="form-item error">
            <input type="text" placeholder="Ваш email" />
            <p>Display error message here.</p>
            <span></span>
          </label>
          <label class="form-item password success">
            <input type="text" placeholder="Ваш пароль" />
            <p>Пароль має містити літери і символи</p>
            <span></span>
          </label>
          <label class="form-item password">
            <input type="password" placeholder="Повторіть пароль" />
            <p>Паролі не співпадають</p>
            <span></span>
          </label>
          <div class="signin-form-footer">
            <h4>Оберіть спосіб звязку</h4>
            <div class="signin-form-item telegram">
              <input id="telegram" name="cpntact-type" type="radio" />
              <label for="telegram"><i></i></label>
            </div>
            <div class="signin-form-item skype">
              <input id="stype" name="cpntact-type" type="radio" />
              <label for="stype"><i></i></label>
            </div>
            <label class="form-item">
              <input type="text" placeholder="@телеграм_адреса" />
              <p>Паролі не співпадають</p>
              <span></span>
            </label>
          </div>
          <input type="submit" class="button button-main" value="Реєстрація" />
        </form>
      </div>
    </div>
  </section>

</template>
