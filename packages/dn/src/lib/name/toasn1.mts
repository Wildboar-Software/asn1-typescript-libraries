import type { Name } from "../Name.ta.mjs";
import rdnSequenceToASN1String from "../rdnseq/toasn1.mjs";

/**
 * @summary Convert a `Name` to textual ASN.1 value notation
 * @description
 *
 * Produces ASN.1 value notation for the `CHOICE`: the name of the
 * alternative, a colon, and the value of that alternative, which for
 * `rdnSequence` is converted with {@link rdnSequenceToASN1String}.
 *
 * @param name The name to convert.
 * @returns A string of the form `rdnSequence : { ... }`
 * @function
 */
export
function nameToASN1String (name: Name): string {
    return `rdnSequence : ${rdnSequenceToASN1String(name.rdnSequence)}`;
}

export default nameToASN1String;
