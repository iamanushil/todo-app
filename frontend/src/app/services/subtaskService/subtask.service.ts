import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subtask } from "src/app/models/subtask";

@Injectable({
  providedIn: "root"
})
export class SubtaskService {
  constructor(private https: HttpClient) {}
  private baseUrl = "/api/todos/subtask";

  saveSubtaskToATodo(subtask: Subtask): Observable<Subtask> {
    return this.https.post<Subtask>(this.baseUrl, subtask);
  }

  findAllSubtask(): Observable<Subtask[]> {
    return this.https.get<Subtask[]>(this.baseUrl);
  }
}
