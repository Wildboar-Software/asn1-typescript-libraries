/* eslint-disable */
import {
    HierarchySelections,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_hierarchySelectList } from "../SelectedAttributeTypes/id-not-hierarchySelectList.va.mjs";
/**
 * @summary hierarchySelectList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchySelectList ATTRIBUTE ::= {
 *   WITH SYNTAX              HierarchySelections
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-hierarchySelectList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<HierarchySelections>}
 * @implements {ATTRIBUTE<HierarchySelections>}
 */
export const hierarchySelectList: ATTRIBUTE<HierarchySelections> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchySelections,
    },
    encoderFor: {
        "&Type": _encode_HierarchySelections,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_not_hierarchySelectList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
