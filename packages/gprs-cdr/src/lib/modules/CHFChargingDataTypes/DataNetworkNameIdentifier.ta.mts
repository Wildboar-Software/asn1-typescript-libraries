/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError
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

export const _decode_DataNetworkNameIdentifier = (el: _Element): DataNetworkNameIdentifier => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 63) {
        throw new ASN1SizeError("DataNetworkNameIdentifier violates SIZE constraint");
    }
    return value;
};

export
const _encode_DataNetworkNameIdentifier: $.ASN1Encoder<DataNetworkNameIdentifier> = $._encodeIA5String;

/* eslint-enable */
