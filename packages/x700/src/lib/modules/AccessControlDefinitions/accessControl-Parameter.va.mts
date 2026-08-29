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
 * @summary accessControl_Parameter
 * @description
 *
 * Arc for X.741 GDMO parameter OIDs:
 * `{joint-iso-itu-t ms(9) function(2) part9(9)
 * parameter(5)}`. Leaf `invalidAccessControlFilter`(1)
 * is the CMIS processing-failure specific error for a bad
 * access-control filter. ITU-T Rec. X.741 (04/95)
 * [§A.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * A.4.1, Table 3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControl-Parameter OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part9(9) parameter(5)}
 * ```
 *
 * @constant
 */
export const accessControl_Parameter: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part9 */ 9,
    /* parameter */ 5,
]);

/* eslint-enable */
