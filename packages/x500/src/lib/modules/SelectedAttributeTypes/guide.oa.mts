/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    Guide,
    _decode_Guide,
    _encode_Guide,
} from "../SelectedAttributeTypes/Guide.ta.mjs";
import { id_lsx_guide } from "../SelectedAttributeTypes/id-lsx-guide.va.mjs";
/**
 * @summary guide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * guide SYNTAX-NAME ::= {
 *   LDAP-DESC         "Guide"
 *   DIRECTORY SYNTAX  Guide
 *   ID                id-lsx-guide }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<Guide>}
 * @implements {SYNTAX_NAME<Guide>}
 */
export const guide: SYNTAX_NAME<Guide> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_Guide,
    },
    encoderFor: {
        "&Type": _encode_Guide,
    },
    "&ldapDesc": "Guide" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_guide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
