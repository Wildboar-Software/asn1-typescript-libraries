/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    HierarchyLevel,
    _decode_HierarchyLevel,
    _encode_HierarchyLevel,
} from "../InformationFramework/HierarchyLevel.ta.mjs";
import { id_oa_hierarchyLevel } from "../InformationFramework/id-oa-hierarchyLevel.va.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.mjs";
/**
 * @summary hierarchyLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchyLevel ATTRIBUTE ::= {
 *   WITH SYNTAX             HierarchyLevel
 *   EQUALITY MATCHING RULE  integerMatch
 *   ORDERING MATCHING RULE  integerOrderingMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyLevel }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<HierarchyLevel>}
 * @implements {ATTRIBUTE<HierarchyLevel>}
 */
export const hierarchyLevel: ATTRIBUTE<HierarchyLevel> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchyLevel,
    },
    encoderFor: {
        "&Type": _encode_HierarchyLevel,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hierarchyLevel /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
