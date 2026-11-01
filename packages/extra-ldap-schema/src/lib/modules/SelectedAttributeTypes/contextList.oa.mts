/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { ContextAssertion, _decode_ContextAssertion, _encode_ContextAssertion } from "../InformationFramework/ContextAssertion.ta.mjs";
// export { ContextAssertion, _decode_ContextAssertion, _encode_ContextAssertion } from "../InformationFramework/ContextAssertion.ta.mjs";
import { id_not_contextList } from "../SelectedAttributeTypes/id-not-contextList.va.mjs";
// export { id_not_contextList } from "../SelectedAttributeTypes/id-not-contextList.va.mjs";


/**
 * @summary contextList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contextList ATTRIBUTE ::= {
 *   WITH SYNTAX              ContextAssertion
 *   ID                       id-not-contextList }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<ContextAssertion>}
 * @implements {ATTRIBUTE<ContextAssertion>}
 */
export
const contextList: ATTRIBUTE<ContextAssertion> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextAssertion,
    },
    encoderFor: {
        "&Type": _encode_ContextAssertion,
    },
    "&id": id_not_contextList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
