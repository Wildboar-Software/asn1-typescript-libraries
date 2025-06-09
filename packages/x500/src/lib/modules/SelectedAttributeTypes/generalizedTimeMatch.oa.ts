/* eslint-disable */
import { GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.js";
import { id_mr_generalizedTimeMatch } from "../SelectedAttributeTypes/id-mr-generalizedTimeMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.js";
export { id_mr_generalizedTimeMatch } from "../SelectedAttributeTypes/id-mr-generalizedTimeMatch.va.js";

/* START_OF_SYMBOL_DEFINITION generalizedTimeMatch */
/**
 * @summary generalizedTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalizedTimeMatch MATCHING-RULE ::= {
 *   SYNTAX       GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   LDAP-SYNTAX  generalizedTime.&id
 *   LDAP-NAME    {"generalizedTimeMatch"}
 *   ID           id-mr-generalizedTimeMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<GeneralizedTime>}
 * @implements {MATCHING_RULE<GeneralizedTime>}
 */
export const generalizedTimeMatch: MATCHING_RULE<GeneralizedTime> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeGeneralizedTime,
    },
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["generalizedTimeMatch"],
    "&id": id_mr_generalizedTimeMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION generalizedTimeMatch */

/* eslint-enable */
