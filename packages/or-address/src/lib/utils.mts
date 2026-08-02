export function make_string_safe(s: string, delim: number): string {
    const replacement = (delim === " ".charCodeAt(0))
        ? "?" // Still PrintableString
        : " " // Still PrintableString
        ;
    const d = String.fromCharCode(delim);
    if (s.includes(d)) {
        return s.replace(d, replacement);
    }
    return s;
}

/**
 * @summary Escape an attribute value string based on the delimiter used.
 * @description
 * 
 * This escapes strings based on this statement in
 * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/), Section F.3.2.1:
 * 
 * > If the value of any attribute contains the delimiter character, this is
 * > represented by a pair of delimiter characters.
 * 
 * @param s The string to escape.
 * @param delim The delimiter to escape.
 * @returns The escaped string.
 * @function
 */
export function escape_oraddress_attribute_value(s: string, delim: number): string {
    const d = String.fromCharCode(delim);
    const replacement = d.repeat(2);
    // At least according to ChatGPT, V8 is smart enough to return the original
    // string if the replaced substring is not found, so we don't have to worry
    // about optimizing for the most likely "not-found" case.
    return s.replaceAll(d, replacement);
}

export function findLabelValueSeparator(s: string): number { 
    let eqIdx = -1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "=") {
            // Check if this equals sign is not doubled up with the next char
            if ((s[i + 1] === "=")) {
                i++;
                continue; // Skip, as this is doubled up
            } else {
                eqIdx = i;
                break;
            }
        }
    }
    return eqIdx;
}


// TODO: Export this from @wildboar/asn1.
// Written by ChatGPT.
export function canEncodeAsBMPString(value: string): boolean {
    for (const character of value) {
        const codePoint = character.codePointAt(0)!;
        if (
            codePoint > 0xffff ||
            (codePoint >= 0xd800 && codePoint <= 0xdfff)
        ) {
            return false;
        }
    }
    return true;
}
