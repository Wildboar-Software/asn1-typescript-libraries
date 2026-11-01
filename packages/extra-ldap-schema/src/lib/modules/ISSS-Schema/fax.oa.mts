/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
import { id_euro_at_fax } from "../ISSS-Schema/id-euro-at-fax.va.mjs";


/**
 * @summary fax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fax ATTRIBUTE ::= {
 *     SUBTYPE OF                  telephoneNumber  -- from X.520
 *     LDAP-SYNTAX                 telephoneNr.&id
 *     LDAP-NAME                   {"telExten"}
 *     ID                          id-euro-at-fax }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const fax: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": telephoneNumber /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": telephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "telExten" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_at_fax /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

