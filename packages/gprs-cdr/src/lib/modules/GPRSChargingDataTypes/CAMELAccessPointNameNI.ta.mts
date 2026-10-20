/* eslint-disable */
import {
    IA5String
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

export
const _decode_CAMELAccessPointNameNI: $.ASN1Decoder<CAMELAccessPointNameNI> = $._decodeIA5String;

export
const _encode_CAMELAccessPointNameNI: $.ASN1Encoder<CAMELAccessPointNameNI> = $._encodeIA5String;

/* eslint-enable */
