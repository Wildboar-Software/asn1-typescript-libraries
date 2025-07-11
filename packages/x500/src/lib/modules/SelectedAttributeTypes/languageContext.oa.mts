/* eslint-disable */
import { TRUE } from "@wildboar/asn1";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
import { id_avc_language } from "../SelectedAttributeTypes/id-avc-language.va.mjs";
import {
    LanguageContextSyntax,
    _decode_LanguageContextSyntax,
    _encode_LanguageContextSyntax,
} from "../SelectedAttributeTypes/LanguageContextSyntax.ta.mjs";
/**
 * @summary languageContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * languageContext CONTEXT ::= {
 *   WITH SYNTAX  LanguageContextSyntax
 *   ID           id-avc-language }
 * ```
 *
 * @constant
 * @type {CONTEXT<LanguageContextSyntax>}
 * @implements {CONTEXT<LanguageContextSyntax>}
 */
export const languageContext: CONTEXT<LanguageContextSyntax> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_LanguageContextSyntax,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_LanguageContextSyntax,
        "&Assertion": undefined,
    },
    "&id": id_avc_language /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": TRUE /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
