import {
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import { type AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";

/**
 * @summary SMS_AddressString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMS-AddressString ::= AddressString (SIZE (1 .. maxSMS-AddressStringLength))
 * maxSMS-AddressStringLength INTEGER ::= 11
 * ```
 *
 */
export type SMS_AddressString = AddressString;
export const _decode_SMS_AddressString = (el: _Element): SMS_AddressString => {
    const value = _decode_AddressString(el);
    if (value.length < 1 || value.length > 11) {
        throw new ASN1SizeError("SMS_AddressString violates SIZE constraint");
    }
    return value;
};
export const _encode_SMS_AddressString = _encode_AddressString;
