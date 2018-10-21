import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class PatientDashboardNagationService {
    rightNavigationRoutes = [];
    rightNavigation = new BehaviorSubject(this.rightNavigationRoutes);
    getRightNavigation(){
        return this.rightNavigation;
    }

    addToRightNavigation(routes){
        this.rightNavigationRoutes = routes;
        this.rightNavigation.next(this.rightNavigationRoutes);
    }
}