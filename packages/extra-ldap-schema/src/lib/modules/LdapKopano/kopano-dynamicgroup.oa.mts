/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_kopano_dynamicgroup } from "../LdapKopano/id-oc-kopano-dynamicgroup.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { kopanoAccount } from "./kopanoAccount.oa.mjs";
import { kopanoAliases } from "./kopanoAliases.oa.mjs";
import { kopanoBase } from "./kopanoBase.oa.mjs";
import { kopanoFilter } from "./kopanoFilter.oa.mjs";
import { kopanoHidden } from "./kopanoHidden.oa.mjs";

/**
 * @summary kopano_dynamicgroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-dynamicgroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { kopanoAccount
 *                               | kopanoHidden
 *                               | mail
 *                               | kopanoAliases
 *                               | kopanoFilter
 *                               | kopanoBase }
 *   LDAP-NAME                 {"kopano-dynamicgroup"}
 *   LDAP-DESC                 "KOPANO: a Kopano dynamic group"
 *   ID                        id-oc-kopano-dynamicgroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_dynamicgroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [kopanoAccount, kopanoHidden, mail, kopanoAliases, kopanoFilter, kopanoBase] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kopano-dynamicgroup"],
    "&ldapDesc": "KOPANO: a Kopano dynamic group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_dynamicgroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
