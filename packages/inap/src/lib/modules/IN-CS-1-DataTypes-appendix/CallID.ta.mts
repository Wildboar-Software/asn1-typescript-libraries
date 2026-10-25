/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallID  ::=  INTEGER
 * ```
 */
export
type CallID = INTEGER;

export
const _decode_CallID: $.ASN1Decoder<CallID> = $._decodeInteger;

export
const _encode_CallID: $.ASN1Encoder<CallID> = $._encodeInteger;

/* eslint-enable */
