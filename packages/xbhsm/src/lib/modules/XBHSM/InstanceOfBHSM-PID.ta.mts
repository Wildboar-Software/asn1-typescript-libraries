/* eslint-disable */
import { INSTANCE_OF } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InstanceOfBHSM_PID
 * @description
 *
 * `INSTANCE OF BHSM-PSID` constrained to
 * `SupportedBHSM-PSID`
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3). The spec does not describe when
 * this instance is used. The ASN.1 name is `InstanceOfBHSM-PID`
 * (PID, not PSID).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InstanceOfBHSM-PID  ::=  INSTANCE OF BHSM-PSID({SupportedBHSM-PSID})
 * ```
 */
export type InstanceOfBHSM_PID = INSTANCE_OF; // InstanceOfType
export const _decode_InstanceOfBHSM_PID: $.ASN1Decoder<InstanceOfBHSM_PID> = $._decodeInstanceOf;
export const _encode_InstanceOfBHSM_PID: $.ASN1Encoder<InstanceOfBHSM_PID> = $._encodeInstanceOf;

/* eslint-enable */
