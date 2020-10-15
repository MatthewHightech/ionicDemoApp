import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedRecipe: Recipe; 

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router, 
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        return; 
      }
      const recipeId = paramMap.get('recipeId'); 
      this.loadedRecipe = this.recipesService.getRecipe(recipeId); 
    })
  }

  onDeleteRecipe() {
    this.runAlert(); 
  }

  async runAlert() {
    const alert = await this.alertCtrl.create({
      header: 'ALERT', 
      message: 'Are you sure you want to delete?', 
      buttons: [
      {
        text: 'Cancel', 
        role: 'cancel'
      }, 
      {
        text: 'Delete', 
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id); 
          this.router.navigate(['/recipes']); 
        }
      }
    ]
    }); 
    await alert.present(); 
  }
}
