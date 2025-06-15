/* eslint-disable */
import { avlProt } from "../ProtProtocols/avlProt.oa.mjs";
import { casubProt } from "../ProtProtocols/casubProt.oa.mjs";
import { tbprot } from "../ProtProtocols/tbprot.oa.mjs";
import { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca.mjs";
/**
 * @summary SupportedProtSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedProtSet WRAPPED-PROT ::= {avlProt | casubProt | tbprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT[]}
 *
 */
export const SupportedProtSet: WRAPPED_PROT[] = [avlProt, casubProt, tbprot];

/* eslint-enable */
