/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_gosaLoginRestriction } from "../LdapGosaCoreGosaSamba3/id-at-gosaLoginRestriction.va.mjs";

/**
 * @summary gosaLoginRestriction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaLoginRestriction ATTRIBUTE ::= {
 *   LDAP-NAME                 {"gosaLoginRestriction"}
 *   LDAP-DESC                 "Multivalue attribute to carry a number of allowed ips/subnets"
 *   ID                        id-at-gosaLoginRestriction }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const gosaLoginRestriction: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&ldapName": ["gosaLoginRestriction"],
    "&ldapDesc": "Multivalue attribute to carry a number of allowed ips/subnets" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_gosaLoginRestriction /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
