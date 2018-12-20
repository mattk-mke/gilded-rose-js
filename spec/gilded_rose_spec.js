describe("Gilded Rose", () => {
  beforeEach( done => {
    items = [];
  
    items.push(new Item('+5 Dexterity Vest', 10, 20));
    items.push(new Item('Aged Brie', 2, 0));
    items.push(new Item('Elixir of the Mongoose', 5, 7));
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    items.push(new Item('Conjured Mana Cake', 3, 6));
    done();
  });

  it("should change the quality of each item correctly after 1 iteration", (done) => {
    update_quality();
    expect(items[0].quality).toBe(19);
    expect(items[1].quality).toBe(1);
    expect(items[2].quality).toBe(6);
    expect(items[3].quality).toBe(80);
    expect(items[4].quality).toBe(21);
    expect(items[5].quality).toBe(4);
    done();
  });

  it("should change the quality of each item correctly after 10 iterations", (done) => {
    for (let i = 0; i < 10; i++) {
      update_quality();
    }
    expect(items[0].quality).toBe(10);
    expect(items[1].quality).toBe(18);
    expect(items[2].quality).toBe(0);
    expect(items[3].quality).toBe(80);
    expect(items[4].quality).toBe(35);
    expect(items[5].quality).toBe(0);
    done();
  });

  it("should change the quality of each item correctly after 15 iterations", (done) => {
    for (let i = 0; i < 15; i++) {
      update_quality();
    }
    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(28);
    expect(items[2].quality).toBe(0);
    expect(items[3].quality).toBe(80);
    expect(items[4].quality).toBe(50);
    expect(items[5].quality).toBe(0);
    done();
  });

  it("should change the quality of each item correctly after 20 iterations", (done) => {
    for (let i = 0; i < 20; i++) {
      update_quality();
    }
    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(38);
    expect(items[2].quality).toBe(0);
    expect(items[3].quality).toBe(80);
    expect(items[4].quality).toBe(0);
    expect(items[5].quality).toBe(0);
    done();
  });

});
