/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError
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

export const _decode_NodeID = (el: _Element): NodeID => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("NodeID violates SIZE constraint");
    }
    return value;
};

export
const _encode_NodeID: $.ASN1Encoder<NodeID> = $._encodeIA5String;

/* eslint-enable */
