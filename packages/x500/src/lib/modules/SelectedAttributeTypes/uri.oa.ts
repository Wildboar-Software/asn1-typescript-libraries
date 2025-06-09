/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.js";
import { id_at_uri } from "../SelectedAttributeTypes/id-at-uri.va.js";
import {
    URI,
    _decode_URI,
    _encode_URI,
} from "../SelectedAttributeTypes/URI.ta.js";
import { uriMatch } from "../SelectedAttributeTypes/uriMatch.oa.js";
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
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.js";
export { id_at_uri } from "../SelectedAttributeTypes/id-at-uri.va.js";
export {
    URI,
    _decode_URI,
    _encode_URI,
} from "../SelectedAttributeTypes/URI.ta.js";
export { uriMatch } from "../SelectedAttributeTypes/uriMatch.oa.js";

/* START_OF_SYMBOL_DEFINITION uri */
/**
 * @summary uri
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uri ATTRIBUTE ::= {
 *   WITH SYNTAX              URI
 *   EQUALITY MATCHING RULE   uriMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"uri"}
 *   ID                       id-at-uri }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<URI>}
 * @implements {ATTRIBUTE<URI>}
 */
export const uri: ATTRIBUTE<URI> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_URI,
    },
    encoderFor: {
        "&Type": _encode_URI,
    },
    "&equality-match": uriMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uri"],
    "&id": id_at_uri /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uri */

/* eslint-enable */
