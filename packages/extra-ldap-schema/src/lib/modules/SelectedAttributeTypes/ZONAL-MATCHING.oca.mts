/* eslint-disable */
import { MAPPING_BASED_MATCHING } from "../InformationFramework/MAPPING-BASED-MATCHING.oca.mjs";
// export { MAPPING_BASED_MATCHING } from "../InformationFramework/MAPPING-BASED-MATCHING.oca.mjs";
import { ZonalSelect } from "../SelectedAttributeTypes/ZonalSelect.ta.mjs";
// export { ZonalSelect, _decode_ZonalSelect, _encode_ZonalSelect } from "../SelectedAttributeTypes/ZonalSelect.ta.mjs";
import { ZonalResult } from "../SelectedAttributeTypes/ZonalResult.ta.mjs";
// export { ZonalResult, _enum_for_ZonalResult, ZonalResult_cannot_select_mapping /* IMPORTED_LONG_ENUMERATION_ITEM */, cannot_select_mapping /* IMPORTED_SHORT_ENUMERATION_ITEM */, ZonalResult_zero_mappings /* IMPORTED_LONG_ENUMERATION_ITEM */, zero_mappings /* IMPORTED_SHORT_ENUMERATION_ITEM */, ZonalResult_multiple_mappings /* IMPORTED_LONG_ENUMERATION_ITEM */, multiple_mappings /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ZonalResult, _encode_ZonalResult } from "../SelectedAttributeTypes/ZonalResult.ta.mjs";
// export { zonalMatch } from "../SelectedAttributeTypes/zonalMatch.oa.mjs";


/**
 * @summary ZONAL_MATCHING
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ZONAL-MATCHING ::= MAPPING-BASED-MATCHING{ZonalSelect, TRUE, ZonalResult, zonalMatch.&id}
 * ```
 * 
 * @interface
 */
export
type ZONAL_MATCHING = MAPPING_BASED_MATCHING<ZonalSelect, ZonalResult>;

/* eslint-enable */
