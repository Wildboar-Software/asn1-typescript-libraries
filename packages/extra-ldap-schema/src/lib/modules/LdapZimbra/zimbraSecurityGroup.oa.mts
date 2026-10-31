/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraSecurityGroup } from "../LdapZimbra/id-oc-zimbraSecurityGroup.va.mjs";
import { zimbraGroupId } from "../LdapZimbra/zimbraGroupId.oa.mjs";

/**
 * @summary zimbraSecurityGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraSecurityGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { zimbraGroupId }
 *   LDAP-NAME                 {"zimbraSecurityGroup"}
 *   LDAP-DESC                 "Security Group"
 *   ID                        id-oc-zimbraSecurityGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraSecurityGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraGroupId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraSecurityGroup"],
    "&ldapDesc": "Security Group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraSecurityGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
