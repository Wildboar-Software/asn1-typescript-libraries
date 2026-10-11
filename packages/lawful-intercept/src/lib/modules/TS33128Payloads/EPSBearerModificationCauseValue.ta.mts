/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerModificationCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerModificationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerModificationCauseValue = INTEGER;

export const _decode_EPSBearerModificationCauseValue: $.ASN1Decoder<EPSBearerModificationCauseValue> = $._decodeInteger;

export const _encode_EPSBearerModificationCauseValue: $.ASN1Encoder<EPSBearerModificationCauseValue> = $._encodeInteger;


/* eslint-enable */
