const friends = [12,56,64,89,56,31,31,3,154,69,78];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element == 89) {
        return i;
    }
}