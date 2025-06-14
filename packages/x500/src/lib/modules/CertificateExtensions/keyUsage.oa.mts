/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_keyUsage } from "../CertificateExtensions/id-ce-keyUsage.va.mjs";
import {
    KeyUsage,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "../CertificateExtensions/KeyUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION keyUsage */
/**
 * @summary keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyUsage EXTENSION ::= {
 *   SYNTAX         KeyUsage
 *   IDENTIFIED BY  id-ce-keyUsage }
 * ```
 *
 * @constant
 * @type {EXTENSION<KeyUsage>}
 * @implements {EXTENSION<KeyUsage>}
 */
export const keyUsage: EXTENSION<KeyUsage> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_KeyUsage,
    },
    encoderFor: {
        "&ExtnType": _encode_KeyUsage,
    },
    "&id": id_ce_keyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION keyUsage */

/* eslint-enable */
