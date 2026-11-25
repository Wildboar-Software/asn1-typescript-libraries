/* eslint-disable */
import {
    type DATE_TIME,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BIRCreationDate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIRCreationDate  ::=  DATE-TIME
 * ```
 */
export
type BIRCreationDate = DATE_TIME; // DateTimeType

export
const _decode_BIRCreationDate: $.ASN1Decoder<BIRCreationDate> = $._decodeDateTime;

export
const _encode_BIRCreationDate: $.ASN1Encoder<BIRCreationDate> = $._encodeDateTime;

/* eslint-enable */
