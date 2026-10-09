/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserData_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserData-PDU ::= [5] ANY
 * -- this is the ASN.1 object
 * -- if it is a top-level PDU, it
 * -- is in PCI #1, otherwise PCI #3
 * ```
 */
export
type UserData_PDU = _Element; // AnyType

export const _decode_UserData_PDU: $.ASN1Decoder<UserData_PDU> = $._decode_explicit<UserData_PDU>(() => $._decodeAny);
export const _encode_UserData_PDU: $.ASN1Encoder<UserData_PDU> = $._encode_explicit(_TagClass.context, 5, () => $._encodeAny, $.BER);


/* eslint-enable */
