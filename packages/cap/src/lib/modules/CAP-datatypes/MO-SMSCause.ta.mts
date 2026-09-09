import {
    ENUMERATED,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MO_SMSCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MO-SMSCause ::= ENUMERATED {
 systemFailure			(0),
 unexpectedDataValue			(1),
 facilityNotSupported		(2),
 sM-DeliveryFailure			(3),
 releaseFromRadioInterface		(4)
 }
 * ```
 *
 */
export enum _enum_for_MO_SMSCause {
    systemFailure = 0,
    unexpectedDataValue = 1,
    facilityNotSupported = 2,
    sM_DeliveryFailure = 3,
    releaseFromRadioInterface = 4,
}
export type MO_SMSCause = _enum_for_MO_SMSCause;
export const MO_SMSCause = _enum_for_MO_SMSCause;
export const MO_SMSCause_systemFailure: MO_SMSCause = MO_SMSCause.systemFailure;
export const systemFailure: MO_SMSCause = MO_SMSCause.systemFailure;
export const MO_SMSCause_unexpectedDataValue: MO_SMSCause = MO_SMSCause.unexpectedDataValue;
export const unexpectedDataValue: MO_SMSCause = MO_SMSCause.unexpectedDataValue;
export const MO_SMSCause_facilityNotSupported: MO_SMSCause = MO_SMSCause.facilityNotSupported;
export const facilityNotSupported: MO_SMSCause = MO_SMSCause.facilityNotSupported;
export const MO_SMSCause_sM_DeliveryFailure: MO_SMSCause = MO_SMSCause.sM_DeliveryFailure;
export const sM_DeliveryFailure: MO_SMSCause = MO_SMSCause.sM_DeliveryFailure;
export const MO_SMSCause_releaseFromRadioInterface: MO_SMSCause = MO_SMSCause.releaseFromRadioInterface;
export const releaseFromRadioInterface: MO_SMSCause = MO_SMSCause.releaseFromRadioInterface;
export const _decode_MO_SMSCause = $._decodeEnumerated;
export const _encode_MO_SMSCause = $._encodeEnumerated;
