/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFaxServer } from "../LdapGosaCoreGoserver/id-oc-goFaxServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { goFaxAdmin } from "../LdapGosaCoreGoserver/goFaxAdmin.oa.mjs";
import { goFaxPassword } from "../LdapGosaCoreGoserver/goFaxPassword.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goFaxServerStatus } from "../LdapGosaCoreGoserver/goFaxServerStatus.oa.mjs";


/**
 * @summary goFaxServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFaxServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goFaxAdmin
 *                               | goFaxPassword }
 *   MAY CONTAIN               { description
 *                               | goFaxServerStatus }
 *   LDAP-NAME                 {"goFaxServer"}
 *   LDAP-DESC                 "Fax server description (v2.7)"
 *   ID                        id-oc-goFaxServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFaxServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, goFaxAdmin, goFaxPassword, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goFaxServerStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goFaxServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fax server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFaxServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

