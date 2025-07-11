/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalPersonalName,
    _decode_UniversalPersonalName,
    _encode_UniversalPersonalName,
} from "../PkiPmiExternalDataTypes/UniversalPersonalName.ta.mjs";
/**
 * @summary universal_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPersonalName
 *   IDENTIFIED BY  26 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPersonalName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPersonalName>}
 */
export const universal_personal_name: EXTENSION_ATTRIBUTE<UniversalPersonalName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPersonalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPersonalName,
    },
    "&id": 26 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
