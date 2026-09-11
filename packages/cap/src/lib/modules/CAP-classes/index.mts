/**
 * @description
 *
 * ASN.1 module `CAP-classes` (3GPP TS 29.078 V19.0.0 clause 5.5).
 *
 * ROS-OBJECT-CLASS definitions for gsmSSF, gsmSRF, smsSSF-V3 (MO SMS),
 * smsSSF-V4 (MT SMS) and gprsSSF (who INITIATES/RESPONDS which
 * CONTRACTs); the `EXTENSION` class (Global OID only; criticality
 * `ignore` only); example `firstExtension` / `SupportedExtensions`;
 * and `PARAMETERS-BOUND` / `cAPSpecificBoundSet` size bounds used to
 * instantiate parameterized CAP types (Rel-6 values unchanged from Rel-5).
 */
export * from "./cAPSpecificBoundSet.oa.mjs";
export * from "./EXTENSION.oca.mjs";
export * from "./firstExtension.oa.mjs";
export * from "./gprsSSF.oa.mjs";
export * from "./gsmSRF.oa.mjs";
export * from "./gsmSSF.oa.mjs";
export * from "./PARAMETERS-BOUND.oca.mjs";
export * from "./smsSSF-V3.oa.mjs";
export * from "./smsSSF-V4.oa.mjs";
export * from "./SupportedExtensions.osa.mjs";
