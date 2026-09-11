import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TPShortMessageSpecificInfo
 * @description
 *
 * First octet of the applicable TPDU or the SMS-COMMAND TPDU, as specified in
 * 3GPP TS 23.040. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TPShortMessageSpecificInfo ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type TPShortMessageSpecificInfo = OCTET_STRING;
export const _decode_TPShortMessageSpecificInfo = (el: _Element): TPShortMessageSpecificInfo => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("TPShortMessageSpecificInfo violates SIZE constraint");
    }
    return value;
};
export const _encode_TPShortMessageSpecificInfo = $._encodeOctetString;
