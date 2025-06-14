/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    ContextAssertion,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta.mjs";
import { id_cat_selectedContexts } from "../SelectedAttributeTypes/id-cat-selectedContexts.va.mjs";
/* START_OF_SYMBOL_DEFINITION selectedContexts */
/**
 * @summary selectedContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * selectedContexts ATTRIBUTE ::= {
 *   WITH SYNTAX  ContextAssertion
 *   ID           id-cat-selectedContexts }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ContextAssertion>}
 * @implements {ATTRIBUTE<ContextAssertion>}
 */
export const selectedContexts: ATTRIBUTE<ContextAssertion> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextAssertion,
    },
    encoderFor: {
        "&Type": _encode_ContextAssertion,
    },
    "&id": id_cat_selectedContexts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION selectedContexts */

/* eslint-enable */
