import * as $ from "@wildboar/asn1/functional";
import { RDNSequence } from "./RDNSequence.ta.mjs";
/**
 * @summary Name
 * @description
 *
 * A directory name. Currently the only alternative is `rdnSequence` (an
 * {@link RDNSequence} / {@link DistinguishedName}). A name is unambiguous
 * (denotes one object) but need not be unique (the same object may have alias
 * names in addition to its distinguished name).
 *
 * A recent amendment to ITU-T X.501 defines new alternatives for `Name`, but
 * these will not be supported purely for the selfish reason that this would
 * break a lot of code that I wrote.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name  ::=  CHOICE { -- only one possibility for now -- rdnSequence  RDNSequence }
 * ```
 */
export type Name = {
    rdnSequence: RDNSequence;
};
/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export declare const _decode_Name: $.ASN1Decoder<Name>;
/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export declare const _encode_Name: $.ASN1Encoder<Name>;
//# sourceMappingURL=Name.ta.d.mts.map