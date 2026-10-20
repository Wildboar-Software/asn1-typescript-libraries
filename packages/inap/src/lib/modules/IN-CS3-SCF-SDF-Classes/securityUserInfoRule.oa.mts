/* eslint-disable */
import { id_oc_securityUserInfo } from "../IN-CS3-object-identifiers/id-oc-securityUserInfo.va.mjs";
// export { id_oc_securityUserInfo } from "../IN-CS3-object-identifiers/id-oc-securityUserInfo.va.mjs";
import { verifyCredentials } from "../IN-CS3-SCF-SDF-Classes/verifyCredentials.oa.mjs";
// export { verifyCredentials } from "../IN-CS3-SCF-SDF-Classes/verifyCredentials.oa.mjs";
import { fillSecurityTokens } from "../IN-CS3-SCF-SDF-Classes/fillSecurityTokens.oa.mjs";
// export { fillSecurityTokens } from "../IN-CS3-SCF-SDF-Classes/fillSecurityTokens.oa.mjs";
import { conformCredentials } from "../IN-CS3-SCF-SDF-Classes/conformCredentials.oa.mjs";
// export { conformCredentials } from "../IN-CS3-SCF-SDF-Classes/conformCredentials.oa.mjs";
import { type METHOD_USE_RULE } from "../IN-CS3-SCF-SDF-Classes/METHOD-USE-RULE.oca.mjs";


/**
 * @summary securityUserInfoRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityUserInfoRule METHOD-USE-RULE ::= {
 *   OBJECT-CLASS TYPE  id-oc-securityUserInfo
 *   METHODS
 *     {verifyCredentials | fillSecurityTokens | conformCredentials}
 * }
 * ```
 * 
 * @constant
 * @type {METHOD_USE_RULE}
 * @implements {METHOD_USE_RULE}
 */
export
const securityUserInfoRule: METHOD_USE_RULE = {
    class: "METHOD-USE-RULE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&objectClassType": id_oc_securityUserInfo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Mandatory": [ verifyCredentials, fillSecurityTokens, conformCredentials, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
