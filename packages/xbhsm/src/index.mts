/**
 * @description
 *
 * Telebiometric authentication types from
 * [ITU-T X.1085 (10/2016)](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922:2017. Covers the biometric hardware security
 * module (BHSM) pseudonymous identifier (PSID) and the
 * encrypted-PSID dataset carried in a certification request
 * (clauses 1, 8, Annex A).
 *
 * @see https://www.itu.int/rec/T-REC-X.1085-201610-I
 * @see https://www.itu.int/wftp3/Public/t/fl/itu-t/x/x1085/2016/XBHSM.html
 */
export * from "./lib/modules/XBHSM/index.mjs";
export * from "./lib/modules/AuthenticationFramework/index.mjs";
