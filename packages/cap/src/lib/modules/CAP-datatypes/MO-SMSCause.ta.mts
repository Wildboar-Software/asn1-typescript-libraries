import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MO_SMSCause
 * @description
 *
 * MO-SMS error reported to the gsmSCF. Most values are received from the SMSC
 * as a response to MO-ForwardSM. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MO-SMSCause ::= ENUMERATED {
 *  systemFailure			(0),
 *  unexpectedDataValue			(1),
 *  facilityNotSupported		(2),
 *  sM-DeliveryFailure			(3),
 *  releaseFromRadioInterface		(4)
 *  }
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
/**
 * @summary MO_SMSCause_systemFailure
 * @description
 *
 * `systemFailure (0)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MO_SMSCause_systemFailure: MO_SMSCause = MO_SMSCause.systemFailure;
/**
 * @summary systemFailure
 * @description
 *
 * `systemFailure (0)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const systemFailure: MO_SMSCause = MO_SMSCause.systemFailure;
/**
 * @summary MO_SMSCause_unexpectedDataValue
 * @description
 *
 * `unexpectedDataValue (1)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MO_SMSCause_unexpectedDataValue: MO_SMSCause = MO_SMSCause.unexpectedDataValue;
/**
 * @summary unexpectedDataValue
 * @description
 *
 * `unexpectedDataValue (1)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const unexpectedDataValue: MO_SMSCause = MO_SMSCause.unexpectedDataValue;
/**
 * @summary MO_SMSCause_facilityNotSupported
 * @description
 *
 * `facilityNotSupported (2)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MO_SMSCause_facilityNotSupported: MO_SMSCause = MO_SMSCause.facilityNotSupported;
/**
 * @summary facilityNotSupported
 * @description
 *
 * `facilityNotSupported (2)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const facilityNotSupported: MO_SMSCause = MO_SMSCause.facilityNotSupported;
/**
 * @summary MO_SMSCause_sM_DeliveryFailure
 * @description
 *
 * `sM-DeliveryFailure (3)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MO_SMSCause_sM_DeliveryFailure: MO_SMSCause = MO_SMSCause.sM_DeliveryFailure;
/**
 * @summary sM_DeliveryFailure
 * @description
 *
 * `sM-DeliveryFailure (3)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const sM_DeliveryFailure: MO_SMSCause = MO_SMSCause.sM_DeliveryFailure;
/**
 * @summary MO_SMSCause_releaseFromRadioInterface
 * @description
 *
 * `releaseFromRadioInterface (4)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MO_SMSCause_releaseFromRadioInterface: MO_SMSCause = MO_SMSCause.releaseFromRadioInterface;
/**
 * @summary releaseFromRadioInterface
 * @description
 *
 * `releaseFromRadioInterface (4)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const releaseFromRadioInterface: MO_SMSCause = MO_SMSCause.releaseFromRadioInterface;
export const _decode_MO_SMSCause = $._decodeEnumerated;
export const _encode_MO_SMSCause = $._encodeEnumerated;
