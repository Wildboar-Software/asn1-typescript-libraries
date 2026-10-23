/**
 * @module
 * @description
 *
 * Wireless Terminal Call Handling (ECMA-304 2nd edition, December 2001).
 * ANF-WTMI directs an incoming call to a WTMI user whose PINX is not fixed.
 * ANF-WTMO lets the Home PINX process a call request from a WTMO user. Module
 * `Wireless-Terminal-Call-Handling-Operations-asn1-97`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 */
export * from "./AlternativeId.ta.mjs";
export * from "./CfuActivated.ta.mjs";
export * from "./CurrLocation.ta.mjs";
export * from "./DivertArg.ta.mjs";
export * from "./DummyRes.ta.mjs";
export * from "./EnquiryArg.ta.mjs";
export * from "./EnquiryRes.ta.mjs";
export * from "./InformArg.ta.mjs";
export * from "./SubscriptionOption.ta.mjs";
export * from "./WTMCH-Operations.osa.mjs";
export * from "./WTMCHExtSet.osa.mjs";
export * from "./WtmIdentity-both.ta.mjs";
export * from "./WtmIdentity.ta.mjs";
export * from "./WtmiExtension.ta.mjs";
export * from "./WtmoArg-extension.ta.mjs";
export * from "./WtmoArg.ta.mjs";
export * from "./locationNotKnown.oa.mjs";
export * from "./unspecified.oa.mjs";
export * from "./wtmiDivert.oa.mjs";
export * from "./wtmiEnquiry.oa.mjs";
export * from "./wtmiInform.oa.mjs";
export * from "./wtmoCall.oa.mjs";
