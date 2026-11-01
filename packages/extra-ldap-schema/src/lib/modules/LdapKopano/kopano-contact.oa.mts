/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_kopano_contact } from "../LdapKopano/id-oc-kopano-contact.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { kopanoSendAsPrivilege } from "../LdapKopano/kopanoSendAsPrivilege.oa.mjs";
import { kopanoHidden } from "../LdapKopano/kopanoHidden.oa.mjs";
import { kopanoAliases } from "../LdapKopano/kopanoAliases.oa.mjs";
import { kopanoAccount } from "../LdapKopano/kopanoAccount.oa.mjs";


/**
 * @summary kopano_contact
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-contact OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | uidNumber }
 *   MAY CONTAIN               { kopanoSendAsPrivilege
 *                               | kopanoHidden
 *                               | kopanoAliases
 *                               | kopanoAccount }
 *   LDAP-NAME                 {"kopano-contact"}
 *   LDAP-DESC                 "KOPANO: a contact of Kopano"
 *   ID                        id-oc-kopano-contact }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_contact: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, uidNumber, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ kopanoSendAsPrivilege, kopanoHidden, kopanoAliases, kopanoAccount, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kopano-contact" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "KOPANO: a contact of Kopano" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_contact /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

