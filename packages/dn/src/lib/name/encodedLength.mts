import type { Name } from "../Name.ta.mjs";
import { getRDNSequenceEncodedLength } from "../rdnseq/encodedLength.mjs";

/**
 * @summary Get the length of the BER encoding of a `Name`
 * @description
 *
 * Calculates the number of bytes that the BER encoding of `name` (as produced
 * by `_encode_Name`) would occupy, using definite lengths throughout, without
 * producing that encoding. `Name` is an untagged `CHOICE` whose only
 * alternative is `rdnSequence`, so this is the same as
 * {@link getRDNSequenceEncodedLength} of that alternative.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name ::= CHOICE { -- only one possibility for now -- rdnSequence RDNSequence }
 * ```
 *
 * @param name The directory name
 * @returns The number of bytes in the BER encoding
 * @function
 */
export
function getNameEncodedLength (name: Name): number {
    return getRDNSequenceEncodedLength(name.rdnSequence);
}

export default getNameEncodedLength;
