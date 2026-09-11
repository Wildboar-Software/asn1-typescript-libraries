/* eslint-disable */
import { type BHSM_PSID } from "../XBHSM/BHSM-PSID.oca.mjs";
import { bioRef } from "../XBHSM/bioRef.oa.mjs";

/**
 * @summary SupportedBHSM_PSID
 * @description
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
