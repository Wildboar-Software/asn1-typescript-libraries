/* eslint-disable */
import {
    IA5String
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

export
const _decode_CAMELAccessPointNameOI: $.ASN1Decoder<CAMELAccessPointNameOI> = $._decodeIA5String;

export
const _encode_CAMELAccessPointNameOI: $.ASN1Encoder<CAMELAccessPointNameOI> = $._encodeIA5String;

/* eslint-enable */
