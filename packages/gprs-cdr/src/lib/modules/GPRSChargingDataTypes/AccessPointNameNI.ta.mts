/* eslint-disable */
import {
    IA5String
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

export
const _decode_AccessPointNameNI: $.ASN1Decoder<AccessPointNameNI> = $._decodeIA5String;

export
const _encode_AccessPointNameNI: $.ASN1Encoder<AccessPointNameNI> = $._encodeIA5String;

/* eslint-enable */
