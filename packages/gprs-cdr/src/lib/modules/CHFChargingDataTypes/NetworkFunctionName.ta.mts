/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkFunctionName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkFunctionName  ::=  IA5String  ( SIZE( 1 .. 36 ) )
 * ```
 */
export
type NetworkFunctionName = IA5String; // IA5String

export
const _decode_NetworkFunctionName: $.ASN1Decoder<NetworkFunctionName> = $._decodeIA5String;

export
const _encode_NetworkFunctionName: $.ASN1Encoder<NetworkFunctionName> = $._encodeIA5String;

/* eslint-enable */
