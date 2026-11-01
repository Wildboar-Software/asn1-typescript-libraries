/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_davEntity } from "../Ldapmigration60iplanetCalendar/id-oc-davEntity.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { davStore } from "../Ldapmigration60iplanetCalendar/davStore.oa.mjs";
import { davAllowedServices } from "../Ldapmigration60iplanetCalendar/davAllowedServices.oa.mjs";
import { davEventNotification } from "../Ldapmigration60iplanetCalendar/davEventNotification.oa.mjs";
import { davEventNotificationDestination } from "../Ldapmigration60iplanetCalendar/davEventNotificationDestination.oa.mjs";
import { davTimezone } from "../Ldapmigration60iplanetCalendar/davTimezone.oa.mjs";
import { davUniqueId } from "../Ldapmigration60iplanetCalendar/davUniqueId.oa.mjs";
// export { id_oc_davEntity } from "../Ldapmigration60iplanetCalendar/id-oc-davEntity.va.mjs";


/**
 * @summary davEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * davEntity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mail
 *                               | davStore
 *                               | davAllowedServices
 *                               | davEventNotification
 *                               | davEventNotificationDestination
 *                               | davTimezone
 *                               | davUniqueId }
 *   LDAP-NAME                 {"davEntity"}
 *   LDAP-DESC                 "Common dav object"
 *   ID                        id-oc-davEntity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const davEntity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mail, davStore, davAllowedServices, davEventNotification, davEventNotificationDestination, davTimezone, davUniqueId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "davEntity" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Common dav object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_davEntity /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
