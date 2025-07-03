/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";
import { emptyString } from "../PKCS-1/emptyString.va.mjs";
import { id_pSpecified } from "../PKCS-1/id-pSpecified.va.mjs";
import { PSourceAlgorithm } from "../PKCS-1/PSourceAlgorithm.ta.mjs";


/**
 * @summary pSpecifiedEmpty
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pSpecifiedEmpty    PSourceAlgorithm ::= {
 *     algorithm   id-pSpecified,
 *     parameters  EncodingParameters : emptyString
 * }
 * ```
 *
 * @constant
 */
export const pSpecifiedEmpty: PSourceAlgorithm = AlgorithmIdentifier._from_object(
    {
        algorithm: id_pSpecified,
        parameters: $._encodeOctetString(emptyString, $.DER),
        _unrecognizedExtensionsList: undefined,
    }
);

/* eslint-enable */
