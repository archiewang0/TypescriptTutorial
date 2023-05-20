const form = document.querySelector('form');
const addressInput = document.getElementById('address') as HTMLInputElement;
const GOOGLE_API_KEY = 'AIzaSyAJ6MFMw50-ZvmaMz2iPtkWGKsWDkV1a0k'

declare let google: any
interface googleGeocodingResponse {
    results: {
        geometry: {
            location: {
                lng: number,
                lat: number
            }
        }
    }[]
    status: 'OK'| 'ZERO_RESULTS'
}

function searchAddressHandler(event: Event){
    event.preventDefault();
    // alert('send')
    const enteredAddress = addressInput.value

    const getGeoData =( async()=>{
        try {
            let response:Response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
            let data = await response.json() as googleGeocodingResponse
            if(data.status !== 'OK'){
                throw new Error('google map 資料抓取錯誤')
            }
            const coordinates = data.results[0].geometry.location
            const map = new google.maps.Map(document.getElementById('googleMap'), {
                center: coordinates,
                zoom: 16,
                // mapId: 'googleMap'
            });
            const markerView = new google.maps.Marker({
                map,
                position: coordinates,
            });


        } catch (err) {
            if (err instanceof Error){
                alert('發生錯誤'+err.message)
            } else {
                console.error(err)
            }
        }
    })()
}

form?.addEventListener('submit',searchAddressHandler )