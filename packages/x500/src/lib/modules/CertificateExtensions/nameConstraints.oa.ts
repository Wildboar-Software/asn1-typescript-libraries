/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import { id_ce_nameConstraints } from "../CertificateExtensions/id-ce-nameConstraints.va.js";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export { id_ce_nameConstraints } from "../CertificateExtensions/id-ce-nameConstraints.va.js";
export {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta.js";

/* START_OF_SYMBOL_DEFINITION nameConstraints */
/**
 * @summary nameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameConstraints EXTENSION ::= {
 *   SYNTAX         NameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-nameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION<NameConstraintsSyntax>}
 * @implements {EXTENSION<NameConstraintsSyntax>}
 */
export const nameConstraints: EXTENSION<NameConstraintsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_NameConstraintsSyntax,
    },
    "&id": id_ce_nameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nameConstraints */

/* eslint-enable */
