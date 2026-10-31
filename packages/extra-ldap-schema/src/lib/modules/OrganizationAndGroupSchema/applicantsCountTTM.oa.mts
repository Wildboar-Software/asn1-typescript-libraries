/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_applicantsCountTTM } from "../OrganizationAndGroupSchema/id-at-applicantsCountTTM.va.mjs";


/**
 * @summary applicantsCountTTM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applicantsCountTTM ATTRIBUTE ::= {
 *     WITH SYNTAX                    INTEGER (0..MAX)
 *     EQUALITY MATCHING RULE        integerMatch
 *     ORDERING MATCHING RULE        integerOrderingMatch
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"applicantsCountTTM"}
 *     LDAP-DESC                    "Number of Applicants over the Last Twelve Months"
 *     ID                            id-at-applicantsCountTTM
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const applicantsCountTTM: ATTRIBUTE = undefined;

/* eslint-enable */
