/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELAccessPointNameOI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELAccessPointNameOI  ::=  IA5String  ( SIZE( 1 .. 37 ) )
 * ```
 */
export
type CAMELAccessPointNameOI = IA5String; // IA5String

export const _decode_CAMELAccessPointNameOI = (el: _Element): CAMELAccessPointNameOI => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 37) {
        throw new ASN1SizeError("CAMELAccessPointNameOI violates SIZE constraint");
    }
    return value;
};

export
const _encode_CAMELAccessPointNameOI: $.ASN1Encoder<CAMELAccessPointNameOI> = $._encodeIA5String;

/* eslint-enable */
