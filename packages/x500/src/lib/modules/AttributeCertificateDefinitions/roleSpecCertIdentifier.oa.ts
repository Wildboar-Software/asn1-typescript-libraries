/* eslint-disable */
import {
    RoleSpecCertIdentifierSyntax,
    _decode_RoleSpecCertIdentifierSyntax,
    _encode_RoleSpecCertIdentifierSyntax,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta.js";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import { id_ce_roleSpecCertIdentifier } from "./id-ce-roleSpecCertIdentifier.va.js";

/* START_OF_SYMBOL_DEFINITION roleSpecCertIdentifier */
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
/* END_OF_SYMBOL_DEFINITION roleSpecCertIdentifier */

/* eslint-enable */
