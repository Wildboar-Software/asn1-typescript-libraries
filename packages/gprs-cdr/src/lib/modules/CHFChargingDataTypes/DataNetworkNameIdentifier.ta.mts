/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataNetworkNameIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataNetworkNameIdentifier  ::=  IA5String  ( SIZE( 1 .. 63 ) )
 * ```
 */
export
type DataNetworkNameIdentifier = IA5String; // IA5String

export
const _decode_DataNetworkNameIdentifier: $.ASN1Decoder<DataNetworkNameIdentifier> = $._decodeIA5String;

export
const _encode_DataNetworkNameIdentifier: $.ASN1Encoder<DataNetworkNameIdentifier> = $._encodeIA5String;

/* eslint-enable */
