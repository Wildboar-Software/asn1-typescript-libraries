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
} from "asn1-ts";



/**
 * @summary enterprise
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * enterprise OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     identified-organization(3)
 *     dod(6)
 *     internet(1)
 *     private(4)
 *     enterprise(1) }
 * ```
 * 
 * @constant
 */
export
const enterprise: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprise */ 1,
]);

/* eslint-enable */
