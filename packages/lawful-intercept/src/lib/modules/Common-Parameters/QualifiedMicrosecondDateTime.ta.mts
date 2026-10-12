/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QualifiedMicrosecondDateTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedMicrosecondDateTime  ::=  GeneralizedTime
 * ```
 */
export
type QualifiedMicrosecondDateTime = GeneralizedTime; // GeneralizedTime
export const _decode_QualifiedMicrosecondDateTime: $.ASN1Decoder<QualifiedMicrosecondDateTime> = $._decodeGeneralizedTime;
export const _encode_QualifiedMicrosecondDateTime: $.ASN1Encoder<QualifiedMicrosecondDateTime> = $._encodeGeneralizedTime;


/* eslint-enable */
