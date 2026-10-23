/**
 * @description
 *
 * Offline charging for northbound APIs on T8, between the Service
 * Capability Exposure Function (SCEF) and an SCS/AS. The SCEF is
 * the charging trigger function and collects charging information
 * per T8 transaction.
 *
 * `EASCERecord` is the exposure function API CDR (EA-SCE-CDR).
 * Clause 5.2.3.2.1 generates one record for each invocation or
 * notification event. Table 6.1.3.2.1 says a record is produced
 * for each API invocation to the SCEF.
 * With an integrated CDF, the SCEF writes the CDR. Otherwise the
 * SCEF sends Charging Data Request[Event] on Rf (TS 32.299) and
 * the CDF writes the CDR. CDRs go to the CGF on Ga and, when the
 * CGF is outside the billing domain, to that domain on Bea. The
 * SCEF supports at least one of Rf, Ga and Bea.
 *
 * The subscriber is the API invoker (the SCS or AS), identified by
 * the SCS Identifier. The TLTRI identifies the T8 transaction and
 * is stored on the SCEF and the SCS/AS for the life of that
 * transaction. The served party, when known, is
 * `externalIdentifier`.
 *
 * Chargeable events are an invocation or notification per T8
 * transaction, expiry of an operator-configured time limit, expiry
 * of an operator-configured invocation limit, and management
 * intervention. The Rf triggers are T8 creation (HTTP POST),
 * update (HTTP PATCH or HTTP PUT received by the SCEF), and
 * termination (HTTP DELETE). Each is reported as Charging Data
 * Request[Event]. Online charging on Ro, for IEC and ECUR, uses
 * the same exposure function API information.
 *
 * The T8 procedures in scope are those of TS 23.682 and TS 29.122:
 * Monitoring, background data transfer resource management,
 * changing the chargeable party, non-IP data delivery, device
 * triggering, group message delivery, network status reporting,
 * communication pattern provisioning, PFD management, enhanced
 * coverage restriction control, network parameter configuration,
 * AS session setup with required QoS, and MSISDN-less mobile
 * originated SMS.
 *
 * NEF and CAPIF converged charging is clause 5.4 and produces CHF
 * CDRs (clause 6.2a.3).
 *
 * Categories follow TS 32.240 clause 5.4, applied in clause
 * 6.1.1.1. Table 6.1.3.2.1 prints Oc. It prints OMM for Node Id,
 * which this specification does not define, and it leaves the
 * category of API Invocation Timestamp empty. CDR parameter
 * syntax is TS 32.298 clause 5.1.2.5, which points back here for
 * the field descriptions.
 *
 * 3GPP TS 32.254 V20.0.0 clauses 4.2, 5.1, 5.2, 5.3, 6.1.3
 * and 6.3.
 *
 * @see https://www.3gpp.org/DynaReport/32254.htm
 *
 * ASN.1 module `ExposureFunctionAPIChargingDataTypes`.
 *
 * Identical assignments that also appear in other charging modules
 * are re-exported from `shared`.
 */
export * from "./APIDirection.ta.mjs";
export * from "./APINetworkServiceNode.ta.mjs";
export * from "./DMI-EXTENSION.oca.mjs";
export * from "./EASCERecord.ta.mjs";
export * from "./ExposureFunctionAPIRecordType.ta.mjs";
export * from "./IPAddress.ta.mjs";
export * from "./IPBinV6AddressWithOrWithoutPrefixLength.ta.mjs";
export * from "./IPBinV6AddressWithPrefixLength.ta.mjs";
export * from "./IPBinaryAddress.ta.mjs";
export * from "./IPTextRepresentedAddress.ta.mjs";
export * from "./ManagementExtension.ta.mjs";
export * from "./ManagementExtensionSet.osa.mjs";
export * from "./RecordType.ta.mjs";
export * from "./SCSASAddress.ta.mjs";
export * from "./SubscriptionID-subscriptionIDType.ta.mjs";
export * from "./SubscriptionID.ta.mjs";
