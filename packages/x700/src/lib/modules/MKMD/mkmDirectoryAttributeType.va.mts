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
 * @summary mkmDirectoryAttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mkmDirectoryAttributeType OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part16(16) standardSpecificExtension(0)
 *    directoryAttributeTypes(4)}
 * ```
 *
 * @constant
 */
export const mkmDirectoryAttributeType: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part16 */ 16,
    /* standardSpecificExtension */ 0,
    /* directoryAttributeTypes */ 4,
]);

/* eslint-enable */
