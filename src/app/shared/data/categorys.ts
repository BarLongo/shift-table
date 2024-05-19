import { Category } from "../model/category";
import { Language } from "../model/language";


export var animalsCategory = new Category ("Animals",1, Language.English, Language.Hebrew );
animalsCategory.words.set("Horse","סוס")
animalsCategory.words.set("Dog","כלב")
animalsCategory.words.set("Cat","חתול")



 export var fruitCategory  = new Category ("Fruits",2,Language.English,Language.Hebrew);
 fruitCategory.words.set("Apple","תפוח")
 fruitCategory.words.set("Strawberry","תות")
 fruitCategory.words.set("Watermelon","אבטיח")


 export var colorsCategory  = new Category ("Colors",3,Language.English,Language.Hebrew);
 colorsCategory.words.set("Green","ירוק")
 colorsCategory.words.set("Pink","ורוד")
 colorsCategory.words.set("Purple","סגול")

 









        





