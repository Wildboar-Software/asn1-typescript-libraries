/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvokeIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeIdType  ::=  INTEGER(-128..127)
 * ```
 */
export
type InvokeIdType = INTEGER;

export
const _decode_InvokeIdType: $.ASN1Decoder<InvokeIdType> = $._decodeInteger;

export
const _encode_InvokeIdType: $.ASN1Encoder<InvokeIdType> = $._encodeInteger;

/* eslint-enable */
