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
import { SignedTestReport, _decode_SignedTestReport, _encode_SignedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/SignedTestReport.ta.mjs";
// export { SignedTestReport, _decode_SignedTestReport, _encode_SignedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/SignedTestReport.ta.mjs";
import { id_signedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/id-signedTestReport.va.mjs";
// export { id_signedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/id-signedTestReport.va.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";


/**
 * @summary signedTestReport
 * @description
 *
 * CMS `CONTENT-TYPE` for a signed test report (test certificate): type
 * `SignedTestReport`, identified by `id-signedTestReport` (Clause 6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * signedTestReport CONTENT-TYPE ::= {
 *     SignedTestReport
 *     IDENTIFIED BY id-signedTestReport
 * }
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE<SignedTestReport>}
 * @implements {CONTENT_TYPE<SignedTestReport>}
 */
export
const signedTestReport: CONTENT_TYPE<SignedTestReport> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_SignedTestReport,
    },
    encoderFor: {
        "&Type": _encode_SignedTestReport,
    },
    "&id": id_signedTestReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
