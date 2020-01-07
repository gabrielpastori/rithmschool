// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
function listNames(){
    songs.forEach(function(val){
        console.log(val['name'])
    });
}
// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
function listSongDetails(){
    songs.forEach(function(val){
        console.log(val['name']+", by "+val['artist']+'('+val['duration']+")");
    });
}
// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.
function summerJamCount(songs){
    return songs.reduce(function(acc,next){
        if(next['weeksAtNumberOne']>0 && next["month"]>=6 && next["month"]<=8) return acc+1;
        return acc; 
    },0);
}
// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.
function getDurations(songs){
    return songs.map(function(val){
        return val['duration'];
    })

}

// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.
function getDurationsInSeconds(songs){
    return songs.map(function(val){
        var time = val['duration'].split(":");
        
        return parseInt(time[0])*60+parseInt(time[1]); 
    });
}
// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)
function getMainArtists(songs){
    return songs.map(function(val){
       var artist = val.artist.split(" featuring");
       return artist[0];
    });
}
// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
function getBigHits(songs){
    return songs.filter(function(val){
        return val['weeksAtNumberOne']>=10; 
    });
}
// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.
function getShortSongs(songs){
    return songs.filter(function(val){
        return parseInt(val['duration'].split(':'))<3;
    });
}
// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.
function getSongsByArtist(songs,artist){
    return songs.filter(function(val){
        return val['artist']==artist; 
    });
}
// Refactor summerJamCount to use reduce!
function summerJamCount(songs){
    return songs.reduce(function(acc,next){
        if(next['weeksAtNumberOne']>0 && next["month"]>=6 && next["month"]<=8) return acc+1;
        return acc; 
    },0);
}
// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
function getTotalDurationInSeconds(songs){
    var times = getDurationsInSeconds(songs);
    return times.reduce(function(acc,next){
        return acc+next;
    },0);
}
// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
function getSongCountByArtist(songs){
    var newArr=[]
    songs.map(function(val){
        newArr[val['artist']] = getSongsByArtist(songs,val['artist']).length;
    });
    return newArr;
}
// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.
function averageWeeksAtNumberOne(songs){
    var sum=songs.reduce(function(acc,next){
        return acc+next['weeksAtNumberOne'];
    },0);
    return sum/songs.length;
}
averageWeeksAtNumberOne(songs);































