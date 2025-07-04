/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_attributeCombinations } from "../SelectedAttributeTypes/id-not-attributeCombinations.va.mjs";
import {
    AttributeCombination,
    _decode_AttributeCombination,
    _encode_AttributeCombination,
} from "../ServiceAdministration/AttributeCombination.ta.mjs";
/**
 * @summary attributeCombinations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCombinations ATTRIBUTE ::= {
 *   WITH SYNTAX              AttributeCombination
 *   ID                       id-not-attributeCombinations }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AttributeCombination>}
 * @implements {ATTRIBUTE<AttributeCombination>}
 */
export const attributeCombinations: ATTRIBUTE<AttributeCombination> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCombination,
    },
    encoderFor: {
        "&Type": _encode_AttributeCombination,
    },
    "&id": id_not_attributeCombinations /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
