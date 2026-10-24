/* eslint-disable */
import {
    type GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QualifiedDateTime
 * @description
 *
 * Timestamp with second precision and a timezone qualifier. A timezone
 * qualifier shall be present. The fractional part of a second shall not
 * be present. Local time format shall not be used.
 *
 * ASN.1 example: `20151227133700+0200`.
 * XML example: `2015-12-27T13:37:00+02:00`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.4, citing W3C XML Schema
 * Definition Language 1.1 Part 2: Datatypes, section 3.3.7.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * https://www.w3.org/TR/xmlschema11-2/#dateTime
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
