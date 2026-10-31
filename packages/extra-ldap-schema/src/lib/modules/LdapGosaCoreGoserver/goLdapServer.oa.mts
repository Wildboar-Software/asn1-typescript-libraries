/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goLdapServer } from "../LdapGosaCoreGoserver/id-oc-goLdapServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goLdapBase } from "./goLdapBase.oa.mjs";
import { goLdapServerStatus } from "./goLdapServerStatus.oa.mjs";

/**
 * @summary goLdapServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goLdapServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goLdapBase
 *                               | description
 *                               | goLdapServerStatus }
 *   LDAP-NAME                 {"goLdapServer"}
 *   LDAP-DESC                 "LDAP server description (v2.7)"
 *   ID                        id-oc-goLdapServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goLdapServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goLdapBase, description, goLdapServerStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goLdapServer"],
    "&ldapDesc": "LDAP server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goLdapServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
