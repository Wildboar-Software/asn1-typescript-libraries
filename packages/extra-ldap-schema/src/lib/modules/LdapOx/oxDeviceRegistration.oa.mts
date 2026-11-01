/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxDeviceRegistration } from "../LdapOx/id-oc-oxDeviceRegistration.va.mjs";
import { oxId } from "../LdapOx/oxId.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { oxDeviceKeyHandle } from "../LdapOx/oxDeviceKeyHandle.oa.mjs";
import { oxDeviceHashCode } from "../LdapOx/oxDeviceHashCode.oa.mjs";
import { oxApplication } from "../LdapOx/oxApplication.oa.mjs";
import { oxDeviceRegistrationConf } from "../LdapOx/oxDeviceRegistrationConf.oa.mjs";
import { oxDeviceNotificationConf } from "../LdapOx/oxDeviceNotificationConf.oa.mjs";
import { oxNickName } from "../LdapOx/oxNickName.oa.mjs";
import { oxDeviceData } from "../LdapOx/oxDeviceData.oa.mjs";
import { oxCounter } from "../LdapOx/oxCounter.oa.mjs";
import { oxStatus } from "../LdapOx/oxStatus.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { personInum } from "../LdapOx/personInum.oa.mjs";
import { creationDate } from "../LdapOx/creationDate.oa.mjs";
import { oxLastAccessTime } from "../LdapOx/oxLastAccessTime.oa.mjs";
import { oxTrustMetaLastModified } from "../LdapOx/oxTrustMetaLastModified.oa.mjs";
import { oxTrustMetaLocation } from "../LdapOx/oxTrustMetaLocation.oa.mjs";
import { oxTrustMetaVersion } from "../LdapOx/oxTrustMetaVersion.oa.mjs";
// export { id_oc_oxDeviceRegistration } from "../LdapOx/id-oc-oxDeviceRegistration.va.mjs";


/**
 * @summary oxDeviceRegistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxDeviceRegistration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | displayName
 *                               | description
 *                               | oxDeviceKeyHandle
 *                               | oxDeviceHashCode
 *                               | oxApplication
 *                               | oxDeviceRegistrationConf
 *                               | oxDeviceNotificationConf
 *                               | oxNickName
 *                               | oxDeviceData
 *                               | oxCounter
 *                               | oxStatus
 *                               | del
 *                               | exp
 *                               | personInum
 *                               | creationDate
 *                               | oxLastAccessTime
 *                               | oxTrustMetaLastModified
 *                               | oxTrustMetaLocation
 *                               | oxTrustMetaVersion }
 *   LDAP-NAME                 {"oxDeviceRegistration"}
 *   ID                        id-oc-oxDeviceRegistration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxDeviceRegistration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, displayName, description, oxDeviceKeyHandle, oxDeviceHashCode, oxApplication, oxDeviceRegistrationConf, oxDeviceNotificationConf, oxNickName, oxDeviceData, oxCounter, oxStatus, del, exp, personInum, creationDate, oxLastAccessTime, oxTrustMetaLastModified, oxTrustMetaLocation, oxTrustMetaVersion, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxDeviceRegistration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxDeviceRegistration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
