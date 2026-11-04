/**
 * UTF-8 octet length of a JavaScript string. Directory syntaxes that
 * cite an octet maximum (email local-part, JID parts) count bytes,
 * not UTF-16 code units.
 */
export
function utf8ByteLength (value: string): number {
    let bytes: number = 0;
    for (const character of value) {
        const code: number = character.codePointAt(0)!;
        if (code <= 0x7F) {
            bytes += 1;
        } else if (code <= 0x7FF) {
            bytes += 2;
        } else if (code <= 0xFFFF) {
            bytes += 3;
        } else {
            bytes += 4;
        }
    }
    return bytes;
}
