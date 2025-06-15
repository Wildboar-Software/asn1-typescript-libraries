/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import { aa_encrypKeyPref } from "../SecureMimeMessageV3dot1-2009/aa-encrypKeyPref.oa.mjs";
import { aa_smimeCapabilities } from "../SecureMimeMessageV3dot1-2009/aa-smimeCapabilities.oa.mjs";

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

/* eslint-enable */
