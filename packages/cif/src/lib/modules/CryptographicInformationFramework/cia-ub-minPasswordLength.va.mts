/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";



/**
 * @summary cia_ub_minPasswordLength
 * @description
 * 
 * Upper bound of `PasswordAttributes.minLength` (8). ISO/IEC 7816-15:2016 Annex
 * A.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cia-ub-minPasswordLength                     INTEGER ::= 8
 * ```
 * 
 * @constant
 */
export
const cia_ub_minPasswordLength: INTEGER = 8;

/* eslint-enable */
