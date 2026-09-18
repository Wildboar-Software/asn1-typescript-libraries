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
} from "@wildboar/asn1";



/**
 * @summary id_testReportTechnology
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-testReportTechnology OBJECT IDENTIFIER ::= {
 *     iso(1) standard(0) mrtdbtr(29120) testReport(1) contentType(2)
 *     testReportTechnology(1)
 * }
 * ```
 * 
 * @constant
 */
export
const id_testReportTechnology: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* standard */ 0,
    /* mrtdbtr */ 29120,
    /* testReport */ 1,
    /* contentType */ 2,
    /* testReportTechnology */ 1,
]);

/* eslint-enable */
