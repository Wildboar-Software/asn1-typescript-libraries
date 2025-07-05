/* eslint-disable */
import { TRUE } from "@wildboar/asn1";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
import { id_avc_locale } from "../SelectedAttributeTypes/id-avc-locale.va.mjs";
import {
    LocaleContextSyntax,
    _decode_LocaleContextSyntax,
    _encode_LocaleContextSyntax,
} from "../SelectedAttributeTypes/LocaleContextSyntax.ta.mjs";
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
    "&absentMatch": TRUE /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
