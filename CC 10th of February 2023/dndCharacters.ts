// https://exercism.org/tracks/typescript/exercises/dnd-character

export class DnDCharacter {
  strength = DnDCharacter.generateAbilityScore();
  dexterity = DnDCharacter.generateAbilityScore();
  constitution = DnDCharacter.generateAbilityScore();
  intelligence = DnDCharacter.generateAbilityScore();
  wisdom = DnDCharacter.generateAbilityScore();
  charisma = DnDCharacter.generateAbilityScore();
  hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);

  public static generateAbilityScore(): number {
    // 4 rolls, choose 3 highest and reduce them

    return (
      Array(4)
        .fill(0)
        // Create empty array with 4 items and generate the random rolls
        .map((item) => (item = Math.ceil(Math.random() * 6)))
        // Sort + slice to get rid of the smallest roll
        .sort((a, b) => a - b)
        .slice(1)
        // Get the result
        .reduce((acc, val) => acc + val, 0)
    );
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

describe("Ability modifier", () => {
  it("Ability modifier for score 3 is -4", () => {
    expect(DnDCharacter.getModifierFor(3)).toEqual(-4);
  });

  it("Ability modifier for score 4 is -3", () => {
    expect(DnDCharacter.getModifierFor(4)).toEqual(-3);
  });

  it("Ability modifier for score 5 is -3", () => {
    expect(DnDCharacter.getModifierFor(5)).toEqual(-3);
  });

  it("Ability modifier for score 6 is -2", () => {
    expect(DnDCharacter.getModifierFor(6)).toEqual(-2);
  });

  it("Ability modifier for score 7 is -2", () => {
    expect(DnDCharacter.getModifierFor(7)).toEqual(-2);
  });

  it("Ability modifier for score 8 is -1", () => {
    expect(DnDCharacter.getModifierFor(8)).toEqual(-1);
  });

  it("Ability modifier for score 9 is -1", () => {
    expect(DnDCharacter.getModifierFor(9)).toEqual(-1);
  });

  it("Ability modifier for score 10 is 0", () => {
    expect(DnDCharacter.getModifierFor(10)).toEqual(0);
  });

  it("Ability modifier for score 11 is 0", () => {
    expect(DnDCharacter.getModifierFor(11)).toEqual(0);
  });

  it("Ability modifier for score 12 is 1", () => {
    expect(DnDCharacter.getModifierFor(12)).toEqual(1);
  });

  it("Ability modifier for score 13 is 1", () => {
    expect(DnDCharacter.getModifierFor(13)).toEqual(1);
  });

  it("Ability modifier for score 14 is 2", () => {
    expect(DnDCharacter.getModifierFor(14)).toEqual(2);
  });

  it("Ability modifier for score 15 is 2", () => {
    expect(DnDCharacter.getModifierFor(15)).toEqual(2);
  });

  it("Ability modifier for score 16 is 3", () => {
    expect(DnDCharacter.getModifierFor(16)).toEqual(3);
  });

  it("Ability modifier for score 17 is 3", () => {
    expect(DnDCharacter.getModifierFor(17)).toEqual(3);
  });

  it("Ability modifier for score 18 is 4", () => {
    expect(DnDCharacter.getModifierFor(18)).toEqual(4);
  });
});

describe("Ability generator", () => {
  it("Random ability is within range", () => {
    const abilityScore = DnDCharacter.generateAbilityScore();
    expect(abilityScore).toBeGreaterThanOrEqual(3);
    expect(abilityScore).toBeLessThanOrEqual(18);
  });
});

describe("Character creation", () => {
  it("Random character is valid", () => {
    const character = new DnDCharacter();

    expect(character.hitpoints).toEqual(
      10 + DnDCharacter.getModifierFor(character.constitution)
    );

    expect(character.strength).toBeGreaterThanOrEqual(3);
    expect(character.strength).toBeLessThanOrEqual(18);

    expect(character.dexterity).toBeGreaterThanOrEqual(3);
    expect(character.dexterity).toBeLessThanOrEqual(18);

    expect(character.constitution).toBeGreaterThanOrEqual(3);
    expect(character.constitution).toBeLessThanOrEqual(18);

    expect(character.intelligence).toBeGreaterThanOrEqual(3);
    expect(character.intelligence).toBeLessThanOrEqual(18);

    expect(character.wisdom).toBeGreaterThanOrEqual(3);
    expect(character.wisdom).toBeLessThanOrEqual(18);

    expect(character.charisma).toBeGreaterThanOrEqual(3);
    expect(character.charisma).toBeLessThanOrEqual(18);
  });

  it("Each ability is only calculated once", () => {
    const character = new DnDCharacter();

    expect(character.strength === character.strength).toBeTruthy();
  });
});
