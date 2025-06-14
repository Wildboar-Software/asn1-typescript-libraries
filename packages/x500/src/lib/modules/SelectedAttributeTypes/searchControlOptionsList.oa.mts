/* eslint-disable */
import {
    SearchControlOptions,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_searchControlOptionsList } from "../SelectedAttributeTypes/id-not-searchControlOptionsList.va.mjs";
/* START_OF_SYMBOL_DEFINITION searchControlOptionsList */
/**
 * @summary searchControlOptionsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchControlOptionsList ATTRIBUTE ::= {
 *   WITH SYNTAX              SearchControlOptions
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-searchControlOptionsList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SearchControlOptions>}
 * @implements {ATTRIBUTE<SearchControlOptions>}
 */
export const searchControlOptionsList: ATTRIBUTE<SearchControlOptions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SearchControlOptions,
    },
    encoderFor: {
        "&Type": _encode_SearchControlOptions,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_not_searchControlOptionsList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION searchControlOptionsList */

/* eslint-enable */
