/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GroupStatus
 * @description
 * 
 * Whether the observed subscriber is joining or leaving a group. FALSE means
 * leaving. TRUE means joining. Annex A.9.2.1.4.4 sends one REPORT per group and
 * requires this value. For an individual warrant the target is the ITSI and the
 * other party is the GTSI. For a group warrant those identities are swapped.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.4, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupStatus  ::=  BOOLEAN
 * ```
 */
export
type GroupStatus = BOOLEAN; // BooleanType
export const _decode_GroupStatus: $.ASN1Decoder<GroupStatus> = $._decodeBoolean;
export const _encode_GroupStatus: $.ASN1Encoder<GroupStatus> = $._encodeBoolean;


/* eslint-enable */
