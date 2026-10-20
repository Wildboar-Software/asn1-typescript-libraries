/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { MRMapping, _decode_MRMapping, _encode_MRMapping } from "../InformationFramework/MRMapping.ta.mjs";
// export { MRMapping, _decode_MRMapping, _encode_MRMapping } from "../InformationFramework/MRMapping.ta.mjs";
import { id_not_proposedRelaxation } from "../SelectedAttributeTypes/id-not-proposedRelaxation.va.mjs";
// export { id_not_proposedRelaxation } from "../SelectedAttributeTypes/id-not-proposedRelaxation.va.mjs";


/**
 * @summary proposedRelaxation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * proposedRelaxation ATTRIBUTE ::= {
 *   WITH SYNTAX  SEQUENCE OF MRMapping
 *   ID           id-not-proposedRelaxation
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<MRMapping[]>}
 * @implements {ATTRIBUTE<MRMapping[]>}
 */
export
const proposedRelaxation: ATTRIBUTE<MRMapping[]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeSequenceOf<MRMapping>(() => _decode_MRMapping),
    },
    encoderFor: {
        "&Type": $._encodeSequenceOf<MRMapping>(() => _encode_MRMapping, $.BER),
    },
    "&id": id_not_proposedRelaxation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
