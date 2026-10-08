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
import { CIO_ALGORITHM } from "../CryptographicInformationFramework/CIO-ALGORITHM.oca.mjs";


/**
 * @summary AllowedAlgorithms
 * @description
 * 
 * Open `CIO-ALGORITHM` set for generic keys. Empty in this module; profiles or
 * PICS fill it. ISO/IEC 7816-15:2016 §8.2.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedAlgorithms CIO-ALGORITHM ::= {...}
 * ```
 * 
 * @constant
 * @type {CIO_ALGORITHM[]}
 * 
 */
export
const AllowedAlgorithms: (CIO_ALGORITHM)[] = [];

/* eslint-enable */
