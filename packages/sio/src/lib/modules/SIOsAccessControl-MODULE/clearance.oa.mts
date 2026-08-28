/**
 * @summary clearance
 * @description
 *
 * Directory attribute of syntax `Clearance`. OID
 * `{joint-iso-itu-t ds(5) attributeType(4) clearance(55)}`
 * (`id-at-clearance`), imported from X.501. Typically carried in a
 * user certificate. The data owner's clearance limits which SPIF
 * values they may assert in a target label. Re-exported from
 * `@wildboar/x500`. ITU-T Rec. X.841 (10/2000)
 * [§6.3.2](https://www.itu.int/rec/T-REC-X.841-200010-I), §7.2.
 */
export { clearance } from "@wildboar/x500/EnhancedSecurity";
