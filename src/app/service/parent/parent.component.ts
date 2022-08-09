import { Component } from '@angular/core';
import { VotingService } from '../mission.service';

@Component({
  selector: 'app-hockey-vote',
  templateUrl: './parent.component.html',
  providers: [VotingService]
})
export class HockeyVoteComponent {
  players = ['Nathan MacKinnon', 'Sidney Crosby', 'Connor McDavid'];
  stats = ['fastest skater', 'best stickhandler', 'strongest at face-offs'];
  history: string[] = [];
  nextStat = 0;

  constructor(private votingService: VotingService) {
    votingService.playerVotes$.subscribe(
      player => {
        this.history.push(`You voted for ${player} as the ${this.stats[this.nextStat]} `);
      });
  }

  newVote() {
    this.nextStat++;
    this.votingService.voteCompleted(false);
    if (this.nextStat >= this.stats.length) { 
      this.history.push("The voting session has ended");
      this.votingService.voteCompleted(true);
    }
  }
}