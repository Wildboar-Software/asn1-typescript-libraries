/* eslint-disable */
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { negativePW_Check } from "../MAP-Errors/negativePW-Check.oa.mjs";
import { numberOfPW_AttemptsViolation } from "../MAP-Errors/numberOfPW-AttemptsViolation.oa.mjs";
import { pw_RegistrationFailure } from "../MAP-Errors/pw-RegistrationFailure.oa.mjs";
import { ss_SubscriptionViolation } from "../MAP-Errors/ss-SubscriptionViolation.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary registerPassword
 * @description
 *
 * MAP_REGISTER_PASSWORD: mobile subscriber requests registration of a new
 * password. Used MSC→VLR and VLR→HLR; the VLR relays to the HLR. Linked to
 * `getPassword`. Confirmed. Typical MAP path: VLR→HLR. Local opcode 17. Timer
 * class `ml` (1 min to 10 min). Distinctive errors: `pw-RegistrationFailure`,
 * `negativePW-Check`, `numberOfPW-AttemptsViolation`. (3GPP TS 29.002 V19.1.0
 * clauses 11.7.1, 17.1.2, 17.3.2.19 and 17.6.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * registerPassword  OPERATION ::= {    --Timer ml
 *     ARGUMENT
 *     SS-Code
 *     RESULT
 *     Password
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     callBarred |
 *     ss-SubscriptionViolation |
 *     pw-RegistrationFailure |
 *     negativePW-Check |
 *     numberOfPW-AttemptsViolation}
 * --    LINKED {
 * --    getPassword}
 *     CODE    local:17 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SS_Code, Password>}
 * @implements {OPERATION<SS_Code, Password>}
 */
export
const registerPassword: OPERATION<SS_Code, Password> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SS_Code,
        "&ResultType": _decode_Password,
    },
    encoderFor: {
        "&ArgumentType": _encode_SS_Code,
        "&ResultType": _encode_Password,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, callBarred, ss_SubscriptionViolation, pw_RegistrationFailure, negativePW_Check, numberOfPW_AttemptsViolation, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 17 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
