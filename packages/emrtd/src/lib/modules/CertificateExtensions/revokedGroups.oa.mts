/* eslint-disable */
import { RevokedGroupsSyntax, _decode_RevokedGroupsSyntax, _encode_RevokedGroupsSyntax } from "../CertificateExtensions/RevokedGroupsSyntax.ta.mjs";
// export { RevokedGroupsSyntax, _decode_RevokedGroupsSyntax, _encode_RevokedGroupsSyntax } from "../CertificateExtensions/RevokedGroupsSyntax.ta.mjs";
import { id_ce_revokedGroups } from "../CertificateExtensions/id-ce-revokedGroups.va.mjs";
// export { id_ce_revokedGroups } from "../CertificateExtensions/id-ce-revokedGroups.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary revokedGroups
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * revokedGroups EXTENSION ::= {
 *   SYNTAX         RevokedGroupsSyntax
 *   IDENTIFIED BY  id-ce-revokedGroups }
 * ```
 * 
 * @constant
 * @type {EXTENSION<RevokedGroupsSyntax>}
 * @implements {EXTENSION<RevokedGroupsSyntax>}
 */
export
const revokedGroups: EXTENSION<RevokedGroupsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_RevokedGroupsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_RevokedGroupsSyntax,
    },
    "&id": id_ce_revokedGroups /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
