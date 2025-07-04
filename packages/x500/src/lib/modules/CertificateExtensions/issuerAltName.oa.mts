/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.mjs";
import { id_ce_issuerAltName } from "../CertificateExtensions/id-ce-issuerAltName.va.mjs";
/**
 * @summary issuerAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuerAltName EXTENSION ::= {
 *   SYNTAX         GeneralNames
 *   IDENTIFIED BY  id-ce-issuerAltName }
 * ```
 *
 * @constant
 * @type {EXTENSION<GeneralNames>}
 * @implements {EXTENSION<GeneralNames>}
 */
export const issuerAltName: EXTENSION<GeneralNames> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralNames,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralNames,
    },
    "&id": id_ce_issuerAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
