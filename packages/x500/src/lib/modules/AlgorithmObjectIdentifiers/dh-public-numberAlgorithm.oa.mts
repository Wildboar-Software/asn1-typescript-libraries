/* eslint-disable */
import { dh_public_number } from "../AlgorithmObjectIdentifiers/dh-public-number.va.mjs";
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../AlgorithmObjectIdentifiers/DomainParameters.ta.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary dh_public_numberAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dh-public-numberAlgorithm ALGORITHM ::= {
 *   PARMS         DomainParameters
 *   IDENTIFIED BY dh-public-number }
 * ```
 *
 * @constant
 * @type {ALGORITHM<DomainParameters>}
 * @implements {ALGORITHM<DomainParameters>}
 */
export const dh_public_numberAlgorithm: ALGORITHM<DomainParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_DomainParameters,
    },
    encoderFor: {
        "&Type": _encode_DomainParameters,
    },
    "&id": dh_public_number /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
