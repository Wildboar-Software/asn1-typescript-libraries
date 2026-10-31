/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { gLUE2PolicyUserDomainForeignKey } from "../LdapGlue512Policy/gLUE2PolicyUserDomainForeignKey.oa.mjs";
import { id_oc_gLUE2Policy } from "../LdapGlue512Policy/id-oc-gLUE2Policy.va.mjs";
import { gLUE2PolicyID } from "./gLUE2PolicyID.oa.mjs";
import { gLUE2PolicyRule } from "./gLUE2PolicyRule.oa.mjs";
import { gLUE2PolicyScheme } from "./gLUE2PolicyScheme.oa.mjs";

/**
 * @summary gLUE2Policy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Policy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2PolicyID
 *                               | gLUE2PolicyScheme
 *                               | gLUE2PolicyRule }
 *   MAY CONTAIN               { gLUE2PolicyUserDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2Policy"}
 *   LDAP-DESC                 "A policy"
 *   ID                        id-oc-gLUE2Policy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Policy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2PolicyID, gLUE2PolicyScheme, gLUE2PolicyRule] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2PolicyUserDomainForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2Policy"],
    "&ldapDesc": "A policy" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Policy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
