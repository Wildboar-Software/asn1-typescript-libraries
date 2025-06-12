/* eslint-disable */
import { id_pSpecified } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-pSpecified.va.js";
import { nullOctetString } from "../PKIX1-PSS-OAEP-Algorithms-2009/nullOctetString.va.js";
import { PSourceAlgorithm } from "../PKIX1-PSS-OAEP-Algorithms-2009/PSourceAlgorithm.ta.js";
export {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/EncodingParameters.ta.js";
export { id_pSpecified } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-pSpecified.va.js";
export { nullOctetString } from "../PKIX1-PSS-OAEP-Algorithms-2009/nullOctetString.va.js";
export {
    PSourceAlgorithm,
    _decode_PSourceAlgorithm,
    _encode_PSourceAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/PSourceAlgorithm.ta.js";
import {
    AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.js";
import {
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    DERElement,
} from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION pSpecifiedEmpty */
/**
 * @summary pSpecifiedEmpty
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pSpecifiedEmpty PSourceAlgorithm ::= {
 * algorithm    id-pSpecified,
 * parameters    EncodingParameters : nullOctetString
 * }
 * ```
 *
 * @constant
 */
export const pSpecifiedEmpty: PSourceAlgorithm = new AlgorithmIdentifier(
    id_pSpecified,
    new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        nullOctetString,
    ),
);

/* END_OF_SYMBOL_DEFINITION pSpecifiedEmpty */

/* eslint-enable */
