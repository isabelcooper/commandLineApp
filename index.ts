(async () => {
    process.stdin.on('data', function (chunk) {
        console.log('received: ', chunk.toString());
        if (chunk.toString() === 'q') process.exit();
    });
})();
