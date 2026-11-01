/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { gLUE2ManagerProductVersion } from "../LdapGlue509Manager/gLUE2ManagerProductVersion.oa.mjs";
import { id_oc_gLUE2Manager } from "../LdapGlue509Manager/id-oc-gLUE2Manager.va.mjs";
import { gLUE2ManagerID } from "../LdapGlue509Manager/gLUE2ManagerID.oa.mjs";
import { gLUE2ManagerProductName } from "../LdapGlue509Manager/gLUE2ManagerProductName.oa.mjs";
import { gLUE2ManagerServiceForeignKey } from "../LdapGlue509Manager/gLUE2ManagerServiceForeignKey.oa.mjs";


/**
 * @summary gLUE2Manager
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Manager OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ManagerID
 *                               | gLUE2ManagerProductName
 *                               | gLUE2ManagerServiceForeignKey }
 *   MAY CONTAIN               { gLUE2ManagerProductVersion }
 *   LDAP-NAME                 {"GLUE2Manager"}
 *   LDAP-DESC                 "A manager"
 *   ID                        id-oc-gLUE2Manager }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Manager: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ManagerID, gLUE2ManagerProductName, gLUE2ManagerServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ManagerProductVersion, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Manager" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A manager" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Manager /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

