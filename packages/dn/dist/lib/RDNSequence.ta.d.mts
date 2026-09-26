import * as $ from "@wildboar/asn1/functional";
import { RelativeDistinguishedName } from "./RelativeDistinguishedName.ta.mjs";
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
export type RDNSequence = RelativeDistinguishedName[];
/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export declare const _decode_RDNSequence: $.ASN1Decoder<RDNSequence>;
/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export declare const _encode_RDNSequence: $.ASN1Encoder<RDNSequence>;
//# sourceMappingURL=RDNSequence.ta.d.mts.map