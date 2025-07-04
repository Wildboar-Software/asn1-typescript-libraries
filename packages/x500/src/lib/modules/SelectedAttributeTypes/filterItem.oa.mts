/* eslint-disable */
import {
    FilterItem,
    _decode_FilterItem,
    _encode_FilterItem,
} from "../DirectoryAbstractService/FilterItem.ta.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_filterItem } from "../SelectedAttributeTypes/id-not-filterItem.va.mjs";
/**
 * @summary filterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * filterItem ATTRIBUTE ::= {
 *   WITH SYNTAX              FilterItem
 *   ID                       id-not-filterItem }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<FilterItem>}
 * @implements {ATTRIBUTE<FilterItem>}
 */
export const filterItem: ATTRIBUTE<FilterItem> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FilterItem,
    },
    encoderFor: {
        "&Type": _encode_FilterItem,
    },
    "&id": id_not_filterItem /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
