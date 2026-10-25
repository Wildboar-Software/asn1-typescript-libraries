import {
    type ASN1Element as _Element,
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
 *  callAttemptElapsedTime		(0),
 *  callStopTime			(1),
 *  callConnectedElapsedTime		(2),
 *  releaseCause			(30)
 *  }
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
export const RequestedInformationType_callAttemptElapsedTime = RequestedInformationType.callAttemptElapsedTime satisfies RequestedInformationType;
export const callAttemptElapsedTime = RequestedInformationType.callAttemptElapsedTime satisfies RequestedInformationType;
export const RequestedInformationType_callStopTime = RequestedInformationType.callStopTime satisfies RequestedInformationType;
export const callStopTime = RequestedInformationType.callStopTime satisfies RequestedInformationType;
export const RequestedInformationType_callConnectedElapsedTime = RequestedInformationType.callConnectedElapsedTime satisfies RequestedInformationType;
export const callConnectedElapsedTime = RequestedInformationType.callConnectedElapsedTime satisfies RequestedInformationType;
export const RequestedInformationType_releaseCause = RequestedInformationType.releaseCause satisfies RequestedInformationType;
export const releaseCause = RequestedInformationType.releaseCause satisfies RequestedInformationType;
export const _decode_RequestedInformationType = $._decodeEnumerated;
export const _encode_RequestedInformationType = $._encodeEnumerated;
