/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_base4kidsInitiator } from "../LdapBase4kids2/id-at-base4kidsInitiator.va.mjs";
import { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";

/**
 * @summary base4kidsInitiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsInitiator ATTRIBUTE ::= {
 *   SUBTYPE OF                distinguishedName
 *   LDAP-NAME                 {"base4kidsInitiator"}
 *   LDAP-DESC                 "Reference to a DN of a person which created a specific resource"
 *   ID                        id-at-base4kidsInitiator }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsInitiator: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsInitiator"],
    "&ldapDesc": "Reference to a DN of a person which created a specific resource" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsInitiator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
