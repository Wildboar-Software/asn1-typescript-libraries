/* eslint-disable */
import {
    HolderNameConstraintsSyntax,
    _decode_HolderNameConstraintsSyntax,
    _encode_HolderNameConstraintsSyntax,
} from "../AttributeCertificateDefinitions/HolderNameConstraintsSyntax.ta.mjs";
import { id_ce_holderNameConstraints } from "../AttributeCertificateDefinitions/id-ce-holderNameConstraints.va.mjs";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
export {
    HolderNameConstraintsSyntax,
    _decode_HolderNameConstraintsSyntax,
    _encode_HolderNameConstraintsSyntax,
} from "../AttributeCertificateDefinitions/HolderNameConstraintsSyntax.ta.mjs";
export { id_ce_holderNameConstraints } from "../AttributeCertificateDefinitions/id-ce-holderNameConstraints.va.mjs";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";

/* START_OF_SYMBOL_DEFINITION holderNameConstraints */
/**
 * @summary holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * holderNameConstraints EXTENSION ::= {
 *   SYNTAX         HolderNameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-holderNameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION<HolderNameConstraintsSyntax>}
 * @implements {EXTENSION<HolderNameConstraintsSyntax>}
 */
export const holderNameConstraints: EXTENSION<HolderNameConstraintsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_HolderNameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_HolderNameConstraintsSyntax,
    },
    "&id": id_ce_holderNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION holderNameConstraints */

/* eslint-enable */
