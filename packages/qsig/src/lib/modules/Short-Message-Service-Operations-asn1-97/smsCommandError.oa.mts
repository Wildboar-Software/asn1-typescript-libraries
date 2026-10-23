/* eslint-disable */
import { _decode_smsCommandError_ParameterType, _encode_smsCommandError_ParameterType, smsCommandError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsCommandError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary smsCommandError
 * @description
 *
 * Rejection of `smsCommand` (ECMA-325 §6.5.1.2.2, §6.5.3.2.2, Annex E.12).
 * ROSE local CODE 1029. The Service Centre returns it to the Sending User PINX
 * or Sending User Message Centre.
 *
 * When no stored Short Message matches the command, the cause is
 * `commandCannotBeActioned` (§6.5.3.2.2). Table E.4 spells that value
 * `commandCanNotBeActioned` (160). Other Table E.4 command causes are
 * `commandUnsupported` (161) and `unspecifiedCommandError` (175).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsCommandError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         failureCause FailureCause,
 *         serviceCentreTimeStamp ServiceCentreTimeStamp,
 *         protocolIdentifier [0] IMPLICIT ProtocolIdentifier OPTIONAL,
 *         userData [1] IMPLICIT UserData OPTIONAL
 *     }
 *     CODE local: 1029
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<smsCommandError_ParameterType>}
 * @implements {ERROR<smsCommandError_ParameterType>}
 */
export
const smsCommandError: ERROR<smsCommandError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_smsCommandError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_smsCommandError_ParameterType,
    },
    "&errorCode": { local: 1029 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
