const searchParams = new URL(location.href).searchParams;

function get_jump_url(arr) {
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        const res = searchParams.get(ele);
        if (res) {
            return res;
        }
    }
    return undefined;
}

const url = get_jump_url([
    'url',
    'target',
]);

if (url) location.href = url;
