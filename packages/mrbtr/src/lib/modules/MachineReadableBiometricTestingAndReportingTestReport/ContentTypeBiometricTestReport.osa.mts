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
// export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";
import { testReportTechnology } from "../MachineReadableBiometricTestingAndReportingTestReport/testReportTechnology.oa.mjs";
// export { testReportTechnology } from "../MachineReadableBiometricTestingAndReportingTestReport/testReportTechnology.oa.mjs";
import { testReportScenario } from "../MachineReadableBiometricTestingAndReportingTestReport/testReportScenario.oa.mjs";
// export { testReportScenario } from "../MachineReadableBiometricTestingAndReportingTestReport/testReportScenario.oa.mjs";
import { signedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/signedTestReport.oa.mjs";
// export { signedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/signedTestReport.oa.mjs";


/**
 * @summary ContentTypeBiometricTestReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentTypeBiometricTestReport CONTENT-TYPE ::= {
 *     testReportTechnology
 *     | testReportScenario
 *     | signedTestReport
 * }
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE[]}
 * 
 */
export
const ContentTypeBiometricTestReport: (CONTENT_TYPE)[] = [ testReportTechnology, testReportScenario, signedTestReport, ];

/* eslint-enable */
