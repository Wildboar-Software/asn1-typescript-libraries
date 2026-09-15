/* eslint-disable */
import { type BHSM_PSID } from "../XBHSM/BHSM-PSID.oca.mjs";
import { bioRef } from "../XBHSM/bioRef.oa.mjs";

/**
 * @summary SupportedBHSM_PSID
 * @description
 *
 * Extensible `BHSM-PSID` information-object set. The published
 * module contains only `bioRef`
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedBHSM-PSID BHSM-PSID ::= {bioRef,...}
 * ```
 *
 * @constant
 * @type {BHSM_PSID[]}
 *
 */
export const SupportedBHSM_PSID: BHSM_PSID[] = [bioRef];

/* eslint-enable */
