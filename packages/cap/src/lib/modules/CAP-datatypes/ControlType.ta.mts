import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ControlType
 * @description
 *
 * Reason for activating CallGap. `sCPOverloaded`: automatic congestion
 * detection in the SCP. `manuallyInitiated`: service / NMC / SMC detected
 * congestion or another situation needing manual control; has priority over
 * `sCPOverloaded`. (3GPP TS 29.078 V19.0.0 clause 11.5).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlType ::= ENUMERATED {
 *  sCPOverloaded			(0),
 *  manuallyInitiated			(1)
 *  }
 * ```
 *
 */
export enum _enum_for_ControlType {
    sCPOverloaded = 0,
    manuallyInitiated = 1,
}
export type ControlType = _enum_for_ControlType;
export const ControlType = _enum_for_ControlType;
export const ControlType_sCPOverloaded: ControlType = ControlType.sCPOverloaded;
export const sCPOverloaded: ControlType = ControlType.sCPOverloaded;
export const ControlType_manuallyInitiated: ControlType = ControlType.manuallyInitiated;
export const manuallyInitiated: ControlType = ControlType.manuallyInitiated;
export const _decode_ControlType = $._decodeEnumerated;
export const _encode_ControlType = $._encodeEnumerated;
