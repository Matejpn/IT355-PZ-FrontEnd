import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/Rx';
;
import ProdavniceService from "../../services/prodavnice.service";
import { ActivatedRoute } from '@angular/router';
import Prodavnica from '../../models/prodavnica';

@Component({
    selector: 'app-prodavnice',
    templateUrl: './prodavnice.component.html',
    styleUrls : ['./prodavnice.component.css'],
})
export default class ProdavniceComponent implements OnInit, OnDestroy  {

    id: number;
    prodavnice: Prodavnica[];
    private sub: any;

    constructor(private prodavniceService: ProdavniceService,private route: ActivatedRoute) {
        var $:any;
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

        });

    }
    ngOnInit() {
        this.loadProdavnice();
    }

    loadProdavnice() {
        // var $:any;
        // this.prodavniceService.getProdavnice().subscribe(data => {
        //     this.prodavnice = data;
        //     setInterval(function(){
        //         $ = window['jQuery'];
        //         $('table').DataTable();
        //     }.bind(this),400);
        // });
        this.prodavniceService.getProdavnice().subscribe(data => (this.prodavnice = data));

    }

    ngOnDestroy(){
        this.sub.unsubscribe();

    }

}
