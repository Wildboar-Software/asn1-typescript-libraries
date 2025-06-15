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
 * @summary accessControl_Object
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControl-Object OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part9(9) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const accessControl_Object: OBJECT_IDENTIFIER = new _OID([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part9 */ 9,
    /* managedObjectClass */ 3,
]);

/* eslint-enable */
