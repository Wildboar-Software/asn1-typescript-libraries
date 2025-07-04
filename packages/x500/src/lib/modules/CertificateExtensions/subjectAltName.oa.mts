/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.mjs";
import { id_ce_subjectAltName } from "../CertificateExtensions/id-ce-subjectAltName.va.mjs";
/**
 * @summary subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectAltName EXTENSION ::= {
 *   SYNTAX         GeneralNames
 *   IDENTIFIED BY  id-ce-subjectAltName }
 * ```
 *
 * @constant
 * @type {EXTENSION<GeneralNames>}
 * @implements {EXTENSION<GeneralNames>}
 */
export const subjectAltName: EXTENSION<GeneralNames> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralNames,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralNames,
    },
    "&id": id_ce_subjectAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
