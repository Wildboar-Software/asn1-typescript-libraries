/* eslint-disable */
import { CONTEXT } from "../InformationFramework/CONTEXT.oca.js";
import { id_avc_locale } from "../SelectedAttributeTypes/id-avc-locale.va.js";
import {
    LocaleContextSyntax,
    _decode_LocaleContextSyntax,
    _encode_LocaleContextSyntax,
} from "../SelectedAttributeTypes/LocaleContextSyntax.ta.js";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca.js";
export { id_avc_locale } from "../SelectedAttributeTypes/id-avc-locale.va.js";
export {
    LocaleContextSyntax,
    _decode_LocaleContextSyntax,
    _encode_LocaleContextSyntax,
} from "../SelectedAttributeTypes/LocaleContextSyntax.ta.js";

/* START_OF_SYMBOL_DEFINITION localeContext */
/**
 * @summary localeContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * localeContext CONTEXT ::= {
 *   WITH SYNTAX  LocaleContextSyntax
 *   ID           id-avc-locale }
 * ```
 *
 * @constant
 * @type {CONTEXT<LocaleContextSyntax>}
 * @implements {CONTEXT<LocaleContextSyntax>}
 */
export const localeContext: CONTEXT<LocaleContextSyntax> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_LocaleContextSyntax,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_LocaleContextSyntax,
        "&Assertion": undefined,
    },
    "&id": id_avc_locale /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION localeContext */

/* eslint-enable */
