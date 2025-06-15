/* eslint-disable */
import * as $ from "asn1-ts/dist/functional.mjs";
import { AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { id_RSASSA_PSS } from "../PKCS-1/id-RSASSA-PSS.va.mjs";
import type { RSASSA_AlgorithmIdentifier } from "../PKCS-1/RSASSA-AlgorithmIdentifier.ta.mjs";
import { RSASSA_PSS_params, _encode_RSASSA_PSS_params } from "./RSASSA-PSS-params.ta.mjs";
import { sha1 } from "./sha1.va.mjs";
import { mgf1SHA1 } from "./mgf1SHA1.va.mjs";
import { trailerFieldBC } from "./TrailerField.ta.mjs";


/**
 * @summary rSASSA_PSS_Default_Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rSASSA-PSS-Default-Identifier    RSASSA-AlgorithmIdentifier ::= {
 *     algorithm   id-RSASSA-PSS,
 *     parameters  RSASSA-PSS-params : {
 *         hashAlgorithm       sha1,
 *         maskGenAlgorithm    mgf1SHA1,
 *         saltLength          20,
 *         trailerField        trailerFieldBC
 *     }
 * }
 * ```
 *
 * @constant
 */
export const rSASSA_PSS_Default_Identifier: RSASSA_AlgorithmIdentifier = AlgorithmIdentifier._from_object(
    {
        algorithm: id_RSASSA_PSS,
        parameters: _encode_RSASSA_PSS_params(new RSASSA_PSS_params(
            sha1,
            mgf1SHA1,
            20,
            trailerFieldBC,
        ), $.DER),
        _unrecognizedExtensionsList: undefined,
    }
);

/* eslint-enable */
