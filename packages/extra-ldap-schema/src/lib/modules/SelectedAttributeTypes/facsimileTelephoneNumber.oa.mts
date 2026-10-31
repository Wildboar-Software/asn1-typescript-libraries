/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { FacsimileTelephoneNumber, _decode_FacsimileTelephoneNumber, _encode_FacsimileTelephoneNumber } from "../SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
// export { facsimileNumberMatch } from "../SelectedAttributeTypes/facsimileNumberMatch.oa.mjs";
// export { facsimileNumberSubstringsMatch } from "../SelectedAttributeTypes/facsimileNumberSubstringsMatch.oa.mjs";
// export { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa.mjs";
// export { id_at_facsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-facsimileTelephoneNumber.va.mjs";


/**
 * @summary facsimileTelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * facsimileTelephoneNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              FacsimileTelephoneNumber
 *   EQUALITY MATCHING RULE   facsimileNumberMatch
 *   SUBSTRINGS MATCHING RULE facsimileNumberSubstringsMatch
 *   LDAP-SYNTAX              facsimileTelephoneNr.&id
 *   LDAP-NAME                {"facsimileTelephoneNumber"}
 *   ID                       id-at-facsimileTelephoneNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const facsimileTelephoneNumber: ATTRIBUTE = undefined;

/* eslint-enable */
