/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { duaConfSchemaOID } from "../DUAConf/duaConfSchemaOID.va.mjs";


/**
 * @summary followReferrals
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * followReferrals ATTRIBUTE ::= {
 *     WITH SYNTAX                 BOOLEAN
 *     EQUALITY MATCHING RULE         booleanMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 boolean.&id
 *     LDAP-NAME                     {"followReferrals"}
 *     LDAP-DESC "Tells DUA if it should follow referrals returned by a DSA search result"
 *     ID { duaConfSchemaOID 1 5 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const followReferrals: ATTRIBUTE = undefined;

/* eslint-enable */
