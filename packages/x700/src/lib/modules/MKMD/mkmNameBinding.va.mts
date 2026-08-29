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
 * @summary mkmNameBinding
 * @description
 *
 * Arc for MKM name bindings. Allocations: 1 repertoire-system
 * (`repertoireId` = `"REP1"`); 2 managedObjectClassRepertoire-
 * repertoire; 3 template-document; 4 aSN1Module-document;
 * 5 discovery-system (`discoveryId` = `"DSC1"`); 6 document-system
 * (named by document object identifier); 7 document-system2 (named
 * by document name). ITU-T Rec. X.750 (10/96)
 * [A.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * A.2.2, A.3.2, A.4.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mkmNameBinding OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part16(16) nameBinding(6)}
 * ```
 *
 * @constant
 */
export const mkmNameBinding: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part16 */ 16,
    /* nameBinding */ 6,
]);

/* eslint-enable */
