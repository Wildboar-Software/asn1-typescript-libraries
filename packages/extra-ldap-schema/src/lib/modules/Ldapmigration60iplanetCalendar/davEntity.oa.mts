/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_davEntity } from "../Ldapmigration60iplanetCalendar/id-oc-davEntity.va.mjs";
import { davAllowedServices } from "./davAllowedServices.oa.mjs";
import { davEventNotification } from "./davEventNotification.oa.mjs";
import { davEventNotificationDestination } from "./davEventNotificationDestination.oa.mjs";
import { davStore } from "./davStore.oa.mjs";
import { davTimezone } from "./davTimezone.oa.mjs";
import { davUniqueId } from "./davUniqueId.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mail, davStore, davAllowedServices, davEventNotification, davEventNotificationDestination, davTimezone, davUniqueId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["davEntity"],
    "&ldapDesc": "Common dav object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_davEntity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
