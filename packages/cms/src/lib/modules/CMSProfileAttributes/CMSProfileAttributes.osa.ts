/* eslint-disable */
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import { aa_contentLocation } from "../CMSProfileAttributes/aa-contentLocation.oa.js";
import { aa_contentLocations } from "../CMSProfileAttributes/aa-contentLocations.oa.js";
import { aa_parentBlock } from "../CMSProfileAttributes/aa-parentBlock.oa.js";
import { aa_precedingBlock } from "../CMSProfileAttributes/aa-precedingBlock.oa.js";
import { aa_sidechains } from "../CMSProfileAttributes/aa-sidechains.oa.js";
import { aa_signerInfo } from "../CMSProfileAttributes/aa-signerInfo.oa.js";
import { aa_signerInfos } from "../CMSProfileAttributes/aa-signerInfos.oa.js";
import { aa_timeStamped } from "../CMSProfileAttributes/aa-timeStamped.oa.js";
export { aa_contentLocation } from "../CMSProfileAttributes/aa-contentLocation.oa.js";
export { aa_contentLocations } from "../CMSProfileAttributes/aa-contentLocations.oa.js";
export { aa_parentBlock } from "../CMSProfileAttributes/aa-parentBlock.oa.js";
export { aa_precedingBlock } from "../CMSProfileAttributes/aa-precedingBlock.oa.js";
export { aa_sidechains } from "../CMSProfileAttributes/aa-sidechains.oa.js";
export { aa_signerInfo } from "../CMSProfileAttributes/aa-signerInfo.oa.js";
export { aa_signerInfos } from "../CMSProfileAttributes/aa-signerInfos.oa.js";
export { aa_timeStamped } from "../CMSProfileAttributes/aa-timeStamped.oa.js";

/* START_OF_SYMBOL_DEFINITION CMSProfileAttributes */
/**
 * @summary CMSProfileAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSProfileAttributes ATTRIBUTE ::= {
 * aa-signerInfo | aa-signerInfos | aa-contentLocation |
 * aa-contentLocations | aa-precedingBlock | aa-timeStamped |
 * aa-sidechains | aa-parentBlock, ...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const CMSProfileAttributes: ATTRIBUTE[] = [
    aa_signerInfo,
    aa_signerInfos,
    aa_contentLocation,
    aa_contentLocations,
    aa_precedingBlock,
    aa_timeStamped,
    aa_sidechains,
    aa_parentBlock,
];
/* END_OF_SYMBOL_DEFINITION CMSProfileAttributes */

/* eslint-enable */
