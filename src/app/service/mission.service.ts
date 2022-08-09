import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class VotingService {

  private playerSource = new Subject<string>();
  private voteSource = new Subject<boolean>();

  playerVotes$ = this.playerSource.asObservable();
  voteFinished$ = this.voteSource.asObservable();

  voteCompleted(hasVoted: boolean){
    this.voteSource.next(hasVoted);
  }

  transmitVote(astronaut: string) {
    this.playerSource.next(astronaut);
  }
}