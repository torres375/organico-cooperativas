import {Component, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductorService} from '../productor.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-productor-detalle',
  templateUrl: './productor-detalle.component.html',
  styleUrls: ['./productor-detalle.component.css'],
  providers: [
    ProductorService
  ]
})
export class ProductorDetalleComponent implements OnInit {

  private productor: any = null;

  styles: any = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#272727"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f7f7f7"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -20
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        },
        {
          "color": "#f5b062"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#5ec79c"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ];

  constructor(private element: ElementRef,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private productorServices: ProductorService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>
        this.productorServices.getProd(+params["id"])
      )
      .subscribe(response => {
          this.productor = response;
          this.cd.detectChanges();
        },
        reason => {
          this.productor = null;
          alert("error al cargar datos del productor");
        });
  }

  /*  GmapInit = () => {
      var Gmap = $(this.element.nativeElement).find('.map-canvas');
      debugger;
      Gmap.each(function () {
        let $this = $(this),
          lat: any = '',
          lng: any = '',
          zoom = 12,
          scrollwheel = false,
          zoomcontrol = true,
          draggable = true,
          mapType = google.maps.MapTypeId.ROADMAP,
          title = '',
          contentString = '',
          dataLat: string = $this.data('lat'),
          dataLng: string = $this.data('lng'),
          dataZoom: any = $this.data('zoom'),
          dataType = $this.data('type'),
          dataScrollwheel = $this.data('scrollwheel'),
          dataZoomcontrol = $this.data('zoomcontrol'),
          dataHue = $this.data('hue'),
          dataTitle = $this.data('title'),
          dataContent = $this.data('content');

        debugger;

        if (dataZoom !== undefined && dataZoom !== false) {
          zoom = parseFloat(dataZoom);
        }
        if (dataLat !== undefined && dataLat !== false) {
          lat = parseFloat(dataLat);
        }
        if (dataLng !== undefined && dataLng !== false) {
          lng = parseFloat(dataLng);
        }
        if (dataScrollwheel !== undefined && dataScrollwheel !== null) {
          scrollwheel = dataScrollwheel;
        }
        if (dataZoomcontrol !== undefined && dataZoomcontrol !== null) {
          zoomcontrol = dataZoomcontrol;
        }
        if (dataType !== undefined && dataType !== false) {
          if (dataType == 'satellite') {
            mapType = google.maps.MapTypeId.SATELLITE;
          } else if (dataType == 'hybrid') {
            mapType = google.maps.MapTypeId.HYBRID;
          } else if (dataType == 'terrain') {
            mapType = google.maps.MapTypeId.TERRAIN;
          }
        }
        if (dataTitle !== undefined && dataTitle !== false) {
          title = dataTitle;
        }
        if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
          draggable = false;
        }

        var mapOptions = {
          zoom: zoom,
          scrollwheel: scrollwheel,
          zoomControl: zoomcontrol,
          draggable: draggable,
          center: new google.maps.LatLng(lat, lng),
          mapTypeId: mapType
        };
        var map = new google.maps.Map($this[0], mapOptions);

        var image = 'images/icons/map-marker.png';
        if (dataContent !== undefined && dataContent !== false) {
          contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
        }
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map,
          icon: image,
          title: title
        });
        if (dataContent !== undefined && dataContent !== false) {
          google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
          });
        }

        if (dataHue !== undefined && dataHue !== false) {

          map.setOptions({styles: styles});
        }
      });
    }*/
}
