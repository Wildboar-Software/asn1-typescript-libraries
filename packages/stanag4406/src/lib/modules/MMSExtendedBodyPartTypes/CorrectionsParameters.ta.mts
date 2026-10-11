/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrectionsParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrectionsParameters  ::=  INTEGER
 * ```
 */
export
type CorrectionsParameters = INTEGER;
export const _decode_CorrectionsParameters: $.ASN1Decoder<CorrectionsParameters> = $._decodeInteger;
export const _encode_CorrectionsParameters: $.ASN1Encoder<CorrectionsParameters> = $._encodeInteger;


/* eslint-enable */
