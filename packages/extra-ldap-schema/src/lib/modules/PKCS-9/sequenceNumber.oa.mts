/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { SequenceNumber, _decode_SequenceNumber, _encode_SequenceNumber } from "../PKCS-9/SequenceNumber.ta.mjs";
// export { SequenceNumber, _decode_SequenceNumber, _encode_SequenceNumber } from "../PKCS-9/SequenceNumber.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { pkcs_9_at_sequenceNumber } from "../PKCS-9/pkcs-9-at-sequenceNumber.va.mjs";
// export { pkcs_9_at_sequenceNumber } from "../PKCS-9/pkcs-9-at-sequenceNumber.va.mjs";


/**
 * @summary sequenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sequenceNumber ATTRIBUTE ::= {
 *         WITH SYNTAX SequenceNumber
 *         EQUALITY MATCHING RULE integerMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-sequenceNumber
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<SequenceNumber>}
 * @implements {ATTRIBUTE<SequenceNumber>}
 */
export
const sequenceNumber: ATTRIBUTE<SequenceNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SequenceNumber,
    },
    encoderFor: {
        "&Type": _encode_SequenceNumber,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_sequenceNumber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
