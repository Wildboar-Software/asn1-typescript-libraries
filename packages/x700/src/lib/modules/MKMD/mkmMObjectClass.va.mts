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
 * @summary mkmMObjectClass
 * @description
 *
 * Arc for MKM managed object classes. Allocations include:
 * 1 repertoire; 2 managedObjectClassRepertoire; 3 template;
 * 4 aSN1Module; 5 managedObjectClassTemplate; 6 packageTemplate;
 * 7 parameterTemplate; 8 nameBindingTemplate; 9 attributeTemplate;
 * 10 attributeGroupTemplate; 11 behaviourTemplate;
 * 12 actionTemplate; 13 notificationTemplate; 14 document;
 * 15 discoveryObject; 16 relationshipClassTemplate (Amd.1);
 * 17 relationshipMappingTemplate (Amd.1). ITU-T Rec. X.750 (10/96)
 * [A.1](https://www.itu.int/rec/T-REC-X.750-199610-I);
 * Amd.1 (10/97) A.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mkmMObjectClass OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part16(16) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const mkmMObjectClass: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part16 */ 16,
    /* managedObjectClass */ 3,
]);

/* eslint-enable */
