/* eslint-disable */
import {
    AcceptablePrivilegePoliciesSyntax,
    _decode_AcceptablePrivilegePoliciesSyntax,
    _encode_AcceptablePrivilegePoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptablePrivilegePoliciesSyntax.ta.js";
import { id_ce_acceptablePrivilegePolicies } from "../AttributeCertificateDefinitions/id-ce-acceptablePrivilegePolicies.va.js";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    AcceptablePrivilegePoliciesSyntax,
    _decode_AcceptablePrivilegePoliciesSyntax,
    _encode_AcceptablePrivilegePoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptablePrivilegePoliciesSyntax.ta.js";
export { id_ce_acceptablePrivilegePolicies } from "../AttributeCertificateDefinitions/id-ce-acceptablePrivilegePolicies.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";

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
