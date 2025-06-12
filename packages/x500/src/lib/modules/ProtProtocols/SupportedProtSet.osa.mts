/* eslint-disable */
import { avlProt } from "../ProtProtocols/avlProt.oa.mjs";
import { casubProt } from "../ProtProtocols/casubProt.oa.mjs";
import { tbprot } from "../ProtProtocols/tbprot.oa.mjs";
import { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca.mjs";
export { avlProt } from "../ProtProtocols/avlProt.oa.mjs";
export { casubProt } from "../ProtProtocols/casubProt.oa.mjs";
export { tbprot } from "../ProtProtocols/tbprot.oa.mjs";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca.mjs";

/* START_OF_SYMBOL_DEFINITION SupportedProtSet */
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
/* END_OF_SYMBOL_DEFINITION SupportedProtSet */

/* eslint-enable */
