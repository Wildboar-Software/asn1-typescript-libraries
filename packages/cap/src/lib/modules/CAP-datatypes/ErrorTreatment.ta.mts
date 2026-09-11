import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ErrorTreatment
 * @description
 *
 * `stdErrorAndInfo` returns the `ImproperCallerResponse` error if collection of
 * user info fails. (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorTreatment ::= ENUMERATED {
 *  stdErrorAndInfo			(0),
 *  help				(1),
 *  repeatPrompt			(2)
 *  }
 * ```
 *
 */
export enum _enum_for_ErrorTreatment {
    stdErrorAndInfo = 0,
    help = 1,
    repeatPrompt = 2,
}
export type ErrorTreatment = _enum_for_ErrorTreatment;
export const ErrorTreatment = _enum_for_ErrorTreatment;
export const ErrorTreatment_stdErrorAndInfo: ErrorTreatment = ErrorTreatment.stdErrorAndInfo;
export const stdErrorAndInfo: ErrorTreatment = ErrorTreatment.stdErrorAndInfo;
export const ErrorTreatment_help: ErrorTreatment = ErrorTreatment.help;
export const help: ErrorTreatment = ErrorTreatment.help;
export const ErrorTreatment_repeatPrompt: ErrorTreatment = ErrorTreatment.repeatPrompt;
export const repeatPrompt: ErrorTreatment = ErrorTreatment.repeatPrompt;
export const _decode_ErrorTreatment = $._decodeEnumerated;
export const _encode_ErrorTreatment = $._encodeEnumerated;
