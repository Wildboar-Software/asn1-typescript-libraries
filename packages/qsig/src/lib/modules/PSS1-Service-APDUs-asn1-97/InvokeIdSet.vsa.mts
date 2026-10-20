/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeIdSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeIdSet INTEGER ::= { INTEGER (-32768..32767) }
 * ```
 * 
 * @type {INTEGER}
 */
export
type InvokeIdSet = INTEGER; // VALUE_SET_TYPE

export
const _decode_InvokeIdSet: $.ASN1Decoder<InvokeIdSet> = $._decodeInteger;

export
const _encode_InvokeIdSet: $.ASN1Encoder<InvokeIdSet> = $._encodeInteger;

/* eslint-enable */
