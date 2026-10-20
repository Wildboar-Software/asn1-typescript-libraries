/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RatingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RatingIndicator  ::=  BOOLEAN
 * ```
 */
export
type RatingIndicator = BOOLEAN; // BooleanType

export
const _decode_RatingIndicator: $.ASN1Decoder<RatingIndicator> = $._decodeBoolean;

export
const _encode_RatingIndicator: $.ASN1Encoder<RatingIndicator> = $._encodeBoolean;

/* eslint-enable */
