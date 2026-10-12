/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerID  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerID = INTEGER;
export const _decode_EPSBearerID: $.ASN1Decoder<EPSBearerID> = $._decodeInteger;
export const _encode_EPSBearerID: $.ASN1Encoder<EPSBearerID> = $._encodeInteger;


/* eslint-enable */
