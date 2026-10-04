import rdnSequenceToString from "../rdnseq/tostr.mjs";
import type { Name } from "../Name.ta.mjs";

/**
 * @summary Stringify a `Name`, prefixed by the `CHOICE` alternative it uses.
 * @description
 *
 * `Name` is a `CHOICE`, and recent editions of ITU-T X.501 define more
 * alternatives than the `rdnSequence` that this package supports. So that the
 * strings produced here stay unambiguous and parseable when more alternatives
 * are supported, the result is the name of the alternative, a colon (with no
 * whitespace), and the string form of the value of that alternative. For
 * `rdnSequence`, that is {@link rdnSequenceToString} (so the RDNs are not
 * reversed, unlike in [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514)).
 *
 * This can be reversed with `nameFromStringX520`.
 *
 * @param name The directory name to stringify.
 * @returns A string of the form `rdnSequence:rdn,rdn...`
 * @throws {TypeError} If `name` uses an alternative this package does not
 * support.
 * @function
 */
export
function nameToString (name: Name): string {
    if ("rdnSequence" in name) {
        return "rdnSequence:" + rdnSequenceToString(name.rdnSequence);
    }
    throw new TypeError("Unsupported Name alternative");
}

export default nameToString;
