/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gosaUserDefinedFilter } from "../LdapGosaCoreGosaSamba3/gosaUserDefinedFilter.oa.mjs";
import { id_oc_gosaProperties } from "../LdapGosaCoreGosaSamba3/id-oc-gosaProperties.va.mjs";

/**
 * @summary gosaProperties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaProperties OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { gosaUserDefinedFilter }
 *   LDAP-NAME                 {"gosaProperties"}
 *   LDAP-DESC                 "Store GOsa properties (v2.7)"
 *   ID                        id-oc-gosaProperties }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaProperties: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gosaUserDefinedFilter] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaProperties"],
    "&ldapDesc": "Store GOsa properties (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaProperties /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
