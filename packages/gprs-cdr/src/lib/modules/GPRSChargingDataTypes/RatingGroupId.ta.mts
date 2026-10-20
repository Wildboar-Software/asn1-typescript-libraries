/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RatingGroupId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RatingGroupId  ::=  INTEGER
 * ```
 */
export
type RatingGroupId = INTEGER;

export
const _decode_RatingGroupId: $.ASN1Decoder<RatingGroupId> = $._decodeInteger;

export
const _encode_RatingGroupId: $.ASN1Encoder<RatingGroupId> = $._encodeInteger;

/* eslint-enable */
