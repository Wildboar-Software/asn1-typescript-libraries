/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QualifiedDateTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedDateTime  ::=  GeneralizedTime
 * ```
 */
export
type QualifiedDateTime = GeneralizedTime; // GeneralizedTime
export const _decode_QualifiedDateTime: $.ASN1Decoder<QualifiedDateTime> = $._decodeGeneralizedTime;
export const _encode_QualifiedDateTime: $.ASN1Encoder<QualifiedDateTime> = $._encodeGeneralizedTime;


/* eslint-enable */
