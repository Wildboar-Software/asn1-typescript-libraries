/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NodeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NodeID      ::=  IA5String  ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type NodeID = IA5String; // IA5String

export
const _decode_NodeID: $.ASN1Decoder<NodeID> = $._decodeIA5String;

export
const _encode_NodeID: $.ASN1Encoder<NodeID> = $._encodeIA5String;

/* eslint-enable */
