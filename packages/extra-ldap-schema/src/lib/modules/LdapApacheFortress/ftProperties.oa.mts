/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ftProps } from "../LdapApacheFortress/ftProps.oa.mjs";
import { id_oc_ftProperties } from "../LdapApacheFortress/id-oc-ftProperties.va.mjs";

/**
 * @summary ftProperties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftProperties OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ftProps }
 *   LDAP-NAME                 {"ftProperties"}
 *   LDAP-DESC                 "Fortress Properties AUX Object Class"
 *   ID                        id-oc-ftProperties }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftProperties: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ftProps] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ftProperties"],
    "&ldapDesc": "Fortress Properties AUX Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftProperties /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
