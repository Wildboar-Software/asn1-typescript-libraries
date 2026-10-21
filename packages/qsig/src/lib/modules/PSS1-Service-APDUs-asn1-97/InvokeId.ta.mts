/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeId  ::=  INTEGER
 * ```
 */
export
type InvokeId = INTEGER;

export
const _decode_InvokeId: $.ASN1Decoder<InvokeId> = $._decodeInteger;

export
const _encode_InvokeId: $.ASN1Encoder<InvokeId> = $._encodeInteger;

/* eslint-enable */
