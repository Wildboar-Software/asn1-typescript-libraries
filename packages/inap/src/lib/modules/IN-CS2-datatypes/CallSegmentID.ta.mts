/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallSegmentID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallSegmentID  ::=  INTEGER
 * ```
 */
export
type CallSegmentID = INTEGER;

export
const _decode_CallSegmentID: $.ASN1Decoder<CallSegmentID> = $._decodeInteger;

export
const _encode_CallSegmentID: $.ASN1Encoder<CallSegmentID> = $._encodeInteger;

/* eslint-enable */
