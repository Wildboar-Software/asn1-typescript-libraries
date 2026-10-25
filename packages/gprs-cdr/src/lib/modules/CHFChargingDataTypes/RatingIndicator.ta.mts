/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RatingIndicator
 * @description
 *
 * This field indicates if the units have been rated or not.
 *
 * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
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
