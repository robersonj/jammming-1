// const clientId = 'PL30ZO0ZivV6QtF0evK_Cw';
// const secret = 'pkRQkSqyTQAIa26FtOq42K1ZebsrpbnBOIHCtsMxDhyTh3VhHHyqEycAeqaLMdCV';
// const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`;
// let accessToken;
//
const Spotify = {
//   getAccessToken() {
//     if (accessToken) {
//       return new Promise(
//         resolve => resolve(accessToken)
//       );
//     }
//     return fetch(url, {
//       method: 'POST',
//     }).then(
//       response => {
//         if (response.ok) {
//           return response.json();
//         }
//         console.log('Not able to get access token')
//       }
//     ).then(
//       jsonResponse => {
//         accessToken = jsonResponse.access_token;
//       }
//     );
//   },
//
  search() {
    const sampleTrack = {
      id: '123',
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    const anotherSampleTrack = {
      id: 'abc',
      title: 'Fields of Gold',
      artist: 'Sting',
      album: 'Ten Summoner&apos;s Tales',
    };
    return [sampleTrack, anotherSampleTrack];
  //     return Yelp.getAccessToken().then(
  //       () => {
  //         const fetchUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
  //         return fetch(fetchUrl, {
  //           headers: {'Authorization': `Bearer ${accessToken}`}
  //         }).then(
  //           response => {
  //             if (response.ok) {
  //               return response.json();
  //             }
  //             console.log('Request failed!')
  //           }
  //         ).then(
  //           jsonResponse => {
  //             if (jsonResponse.businesses) {
  //               return jsonResponse.businesses.map(
  //                 business => {
  //                   return {
  //                     id: business.id,
  //                     imageSrc: business.image_url,
  //                     name: business.name,
  //                     address: business.location.address1,
  //                     city: business.location.city,
  //                     state: business.location.state,
  //                     zipCode: business.location.zip_code,
  //                     category: business.categories[0].title,
  //                     rating: business.rating,
  //                     reviewCount: business.review_count,
  //                   };
  //                 });
  //             }
  //             console.log('no valid answer');
  //           }
  //         );
  //       }
  //     )
  },
};

export default Spotify;
