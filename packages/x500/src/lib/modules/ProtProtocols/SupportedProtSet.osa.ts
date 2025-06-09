/* eslint-disable */
import { avlProt } from "../ProtProtocols/avlProt.oa.js";
import { casubProt } from "../ProtProtocols/casubProt.oa.js";
import { tbprot } from "../ProtProtocols/tbprot.oa.js";
import { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca.js";
export { avlProt } from "../ProtProtocols/avlProt.oa.js";
export { casubProt } from "../ProtProtocols/casubProt.oa.js";
export { tbprot } from "../ProtProtocols/tbprot.oa.js";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca.js";

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
