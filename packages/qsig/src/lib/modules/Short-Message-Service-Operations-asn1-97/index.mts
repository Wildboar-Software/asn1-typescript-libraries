/**
 * @module
 * @description
 *
 * Short Message Service (SMS) at the Q reference point. A PISN user
 * sends and receives short messages through a Service Centre:
 * submit, deliver, status report, command, and service-centre alert.
 * ECMA-325 1st edition (June 2001), §6.1. These types follow Table 1
 * as corrected by the 25 September 2001 errata (`SmsSubmitRes` tags
 * and the tags on `SmsStatusReportArg`).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export * from "./ApplicationPort16BitHeader.ta.mjs";
export * from "./ApplicationPort8BitHeader.ta.mjs";
export * from "./CommandData.ta.mjs";
export * from "./CommandType.ta.mjs";
export * from "./Concatenated16BitSMHeader.ta.mjs";
export * from "./Concatenated8BitSMHeader.ta.mjs";
export * from "./DataHeaderSourceIndicator.ta.mjs";
export * from "./DischargeTime.ta.mjs";
export * from "./DummyRes.ta.mjs";
export * from "./EnhancedVP.ta.mjs";
export * from "./FailureCause.ta.mjs";
export * from "./GenericUserValue.ta.mjs";
export * from "./MessageReference.ta.mjs";
export * from "./ProtocolIdentifier.ta.mjs";
export * from "./ResChoiceSeq.ta.mjs";
export * from "./ScAlertArg.ta.mjs";
export * from "./ServiceCentreTimeStamp.ta.mjs";
export * from "./ShortMessageText.ta.mjs";
export * from "./ShortMessageTextData.ta.mjs";
export * from "./ShortMessageTextType.ta.mjs";
export * from "./SmDeliverParameter.ta.mjs";
export * from "./SmSubmitParameter.ta.mjs";
export * from "./Sms-Operations.osa.mjs";
export * from "./SmsCommandArg.ta.mjs";
export * from "./SmsCommandRes.ta.mjs";
export * from "./SmsDeliverArg.ta.mjs";
export * from "./SmsDeliverRes.ta.mjs";
export * from "./SmsDeliverResChoice.ta.mjs";
export * from "./SmsExtSet.osa.mjs";
export * from "./SmsExtension.ta.mjs";
export * from "./SmsStatusReportArg.ta.mjs";
export * from "./SmsStatusReportRes.ta.mjs";
export * from "./SmsStatusReportResponseChoice.ta.mjs";
export * from "./SmsSubmitArg.ta.mjs";
export * from "./SmsSubmitRes.ta.mjs";
export * from "./SmscControlParameterHeader.ta.mjs";
export * from "./Status.ta.mjs";
export * from "./UserData.ta.mjs";
export * from "./UserDataHeader.ta.mjs";
export * from "./UserDataHeaderChoice.ta.mjs";
export * from "./ValidityPeriod.ta.mjs";
export * from "./ValidityPeriodAbs.ta.mjs";
export * from "./ValidityPeriodEnh.ta.mjs";
export * from "./ValidityPeriodRel.ta.mjs";
export * from "./ValidityPeriodSemi.ta.mjs";
export * from "./WirelessControlHeader.ta.mjs";
export * from "./scAlert.oa.mjs";
export * from "./smsCommand.oa.mjs";
export * from "./smsCommandError-ParameterType.ta.mjs";
export * from "./smsCommandError.oa.mjs";
export * from "./smsDeliver.oa.mjs";
export * from "./smsDeliverError-ParameterType.ta.mjs";
export * from "./smsDeliverError.oa.mjs";
export * from "./smsStatusReport.oa.mjs";
export * from "./smsStatusReportError-ParameterType.ta.mjs";
export * from "./smsStatusReportError.oa.mjs";
export * from "./smsSubmit.oa.mjs";
export * from "./smsSubmitError-ParameterType.ta.mjs";
export * from "./smsSubmitError.oa.mjs";
export * from "./unspecified.oa.mjs";
