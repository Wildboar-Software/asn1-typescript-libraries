import type { Name } from "../Name.ta.mjs";
import { rdnSequenceFromStringX520 } from "../rdnseq/fromstr.mjs";

const RDN_SEQUENCE_PREFIX: string = "rdnSequence:";

/**
 * @summary Parse a `Name` from the output of {@link nameToString}.
 * @description
 *
 * `Name` is a `CHOICE`, and recent editions of ITU-T X.501 define more
 * alternatives than the `rdnSequence` that this package supports. So the
 * string must begin with the name of the alternative and a colon (with no
 * whitespace). For `rdnSequence`, the remainder is parsed with
 * {@link rdnSequenceFromStringX520}. A string without a recognized alternative
 * prefix is rejected, rather than assumed to be an `rdnSequence`.
 *
 * @param str A string of the form `rdnSequence:rdn,rdn...`
 * @returns The directory name.
 * @throws {SyntaxError} If the alternative is missing or not supported, or the
 * remainder is not a valid distinguished name.
 * @function
 */
export
function nameFromStringX520 (str: string): Name {
    if (str.startsWith(RDN_SEQUENCE_PREFIX)) {
        return {
            rdnSequence: rdnSequenceFromStringX520(str.slice(RDN_SEQUENCE_PREFIX.length)),
        };
    }
    throw new SyntaxError("Name string must begin with a supported alternative, such as 'rdnSequence:'");
}

export default nameFromStringX520;
