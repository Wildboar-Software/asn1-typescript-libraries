/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";
import { id_mgf1 } from "../PKCS-1/id-mgf1.va.mjs";
import { MaskGenAlgorithm } from "../PKCS-1/MaskGenAlgorithm.ta.mjs";
import { sha1 } from "../PKCS-1/sha1.va.mjs";


/**
 * @summary mgf1SHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mgf1SHA1    MaskGenAlgorithm ::= {
 *     algorithm   id-mgf1,
 *     parameters  HashAlgorithm : sha1
 * }
 * ```
 *
 * @constant
 */
export const mgf1SHA1: MaskGenAlgorithm = AlgorithmIdentifier._from_object({
    algorithm: id_mgf1,
    parameters: _encode_AlgorithmIdentifier(sha1, $.DER),
    _unrecognizedExtensionsList: undefined,
});

/* eslint-enable */
