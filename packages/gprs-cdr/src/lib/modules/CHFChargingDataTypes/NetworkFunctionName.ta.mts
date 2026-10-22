/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError
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

export const _decode_NetworkFunctionName = (el: _Element): NetworkFunctionName => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 36) {
        throw new ASN1SizeError("NetworkFunctionName violates SIZE constraint");
    }
    return value;
};

export
const _encode_NetworkFunctionName: $.ASN1Encoder<NetworkFunctionName> = $._encodeIA5String;

/* eslint-enable */
