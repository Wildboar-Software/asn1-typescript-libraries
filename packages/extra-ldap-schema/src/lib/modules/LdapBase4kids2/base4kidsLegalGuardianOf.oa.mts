/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { id_at_base4kidsLegalGuardianOf } from "../LdapBase4kids2/id-at-base4kidsLegalGuardianOf.va.mjs";


/**
 * @summary base4kidsLegalGuardianOf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsLegalGuardianOf ATTRIBUTE ::= {
 *   SUBTYPE OF                member
 *   LDAP-NAME                 {"base4kidsLegalGuardianOf"}
 *   LDAP-DESC                 "References to DNs for which this person is a legal guardian"
 *   ID                        id-at-base4kidsLegalGuardianOf }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsLegalGuardianOf: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": member /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsLegalGuardianOf" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "References to DNs for which this person is a legal guardian" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsLegalGuardianOf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

