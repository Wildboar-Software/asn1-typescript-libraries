/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsIsBlocked } from "../LdapBase4kids2/base4kidsIsBlocked.oa.mjs";
import { id_at_base4kidsIsDisabled } from "../LdapBase4kids2/id-at-base4kidsIsDisabled.va.mjs";


/**
 * @summary base4kidsIsDisabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsIsDisabled ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsIsBlocked
 *   LDAP-NAME                 {"base4kidsIsDisabled"}
 *   LDAP-DESC                 "Determines whether a base4kids object is disabled but still active"
 *   ID                        id-at-base4kidsIsDisabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsIsDisabled: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": base4kidsIsBlocked /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsIsDisabled" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Determines whether a base4kids object is disabled but still active" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsIsDisabled /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

