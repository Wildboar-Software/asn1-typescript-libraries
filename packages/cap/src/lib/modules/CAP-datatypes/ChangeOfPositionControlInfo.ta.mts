import {
    ASN1Element as _Element,
    ASN1SizeError,
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
export const _decode_ChangeOfPositionControlInfo = (el: _Element): ChangeOfPositionControlInfo => {
    const value = $._decodeSequenceOf<ChangeOfLocation>(() => _decode_ChangeOfLocation)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("ChangeOfPositionControlInfo violates SIZE constraint");
    }
    return value;
};
export const _encode_ChangeOfPositionControlInfo = $._encodeSequenceOf<ChangeOfLocation>(() => _encode_ChangeOfLocation, $.BER);
