/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessPointNameNI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPointNameNI  ::=  IA5String  ( SIZE( 1 .. 63 ) )
 * ```
 */
export
type AccessPointNameNI = IA5String; // IA5String

export const _decode_AccessPointNameNI = (el: _Element): AccessPointNameNI => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 63) {
        throw new ASN1SizeError("AccessPointNameNI violates SIZE constraint");
    }
    return value;
};

export
const _encode_AccessPointNameNI: $.ASN1Encoder<AccessPointNameNI> = $._encodeIA5String;

/* eslint-enable */
