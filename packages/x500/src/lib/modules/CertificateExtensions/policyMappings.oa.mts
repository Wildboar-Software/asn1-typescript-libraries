/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_policyMappings } from "../CertificateExtensions/id-ce-policyMappings.va.mjs";
import {
    PolicyMappingsSyntax,
    _decode_PolicyMappingsSyntax,
    _encode_PolicyMappingsSyntax,
} from "../CertificateExtensions/PolicyMappingsSyntax.ta.mjs";
/**
 * @summary policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyMappings EXTENSION ::= {
 *   SYNTAX         PolicyMappingsSyntax
 *   IDENTIFIED BY  id-ce-policyMappings }
 * ```
 *
 * @constant
 * @type {EXTENSION<PolicyMappingsSyntax>}
 * @implements {EXTENSION<PolicyMappingsSyntax>}
 */
export const policyMappings: EXTENSION<PolicyMappingsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PolicyMappingsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_PolicyMappingsSyntax,
    },
    "&id": id_ce_policyMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
