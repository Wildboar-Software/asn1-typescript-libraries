/* eslint-disable */
import { id_pSpecified } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-pSpecified.va.mjs";
import { nullOctetString } from "../PKIX1-PSS-OAEP-Algorithms-2009/nullOctetString.va.mjs";
import { PSourceAlgorithm } from "../PKIX1-PSS-OAEP-Algorithms-2009/PSourceAlgorithm.ta.mjs";
import {
    AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    DERElement,
} from "@wildboar/asn1";


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


/* eslint-enable */
