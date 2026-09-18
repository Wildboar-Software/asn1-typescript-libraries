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
import { TestReportScenario, _decode_TestReportScenario, _encode_TestReportScenario } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportScenario.ta.mjs";
// export { TestReportScenario, _decode_TestReportScenario, _encode_TestReportScenario } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportScenario.ta.mjs";
import { id_testReportScenario } from "../MachineReadableBiometricTestingAndReportingTestReport/id-testReportScenario.va.mjs";
// export { id_testReportScenario } from "../MachineReadableBiometricTestingAndReportingTestReport/id-testReportScenario.va.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";


/**
 * @summary testReportScenario
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * testReportScenario CONTENT-TYPE ::= {
 *     TestReportScenario
 *     IDENTIFIED BY id-testReportScenario
 * }
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE<TestReportScenario>}
 * @implements {CONTENT_TYPE<TestReportScenario>}
 */
export
const testReportScenario: CONTENT_TYPE<TestReportScenario> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_TestReportScenario,
    },
    encoderFor: {
        "&Type": _encode_TestReportScenario,
    },
    "&id": id_testReportScenario /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
