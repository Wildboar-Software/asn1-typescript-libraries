/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_oxFido2RegistrationEntry } from "../LdapOx/id-oc-oxFido2RegistrationEntry.va.mjs";


/**
 * @summary oxFido2RegistrationEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxFido2RegistrationEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | creationDate
 *                               | displayName
 *                               | oxSessionStateId
 *                               | oxCodeChallenge
 *                               | oxCodeChallengeHash
 *                               | oxPublicKeyId
 *                               | personInum
 *                               | oxRegistrationData
 *                               | oxDeviceNotificationConf
 *                               | oxCounter
 *                               | oxStatus }
 *   LDAP-NAME                 {"oxFido2RegistrationEntry"}
 *   ID                        id-oc-oxFido2RegistrationEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxFido2RegistrationEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
