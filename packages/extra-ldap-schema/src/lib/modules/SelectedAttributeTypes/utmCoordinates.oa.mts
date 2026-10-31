/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { UtmCoordinates, _decode_UtmCoordinates, _encode_UtmCoordinates } from "../SelectedAttributeTypes/UtmCoordinates.ta.mjs";
// export { utmCoords } from "../SelectedAttributeTypes/utmCoords.oa.mjs";
// export { id_at_utmCoordinates } from "../SelectedAttributeTypes/id-at-utmCoordinates.va.mjs";


/**
 * @summary utmCoordinates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * utmCoordinates  ATTRIBUTE ::= {
 *   WITH SYNTAX              UtmCoordinates
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              utmCoords.&id
 *   LDAP-NAME                {"utmCoordinates"}
 *   ID                       id-at-utmCoordinates }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const utmCoordinates: ATTRIBUTE = undefined;

/* eslint-enable */
