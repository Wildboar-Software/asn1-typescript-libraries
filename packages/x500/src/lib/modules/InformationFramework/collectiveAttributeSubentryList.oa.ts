/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.js";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.js";
import { id_oa_collectiveAttributeSubentryList } from "../InformationFramework/id-oa-collectiveAttributeSubentryList.va.js";
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
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.js";
export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.js";
export { id_oa_collectiveAttributeSubentryList } from "../InformationFramework/id-oa-collectiveAttributeSubentryList.va.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION collectiveAttributeSubentryList */
/**
 * @summary collectiveAttributeSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveAttributeSubentryList ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-collectiveAttributeSubentryList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export const collectiveAttributeSubentryList: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_collectiveAttributeSubentryList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveAttributeSubentryList */

/* eslint-enable */
