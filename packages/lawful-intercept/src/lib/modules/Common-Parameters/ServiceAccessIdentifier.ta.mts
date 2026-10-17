/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAccessIdentifier
 * @description
 *
 * ETSI TS 103 280 V2.7.1 does not define this parameter. Clause 6 and
 * annex B of that edition end at `NAI`. This assignment is present in
 * the module identified by `version261`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6 and annex B.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAccessIdentifier  ::=  UTF8String
 * ```
 */
export
type ServiceAccessIdentifier = UTF8String; // UTF8String
export const _decode_ServiceAccessIdentifier: $.ASN1Decoder<ServiceAccessIdentifier> = $._decodeUTF8String;
export const _encode_ServiceAccessIdentifier: $.ASN1Encoder<ServiceAccessIdentifier> = $._encodeUTF8String;


/* eslint-enable */
