/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.mjs";
// export { id_mr_generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-generalizedTimeOrderingMatch.va.mjs";


/**
 * @summary generalizedTimeOrderingMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * generalizedTimeOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   LDAP-SYNTAX  generalizedTime.&id
 *   LDAP-NAME    {"generalizedTimeOrderingMatch"}
 *   ID           id-mr-generalizedTimeOrderingMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const generalizedTimeOrderingMatch: MATCHING_RULE = undefined;

/* eslint-enable */
