/**
 * @description
 *
 * ASN.1 module `MAP-TS-Code`.
 *
 * Named `TeleserviceCode` and `Ext-TeleserviceCode` values for a single
 * teleservice, a group of teleservices, or all teleservices (3GPP TS 22.003).
 * `TeleserviceCode` is used only for supplementary service management;
 * `Ext-TeleserviceCode` only for subscriber profile management. One octet: bits
 * 8-5 are the group and bits 4-1 the specific service (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.4, 7.6.4.39 and 17.7.9).
 */
export * from "./Ext-TeleserviceCode.ta.mjs";
export * from "./TeleserviceCode.ta.mjs";
export * from "./allDataTeleservices.va.mjs";
export * from "./allFacsimileTransmissionServices.va.mjs";
export * from "./allPLMN-specificTS.va.mjs";
export * from "./allShortMessageServices.va.mjs";
export * from "./allSpeechTransmissionServices.va.mjs";
export * from "./allTeleservices-ExeptSMS.va.mjs";
export * from "./allTeleservices.va.mjs";
export * from "./allVoiceGroupCallServices.va.mjs";
export * from "./automaticFacsimileGroup3.va.mjs";
export * from "./emergencyCalls.va.mjs";
export * from "./facsimileGroup3AndAlterSpeech.va.mjs";
export * from "./facsimileGroup4.va.mjs";
export * from "./plmn-specificTS-1.va.mjs";
export * from "./plmn-specificTS-2.va.mjs";
export * from "./plmn-specificTS-3.va.mjs";
export * from "./plmn-specificTS-4.va.mjs";
export * from "./plmn-specificTS-5.va.mjs";
export * from "./plmn-specificTS-6.va.mjs";
export * from "./plmn-specificTS-7.va.mjs";
export * from "./plmn-specificTS-8.va.mjs";
export * from "./plmn-specificTS-9.va.mjs";
export * from "./plmn-specificTS-A.va.mjs";
export * from "./plmn-specificTS-B.va.mjs";
export * from "./plmn-specificTS-C.va.mjs";
export * from "./plmn-specificTS-D.va.mjs";
export * from "./plmn-specificTS-E.va.mjs";
export * from "./plmn-specificTS-F.va.mjs";
export * from "./shortMessageMO-PP.va.mjs";
export * from "./shortMessageMT-PP.va.mjs";
export * from "./telephony.va.mjs";
export * from "./voiceBroadcastCall.va.mjs";
export * from "./voiceGroupCall.va.mjs";
