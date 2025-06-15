/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';


/**
 * @summary id_telebio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-telebio           OBJECT IDENTIFIER ::= { joint-iso-itu-t(2) telebiometrics(42) }
 * ```
 *
 * @constant
 */
export const id_telebio: OBJECT_IDENTIFIER = new _OID([
    /* joint-iso-itu-t */ 2,
    /* telebiometrics */ 42,
]);

/* eslint-enable */
