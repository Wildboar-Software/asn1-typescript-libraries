/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrectionsParameters
 * @description
 * 
 * Parameters of the corrections body part. Edition 2 does not define the
 * integer. The correction text is `CorrectionsData`. STANAG 4406 (Ed. 2), Annex
 * A, B1.2.
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
