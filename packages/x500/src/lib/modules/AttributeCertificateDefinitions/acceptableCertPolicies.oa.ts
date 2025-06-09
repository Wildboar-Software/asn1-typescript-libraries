/* eslint-disable */
import {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta.js";
import { id_ce_acceptableCertPolicies } from "../AttributeCertificateDefinitions/id-ce-acceptableCertPolicies.va.js";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta.js";
export { id_ce_acceptableCertPolicies } from "../AttributeCertificateDefinitions/id-ce-acceptableCertPolicies.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";

/* START_OF_SYMBOL_DEFINITION acceptableCertPolicies */
/**
 * @summary acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptableCertPolicies EXTENSION ::= {
 *   SYNTAX         AcceptableCertPoliciesSyntax
 *   IDENTIFIED BY  id-ce-acceptableCertPolicies }
 * ```
 *
 * @constant
 * @type {EXTENSION<AcceptableCertPoliciesSyntax>}
 * @implements {EXTENSION<AcceptableCertPoliciesSyntax>}
 */
export const acceptableCertPolicies: EXTENSION<AcceptableCertPoliciesSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AcceptableCertPoliciesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AcceptableCertPoliciesSyntax,
    },
    "&id": id_ce_acceptableCertPolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION acceptableCertPolicies */

/* eslint-enable */
