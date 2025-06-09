/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.js";
import { id_ce_subjectAltName } from "../CertificateExtensions/id-ce-subjectAltName.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.js";
export { id_ce_subjectAltName } from "../CertificateExtensions/id-ce-subjectAltName.va.js";

/* START_OF_SYMBOL_DEFINITION subjectAltName */
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
/* END_OF_SYMBOL_DEFINITION subjectAltName */

/* eslint-enable */
