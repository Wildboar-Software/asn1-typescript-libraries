/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_cat_sequenceMatchType } from "../SelectedAttributeTypes/id-cat-sequenceMatchType.va.mjs";
import {
    SequenceMatchType,
    _decode_SequenceMatchType,
    _encode_SequenceMatchType,
} from "../SelectedAttributeTypes/SequenceMatchType.ta.mjs";
/**
 * @summary sequenceMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sequenceMatchType ATTRIBUTE ::= {
 *   WITH SYNTAX   SequenceMatchType
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-sequenceMatchType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SequenceMatchType>}
 * @implements {ATTRIBUTE<SequenceMatchType>}
 */
export const sequenceMatchType: ATTRIBUTE<SequenceMatchType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SequenceMatchType,
    },
    encoderFor: {
        "&Type": _encode_SequenceMatchType,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_sequenceMatchType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
