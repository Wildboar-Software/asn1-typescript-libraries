/* eslint-disable */
import {
    BasicAttConstraintsSyntax,
    _decode_BasicAttConstraintsSyntax,
    _encode_BasicAttConstraintsSyntax,
} from "../AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_basicAttConstraints } from "./id-ce-basicAttConstraints.va.mjs";

/**
 * @summary basicAttConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAttConstraints EXTENSION ::= {
 *   SYNTAX         BasicAttConstraintsSyntax
 *   IDENTIFIED BY  id-ce-basicAttConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION<BasicAttConstraintsSyntax>}
 * @implements {EXTENSION<BasicAttConstraintsSyntax>}
 */
export const basicAttConstraints: EXTENSION<BasicAttConstraintsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BasicAttConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_BasicAttConstraintsSyntax,
    },
    "&id": id_ce_basicAttConstraints,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
