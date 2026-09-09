import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary RequestedInformationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedInformationType ::= ENUMERATED {
 callAttemptElapsedTime		(0),
 callStopTime			(1),
 callConnectedElapsedTime		(2),
 releaseCause			(30)
 }
 * ```
 *
 */
export enum _enum_for_RequestedInformationType {
    callAttemptElapsedTime = 0,
    callStopTime = 1,
    callConnectedElapsedTime = 2,
    releaseCause = 30,
}
export type RequestedInformationType = _enum_for_RequestedInformationType;
export const RequestedInformationType = _enum_for_RequestedInformationType;
export const RequestedInformationType_callAttemptElapsedTime: RequestedInformationType = RequestedInformationType.callAttemptElapsedTime;
export const callAttemptElapsedTime: RequestedInformationType = RequestedInformationType.callAttemptElapsedTime;
export const RequestedInformationType_callStopTime: RequestedInformationType = RequestedInformationType.callStopTime;
export const callStopTime: RequestedInformationType = RequestedInformationType.callStopTime;
export const RequestedInformationType_callConnectedElapsedTime: RequestedInformationType = RequestedInformationType.callConnectedElapsedTime;
export const callConnectedElapsedTime: RequestedInformationType = RequestedInformationType.callConnectedElapsedTime;
export const RequestedInformationType_releaseCause: RequestedInformationType = RequestedInformationType.releaseCause;
export const releaseCause: RequestedInformationType = RequestedInformationType.releaseCause;
export const _decode_RequestedInformationType = $._decodeEnumerated;
export const _encode_RequestedInformationType = $._encodeEnumerated;
