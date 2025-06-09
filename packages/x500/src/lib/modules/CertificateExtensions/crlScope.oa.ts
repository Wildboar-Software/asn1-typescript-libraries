/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import {
    CRLScopeSyntax,
    _decode_CRLScopeSyntax,
    _encode_CRLScopeSyntax,
} from "../CertificateExtensions/CRLScopeSyntax.ta.js";
import { id_ce_cRLScope } from "../CertificateExtensions/id-ce-cRLScope.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    CRLScopeSyntax,
    _decode_CRLScopeSyntax,
    _encode_CRLScopeSyntax,
} from "../CertificateExtensions/CRLScopeSyntax.ta.js";
export { id_ce_cRLScope } from "../CertificateExtensions/id-ce-cRLScope.va.js";

/* START_OF_SYMBOL_DEFINITION crlScope */
/**
 * @summary crlScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crlScope EXTENSION ::= {
 *   SYNTAX         CRLScopeSyntax
 *   IDENTIFIED BY  id-ce-cRLScope }
 * ```
 *
 * @constant
 * @type {EXTENSION<CRLScopeSyntax>}
 * @implements {EXTENSION<CRLScopeSyntax>}
 */
export const crlScope: EXTENSION<CRLScopeSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLScopeSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLScopeSyntax,
    },
    "&id": id_ce_cRLScope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION crlScope */

/* eslint-enable */
