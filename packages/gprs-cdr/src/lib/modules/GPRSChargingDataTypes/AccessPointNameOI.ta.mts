/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessPointNameOI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPointNameOI  ::=  IA5String  ( SIZE( 1 .. 37 ) )
 * ```
 */
export
type AccessPointNameOI = IA5String; // IA5String

export
const _decode_AccessPointNameOI: $.ASN1Decoder<AccessPointNameOI> = $._decodeIA5String;

export
const _encode_AccessPointNameOI: $.ASN1Encoder<AccessPointNameOI> = $._encodeIA5String;

/* eslint-enable */
