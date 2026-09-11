/* eslint-disable */
import { INSTANCE_OF } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InstanceOfBHSM_PID
 * @description
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
