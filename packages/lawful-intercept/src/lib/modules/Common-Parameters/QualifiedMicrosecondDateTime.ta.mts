/* eslint-disable */
import {
    type GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QualifiedMicrosecondDateTime
 * @description
 *
 * Timestamp with microsecond precision and a timezone qualifier. A
 * timezone qualifier shall be present. The fractional part of a second
 * shall be present and shall have no more than 6 digits. Local time
 * format shall not be used.
 *
 * The clause 6.5 regular expression and annex A require exactly six
 * fractional digits in the XML form.
 *
 * ASN.1 example: `20151227133700.012345+0200`.
 * XML example: `2015-12-27T13:37:00.012345+02:00`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.5, citing W3C XML Schema
 * Definition Language 1.1 Part 2: Datatypes, section 3.3.7.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * https://www.w3.org/TR/xmlschema11-2/#dateTime
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
