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
// export { CIO_ALGORITHM } from "../CryptographicInformationFramework/CIO-ALGORITHM.oca.mjs";
import { cia_alg_null } from "../CryptographicInformationFramework/cia-alg-null.oa.mjs";
// export { cia_alg_null } from "../CryptographicInformationFramework/cia-alg-null.oa.mjs";


/**
 * @summary AlgorithmSet
 * @description
 * 
 * Extensible set of `CIO-ALGORITHM` objects used by `AlgorithmInfo`. This
 * module ships `cia-alg-null` only; further members may follow PKCS #11
 * mechanism numbering. ISO/IEC 7816-15:2016 Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlgorithmSet CIO-ALGORITHM ::= {
 *     cia-alg-null,
 *     ... -- See PKCS #11 for possible values for the &id component (and parameters)
 * }
 * ```
 * 
 * @constant
 * @type {CIO_ALGORITHM[]}
 * 
 */
export
const AlgorithmSet: (CIO_ALGORITHM)[] = [ cia_alg_null, ];

/* eslint-enable */
