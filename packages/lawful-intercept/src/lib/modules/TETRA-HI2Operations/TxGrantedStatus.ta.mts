/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TxGrantedStatus
 * @description
 * 
 * Talker grant on a group call. FALSE means TxCeased. TRUE means TxGranted.
 * Annex A.9.2.1.2.7 requires it on the TxGranted CONTINUE record, which reports
 * talker status in groups.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TxGrantedStatus  ::=  BOOLEAN
 * ```
 */
export
type TxGrantedStatus = BOOLEAN; // BooleanType
export const _decode_TxGrantedStatus: $.ASN1Decoder<TxGrantedStatus> = $._decodeBoolean;
export const _encode_TxGrantedStatus: $.ASN1Encoder<TxGrantedStatus> = $._encodeBoolean;


/* eslint-enable */
