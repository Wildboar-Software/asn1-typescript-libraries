/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_policyConstraints } from "../CertificateExtensions/id-ce-policyConstraints.va.mjs";
import {
    PolicyConstraintsSyntax,
    _decode_PolicyConstraintsSyntax,
    _encode_PolicyConstraintsSyntax,
} from "../CertificateExtensions/PolicyConstraintsSyntax.ta.mjs";
/**
 * @summary policyConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyConstraints EXTENSION ::= {
 *   SYNTAX         PolicyConstraintsSyntax
 *   IDENTIFIED BY  id-ce-policyConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION<PolicyConstraintsSyntax>}
 * @implements {EXTENSION<PolicyConstraintsSyntax>}
 */
export const policyConstraints: EXTENSION<PolicyConstraintsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PolicyConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_PolicyConstraintsSyntax,
    },
    "&id": id_ce_policyConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
