/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_base4kidsPlaceOfOrigin } from "../LdapBase4kids2/id-at-base4kidsPlaceOfOrigin.va.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";

/**
 * @summary base4kidsPlaceOfOrigin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsPlaceOfOrigin ATTRIBUTE ::= {
 *   SUBTYPE OF                localityName
 *   LDAP-NAME                 {"base4kidsPlaceOfOrigin"}
 *   LDAP-DESC                 "The place of origin"
 *   ID                        id-at-base4kidsPlaceOfOrigin }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsPlaceOfOrigin: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": localityName /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsPlaceOfOrigin"],
    "&ldapDesc": "The place of origin" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsPlaceOfOrigin /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
