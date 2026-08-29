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
 * @summary mkmDirectoryAttributeType
 * @description
 *
 * Arc for MKM Directory attributes. Repertoire: 1 mitMoList;
 * 2 supportedCmipVersion; 3 supportedCmisFunctionalUnits;
 * 5 supportedSmaseFunctionalUnits; 43 supportedCmipProfiles;
 * 44 supportsMKMglobalNames. Definition attributes occupy 6–42, 45–46.
 * GRM (Amd.1): 47 mappedRelationshipClass … 53 supports. ITU-T Rec.
 * X.750 (10/96)
 * [A.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * B.1–B.2; Amd.1 (10/97) B.2.
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
