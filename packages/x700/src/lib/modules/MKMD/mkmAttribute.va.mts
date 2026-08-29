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
 * @summary mkmAttribute
 * @description
 *
 * Arc for MKM managed-object attributes. Repertoire: 1 repertoireId;
 * 2 managedObjectClassRepertoireId; 3 supportedManagedObjectClassList;
 * 4 supportedCmipProfiles; 5 supportedConditionalPackageList;
 * 6 implementedValues; 42 supportedNameBindingList;
 * 44 supportedRelationshipClassList. Discovery: 41 discoveryId.
 * Definition-template attributes occupy 7–40, 43, 45. GRM-in-Directory
 * (Amd.1): 46 mappedRelationshipClass … 52 supports. ITU-T Rec. X.750
 * (10/96) [A.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * Table D.1; Amd.1 (10/97) D.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mkmAttribute OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part16(16) attribute(7)}
 * ```
 *
 * @constant
 */
export const mkmAttribute: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part16 */ 16,
    /* attribute */ 7,
]);

/* eslint-enable */
