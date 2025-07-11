/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    CertificatePoliciesSyntax,
    _decode_CertificatePoliciesSyntax,
    _encode_CertificatePoliciesSyntax,
} from "../CertificateExtensions/CertificatePoliciesSyntax.ta.mjs";
import { id_ce_certificatePolicies } from "../CertificateExtensions/id-ce-certificatePolicies.va.mjs";
/**
 * @summary certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePolicies EXTENSION ::= {
 *   SYNTAX         CertificatePoliciesSyntax
 *   IDENTIFIED BY  id-ce-certificatePolicies }
 * ```
 *
 * @constant
 * @type {EXTENSION<CertificatePoliciesSyntax>}
 * @implements {EXTENSION<CertificatePoliciesSyntax>}
 */
export const certificatePolicies: EXTENSION<CertificatePoliciesSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CertificatePoliciesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CertificatePoliciesSyntax,
    },
    "&id": id_ce_certificatePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
