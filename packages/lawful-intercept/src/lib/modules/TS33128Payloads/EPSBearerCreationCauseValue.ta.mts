/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerCreationCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerCreationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerCreationCauseValue = INTEGER;

export const _decode_EPSBearerCreationCauseValue: $.ASN1Decoder<EPSBearerCreationCauseValue> = $._decodeInteger;

export const _encode_EPSBearerCreationCauseValue: $.ASN1Encoder<EPSBearerCreationCauseValue> = $._encodeInteger;


/* eslint-enable */
