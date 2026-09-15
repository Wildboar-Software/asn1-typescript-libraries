import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TPProtocolIdentifier
 * @description
 *
 * Protocol used above the SM-Transfer Layer, as specified in 3GPP TS 23.040.
 * (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TPProtocolIdentifier ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type TPProtocolIdentifier = OCTET_STRING;
export const _decode_TPProtocolIdentifier = (el: _Element): TPProtocolIdentifier => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("TPProtocolIdentifier violates SIZE constraint");
    }
    return value;
};
export const _encode_TPProtocolIdentifier = $._encodeOctetString;
