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
} from '@wildboar/asn1';

/**
 * @summary mkmDirectoryObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mkmDirectoryObjectClass OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part16(16) standardSpecificExtension(0)
 *    directoryObjectClasses(6)}
 * ```
 *
 * @constant
 */
export const mkmDirectoryObjectClass: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part16 */ 16,
    /* standardSpecificExtension */ 0,
    /* directoryObjectClasses */ 6,
]);

/* eslint-enable */
