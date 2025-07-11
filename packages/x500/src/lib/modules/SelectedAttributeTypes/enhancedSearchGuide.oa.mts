/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { enhancedGuide } from "../SelectedAttributeTypes/enhancedGuide.oa.mjs";
import {
    EnhancedGuide,
    _decode_EnhancedGuide,
    _encode_EnhancedGuide,
} from "../SelectedAttributeTypes/EnhancedGuide.ta.mjs";
import { id_at_enhancedSearchGuide } from "../SelectedAttributeTypes/id-at-enhancedSearchGuide.va.mjs";
/**
 * @summary enhancedSearchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedSearchGuide ATTRIBUTE ::= {
 *   WITH SYNTAX              EnhancedGuide
 *   LDAP-SYNTAX              enhancedGuide.&id
 *   LDAP-NAME                {"enhancedSearchGuide"}
 *   ID                       id-at-enhancedSearchGuide }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<EnhancedGuide>}
 * @implements {ATTRIBUTE<EnhancedGuide>}
 */
export const enhancedSearchGuide: ATTRIBUTE<EnhancedGuide> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EnhancedGuide,
    },
    encoderFor: {
        "&Type": _encode_EnhancedGuide,
    },
    "&ldapSyntax": enhancedGuide["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["enhancedSearchGuide"],
    "&id": id_at_enhancedSearchGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
