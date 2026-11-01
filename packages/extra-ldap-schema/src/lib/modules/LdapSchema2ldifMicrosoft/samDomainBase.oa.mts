/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_samDomainBase } from "../LdapSchema2ldifMicrosoft/id-oc-samDomainBase.va.mjs";
import { nTSecurityDescriptor } from "../MSUser/nTSecurityDescriptor.oa.mjs";
import { creationTime } from "../MSUser/creationTime.oa.mjs";
import { forceLogoff } from "../MSUser/forceLogoff.oa.mjs";
import { lockoutDuration } from "../MSUser/lockoutDuration.oa.mjs";
import { lockOutObservationWindow } from "../MSUser/lockOutObservationWindow.oa.mjs";
import { lockoutThreshold } from "../MSUser/lockoutThreshold.oa.mjs";
import { maxPwdAge } from "../MSUser/maxPwdAge.oa.mjs";
import { minPwdAge } from "../MSUser/minPwdAge.oa.mjs";
import { minPwdLength } from "../MSUser/minPwdLength.oa.mjs";
import { modifiedCountAtLastProm } from "../MSUser/modifiedCountAtLastProm.oa.mjs";
import { nextRid } from "../MSUser/nextRid.oa.mjs";
import { pwdProperties } from "../MSUser/pwdProperties.oa.mjs";
import { pwdHistoryLength } from "../MSUser/pwdHistoryLength.oa.mjs";
import { revision } from "../MSUser/revision.oa.mjs";
import { objectSid } from "../MSUser/objectSid.oa.mjs";
import { oEMInformation } from "../MSUser/oEMInformation.oa.mjs";
import { serverState } from "../MSUser/serverState.oa.mjs";
import { uASCompat } from "../MSUser/uASCompat.oa.mjs";
import { serverRole } from "../MSUser/serverRole.oa.mjs";
import { domainReplica } from "../MSUser/domainReplica.oa.mjs";
import { modifiedCount } from "../MSUser/modifiedCount.oa.mjs";
// export { id_oc_samDomainBase } from "../LdapSchema2ldifMicrosoft/id-oc-samDomainBase.va.mjs";


/**
 * @summary samDomainBase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * samDomainBase OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nTSecurityDescriptor
 *                               | creationTime
 *                               | forceLogoff
 *                               | lockoutDuration
 *                               | lockOutObservationWindow
 *                               | lockoutThreshold
 *                               | maxPwdAge
 *                               | minPwdAge
 *                               | minPwdLength
 *                               | modifiedCountAtLastProm
 *                               | nextRid
 *                               | pwdProperties
 *                               | pwdHistoryLength
 *                               | revision
 *                               | objectSid
 *                               | oEMInformation
 *                               | serverState
 *                               | uASCompat
 *                               | serverRole
 *                               | domainReplica
 *                               | modifiedCount }
 *   LDAP-NAME                 {"samDomainBase"}
 *   ID                        id-oc-samDomainBase }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const samDomainBase: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nTSecurityDescriptor, creationTime, forceLogoff, lockoutDuration, lockOutObservationWindow, lockoutThreshold, maxPwdAge, minPwdAge, minPwdLength, modifiedCountAtLastProm, nextRid, pwdProperties, pwdHistoryLength, revision, objectSid, oEMInformation, serverState, uASCompat, serverRole, domainReplica, modifiedCount, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "samDomainBase" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_samDomainBase /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
