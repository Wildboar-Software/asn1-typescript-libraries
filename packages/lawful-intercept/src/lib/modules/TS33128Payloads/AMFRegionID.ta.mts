/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegionID  ::=  INTEGER (0..255)
 * ```
 */
export
type AMFRegionID = INTEGER;

export const _decode_AMFRegionID: $.ASN1Decoder<AMFRegionID> = $._decodeInteger;

export const _encode_AMFRegionID: $.ASN1Encoder<AMFRegionID> = $._encodeInteger;


/* eslint-enable */
