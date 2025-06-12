/* eslint-disable */
import * as asn1 from "asn1-ts";
import { AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.js";
import { HashAlgorithm } from "../PKCS-1/HashAlgorithm.ta.js";
import { id_sha1 } from "../PKCS-1/id-sha1.va.js";

/* START_OF_SYMBOL_DEFINITION sha1 */
/**
 * @summary sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1    HashAlgorithm ::= {
 *     algorithm   id-sha1,
 *     parameters  SHA1Parameters : NULL
 *
 * }
 * ```
 *
 * @constant
 */
export const sha1: HashAlgorithm = AlgorithmIdentifier._from_object({
    algorithm: id_sha1,
    parameters: new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.nill,
        null
    ),
    _unrecognizedExtensionsList: undefined,
});
/* END_OF_SYMBOL_DEFINITION sha1 */

/* eslint-enable */
