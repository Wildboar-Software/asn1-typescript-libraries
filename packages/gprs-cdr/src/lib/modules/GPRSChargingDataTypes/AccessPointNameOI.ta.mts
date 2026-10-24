/* eslint-disable */
import {
    type IA5String,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessPointNameOI
 * @description
 * 
 * Operator-identifier part of the APN (table 6.1.1.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPointNameOI  ::=  IA5String  ( SIZE( 1 .. 37 ) )
 * ```
 */
export
type AccessPointNameOI = IA5String; // IA5String

export const _decode_AccessPointNameOI = (el: _Element): AccessPointNameOI => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 37) {
        throw new ASN1SizeError("AccessPointNameOI violates SIZE constraint");
    }
    return value;
};

export
const _encode_AccessPointNameOI: $.ASN1Encoder<AccessPointNameOI> = $._encodeIA5String;

/* eslint-enable */
