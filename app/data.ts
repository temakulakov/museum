export interface IData {
    label: string;
    description: string;
    arr?: IData[];
}


export const data: IData[] = [
    {
        label: "Посетителям",
        description: "Краткая и общая информация ( фото музея, адрес и часы работы, билеты, о музее, как добраться ) + разводная с разделами",
        arr: [
            {
                label: "Здания и часы работы",
                description: "Все здания на одной странице, есть разделение на \"Бахрушинский квартал\" и \"Филиалы\""
            },
            {
                label: "Билеты и льготы",
                description: "- Правила покупки билетов"+
                    " - Правила и условия посещения",
            },
            {
                label: "Карты лояльности (Не в MVP)",
                description: "Описательная страница с вариантами карта лояльности и условиями покупки, контактами отдела продаж",
            },
            {
                label: "Кафе и рестораны",
                description: "Описательная страница с информацией о ресторанах/кафе/буфете, внизу шахматка с фото, названием ресторана и его контактами."
            },
            {
                label: "Экскурсии",
                description: "- описательная страница с информацией, как заказать экскурсию и контактами отдела продаж" +
                    "- подборка из мероприятий, на которые доступны экскурсии"
            },
            {
                label: "Добро День",
                description: "Описательная страница о благотворительном проекте музея, краткое описание проекта, лого партнеров (если есть), контакты, форма обратной связи. "
            },
            {
                label: "Доступный музей (Не в MVP)",
                description: "Описательная страница с информацией на сколько музей приспособлен к инклюзии"
            }
        ]
    },
    {
        label: "ВЫСТАВКИ И СОБЫТИЯ",
        description: "Разводная страница с разделами.",
        arr: [
            {
                label: "Выставки",
                description: "Страница со всеми Выставками, внутри разделение на: 1.текущие, 2. будущее, 3. международные 4. архив"
            },
            {
                label: "Постоянные экспозиции",
                description: "Страница с постоянными экспозициями (как у Третьяковки)"
            },
            {
                label: "События",
                description: "Страница со всеми Событиями, внутри разделение на разные события, на первом этапе: 1.текущие, 2. будущее, 3. архив"
            },
            {
                label: "Экскурсии",
                description: "Описательная страница с информацией, как заказать экскурсию и контактами отдела продаж" +
                    " - подборка из мероприятий, на которые доступны экскурсии"
            },
            {
                label: "Онлайн выставки",
                description: "Разводная страница с переходом на лендинги с онлайн выставками",
            },
            {
                label: "Новости",
                description: "Страница со всеми новостями музея" +
                    "- вкладка \"СМИ о нас\", где даются лого изданий и их статьи о музее"
            }
        ]
    },
    {
        label: "УЗНАВАЙТЕ С НАМИ",
        description: "Разводная страница с разделами.",
        arr: [
            {
                label: "Лекторий \"Бахрушинская академия\"",
                description: "Страница со всеми лекционными программами и возможностью купить абонемент (как у Третьяковки)"
            },
            {
                label: "Издания",
                description: "Описательная страница об издательской деятельности, форма обратной связи и контакты издательского отдела, внизу список изданий Музея с фотографиями. - при клике на каждое издание переход на описательную страницу издания с информацией, переходом для покупки в интернет-магазин или возможностью скачать для чтения."
            },
            {
                label: "Коллекции онлайн",
                description: "Сайт сателлит - Колекции онлайн"
            },
            {
                label: "Научная библиотека",
                description: "описательная страница о научной библиотеке, форма обратной связи и контакты библиотеки" +
                    "- поставить пометку \"ПРО\""
            },
            {
                label: "Бахрушинские чтения",
                description: "- описательная страница  с общей информацией о конференции с фото/видео материалами, контакты организаторов, форма обратной связи с кнопкой \"принять участие\", программа будущей конференции, возможность перейти к архиву конференций, кнопкой перейти к онлайн трансляции (если такая будет)" +
                        "- отдельная страница по каждой конференции из архива с описанием, программой, фото/видео отчетом." +
                    "- поставить пометку \"ПРО\""
            },
            {
                label: "Конференции и форумы",
                description: "разводная страница с общей информацией о разделе и разделением вглубь на \"конференции и форумы\" с возможностью перехода на каждый подраздел" +
                    "- подраздел \"конференции\" страница с перечнем всех конференций и возможностью перехода на страницу каждой отдельной конференции" +
                    "- подраздел \"форумы\" страница с перечнем всех форумов и возможностью перехода на страницу каждой отдельного форума" +
                    "- поставить пометку \"ПРО\""
            }
        ]
    },
    {
        label: "БАХРУШИНСКИЙ ДЕТЯМ",
        description: "Разводная страница с разделами.",
        arr: [
            {
                label: "Детский центр",
                description: "Описательная страница с информацией о детском центре, его возможностях и программах, контакты, карта с указанием где находится."
            },
            {
                label: "Мастер-классы",
                description: "Страница со всеми текущими мастер-классами (как в разделе события)"
            },
            {
                label: "Экскурсии",
                description: "Страница со всеми текущими экскурсиями (как в разделе события)"
            },
            {
                label: "Игротека (Не в MVP)",
                description: "Разводная страница с разными квизами/тестами для детей на театральную тематику, переход на страницу каждого отдельного квиза."
            }
        ]
    },
    {
        label: "ТЕАТРАЛЬНАЯ ЛАБОРАТОРИЯ",
        description: "Описательную страницу, где рассказывается о театральной лаборатории, сотрудничестве с вузами, есть форма обратной связи и контакты театральной лаборатории, карта яндекс с указанием, где находится."
    },
    {
        label: "БАХРУШИНСКИЙ ОНЛАЙН",
        description: "Разводная страница с разделами.",
        arr: [
            {
                label: "ГОРОД | ТЕАТР",
                description: "Описательная страница о городе|театре, его философии. В центре 3D карта, которую отрисовывала навигация с номерами зданий (при навидении на объект открывается всплывашка с краткой информацией, при клике на объект переход на страницу того или иного здания), также есть список всех зданий с разделение на \"Бахрушинский квартал\" и \"Филиалы\" "
            },
            {
                label: "Виртуальные туры (Не в MVP)",
                description: "Разводная страница со всеми созданными турами, при клике на тур, переход на страницу тура в биганто.",
            },
            {
                label: "Лекции онлайн",
                description: "- разводная страница с двумя направлениями: \"Онлайн-трансляции\" и \"Видео-лекции\"" +
                    "- страница \"Онлайн-трансляции\" - описательная страница, где дается вся информация об онлайн лекциях в живом режиме через вебинарную комнату (тех.подробности, наименование платформы и инструкция по ее использованию, контакты, возможность выбрать мероприятие и купить билет/оставить заявку на мероприятие)" +
                    "-  страница  \"Видео-лекции\" разводная страница с разными лекционными циклами в записи, при клике на цикл переход на новую страницу (открывается страница со списком лекций в цикле и возможность просмотра)"
            },
            {
                label: "Сериал \"Бахрушин\"",
                description: "Страница с выложенными сериями, возможность просмотра и быстрого переключения между ними"
            },
            {
                label: "Telegram",
                description: "telegram"
            },
            {
                label: "ВКонтакте",
                description: "ВКонтакте"
            },
            {
                label: "Одноклассники",
                description: "Одноклассники"
            },
            {
                label: "Rutube",
                description: "Rutube"
            },
            {
                label: "Youtube",
                description: "Youtube"
            }
        ]
    },
    {
        label: "ПРОтеатр",
        description: "Разводная страница с разделами.",
        arr: [
            {
                label: "Ассоциация театральных музеев России",
                description: "- разводная страница с описанием деятельности ассоциации, приветственным словом директора, целями и задачами ассоциации, контактами, документами, кнопкой \"Вступить\" в Ассоциацию." +
                    "- ниже меню с разделами:",
                arr: [
                    {
                        label: "Театральные музеи и Архивы",
                        description: "Переход на сайт-сателлит",
                    },
                    {
                        label: "Театральный словарь",
                        description: "Cтраница театрально словаря, как в Википедия. Из алфавита можно выбрать букву, выбрать слово или через поисковую строку сразу найти нужное слово. Для каждого слова своя страничка с текстовым описанием и фотографией",
                    },
                    {
                        label: "Экспозиции и Выставки в музеях театров",
                        description: "Информации нет"
                    },
                    {
                        label: "Семинары, мастер-классы, круглые столы",
                        description: "Информации нет"
                    },
                    {
                        label: "Школа музейного дела",
                        description: "Информации нет"
                    },
                    {
                        label: "Стажировки",
                        description: "Информации нет"
                    },
                ]
            },
            {
                label: "Русские Драматурги (Не в MVP)",
                description: "Переход на сайт-сателлит русские драматурги"
            },
            {
                label: "ИА \"ПРОтеатр\"",
                description: "Переход на сайт-сателлит медиа"
            }
        ]
    },
    {
        label: "ПОДДЕРЖАТЬ МУЗЕЙ",
        description: "Разводная страница с разделами.",
        arr: [
            {
                label: "Сделать пожертвование",
                description: "Техническая страница с возможностью сделать пожертвование"
            },
            {
                label: "Стать волонтером",
                description: "описательная страница о том, как можно стать волонтером, контакты, форма обратной связи, ответы на вопросы."
            },
            {
                label: "Попечительский совет (Не в MVP)",
                description: "Описание деятельности попечительского совета, состав попечительского совета"
            },
            {
                label: "Фонд развития Бахрушинского музея",
                description: "- перелинковка на отдельный сайт-сателлит с 3мя разделами: Проекты, О фонде, Контакты."
            },
            {
                label: "Корпоративные программы (Не в MVP)",
                description: "Описательная страница с возможными программ для компаний, контактами отдела по работе с партнерами."
            },
            {
                label: "Сотрудничество",
                description: "Описательная страница \"Купить изображение\" "+
                    "- описательная страница \"Организация мероприятий\" (на площадке музея или сторонних площадках)" +
                    "- описательная страница \"Багетная мастерская\" с формой обратной связи."
            }
        ]
    }
]

