import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TPDataCodingScheme
 * @description
 *
 * TP Data Coding Scheme according to 3GPP TS 23.040. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TPDataCodingScheme ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type TPDataCodingScheme = OCTET_STRING;
export const _decode_TPDataCodingScheme = (el: _Element): TPDataCodingScheme => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("TPDataCodingScheme violates SIZE constraint");
    }
    return value;
};
export const _encode_TPDataCodingScheme = $._encodeOctetString;
