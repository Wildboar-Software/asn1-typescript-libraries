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
 * @summary x790Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x790Attribute OBJECT IDENTIFIER ::= {itu-t(0) recommendation(0) x(24) x790(790) informationModel(0) attribute(7)}
 * ```
 *
 * @constant
 */
export const x790Attribute: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* recommendation */ 0,
    /* x */ 24,
    /* x790 */ 790,
    /* informationModel */ 0,
    /* attribute */ 7,
]);

/* eslint-enable */
