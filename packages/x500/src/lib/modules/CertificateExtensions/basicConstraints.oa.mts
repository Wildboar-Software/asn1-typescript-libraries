/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    BasicConstraintsSyntax,
    _decode_BasicConstraintsSyntax,
    _encode_BasicConstraintsSyntax,
} from "../CertificateExtensions/BasicConstraintsSyntax.ta.mjs";
import { id_ce_basicConstraints } from "../CertificateExtensions/id-ce-basicConstraints.va.mjs";
/**
 * @summary basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicConstraints EXTENSION ::= {
 *   SYNTAX         BasicConstraintsSyntax
 *   IDENTIFIED BY  id-ce-basicConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION<BasicConstraintsSyntax>}
 * @implements {EXTENSION<BasicConstraintsSyntax>}
 */
export const basicConstraints: EXTENSION<BasicConstraintsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BasicConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_BasicConstraintsSyntax,
    },
    "&id": id_ce_basicConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
