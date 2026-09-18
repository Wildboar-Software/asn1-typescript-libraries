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
import { TestReportTechnology, _decode_TestReportTechnology, _encode_TestReportTechnology } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportTechnology.ta.mjs";
// export { TestReportTechnology, _decode_TestReportTechnology, _encode_TestReportTechnology } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportTechnology.ta.mjs";
import { id_testReportTechnology } from "../MachineReadableBiometricTestingAndReportingTestReport/id-testReportTechnology.va.mjs";
// export { id_testReportTechnology } from "../MachineReadableBiometricTestingAndReportingTestReport/id-testReportTechnology.va.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";


/**
 * @summary testReportTechnology
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * testReportTechnology CONTENT-TYPE ::= {
 *     TestReportTechnology
 *     IDENTIFIED BY id-testReportTechnology
 * }
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE<TestReportTechnology>}
 * @implements {CONTENT_TYPE<TestReportTechnology>}
 */
export
const testReportTechnology: CONTENT_TYPE<TestReportTechnology> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_TestReportTechnology,
    },
    encoderFor: {
        "&Type": _encode_TestReportTechnology,
    },
    "&id": id_testReportTechnology /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
