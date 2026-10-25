/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SDP
 * @description
 *
 * Session description carried as a `UTF8String` on `CCOpen`,
 * `CCChange`, and `MediaReport` (`subject` and `associate`).
 *
 * The module comment says the format and syntax of this field are
 * defined in reference [8]. In this edition, reference [8] is
 * ETSI ES 201 671, the handover interface for lawful interception.
 * Reference [17], and annex C, identify IETF RFC 2327 as the Session
 * Description Protocol. Annex A does not reconcile the module comment
 * with those references.
 *
 * Annex B says the SDP parameters the CMS copies to the Lawful
 * Interception Mediation Function include the encryption keys. This
 * edition does not say how `subject` and `associate` differ.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 2 and annexes A and B.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDP  ::=  UTF8String
 * ```
 */
export
type SDP = UTF8String; // UTF8String
export const _decode_SDP: $.ASN1Decoder<SDP> = $._decodeUTF8String;
export const _encode_SDP: $.ASN1Encoder<SDP> = $._encodeUTF8String;


/* eslint-enable */
