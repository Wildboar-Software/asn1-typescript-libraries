/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerDeletionCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerDeletionCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerDeletionCauseValue = INTEGER;

export const _decode_EPSBearerDeletionCauseValue: $.ASN1Decoder<EPSBearerDeletionCauseValue> = $._decodeInteger;

export const _encode_EPSBearerDeletionCauseValue: $.ASN1Encoder<EPSBearerDeletionCauseValue> = $._encodeInteger;


/* eslint-enable */
