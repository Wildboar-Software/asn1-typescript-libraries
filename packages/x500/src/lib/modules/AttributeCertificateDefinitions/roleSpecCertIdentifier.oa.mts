/* eslint-disable */
import {
    RoleSpecCertIdentifierSyntax,
    _decode_RoleSpecCertIdentifierSyntax,
    _encode_RoleSpecCertIdentifierSyntax,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta.mjs";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_roleSpecCertIdentifier } from "./id-ce-roleSpecCertIdentifier.va.mjs";

/**
 * @summary roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleSpecCertIdentifier EXTENSION ::= {
 *   SYNTAX         RoleSpecCertIdentifierSyntax
 *   IDENTIFIED BY  id-ce-roleSpecCertIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION<RoleSpecCertIdentifierSyntax>}
 * @implements {EXTENSION<RoleSpecCertIdentifierSyntax>}
 */
export const roleSpecCertIdentifier: EXTENSION<RoleSpecCertIdentifierSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_RoleSpecCertIdentifierSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_RoleSpecCertIdentifierSyntax,
    },
    "&id": id_ce_roleSpecCertIdentifier,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
