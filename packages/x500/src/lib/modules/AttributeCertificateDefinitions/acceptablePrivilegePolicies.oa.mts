/* eslint-disable */
import {
    AcceptablePrivilegePoliciesSyntax,
    _decode_AcceptablePrivilegePoliciesSyntax,
    _encode_AcceptablePrivilegePoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptablePrivilegePoliciesSyntax.ta.mjs";
import { id_ce_acceptablePrivilegePolicies } from "../AttributeCertificateDefinitions/id-ce-acceptablePrivilegePolicies.va.mjs";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
export {
    AcceptablePrivilegePoliciesSyntax,
    _decode_AcceptablePrivilegePoliciesSyntax,
    _encode_AcceptablePrivilegePoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptablePrivilegePoliciesSyntax.ta.mjs";
export { id_ce_acceptablePrivilegePolicies } from "../AttributeCertificateDefinitions/id-ce-acceptablePrivilegePolicies.va.mjs";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";

/* START_OF_SYMBOL_DEFINITION acceptablePrivilegePolicies */
/**
 * @summary acceptablePrivilegePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptablePrivilegePolicies EXTENSION ::= {
 *   SYNTAX         AcceptablePrivilegePoliciesSyntax
 *   IDENTIFIED BY  id-ce-acceptablePrivilegePolicies }
 * ```
 *
 * @constant
 * @type {EXTENSION<AcceptablePrivilegePoliciesSyntax>}
 * @implements {EXTENSION<AcceptablePrivilegePoliciesSyntax>}
 */
export const acceptablePrivilegePolicies: EXTENSION<AcceptablePrivilegePoliciesSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AcceptablePrivilegePoliciesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AcceptablePrivilegePoliciesSyntax,
    },
    "&id": id_ce_acceptablePrivilegePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION acceptablePrivilegePolicies */

/* eslint-enable */
