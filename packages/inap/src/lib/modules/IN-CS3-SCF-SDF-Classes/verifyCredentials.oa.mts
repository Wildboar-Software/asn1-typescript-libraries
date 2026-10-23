/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TwoPartMessage, _decode_TwoPartMessage, _encode_TwoPartMessage } from "../IN-CS3-SCF-SDF-datatypes/TwoPartMessage.ta.mjs";
// export { TwoPartMessage, _decode_TwoPartMessage, _encode_TwoPartMessage } from "../IN-CS3-SCF-SDF-datatypes/TwoPartMessage.ta.mjs";
import { id_mt_verifyCredentials } from "../IN-CS3-object-identifiers/id-mt-verifyCredentials.va.mjs";
// export { id_mt_verifyCredentials } from "../IN-CS3-object-identifiers/id-mt-verifyCredentials.va.mjs";
import { type METHOD } from "../IN-CS3-SCF-SDF-Classes/METHOD.oca.mjs";


/**
 * @summary verifyCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * verifyCredentials METHOD ::= {
 *   SPECIFIC-INPUT   TwoPartMessage
 *   -- see the definition of this type below
 *   SPECIFIC-OUTPUT  BOOLEAN -- to indicate the success of the verification
 *   BEHAVIOUR
 *     "This method performs the following actions on the entry identified by the execute argument, this entry would be of class genericSecurityUserInfo:
 *     1) if maxattempts is present, verify that failureCounter is inferior to its value
 *     2) read the value of identifierList attribute
 *     (return bad format entry if failure)
 *     3) if conformMethodIdentifier is NULL go to step 5)
 *     4) run conformMethodIdentifier method on TwopartMessage provided as specific input
 *     (return a badconformance error if the execution fails or if the result is false)
 *     5) run the oneToOneAlgorithm on the messageData bit string to get an expected
 *     certificationCode bit string
 *     6) return TRUE if the expected and provided certificationCode values matched,
 *     7) otherwise if failureCounter is present, increment it
 *     8) return FALSE
 * "
 *   ID               id-mt-verifyCredentials
 * }
 * ```
 * 
 * @constant
 * @type {METHOD<TwoPartMessage, BOOLEAN>}
 * @implements {METHOD<TwoPartMessage, BOOLEAN>}
 */
export
const verifyCredentials: METHOD<TwoPartMessage, BOOLEAN> = {
    class: "METHOD",
    decoderFor: {
        "&SpecificInput": _decode_TwoPartMessage,
        "&SpecificOutput": $._decodeBoolean,
    },
    encoderFor: {
        "&SpecificInput": _encode_TwoPartMessage,
        "&SpecificOutput": $._encodeBoolean,
    },
    "&description": "This method performs the following actions on the entry identified by the execute argument, this entry would be of class genericSecurityUserInfo:1) if maxattempts is present, verify that failureCounter is inferior to its value2) read the value of identifierList attribute(return bad format entry if failure)3) if conformMethodIdentifier is NULL go to step 5)4) run conformMethodIdentifier method on TwopartMessage provided as specific input(return a badconformance error if the execution fails or if the result is false)5) run the oneToOneAlgorithm on the messageData bit string to get an expectedcertificationCode bit string6) return TRUE if the expected and provided certificationCode values matched,7) otherwise if failureCounter is present, increment it8) return FALSE" /* OBJECT_FIELD_SETTING */,
    "&id": id_mt_verifyCredentials /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&SpecificInput": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&SpecificOutput": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
