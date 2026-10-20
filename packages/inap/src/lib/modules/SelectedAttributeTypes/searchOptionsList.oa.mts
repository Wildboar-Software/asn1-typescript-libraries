/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { _decode_SearchControlOptions, _encode_SearchControlOptions, SearchControlOptions } from "../DirectoryAbstractService/SearchControlOptions.ta.mjs";
// export { SearchControlOptions, SearchControlOptions_searchAliases /* IMPORTED_LONG_NAMED_BIT */, searchAliases /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_matchedValuesOnly /* IMPORTED_LONG_NAMED_BIT */, matchedValuesOnly /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_checkOverspecified /* IMPORTED_LONG_NAMED_BIT */, checkOverspecified /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_performExactly /* IMPORTED_LONG_NAMED_BIT */, performExactly /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_includeAllAreas /* IMPORTED_LONG_NAMED_BIT */, includeAllAreas /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_noSystemRelaxation /* IMPORTED_LONG_NAMED_BIT */, noSystemRelaxation /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_dnAttribute /* IMPORTED_LONG_NAMED_BIT */, dnAttribute /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_matchOnResidualName /* IMPORTED_LONG_NAMED_BIT */, matchOnResidualName /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_entryCount /* IMPORTED_LONG_NAMED_BIT */, entryCount /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_useSubset /* IMPORTED_LONG_NAMED_BIT */, useSubset /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_separateFamilyMembers /* IMPORTED_LONG_NAMED_BIT */, separateFamilyMembers /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_searchFamily /* IMPORTED_LONG_NAMED_BIT */, searchFamily /* IMPORTED_SHORT_NAMED_BIT */, _decode_SearchControlOptions, _encode_SearchControlOptions } from "../DirectoryAbstractService/SearchControlOptions.ta.mjs";
import { id_not_searchOptionsList } from "../SelectedAttributeTypes/id-not-searchOptionsList.va.mjs";
// export { id_not_searchOptionsList } from "../SelectedAttributeTypes/id-not-searchOptionsList.va.mjs";


/**
 * @summary searchOptionsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * searchOptionsList ATTRIBUTE ::= {
 *   WITH SYNTAX   SearchControlOptions
 *   SINGLE VALUE  TRUE
 *   ID            id-not-searchOptionsList
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<SearchControlOptions>}
 * @implements {ATTRIBUTE<SearchControlOptions>}
 */
export
const searchOptionsList: ATTRIBUTE<SearchControlOptions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SearchControlOptions,
    },
    encoderFor: {
        "&Type": _encode_SearchControlOptions,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_not_searchOptionsList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
