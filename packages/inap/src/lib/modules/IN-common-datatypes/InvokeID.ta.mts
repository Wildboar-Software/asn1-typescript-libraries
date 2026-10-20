/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvokeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeID  ::=  INTEGER(-128..127)
 * ```
 */
export
type InvokeID = INTEGER;

export
const _decode_InvokeID: $.ASN1Decoder<InvokeID> = $._decodeInteger;

export
const _encode_InvokeID: $.ASN1Encoder<InvokeID> = $._encodeInteger;

/* eslint-enable */
