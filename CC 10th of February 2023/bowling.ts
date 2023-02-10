// https://exercism.org/tracks/typescript/exercises/bowling

export class Bowling {
  private runningScore = 0;
  private multiplierNext = 0;
  private multiplierNextNext = 0;
  private frame = 1;
  private runningFrame: Array<number> = [];

  private validateRoll(pins: number): void {
    if (pins < 0) {
      throw new Error("Negative roll is invalid");
    }
    if (pins > 10) {
      throw new Error("Pin count exceeds pins on the lane");
    }

    if (this.frame > 10 && this.multiplierNext === 0) {
      throw new Error("Cannot roll after game is over");
    }
  }

  static validateFrame(frame: Array<number>): void {
    if (frame.reduce((acc, val) => acc + val, 0) > 10) {
      throw new Error("Pin count exceeds pins on the lane");
    }
  }

  private validateScore(): void {
    if (
      this.frame < 10 ||
      (this.frame === 10 && this.runningFrame.length > 0) ||
      (this.frame > 10 && this.multiplierNext > 0)
    ) {
      throw new Error("Score cannot be taken until the end of the game");
    }
  }

  public roll(pins: number): void {
    // Checking that the number of pins is valid
    this.validateRoll(pins);

    // Create the current frame of [6], [4] => [6, 4]
    this.runningFrame = this.runningFrame.concat(pins);

    // Ensure that our current frame is a valid one
    Bowling.validateFrame(this.runningFrame);
    // "this.frame" here outputs 1, 1, 2, 2, 3, 3 etc...
    const filler = this.frame > 10 ? 1 : 0; // filler here is a boolean to represent whether we're still playing
    // "this.runningScore" === 6, 16, 16 ... 16
    // "this.multiplierNext" and "this.multiplierNextNext" allows us to keep track of the points we need to award to the current frame based on whether it was
    // eg. strike in the current frame => multiplierNext === 1 and multiplierNextNext === 1 as soon as we close the frame with the strike both multiplierNext === 0; multiplierNextNext === 0
    this.runningScore =
      this.runningScore + (1 + this.multiplierNext - filler) * pins;
    this.multiplierNext = this.multiplierNextNext;
    this.multiplierNextNext = 0;
    // -----

    // Calculate pins that were knocked eg. Frame 1 has 6 for the first roll and 4 for the second roll, it means that the frameTotal is 10
    const frameTotal = this.runningFrame.reduce((acc, val) => acc + val, 0);
    // Frame is complete only if we get a strike in the first roll of the frame OR we get to the end of the rolls of the frame (max 2 unless special case)
    if (frameTotal === 10 || this.runningFrame.length === 2) {
      // Strike
      // Can only happen whenever we're on the first roll of the frame
      // Allows us track of what we need to add to the frame with the
      if (this.runningFrame.length === 1) {
        if (this.frame < 11) {
          this.multiplierNextNext++;
        }
      }

      // Spare
      if (frameTotal === 10) {
        if (this.frame < 11) {
          this.multiplierNext++;
        }
      }

      // Reset Frame
      this.runningFrame = [];
      this.frame++;
    }
  }

  public score(): number {
    this.validateScore();
    return this.runningScore;
  }
}

// Tests

/* eslint-disable @typescript-eslint/semi */

describe("Bowling", () => {
  describe("Check game can be scored correctly.", () => {
    it("should be able to score a game with all zeros", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(0);
    });

    it("should be able to score a game with no strikes or spares", () => {
      const rolls = [
        3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(90);
    });

    it("a spare followed by zeros is worth ten points", () => {
      const rolls = [
        6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(10);
    });

    it("points scored in the roll after a spare are counted twice", () => {
      const rolls = [
        6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(16);
    });

    it("consecutive spares each get a one roll bonus", () => {
      const rolls = [
        5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(31);
    });

    it("a spare in the last frame gets a one roll bonus that is counted once", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(17);
    });

    it("a strike earns ten points in a frame with a single roll", () => {
      const rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(10);
    });

    it("points scored in the two rolls after a strike are counted twice as a bonus", () => {
      const rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(26);
    });

    it("consecutive strikes each get the two roll bonus", () => {
      const rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(81);
    });

    it("a strike in the last frame gets a two roll bonues that is counted once", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(18);
    });

    it("rolling a spare with the two roll bonus does not get a bonus roll", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(20);
    });

    it("strikes with the two roll bonus do not get bonus rolls", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(30);
    });

    it("a strike with the one roll bonus after a spare in the last frame does not get a bonus", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(20);
    });

    it("all strikes is a perfect game", () => {
      const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(300);
    });
  });

  describe("Check game rules.", () => {
    it("rolls cannot score negative points", () => {
      const bowling = new Bowling();
      expect(() => {
        bowling.roll(-1);
      }).toThrow(new Error("Negative roll is invalid"));
    });

    it("a roll cannot score more than 10 points", () => {
      const bowling = new Bowling();
      expect(() => {
        bowling.roll(11);
      }).toThrow(new Error("Pin count exceeds pins on the lane"));
    });

    it("two rolls in a frame cannot score more than 10 points", () => {
      const bowling = new Bowling();
      bowling.roll(5);
      expect(() => {
        bowling.roll(6);
      }).toThrow(new Error("Pin count exceeds pins on the lane"));
    });

    it("bonus roll after a strike in the last frame cannot score more than 10 points", () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(11);
      }).toThrow(new Error("Pin count exceeds pins on the lane"));
    });

    it("two bonus rolls after a strike in the last frame cannot score more than 10 points", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(6);
      }).toThrow(new Error("Pin count exceeds pins on the lane"));
    });

    it("two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 6,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(26);
    });

    it("the second bonus rolls after a strike in the last frame cannot be a strike if the first one is not a strike", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 6,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(10);
      }).toThrow(new Error("Pin count exceeds pins on the lane"));
    });

    it("second bonus roll after a strike in the last frame cannot score more than 10 points", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(11);
      }).toThrow(new Error("Pin count exceeds pins on the lane"));
    });

    it("an unstarted game cannot be scored", () => {
      const bowling = new Bowling();
      expect(() => {
        bowling.score();
      }).toThrow(new Error("Score cannot be taken until the end of the game"));
    });

    it("an incomplete game cannot be scored", () => {
      const rolls = [0, 0];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.score();
      }).toThrow(new Error("Score cannot be taken until the end of the game"));
    });

    it("cannot roll if game already has ten frames", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(0);
      }).toThrow(new Error("Cannot roll after game is over"));
    });

    it("bonus rolls for a strike in the last frame must be rolled before score can be calculated", () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.score();
      }).toThrow(new Error("Score cannot be taken until the end of the game"));
    });

    it("both bonus rolls for a strike in the last frame must be rolled before score can be calculated", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.score();
      }).toThrow(new Error("Score cannot be taken until the end of the game"));
    });

    it("bonus roll for a spare in the last frame must be rolled before score can be calculated", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.score();
      }).toThrow(new Error("Score cannot be taken until the end of the game"));
    });

    it("cannot roll after bonus roll for spare", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 2,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(2);
      }).toThrow(new Error("Cannot roll after game is over"));
    });

    it("cannot roll after bonus rolls for strike", () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 3, 2,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(2);
      }).toThrow(new Error("Cannot roll after game is over"));
    });
  });
});
