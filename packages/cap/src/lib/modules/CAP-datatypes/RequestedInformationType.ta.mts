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
export const RequestedInformationType: typeof _enum_for_RequestedInformationType = _enum_for_RequestedInformationType;
export const RequestedInformationType_callAttemptElapsedTime: _enum_for_RequestedInformationType.callAttemptElapsedTime = RequestedInformationType.callAttemptElapsedTime;
export const callAttemptElapsedTime: _enum_for_RequestedInformationType.callAttemptElapsedTime = RequestedInformationType.callAttemptElapsedTime;
export const RequestedInformationType_callStopTime: _enum_for_RequestedInformationType.callStopTime = RequestedInformationType.callStopTime;
export const callStopTime: _enum_for_RequestedInformationType.callStopTime = RequestedInformationType.callStopTime;
export const RequestedInformationType_callConnectedElapsedTime: _enum_for_RequestedInformationType.callConnectedElapsedTime = RequestedInformationType.callConnectedElapsedTime;
export const callConnectedElapsedTime: _enum_for_RequestedInformationType.callConnectedElapsedTime = RequestedInformationType.callConnectedElapsedTime;
export const RequestedInformationType_releaseCause: _enum_for_RequestedInformationType.releaseCause = RequestedInformationType.releaseCause;
export const releaseCause: _enum_for_RequestedInformationType.releaseCause = RequestedInformationType.releaseCause;
export const _decode_RequestedInformationType: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_RequestedInformationType: $.ASN1Encoder<number> = $._encodeEnumerated;
