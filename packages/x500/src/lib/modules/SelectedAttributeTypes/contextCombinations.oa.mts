/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_contextCombinations } from "../SelectedAttributeTypes/id-not-contextCombinations.va.mjs";
import {
    ContextCombination,
    _decode_ContextCombination,
    _encode_ContextCombination,
} from "../ServiceAdministration/ContextCombination.ta.mjs";
/**
 * @summary contextCombinations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextCombinations ATTRIBUTE ::= {
 *   WITH SYNTAX              ContextCombination
 *   ID                       id-not-contextCombinations }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ContextCombination>}
 * @implements {ATTRIBUTE<ContextCombination>}
 */
export const contextCombinations: ATTRIBUTE<ContextCombination> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextCombination,
    },
    encoderFor: {
        "&Type": _encode_ContextCombination,
    },
    "&id": id_not_contextCombinations /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
