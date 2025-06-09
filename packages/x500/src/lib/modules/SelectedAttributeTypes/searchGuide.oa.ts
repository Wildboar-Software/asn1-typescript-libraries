/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { guide } from "../SelectedAttributeTypes/guide.oa.js";
import {
    Guide,
    _decode_Guide,
    _encode_Guide,
} from "../SelectedAttributeTypes/Guide.ta.js";
import { id_at_searchGuide } from "../SelectedAttributeTypes/id-at-searchGuide.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { guide } from "../SelectedAttributeTypes/guide.oa.js";
export {
    Guide,
    _decode_Guide,
    _encode_Guide,
} from "../SelectedAttributeTypes/Guide.ta.js";
export { id_at_searchGuide } from "../SelectedAttributeTypes/id-at-searchGuide.va.js";

/* START_OF_SYMBOL_DEFINITION searchGuide */
/**
 * @summary searchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchGuide ATTRIBUTE ::= {
 *   WITH SYNTAX              Guide
 *   LDAP-SYNTAX              guide.&id
 *   LDAP-NAME                {"searchGuide"}
 *   ID                       id-at-searchGuide }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Guide>}
 * @implements {ATTRIBUTE<Guide>}
 */
export const searchGuide: ATTRIBUTE<Guide> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Guide,
    },
    encoderFor: {
        "&Type": _encode_Guide,
    },
    "&ldapSyntax": guide["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["searchGuide"],
    "&id": id_at_searchGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION searchGuide */

/* eslint-enable */
