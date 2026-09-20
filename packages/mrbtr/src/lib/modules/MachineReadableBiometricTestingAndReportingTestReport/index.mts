/**
 * @description
 *
 * ASN.1 module `MachineReadableBiometricTestingAndReportingTestReport`
 * `{iso(1) standard(0) mrtdbtr(29120) testReport(1) module(1) rev(0)}`
 * from ISO/IEC 29120-1:2022 Annex A (authoritative for binary encodings;
 * Clause 6 excerpts the same types). Encode reports with XER or BER
 * (Clause 6.1).
 *
 * The short integer name `v0` is omitted because it collides between
 * `MRTDBTRVersion` and `VersionProduct`; use `MRTDBTRVersion_v0` and
 * `VersionProduct_v0`.
 */
export * from "./AScopeAccreditation.ta.mjs";
export * from "./AccreditationStatus.ta.mjs";
export * from "./AccreditingBody.ta.mjs";
export * from "./AssistanceAndInstruction.ta.mjs";
export * from "./AssistanceLocation.ta.mjs";
export * from "./AssistanceMode.ta.mjs";
export * from "./Availability.ta.mjs";
export * from "./BiometricTestReport.ta.mjs";
export * from "./ContentTypeBiometricTestReport.osa.mjs";
export * from "./ContentTypeContentInfoSignedTR.osa.mjs";
export * from "./CorpusComposition.ta.mjs";
export * from "./CorpusCrewBasicStatistics.ta.mjs";
export * from "./CorpusInformation.ta.mjs";
export * from "./CorpusStatistics.ta.mjs";
export * from "./DataType.ta.mjs";
export * from "./Date.ta.mjs";
export * from "./DistributionIntegerInteger.ta.mjs";
export * from "./DistributionIntegerReal.ta.mjs";
export * from "./DistributionRealReal.ta.mjs";
export * from "./EncapsulatedContentInfoSignedTR.ta.mjs";
export * from "./EnvironmentalInformation.ta.mjs";
export * from "./ExpressionDETCurve.ta.mjs";
export * from "./ExpressionHistogram.ta.mjs";
export * from "./ExpressionPointDETCurve.ta.mjs";
export * from "./ExpressionPointIntegerInteger.ta.mjs";
export * from "./ExpressionPointIntegerReal.ta.mjs";
export * from "./ExpressionPointRealReal.ta.mjs";
export * from "./ExternalDocument.ta.mjs";
export * from "./Function.ta.mjs";
export * from "./IdentificationTestLab.ta.mjs";
export * from "./InfoCumulativeDistribution.ta.mjs";
export * from "./InfoDETCurve.ta.mjs";
export * from "./InstructionMode.ta.mjs";
export * from "./IntervalIntegerFrequency.ta.mjs";
export * from "./LevelAndPolicy.ta.mjs";
export * from "./LevelEffortAndDecisionPolicy.ta.mjs";
export * from "./LevelPolicyAssistance.ta.mjs";
export {
    type MRTDBTRVersion,
    MRTDBTRVersion_v0,
    _decode_MRTDBTRVersion,
    _encode_MRTDBTRVersion,
} from "./MRTDBTRVersion.ta.mjs";
export * from "./Modality.ta.mjs";
export * from "./NameProduct.ta.mjs";
export * from "./ProcessedLevel.ta.mjs";
export * from "./ProductInformation.ta.mjs";
export * from "./Provider.ta.mjs";
export * from "./Purpose.ta.mjs";
export * from "./ResultMatchClosedIdentify.ta.mjs";
export * from "./ResultMatchOpenIdentify.ta.mjs";
export * from "./ResultMatchVerify.ta.mjs";
export * from "./RoleProvider.ta.mjs";
export * from "./SamplesPerIndividual.ta.mjs";
export * from "./ScopeAccreditation.ta.mjs";
export * from "./SignedTestReport.ta.mjs";
export * from "./StandardDescription.ta.mjs";
export * from "./StatisticInformationSet.ta.mjs";
export * from "./TestCrewInformation.ta.mjs";
export * from "./TestLabInformation.ta.mjs";
export * from "./TestReportInformation.ta.mjs";
export * from "./TestReportScenario.ta.mjs";
export * from "./TestReportScenarioForOneCondition.ta.mjs";
export * from "./TestReportTechnology.ta.mjs";
export * from "./TestReportTechnologyForOneCondition.ta.mjs";
export * from "./TestResult.ta.mjs";
export * from "./TestResultAcquire.ta.mjs";
export * from "./TestResultEnrol.ta.mjs";
export * from "./TestResultIdentify.ta.mjs";
export * from "./TestResultVerify.ta.mjs";
export * from "./TypeDocument.ta.mjs";
export * from "./TypeProvider.ta.mjs";
export * from "./URI.ta.mjs";
export * from "./UnitTime.ta.mjs";
export {
    type VersionProduct,
    VersionProduct_v0,
    _decode_VersionProduct,
    _encode_VersionProduct,
} from "./VersionProduct.ta.mjs";
export * from "./id-signedTestReport.va.mjs";
export * from "./id-testReportScenario.va.mjs";
export * from "./id-testReportTechnology.va.mjs";
export * from "./signedTestReport.oa.mjs";
export * from "./testReportScenario.oa.mjs";
export * from "./testReportTechnology.oa.mjs";
