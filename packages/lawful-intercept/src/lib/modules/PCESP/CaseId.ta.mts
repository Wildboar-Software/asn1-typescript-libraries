/* eslint-disable */
import {
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CaseId
 * @description
 *
 * Intercept-case identifier carried on every PCESP message. A
 * `VisibleString` of size 1 to 25, extensible.
 *
 * This edition does not define how the value is assigned. `LIIDType`
 * (clause 8.4.2.1.2) is a separate identifier: an integer of 0 to
 * 65535 on `TARGETACTIVITYMONITOR`, identifying the LEA, the target,
 * the operator, and the warrant. Annex A defers parameter definitions
 * to PacketCable PKT-SP-ESP-I04-040723.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.2 and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CaseId  ::=  VisibleString (SIZE(1..25, ...))
 * ```
 */
export
type CaseId = VisibleString; // VisibleString
export const _decode_CaseId: $.ASN1Decoder<CaseId> = $._decodeVisibleString;
export const _encode_CaseId: $.ASN1Encoder<CaseId> = $._encodeVisibleString;


/* eslint-enable */
