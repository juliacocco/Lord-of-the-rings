const isGood = soldierType => ["Hobbits", "Elves", "Dwarves", "Eagles"].includes(soldierType);

const buildSoldierMap = (battlefield) => {
  const soldiers = new Map();
  battlefield.split(",").forEach((soldierTypeWithNumber) => {
    const [type, number] = soldierTypeWithNumber.split(":");
    soldiers.set(type, parseInt(number, 10));
  });
  return soldiers;
};

const whoWinsTheWar = (battlefield) => {
  if (!battlefield || /^\s*$/.test(battlefield)) {
    return "Tie";
  }

  const soldiers = buildSoldierMap(battlefield);

  let goodSoldiersCount = 0;
  let evilSoldiersCount = 0;
  soldiers.forEach((count, soldierType) => {
    if (isGood(soldierType)) {
      goodSoldiersCount += count;
    } else {
      evilSoldiersCount += count;
    }
  });

  if (goodSoldiersCount === evilSoldiersCount) {
    return "Tie";
  }

  return goodSoldiersCount > evilSoldiersCount ? "Good" : "Evil";
};

module.exports = { whoWinsTheWar, buildSoldierMap, isGood }; // Do not remove this line
