/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_kopano_group } from "../LdapKopano/id-oc-kopano-group.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { kopanoAccount } from "./kopanoAccount.oa.mjs";
import { kopanoAliases } from "./kopanoAliases.oa.mjs";
import { kopanoHidden } from "./kopanoHidden.oa.mjs";
import { kopanoSecurityGroup } from "./kopanoSecurityGroup.oa.mjs";
import { kopanoSendAsPrivilege } from "./kopanoSendAsPrivilege.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [kopanoAccount, kopanoHidden, mail, kopanoAliases, kopanoSecurityGroup, kopanoSendAsPrivilege, gidNumber] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kopano-group"],
    "&ldapDesc": "KOPANO: a group of Kopano" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_group /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
