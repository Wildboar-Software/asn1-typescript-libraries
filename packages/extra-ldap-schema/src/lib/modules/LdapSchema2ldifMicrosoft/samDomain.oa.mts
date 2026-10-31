/* eslint-disable */
import { cACertificate } from "../AuthenticationFramework/cACertificate.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_samDomain } from "../LdapSchema2ldifMicrosoft/id-oc-samDomain.va.mjs";
import { auditingPolicy } from "../MSUser/auditingPolicy.oa.mjs";
import { builtinCreationTime } from "../MSUser/builtinCreationTime.oa.mjs";
import { builtinModifiedCount } from "../MSUser/builtinModifiedCount.oa.mjs";
import { controlAccessRights } from "../MSUser/controlAccessRights.oa.mjs";
import { creationTime } from "../MSUser/creationTime.oa.mjs";
import { defaultLocalPolicyObject } from "../MSUser/defaultLocalPolicyObject.oa.mjs";
import { desktopProfile } from "../MSUser/desktopProfile.oa.mjs";
import { domainPolicyObject } from "../MSUser/domainPolicyObject.oa.mjs";
import { eFSPolicy } from "../MSUser/eFSPolicy.oa.mjs";
import { gPLink } from "../MSUser/gPLink.oa.mjs";
import { gPOptions } from "../MSUser/gPOptions.oa.mjs";
import { lSACreationTime } from "../MSUser/lSACreationTime.oa.mjs";
import { lSAModifiedCount } from "../MSUser/lSAModifiedCount.oa.mjs";
import { lockOutObservationWindow } from "../MSUser/lockOutObservationWindow.oa.mjs";
import { lockoutDuration } from "../MSUser/lockoutDuration.oa.mjs";
import { lockoutThreshold } from "../MSUser/lockoutThreshold.oa.mjs";
import { maxPwdAge } from "../MSUser/maxPwdAge.oa.mjs";
import { minPwdAge } from "../MSUser/minPwdAge.oa.mjs";
import { minPwdLength } from "../MSUser/minPwdLength.oa.mjs";
import { modifiedCountAtLastProm } from "../MSUser/modifiedCountAtLastProm.oa.mjs";
import { ms_DS_MachineAccountQuota } from "../MSUser/ms-DS-MachineAccountQuota.oa.mjs";
import { nETBIOSName } from "../MSUser/nETBIOSName.oa.mjs";
import { nTMixedDomain } from "../MSUser/nTMixedDomain.oa.mjs";
import { nextRid } from "../MSUser/nextRid.oa.mjs";
import { pekKeyChangeInterval } from "../MSUser/pekKeyChangeInterval.oa.mjs";
import { pekList } from "../MSUser/pekList.oa.mjs";
import { privateKey } from "../MSUser/privateKey.oa.mjs";
import { pwdHistoryLength } from "../MSUser/pwdHistoryLength.oa.mjs";
import { pwdProperties } from "../MSUser/pwdProperties.oa.mjs";
import { rIDManagerReference } from "../MSUser/rIDManagerReference.oa.mjs";
import { replicaSource } from "../MSUser/replicaSource.oa.mjs";
import { treeName } from "../MSUser/treeName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";

/**
 * @summary samDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * samDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { description
 *                               | cACertificate
 *                               | builtinCreationTime
 *                               | builtinModifiedCount
 *                               | creationTime
 *                               | domainPolicyObject
 *                               | defaultLocalPolicyObject
 *                               | lockoutDuration
 *                               | lockOutObservationWindow
 *                               | lSACreationTime
 *                               | lSAModifiedCount
 *                               | lockoutThreshold
 *                               | maxPwdAge
 *                               | minPwdAge
 *                               | minPwdLength
 *                               | modifiedCountAtLastProm
 *                               | nETBIOSName
 *                               | nextRid
 *                               | pwdProperties
 *                               | pwdHistoryLength
 *                               | privateKey
 *                               | replicaSource
 *                               | controlAccessRights
 *                               | auditingPolicy
 *                               | eFSPolicy
 *                               | desktopProfile
 *                               | nTMixedDomain
 *                               | rIDManagerReference
 *                               | treeName
 *                               | pekList
 *                               | pekKeyChangeInterval
 *                               | gPLink
 *                               | gPOptions
 *                               | ms-DS-MachineAccountQuota }
 *   LDAP-NAME                 {"samDomain"}
 *   ID                        id-oc-samDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const samDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, cACertificate, builtinCreationTime, builtinModifiedCount, creationTime, domainPolicyObject, defaultLocalPolicyObject, lockoutDuration, lockOutObservationWindow, lSACreationTime, lSAModifiedCount, lockoutThreshold, maxPwdAge, minPwdAge, minPwdLength, modifiedCountAtLastProm, nETBIOSName, nextRid, pwdProperties, pwdHistoryLength, privateKey, replicaSource, controlAccessRights, auditingPolicy, eFSPolicy, desktopProfile, nTMixedDomain, rIDManagerReference, treeName, pekList, pekKeyChangeInterval, gPLink, gPOptions, ms_DS_MachineAccountQuota] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["samDomain"],
    "&id": id_oc_samDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
