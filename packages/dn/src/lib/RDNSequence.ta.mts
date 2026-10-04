/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
    relativeDistinguishedNameToKey,
} from "./RelativeDistinguishedName.ta.mjs";
/**
 * @summary RDNSequence
 * @description
 *
 * A sequence of relative distinguished names in an order that descends from the
 * root of the DIT. This does **NOT** mean that an `RDNSequence` is a complete
 * `DistinguishedName`. A `DistinguishedName` is fully qualified; an `RDNSequence`
 * may not be.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RDNSequence  ::=  SEQUENCE OF RelativeDistinguishedName
 * ```
 */
export type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType

export {
    compareLdapRDNSequence,
    compareRDNSequence,
    compareRDNSequenceReverse,
    compareX500RDNSequence,
} from "./rdnseq/compare.mjs";

/**
 * @summary Convert an `RDNSequence` to a comparison key
 * @description
 *
 * Produces a string such that two RDN sequences that would match (probably)
 * produce identical keys, so they can be compared byte-for-byte or used as map
 * keys. Each RDN is converted with {@link relativeDistinguishedNameToKey},
 * which escapes the distinguished values as in IETF RFC 4514, and the results
 * are joined with `,`.
 *
 * Unlike IETF RFC 4514, the RDNs stay in sequence order, descending from the
 * root, so the key of a superior entry followed by `,` is a prefix of the keys
 * of its subordinates. The key is not meant to be displayed.
 *
 * @param rdns The RDN sequence
 * @returns A string of the form `rdnkey,rdnkey...`
 * @function
 */
export function rdnSequenceToKey(rdns: RDNSequence): string {
    return rdns.map(relativeDistinguishedNameToKey).join(",");
}

/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export const _decode_RDNSequence: $.ASN1Decoder<RDNSequence> = $._decodeSequenceOf<RelativeDistinguishedName>(
    () => _decode_RelativeDistinguishedName
);

/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export const _encode_RDNSequence: $.ASN1Encoder<RDNSequence> = $._encodeSequenceOf<RelativeDistinguishedName>(
    () => _encode_RelativeDistinguishedName,
    $.BER
);

/* eslint-enable */
