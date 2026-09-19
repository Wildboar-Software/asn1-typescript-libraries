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
 * @summary id_signedTestReport
 * @description
 *
 * Content-type OID for a signed test report (test certificate)
 * (Clause 6.3). `{iso(1) standard(0) mrtdbtr(29120) testReport(1)
 * contentType(2) signedTestReport(3)}`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-signedTestReport OBJECT IDENTIFIER ::= {
 *     iso(1) standard(0) mrtdbtr(29120) testReport(1) contentType(2)
 *     signedTestReport(3)
 * }
 * ```
 * 
 * @constant
 */
export
const id_signedTestReport: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* standard */ 0,
    /* mrtdbtr */ 29120,
    /* testReport */ 1,
    /* contentType */ 2,
    /* signedTestReport */ 3,
]);

/* eslint-enable */
