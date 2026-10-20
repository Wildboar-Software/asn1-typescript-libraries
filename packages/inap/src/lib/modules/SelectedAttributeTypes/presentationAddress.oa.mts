/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
// export { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { presentationAddressMatch } from "../SelectedAttributeTypes/presentationAddressMatch.oa.mjs";
// export { presentationAddressMatch } from "../SelectedAttributeTypes/presentationAddressMatch.oa.mjs";
import { id_at_presentationAddress } from "../SelectedAttributeTypes/id-at-presentationAddress.va.mjs";
// export { id_at_presentationAddress } from "../SelectedAttributeTypes/id-at-presentationAddress.va.mjs";


/**
 * @summary presentationAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * presentationAddress ATTRIBUTE ::= {
 *   WITH SYNTAX             PresentationAddress
 *   EQUALITY MATCHING RULE  presentationAddressMatch
 *   SINGLE VALUE            TRUE
 *   ID                      id-at-presentationAddress
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PresentationAddress>}
 * @implements {ATTRIBUTE<PresentationAddress>}
 */
export
const presentationAddress: ATTRIBUTE<PresentationAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PresentationAddress,
    },
    encoderFor: {
        "&Type": _encode_PresentationAddress,
    },
    "&equality-match": presentationAddressMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_presentationAddress /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
