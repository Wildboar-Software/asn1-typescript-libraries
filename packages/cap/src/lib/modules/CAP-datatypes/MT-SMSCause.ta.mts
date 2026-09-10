import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MT_SMSCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MT-SMSCause ::= OCTET STRING (SIZE (1))
 * -- Refer to 3GPP TS 24.011 [10] for the encoding of RP-Cause values.
 * ```
 *
 */
export type MT_SMSCause = OCTET_STRING;
export const _decode_MT_SMSCause = (el: _Element): MT_SMSCause => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("MT_SMSCause violates SIZE constraint");
    }
    return value;
};
export const _encode_MT_SMSCause = $._encodeOctetString;
