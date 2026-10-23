/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { securityFacilityId } from "../IN-CS3-SCF-SDF-datatypes/securityFacilityId.oa.mjs";
// export { securityFacilityId } from "../IN-CS3-SCF-SDF-datatypes/securityFacilityId.oa.mjs";
import { secretKey } from "../IN-CS3-SCF-SDF-datatypes/secretKey.oa.mjs";
// export { secretKey } from "../IN-CS3-SCF-SDF-datatypes/secretKey.oa.mjs";
import { identifierList } from "../IN-CS3-SCF-SDF-datatypes/identifierList.oa.mjs";
// export { identifierList } from "../IN-CS3-SCF-SDF-datatypes/identifierList.oa.mjs";
import { bindLevelIfOK } from "../IN-CS3-SCF-SDF-datatypes/bindLevelIfOK.oa.mjs";
// export { bindLevelIfOK } from "../IN-CS3-SCF-SDF-datatypes/bindLevelIfOK.oa.mjs";
import { currentList } from "../IN-CS3-SCF-SDF-datatypes/currentList.oa.mjs";
// export { currentList } from "../IN-CS3-SCF-SDF-datatypes/currentList.oa.mjs";
import { failureCounter } from "../IN-CS3-SCF-SDF-datatypes/failureCounter.oa.mjs";
// export { failureCounter } from "../IN-CS3-SCF-SDF-datatypes/failureCounter.oa.mjs";
import { lockSession } from "../IN-CS3-SCF-SDF-datatypes/lockSession.oa.mjs";
// export { lockSession } from "../IN-CS3-SCF-SDF-datatypes/lockSession.oa.mjs";
import { maxAttempts } from "../IN-CS3-SCF-SDF-datatypes/maxAttempts.oa.mjs";
// export { maxAttempts } from "../IN-CS3-SCF-SDF-datatypes/maxAttempts.oa.mjs";
import { id_oc_securityUserInfo } from "../IN-CS3-object-identifiers/id-oc-securityUserInfo.va.mjs";
// export { id_oc_securityUserInfo } from "../IN-CS3-object-identifiers/id-oc-securityUserInfo.va.mjs";


/**
 * @summary securityUserInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityUserInfo OBJECT-CLASS ::= {
 *   MUST CONTAIN  {securityFacilityId | secretKey | identifierList}
 *   MAY CONTAIN
 *     {bindLevelIfOK | currentList | failureCounter | lockSession | maxAttempts}
 *   ID            id-oc-securityUserInfo
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const securityUserInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&MandatoryAttributes": [ securityFacilityId, secretKey, identifierList, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ bindLevelIfOK, currentList, failureCounter, lockSession, maxAttempts, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_securityUserInfo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
