/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goGlpiServer } from "../LdapGosaCoreGoserver/id-oc-goGlpiServer.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goGlpiPassword } from "../LdapGosaCoreGoserver/goGlpiPassword.oa.mjs";
import { goGlpiServerStatus } from "../LdapGosaCoreGoserver/goGlpiServerStatus.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { goGlpiAdmin } from "../LdapGosaCoreGoserver/goGlpiAdmin.oa.mjs";
import { goGlpiDatabase } from "../LdapGosaCoreGoserver/goGlpiDatabase.oa.mjs";
/**
 * @summary goGlpiServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goGlpiServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goGlpiAdmin
 *                               | goGlpiDatabase }
 *   MAY CONTAIN               { description
 *                               | goGlpiPassword
 *                               | goGlpiServerStatus }
 *   LDAP-NAME                 {"goGlpiServer"}
 *   LDAP-DESC                 "Glpi server definition (v2.7)"
 *   ID                        id-oc-goGlpiServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goGlpiServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, goGlpiAdmin, goGlpiDatabase, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goGlpiPassword, goGlpiServerStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goGlpiServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Glpi server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goGlpiServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
