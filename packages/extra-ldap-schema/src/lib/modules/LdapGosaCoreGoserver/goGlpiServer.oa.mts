/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goGlpiServer } from "../LdapGosaCoreGoserver/id-oc-goGlpiServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goGlpiAdmin } from "./goGlpiAdmin.oa.mjs";
import { goGlpiDatabase } from "./goGlpiDatabase.oa.mjs";
import { goGlpiPassword } from "./goGlpiPassword.oa.mjs";
import { goGlpiServerStatus } from "./goGlpiServerStatus.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, goGlpiAdmin, goGlpiDatabase] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, goGlpiPassword, goGlpiServerStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goGlpiServer"],
    "&ldapDesc": "Glpi server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goGlpiServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
