/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RP_UD
 * @description
 *
 * SMS transfer-layer PDU relayed by SMR-MT-DATA or SMR-MO-DATA
 * ([ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.1). Also the optional Nokia diagnostic on `RPError`.
 *
 * Length 1..164 octets (clause 3.2), enforced by this module.
 * Clause 3.2 also applies application tag 3. This profile does not.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RP-UD  ::=  OCTET STRING (SIZE (1..164))
 * ```
 */
export
type RP_UD = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) RP_UD
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RP_UD = (el: _Element): RP_UD => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 164) {
        throw new ASN1SizeError("RP_UD violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RP_UD into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RP_UD, encoded as an ASN.1 Element.
 */
export const _encode_RP_UD = $._encodeOctetString;


/* eslint-enable */
