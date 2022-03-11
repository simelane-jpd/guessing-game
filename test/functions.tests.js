describe('The Guessing game function' , function() {
   
    describe('', function() {
        
    it ('should return "your guess is too low" if the random number is less than the secret number', function() {
        let playGame = newGameBtn();
            playGame.guessBtnClicked(0);
            assert.equal(playGame.guessBtnClicked('Your guess is too low'))
        });

        it('should return "your guess is too high" if the random number is less than the secret number', function() {
            let playGame = newGameBtn();
            playGame.guessBtnClicked(100);
            assert.equal(playGame.guessBtnClicked('Your guess is too high'))
        });

        it('should return Correct! if the random number is equal to the secret number' , function() {
            let playGame = newGameBtn();
            playGame._randomNum = 23;
            playGame.guessBtnClicked(23);
            assert.equal(playGame.guessBtnClicked(23))
        });

        it('should return "guess must be between 1 and 100" if the random number is less than the range of 1 and 100', function() {
            let playGame = newGameBtn();
            playGame.guessBtnClicked(-2);
            assert.equal(playGame.guessBtnClicked('guess must be between 1 and 100'))
        });


        it('should return "guess must be between 1 and 100" if the random number is more than the range of 1 and 100', function() {
            let playGame = newGameBtn();
            playGame.guessBtnClicked(101);
            assert.equal(playGame.guessBtnClicked('guess must be between 1 and 100'))
        });

        

    });

})