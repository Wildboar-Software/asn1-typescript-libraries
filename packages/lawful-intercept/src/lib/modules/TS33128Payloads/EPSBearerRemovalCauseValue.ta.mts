/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerRemovalCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerRemovalCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerRemovalCauseValue = INTEGER;

export const _decode_EPSBearerRemovalCauseValue: $.ASN1Decoder<EPSBearerRemovalCauseValue> = $._decodeInteger;

export const _encode_EPSBearerRemovalCauseValue: $.ASN1Encoder<EPSBearerRemovalCauseValue> = $._encodeInteger;


/* eslint-enable */
