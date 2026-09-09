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
import { type ChangeOfLocation, _decode_ChangeOfLocation, _encode_ChangeOfLocation } from "./ChangeOfLocation.ta.mjs";

/**
 * @summary ChangeOfPositionControlInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeOfPositionControlInfo {PARAMETERS-BOUND : bound} ::= SEQUENCE SIZE (1..bound.&numOfChangeOfPositionControlInfo) OF ChangeOfLocation {bound}
 * ```
 *
 */
export type ChangeOfPositionControlInfo = ChangeOfLocation[];
export const _decode_ChangeOfPositionControlInfo = $._decodeSequenceOf<ChangeOfLocation>(() => _decode_ChangeOfLocation);
export const _encode_ChangeOfPositionControlInfo = $._encodeSequenceOf<ChangeOfLocation>(() => _encode_ChangeOfLocation, $.BER);
