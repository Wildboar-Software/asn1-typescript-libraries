/* eslint-disable */
import { type MAPPING_BASED_MATCHING } from "../InformationFramework/MAPPING-BASED-MATCHING.oca.mjs";
import { type ZonalSelect } from "../SelectedAttributeTypes/ZonalSelect.ta.mjs";
import { type ZonalResult } from "../SelectedAttributeTypes/ZonalResult.ta.mjs";

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
