var config = {
    style: 'mapbox://styles/galeh2004/cmb843pmr00rt01s6ftppdqof',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZ2FsZWgyMDA0IiwiYSI6ImNtYjcxNXg2djA1YXcya3M2ZG04dzlsOHQifQ.LoQE6E81rkaAB_4pZbG81w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'La muerte informativa de Gaza',
    subtitle: '221 periodistas han muerto en su labor desde octubre de 2023',
    byline: 'Javier Gómez de Toro',
    footer: 'Fuentes: Al-Jazeera, BBC, Huffington Post, Reporteros Sin Fronteras, RTVE. <br> Creado a través de <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Batalla contra la información',
            image: 'https://static.mediapart.fr/etmagine/article_google_discover/files/2023/11/02/press.jpg',
            description: 'La ofensiva israelí en Gaza ha dejado a los periodistas como uno de los colectivos más atacados. A finales de 2024, hasta 217 personas dedicadas a comunicar información al exterior fueron tomadas como "víctimas colaterales" del conflicto. 170 de ellos eran periodistas. Las últimas actualizaciones de las autoridades gazatíes alzan la cifra a 221.',
            location: {
                center: [34.37367, 31.41315],
                zoom: 11.43,
                pitch: 66,
                bearing: 61.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Una guerra por zonas',
            video: 'assets/northgaza.mp4',
            description: 'Las zonas del norte de la Franja de Gaza han sido las más atacadas desde el comienzo del conflicto. Se indican en rojo los espacios arrasados y según el territorio llega a alcanzar el 80% de la infraestructura. También es el lugar con la mayoría de bajas entre reporteros y corresponsales. En la ciudad de Gaza se concentran el 49% de las muertes de profesionales de la información, frente a un 15% en la frontera norte.',
            location: {
                center: [34.45746, 31.48885],
                zoom: 13.36,
                pitch: 60.89,
                bearing: 11.20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Una guerra por zonas',
            image: 'https://www.politicaexterior.com/wp-content/uploads/2024/04/marthoz-1-1024x683.jpg',
            description: 'Las zonas más cercanas a Rafah y a la frontera de Egipto han sufrido menos ataques. La ciudad central de Dei el-Balah ha visto un 18% de las bajas entre periodistas, mientras que al sur Khan Younis y Rafah contaron con un 13% y un 5% respectivamente.',
            location: {
                center: [34.27229, 31.30799],
                zoom: 12.19,
                pitch: 60.89,
                bearing: 11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Las víctimas en tierra propia',
            image: 'https://s.france24.com/media/display/e3e35f66-7b48-11ee-8f45-005056a97e36/w:1280/p:1x1/2023-11-03T070220Z_239872007_RC2I54ATCC1L_RTRMADP_3_ISRAEL-PALESTINIANS.jpg',
            description: 'Mohammed Abu Hatab, reportero de Palestina TV, murió junto a 11 miembros de su familia en un bombardeo israelí a su propia casa.',
            location: {
                center: [34.30910, 31.33939],
                zoom: 16.64,
                pitch: 40.58,
                bearing: 11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
           {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Las víctimas en tierra propia',
            image: 'https://pbs.twimg.com/media/GDPtGDdXAAEJkxM.jpg',
            description: 'Los periodistas Hamza Dahdouh y Mustafa Thuraya fueron asesinados por un misil lanzado contra su vehículo por el ejército israelí mientras intetaban entrevistar a civiles desplazados.',
            location: {
                center: [34.25950, 31.28052],
                zoom: 15.96,
                pitch: 42.50,
                bearing: 25.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Las víctimas en tierra propia',
            video: 'assets/Al Jazeera English_7509550642042539295-no-watermark.mp4',
            description: 'El foto-periodista Osama al-Arbid sobrevivió a un bombardeo israelí. El único objetivo del ataque fue su casa. Murieron 8 miembros de su familia.',
            location: {
                center: [34.47032, 31.49970],
                zoom: 18.05,
                pitch: 52.50,
                bearing: 49.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Las víctimas en tierra propia',
            image: 'https://pbs.twimg.com/media/GqWN5T9XgAA3TZd.jpg',
            description: 'El reportero freelancer Yahya Sobeih murió durante un bombardeo israelí que se cobró 22 vidas. Cinco horas antes había celebrado el nacimiento de su hija en redes sociales.',
            location: {
                center: [34.52034, 31.54977],
                zoom: 18.47,
                pitch: 60,
                bearing: 40.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Sin previsiones de mejora',
            image: 'https://assets.thenewhumanitarian.org/s3fs-public/2023-12/00-header-journalists-gaza.jpg',
            description: 'La cifra de civiles y periodistas muertos se actualiza diariamente en la Franja de Gaza. En tan solo un año y ocho meses, esta guerra se ha convertido en el conflicto con más muertes de periodistas en menos tiempo.',
            location: {
                center: [34.47547, 31.50595],
                zoom: 11.49,
                pitch: 56.70,
                bearing: -103.42
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'assets/CIFRASRSF.png',
            description: 'En el transcurso del comienzo de la guerra hasta finales de este mayo, el número supera por mucho los récords que existían hasta ahora.',
            location: {
                center: [34.37499, 31.37618],
                zoom: 9.94,
                pitch: 42.50,
                bearing: -7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
