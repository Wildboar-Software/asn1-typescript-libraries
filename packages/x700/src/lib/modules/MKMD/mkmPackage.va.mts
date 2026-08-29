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
 * @summary mkmPackage
 * @description
 *
 * Arc for MKM packages. Allocations: 1 supportedCmipProfilesPackage;
 * 2 implementedValuesPackage; 3 templateDefinitionPackage;
 * 4 documentSpecificationPackage; 5 relationshipClassSupportsPackage;
 * 6 relationshipClassQualifiedByPackage;
 * 7 relationshipClassRoleSpecifierPackage;
 * 8 relationshipMappingRelationshipObjectPackage;
 * 9 relationshipMappingOperationsMappingPackage. ITU-T Rec. X.750
 * (10/96) [A.1](https://www.itu.int/rec/T-REC-X.750-199610-I);
 * Amd.1 (10/97) A.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mkmPackage OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part16(16) package(4)}
 * ```
 *
 * @constant
 */
export const mkmPackage: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part16 */ 16,
    /* package */ 4,
]);

/* eslint-enable */
