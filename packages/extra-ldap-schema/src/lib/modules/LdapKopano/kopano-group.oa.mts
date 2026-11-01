/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_kopano_group } from "../LdapKopano/id-oc-kopano-group.va.mjs";
import { kopanoAccount } from "../LdapKopano/kopanoAccount.oa.mjs";
import { kopanoHidden } from "../LdapKopano/kopanoHidden.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { kopanoAliases } from "../LdapKopano/kopanoAliases.oa.mjs";
import { kopanoSecurityGroup } from "../LdapKopano/kopanoSecurityGroup.oa.mjs";
import { kopanoSendAsPrivilege } from "../LdapKopano/kopanoSendAsPrivilege.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
// export { id_oc_kopano_group } from "../LdapKopano/id-oc-kopano-group.va.mjs";


/**
 * @summary kopano_group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { kopanoAccount
 *                               | kopanoHidden
 *                               | mail
 *                               | kopanoAliases
 *                               | kopanoSecurityGroup
 *                               | kopanoSendAsPrivilege
 *                               | gidNumber }
 *   LDAP-NAME                 {"kopano-group"}
 *   LDAP-DESC                 "KOPANO: a group of Kopano"
 *   ID                        id-oc-kopano-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_group: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ kopanoAccount, kopanoHidden, mail, kopanoAliases, kopanoSecurityGroup, kopanoSendAsPrivilege, gidNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kopano-group" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "KOPANO: a group of Kopano" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_group /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
