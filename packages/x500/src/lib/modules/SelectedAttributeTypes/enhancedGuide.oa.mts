/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    EnhancedGuide,
    _decode_EnhancedGuide,
    _encode_EnhancedGuide,
} from "../SelectedAttributeTypes/EnhancedGuide.ta.mjs";
import { id_lsx_enhancedGuide } from "../SelectedAttributeTypes/id-lsx-enhancedGuide.va.mjs";
/**
 * @summary enhancedGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedGuide SYNTAX-NAME ::= {
 *   LDAP-DESC         "Enhanced Guide"
 *   DIRECTORY SYNTAX  EnhancedGuide
 *   ID                id-lsx-enhancedGuide }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<EnhancedGuide>}
 * @implements {SYNTAX_NAME<EnhancedGuide>}
 */
export const enhancedGuide: SYNTAX_NAME<EnhancedGuide> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_EnhancedGuide,
    },
    encoderFor: {
        "&Type": _encode_EnhancedGuide,
    },
    "&ldapDesc": "Enhanced Guide" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_enhancedGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
