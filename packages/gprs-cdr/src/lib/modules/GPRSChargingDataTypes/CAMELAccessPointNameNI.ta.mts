/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELAccessPointNameNI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELAccessPointNameNI  ::=  IA5String  ( SIZE( 1 .. 63 ) )
 * ```
 */
export
type CAMELAccessPointNameNI = IA5String; // IA5String

export const _decode_CAMELAccessPointNameNI = (el: _Element): CAMELAccessPointNameNI => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 63) {
        throw new ASN1SizeError("CAMELAccessPointNameNI violates SIZE constraint");
    }
    return value;
};

export
const _encode_CAMELAccessPointNameNI: $.ASN1Encoder<CAMELAccessPointNameNI> = $._encodeIA5String;

/* eslint-enable */
