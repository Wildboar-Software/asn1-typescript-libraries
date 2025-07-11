/* eslint-disable */
import { id_ce_delegatedNameConstraints } from "../AttributeCertificateDefinitions/id-ce-delegatedNameConstraints.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta.mjs";
/**
 * @summary delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegatedNameConstraints EXTENSION ::= {
 *   SYNTAX         NameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-delegatedNameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION<NameConstraintsSyntax>}
 * @implements {EXTENSION<NameConstraintsSyntax>}
 */
export const delegatedNameConstraints: EXTENSION<NameConstraintsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_NameConstraintsSyntax,
    },
    "&id": id_ce_delegatedNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
