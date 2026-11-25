/* eslint-disable */
import {
    type DATE_TIME,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BDBCreationDate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDBCreationDate  ::=  DATE-TIME
 * ```
 */
export
type BDBCreationDate = DATE_TIME; // DateTimeType

export
const _decode_BDBCreationDate: $.ASN1Decoder<BDBCreationDate> = $._decodeDateTime;

export
const _encode_BDBCreationDate: $.ASN1Encoder<BDBCreationDate> = $._encodeDateTime;

/* eslint-enable */
