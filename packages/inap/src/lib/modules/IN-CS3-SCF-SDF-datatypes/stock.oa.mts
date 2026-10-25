/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type NPartsMessage, _decode_NPartsMessage, _encode_NPartsMessage } from "../IN-CS3-SCF-SDF-datatypes/NPartsMessage.ta.mjs";
// export { NPartsMessage, _decode_NPartsMessage, _encode_NPartsMessage } from "../IN-CS3-SCF-SDF-datatypes/NPartsMessage.ta.mjs";
import { id_at_challengeResponse } from "../IN-CS3-object-identifiers/id-at-challengeResponse.va.mjs";
// export { id_at_challengeResponse } from "../IN-CS3-object-identifiers/id-at-challengeResponse.va.mjs";


/**
 * @summary stock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * stock ATTRIBUTE ::= {
 *   WITH SYNTAX  NPartsMessage
 *   ID           id-at-challengeResponse
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NPartsMessage>}
 * @implements {ATTRIBUTE<NPartsMessage>}
 */
export
const stock: ATTRIBUTE<NPartsMessage> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_NPartsMessage,
    },
    encoderFor: {
        "&Type": _encode_NPartsMessage,
    },
    "&id": id_at_challengeResponse /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
