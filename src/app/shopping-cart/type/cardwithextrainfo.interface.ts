import {FormGroup} from "@angular/forms";
import {CardInterface} from "src/app/product-list/type/Card-interface";

export interface CardWithExtraInfo extends CardInterface {
  extraInfo: FormGroup;
}
