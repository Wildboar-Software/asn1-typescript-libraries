/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartialRecordTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordTimer  ::=  INTEGER
 * ```
 */
export
type PartialRecordTimer = INTEGER;

export
const _decode_PartialRecordTimer: $.ASN1Decoder<PartialRecordTimer> = $._decodeInteger;

export
const _encode_PartialRecordTimer: $.ASN1Encoder<PartialRecordTimer> = $._encodeInteger;

/* eslint-enable */
