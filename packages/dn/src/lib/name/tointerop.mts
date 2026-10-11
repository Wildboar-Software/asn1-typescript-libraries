import type { Name } from "../Name.ta.mjs";
import rdnSequenceToInteropString from "../rdnseq/tointerop.mjs";

/**
 * @summary Stringify a `Name` as an "interop string," prefixed by the `CHOICE`
 * alternative it uses.
 * @description
 *
 * `Name` is a `CHOICE`, and recent editions of ITU-T X.501 define more
 * alternatives than the `rdnSequence` that this package supports. So that the
 * strings produced here stay unambiguous when more alternatives are supported,
 * the result is the name of the alternative, a colon (with no whitespace), and
 * the interop string of the value of that alternative. For `rdnSequence`, that
 * is {@link rdnSequenceToInteropString}: every attribute type is a numeric
 * object identifier, every value is `#` followed by its hexadecimal BER
 * encoding, and the RDNs are joined with `,` in the order they appear in the
 * name.
 *
 * @param name The directory name to stringify.
 * @returns A string of the form `rdnSequence:rdn,rdn...`
 * @throws {TypeError} If `name` uses an alternative this package does not
 * support.
 * @function
 */
export
function nameToInteropString (name: Name): string {
    if ("rdnSequence" in name) {
        return "rdnSequence:" + rdnSequenceToInteropString(name.rdnSequence);
    }
    throw new TypeError("Unsupported Name alternative");
}

export default nameToInteropString;
