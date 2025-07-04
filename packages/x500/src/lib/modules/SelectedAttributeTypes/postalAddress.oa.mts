/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreListMatch } from "../SelectedAttributeTypes/caseIgnoreListMatch.oa.mjs";
import { caseIgnoreListSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreListSubstringsMatch.oa.mjs";
import { id_at_postalAddress } from "../SelectedAttributeTypes/id-at-postalAddress.va.mjs";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
import {
    PostalAddress,
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta.mjs";
/**
 * @summary postalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postalAddress ATTRIBUTE ::= {
 *   WITH SYNTAX              PostalAddress
 *   EQUALITY MATCHING RULE   caseIgnoreListMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreListSubstringsMatch
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"postalAddress"}
 *   ID                       id-at-postalAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PostalAddress>}
 * @implements {ATTRIBUTE<PostalAddress>}
 */
export const postalAddress: ATTRIBUTE<PostalAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&equality-match": caseIgnoreListMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreListSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["postalAddress"],
    "&id": id_at_postalAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
