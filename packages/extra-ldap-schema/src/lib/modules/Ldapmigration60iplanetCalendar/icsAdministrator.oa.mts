/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_icsAdministrator } from "../Ldapmigration60iplanetCalendar/id-oc-icsAdministrator.va.mjs";
import { icsAdminRole } from "../Ldapmigration60iplanetCalendar/icsAdminRole.oa.mjs";
import { icsExtended } from "../Ldapmigration60iplanetCalendar/icsExtended.oa.mjs";
import { icsExtendedGroupPrefs } from "../Ldapmigration60iplanetCalendar/icsExtendedGroupPrefs.oa.mjs";


/**
 * @summary icsAdministrator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsAdministrator OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { icsAdminRole
 *                               | icsExtended
 *                               | icsExtendedGroupPrefs }
 *   LDAP-NAME                 {"icsAdministrator"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-icsAdministrator }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsAdministrator: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ icsAdminRole, icsExtended, icsExtendedGroupPrefs, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "icsAdministrator" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsAdministrator /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

