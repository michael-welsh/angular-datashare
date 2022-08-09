import { Component, Input, OnDestroy } from '@angular/core';
import { VotingService } from '../mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hockey-player',
  template: `
    <p>
      <button
        type="button"
        (click)="vote()"
        [disabled]="votingFinished">
        Vote
      </button>
      &nbsp; {{player}} 
    </p>
  `
})
export class VoterComponent  {
  @Input() player = '';
  votingFinished = false;
  sub: Subscription;

  constructor(private votingService: VotingService) {
    this.sub = votingService.voteFinished$.subscribe(
      votingFinished => {
        this.votingFinished = votingFinished;
    });
  }

  vote() {
    this.votingFinished = true;
    this.votingService.voteCompleted(this.votingFinished);
    this.votingService.transmitVote(this.player);
  }
}