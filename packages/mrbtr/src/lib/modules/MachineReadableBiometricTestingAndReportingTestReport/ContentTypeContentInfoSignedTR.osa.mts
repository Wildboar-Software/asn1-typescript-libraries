/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";
import { testReportTechnology } from "../MachineReadableBiometricTestingAndReportingTestReport/testReportTechnology.oa.mjs";
import { testReportScenario } from "../MachineReadableBiometricTestingAndReportingTestReport/testReportScenario.oa.mjs";


/**
 * @summary ContentTypeContentInfoSignedTR
 * @description
 *
 * Allowed encapsulated content types inside a signed test report
 * (Clause 6.6): `testReportTechnology` and `testReportScenario` only.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentTypeContentInfoSignedTR CONTENT-TYPE ::= {
 *     testReportTechnology
 *     | testReportScenario
 * }
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE[]}
 * 
 */
export
const ContentTypeContentInfoSignedTR: (CONTENT_TYPE)[] = [ testReportTechnology, testReportScenario, ];

/* eslint-enable */
