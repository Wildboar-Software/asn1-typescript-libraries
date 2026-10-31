/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rbacContainer } from "../LdapApacheFortressRbac/id-oc-rbacContainer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary rbacContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rbacContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { commonName }
 *   LDAP-NAME                 {"rbacContainer"}
 *   LDAP-DESC                 "RBAC Container Object Class"
 *   ID                        id-oc-rbacContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rbacContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rbacContainer"],
    "&ldapDesc": "RBAC Container Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rbacContainer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
