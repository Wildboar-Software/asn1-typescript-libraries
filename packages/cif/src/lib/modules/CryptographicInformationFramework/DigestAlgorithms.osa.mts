/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { ALGORITHM_IDENTIFIER } from "../CryptographicInformationFramework/ALGORITHM-IDENTIFIER.oca.mjs";
import { DigestAlgorithms_Union0_Intersection0_Element } from "../CryptographicInformationFramework/DigestAlgorithms-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary DigestAlgorithms
 * @description
 * 
 * Open type constrained here to SHA-1 with NULL parameters; may be extended
 * with further algorithm identifiers. ISO/IEC 7816-15:2016 Annex A.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigestAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     {NULL IDENTIFIED BY sha-1},
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 * 
 */
export
const DigestAlgorithms: ALGORITHM_IDENTIFIER[] = [ DigestAlgorithms_Union0_Intersection0_Element, ];

/* eslint-enable */
