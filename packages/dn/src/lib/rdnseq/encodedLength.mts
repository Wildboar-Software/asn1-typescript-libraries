import type { RDNSequence } from "../RDNSequence.ta.mjs";
import { getRelativeDistinguishedNameEncodedLength } from "../rdn/encodedLength.mjs";
import { tlvLength } from "../encodedLength.mjs";

/**
 * @summary Get the length of the BER encoding of an `RDNSequence`
 * @description
 *
 * Calculates the number of bytes that the BER encoding of `rdns` (as produced
 * by `_encode_RDNSequence`) would occupy, using definite lengths throughout,
 * without producing that encoding. An empty sequence (the root DN) is two
 * bytes. This is also the length of the encoding of the equivalent
 * `DistinguishedName` or `Name`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RDNSequence ::= SEQUENCE OF RelativeDistinguishedName
 * ```
 *
 * @param rdns The RDN sequence
 * @returns The number of bytes in the BER encoding
 * @function
 */
export
function getRDNSequenceEncodedLength (rdns: RDNSequence): number {
    let content: number = 0;
    for (let i = 0; i < rdns.length; i++) {
        content += getRelativeDistinguishedNameEncodedLength(rdns[i]);
    }
    return tlvLength(1, content);
}

export default getRDNSequenceEncodedLength;
