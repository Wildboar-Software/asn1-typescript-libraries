import {
    ASN1SizeError,
    ObjectIdentifier,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Product } from "./lib/modules/CBEFF-DATA-ELEMENTS/Product.ta.mjs";
import { BiometricType_finger } from "./lib/modules/CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
import {
    AccreditationStatus,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/AccreditationStatus.ta.mjs";
import {
    AccreditingBody,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/AccreditingBody.ta.mjs";
import {
    CorpusComposition,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/CorpusComposition.ta.mjs";
import {
    CorpusCrewBasicStatistics,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/CorpusCrewBasicStatistics.ta.mjs";
import {
    CorpusInformation,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/CorpusInformation.ta.mjs";
import {
    CorpusStatistics,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/CorpusStatistics.ta.mjs";
import {
    DataType,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/DataType.ta.mjs";
import {
    EnvironmentalInformation,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/EnvironmentalInformation.ta.mjs";
import {
    ExternalDocument,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/ExternalDocument.ta.mjs";
import {
    Function_verification,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/Function.ta.mjs";
import {
    IdentificationTestLab,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/IdentificationTestLab.ta.mjs";
import {
    Modality,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/Modality.ta.mjs";
import {
    MRTDBTRVersion_v0,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/MRTDBTRVersion.ta.mjs";
import {
    NameProduct,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/NameProduct.ta.mjs";
import {
    ProcessedLevel_processed_data,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/ProcessedLevel.ta.mjs";
import {
    ProductInformation,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/ProductInformation.ta.mjs";
import {
    Provider,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/Provider.ta.mjs";
import {
    RoleProvider_manufacturer,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/RoleProvider.ta.mjs";
import {
    StandardDescription,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/StandardDescription.ta.mjs";
import {
    TestLabInformation,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TestLabInformation.ta.mjs";
import {
    TestReportInformation,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TestReportInformation.ta.mjs";
import {
    TestReportTechnology,
    _decode_TestReportTechnology,
    _encode_TestReportTechnology,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TestReportTechnology.ta.mjs";
import {
    TestReportTechnologyForOneCondition,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TestReportTechnologyForOneCondition.ta.mjs";
import {
    _decode_TestResult,
    _encode_TestResult,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TestResult.ta.mjs";
import {
    TestResultAcquire,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TestResultAcquire.ta.mjs";
import {
    TestResultEnrol,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TestResultEnrol.ta.mjs";
import {
    TypeDocument_technical_report,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TypeDocument.ta.mjs";
import {
    TypeProvider_corporation,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/TypeProvider.ta.mjs";
import {
    Availability_public_,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/Availability.ta.mjs";
import {
    VersionProduct_v0,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/VersionProduct.ta.mjs";
import {
    _decode_URI,
} from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/URI.ta.mjs";
import {
    type Name,
} from "./lib/modules/InformationFramework/Name.ta.mjs";
import {
    TestReportTechnology as TestReportTechnologyFromRoot,
    MRTDBTRVersion_v0 as MRTDBTRVersion_v0FromRoot,
    VersionProduct_v0 as VersionProduct_v0FromRoot,
    id_testReportTechnology,
    testReportTechnology,
} from "./index.mjs";

function directoryName(): Name {
    return { rdnSequence: [] };
}

function sampleTechnologyReport(): TestReportTechnology {
    const biometricType = new Uint8ClampedArray(17);
    biometricType[BiometricType_finger] = 1;
    return new TestReportTechnology(
        MRTDBTRVersion_v0,
        new ProductInformation(
            new Provider(
                directoryName(),
                TypeProvider_corporation,
                RoleProvider_manufacturer,
                "qa@example.com",
            ),
            new NameProduct(
                directoryName(),
                new Product(1, 42),
                VersionProduct_v0,
                VersionProduct_v0,
                VersionProduct_v0,
            ),
            "Example matcher",
            [Function_verification],
            new DataType(ProcessedLevel_processed_data),
            new Modality(biometricType),
        ),
        new TestReportInformation(
            new TestLabInformation(
                new IdentificationTestLab(
                    "Example Lab",
                    "Geneva",
                    "A. Tester",
                    "B. Signatory",
                    "lab@example.com",
                ),
                new AccreditationStatus([
                    new AccreditingBody(
                        "Example Accreditation",
                        ObjectIdentifier.fromParts([1, 3, 6, 1, 4, 1, 9999, 1]),
                        new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
                    ),
                ]),
            ),
            new StandardDescription(
                "Information technology",
                "ISO/IEC 29120-1",
                "1",
                "20220215",
            ),
            "20260918",
            new ExternalDocument(
                "https://example.com/parent-report",
                "Parent technology report",
                ["A. Author"],
                "Example Press",
                "E. Editor",
                TypeDocument_technical_report,
                "20220101",
                Availability_public_,
            ),
        ),
        [
            new TestReportTechnologyForOneCondition(
                new CorpusInformation(
                    new CorpusComposition(
                        ObjectIdentifier.fromParts([1, 3, 6, 1, 4, 1, 9999, 2]),
                        "Example Corpus",
                        new CorpusStatistics(
                            new CorpusCrewBasicStatistics(
                                100,
                                50,
                                50,
                                undefined,
                                undefined,
                                80,
                                100,
                            ),
                            1000,
                        ),
                    ),
                    new EnvironmentalInformation(
                        "none",
                        21.5,
                        30,
                        "office lighting",
                    ),
                ),
                "20260101",
                "20260331",
                [
                    { testResultEnrol: new TestResultEnrol(0.012) },
                    { testResultAcquire: new TestResultAcquire(0.003) },
                ],
            ),
        ],
    );
}

describe("MRBTR encode/decode round-trips", () => {
    test("round-trips TestReportTechnology with nested product, lab, and condition results", () => {
        const original = sampleTechnologyReport();
        const decoded = _decode_TestReportTechnology(
            _encode_TestReportTechnology(original, $.BER),
        );
        expect(decoded.version).toBe(MRTDBTRVersion_v0);
        expect(decoded.targetInfo.description).toBe("Example matcher");
        expect(decoded.targetInfo.functionProduct).toEqual([Function_verification]);
        expect(decoded.targetInfo.provider.typeProvider).toBe(TypeProvider_corporation);
        expect(decoded.targetInfo.provider.roleProvider).toBe(RoleProvider_manufacturer);
        expect(decoded.targetInfo.nameProduct.productCBEFF?.product_owner).toBe(1);
        expect(decoded.targetInfo.nameProduct.productCBEFF?.product_type).toBe(42);
        expect(decoded.targetInfo.modalityProduct.type_[BiometricType_finger]).toBe(1);
        expect(decoded.targetInfo.outputProduct?.processedLevel).toBe(ProcessedLevel_processed_data);
        expect(decoded.testReportInfo.compliantStandard.standardNumber).toBe("ISO/IEC 29120-1");
        expect(decoded.testReportInfo.testReportIssuanceDate).toBe("20260918");
        expect(decoded.testReportInfo.parentTestReport.link).toBe("https://example.com/parent-report");
        expect(decoded.testReportInfo.parentTestReport.availability).toBe(Availability_public_);
        expect(decoded.testReportInfo.testLabInformation.identificationTestLab.nameLab).toBe("Example Lab");
        expect(decoded.testReports).toHaveLength(1);
        expect(decoded.testReports[0].corpusInfo.composition.nameCorpus).toBe("Example Corpus");
        expect(decoded.testReports[0].corpusInfo.composition.corpusStatistics.numSamples).toBe(1000);
        expect(decoded.testReports[0].corpusInfo.environInfo.celsiusTemp).toBe(21.5);
        expect(decoded.testReports[0].dateStarted).toBe("20260101");
        expect(decoded.testReports[0].dateEnded).toBe("20260331");
        expect(decoded.testReports[0].testResult).toHaveLength(2);
        expect("testResultEnrol" in decoded.testReports[0].testResult[0]).toBe(true);
        if ("testResultEnrol" in decoded.testReports[0].testResult[0]) {
            expect(decoded.testReports[0].testResult[0].testResultEnrol.failureToEnrolRate).toBe(0.012);
        }
        expect("testResultAcquire" in decoded.testReports[0].testResult[1]).toBe(true);
        if ("testResultAcquire" in decoded.testReports[0].testResult[1]) {
            expect(decoded.testReports[0].testResult[1].testResultAcquire.failureToAcquireRate).toBe(0.003);
        }
    });

    test("round-trips TestResult CHOICE alternatives with AUTOMATIC TAGS", () => {
        const enrol = _decode_TestResult(
            _encode_TestResult({ testResultEnrol: new TestResultEnrol(0.5) }, $.BER),
        );
        const acquire = _decode_TestResult(
            _encode_TestResult({ testResultAcquire: new TestResultAcquire(0.25) }, $.BER),
        );
        expect("testResultEnrol" in enrol).toBe(true);
        expect("testResultAcquire" in acquire).toBe(true);
        if ("testResultEnrol" in enrol) {
            expect(enrol.testResultEnrol.failureToEnrolRate).toBe(0.5);
        }
        if ("testResultAcquire" in acquire) {
            expect(acquire.testResultAcquire.failureToAcquireRate).toBe(0.25);
        }
    });

    test("rejects an empty URI on decode", () => {
        const el = $._encodeVisibleString("", $.BER);
        expect(() => _decode_URI(el)).toThrow(ASN1SizeError);
    });

    test("re-exports selected symbols from the package root barrel", () => {
        expect(TestReportTechnologyFromRoot).toBe(TestReportTechnology);
        expect(MRTDBTRVersion_v0FromRoot).toBe(MRTDBTRVersion_v0);
        expect(VersionProduct_v0FromRoot).toBe(VersionProduct_v0);
        expect(MRTDBTRVersion_v0FromRoot).not.toBe(VersionProduct_v0FromRoot);
        expect(id_testReportTechnology.toString()).toBe("1.0.29120.1.2.1");
        expect(testReportTechnology.class).toBe("CONTENT-TYPE");
        expect(testReportTechnology["&id"]?.toString()).toBe("1.0.29120.1.2.1");
    });
});
