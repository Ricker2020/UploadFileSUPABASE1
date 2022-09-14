//URL and KEY
const SUPABASE_URL = //SUPABASE_URL
const SUPABASE_ANON_KEY = //SUPABASE_ANON_KEY

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function insertFile(file) {
    const { data, error } = await _supabase.storage
    .from('storage-files')
    .upload(file['name'],file)

    if(!error) {
        console.log("Sent");
    }
    else{
        console.log(error);
    }
}

// Get selected file
function get_image() {
    var file = document.querySelector('input[type="file"]').files[0];
    
    var image_element=document.createElement("img");
    image_element.src = URL.createObjectURL(file);
    document.body.appendChild(image_element); 
    
    insertFile(file);
}
