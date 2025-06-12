/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import { aa_encrypKeyPref } from "../SecureMimeMessageV3dot1-2009/aa-encrypKeyPref.oa.js";
import { aa_smimeCapabilities } from "../SecureMimeMessageV3dot1-2009/aa-smimeCapabilities.oa.js";
export { aa_encrypKeyPref } from "../SecureMimeMessageV3dot1-2009/aa-encrypKeyPref.oa.js";
export { aa_smimeCapabilities } from "../SecureMimeMessageV3dot1-2009/aa-smimeCapabilities.oa.js";

/* START_OF_SYMBOL_DEFINITION SMimeAttributeSet */
/**
 * @summary SMimeAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMimeAttributeSet ATTRIBUTE ::= { aa-smimeCapabilities | aa-encrypKeyPref,
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SMimeAttributeSet: ATTRIBUTE[] = [
    aa_smimeCapabilities,
    aa_encrypKeyPref,
];
/* END_OF_SYMBOL_DEFINITION SMimeAttributeSet */

/* eslint-enable */
