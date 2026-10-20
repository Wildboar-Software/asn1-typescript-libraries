/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { _decode_identifierList_Type, _encode_identifierList_Type, identifierList_Type } from "../IN-SCF-SDF-datatypes/identifierList-Type.ta.mjs";
// export { identifierList_Type, _decode_identifierList_Type, _encode_identifierList_Type } from "../IN-SCF-SDF-datatypes/identifierList-Type.ta.mjs";
import { id_at_identifierList } from "../IN-object-identifiers/id-at-identifierList.va.mjs";
// export { id_at_identifierList } from "../IN-object-identifiers/id-at-identifierList.va.mjs";


/**
 * @summary identifierList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * identifierList ATTRIBUTE ::= {
 *   WITH SYNTAX
 *     SEQUENCE {conformMethodIdentifier  [1]  MethodIdentifier, -- e.g. time window check
 *               fillMethodIdentifier     [2]  MethodIdentifier, -- e.g. generate a random of required size
 *               oneToOneAlgorithm        [3]  AlgorithmIdentifier,
 *               -- e.g. A11 and A12, output RES from RS,RAND
 *               oneToTwoAlgorithm        [4]  AlgorithmIdentifier}
 *   -- e.g DECT algorithm output RES,SDK from RS,RAND
 *   SINGLE VALUE  TRUE
 *   ID            id-at-identifierList
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<identifierList_Type>}
 * @implements {ATTRIBUTE<identifierList_Type>}
 */
export
const identifierList: ATTRIBUTE<identifierList_Type> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_identifierList_Type,
    },
    encoderFor: {
        "&Type": _encode_identifierList_Type,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_identifierList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
