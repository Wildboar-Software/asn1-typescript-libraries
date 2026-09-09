import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MetDPCriterion, _decode_MetDPCriterion, _encode_MetDPCriterion } from "./MetDPCriterion.ta.mjs";

/**
 * @summary MetDPCriteriaList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetDPCriteriaList {PARAMETERS-BOUND : bound} ::= SEQUENCE SIZE (1..bound.&numOfChangeOfPositionControlInfo) OF MetDPCriterion {bound}
 * ```
 *
 */
export type MetDPCriteriaList = MetDPCriterion[];
export const _decode_MetDPCriteriaList = $._decodeSequenceOf<MetDPCriterion>(() => _decode_MetDPCriterion);
export const _encode_MetDPCriteriaList = $._encodeSequenceOf<MetDPCriterion>(() => _encode_MetDPCriterion, $.BER);
