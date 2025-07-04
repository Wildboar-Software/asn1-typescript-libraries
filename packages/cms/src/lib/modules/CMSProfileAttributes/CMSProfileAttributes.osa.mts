/* eslint-disable */
import { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { aa_contentLocation } from "../CMSProfileAttributes/aa-contentLocation.oa.mjs";
import { aa_contentLocations } from "../CMSProfileAttributes/aa-contentLocations.oa.mjs";
import { aa_parentBlock } from "../CMSProfileAttributes/aa-parentBlock.oa.mjs";
import { aa_precedingBlock } from "../CMSProfileAttributes/aa-precedingBlock.oa.mjs";
import { aa_sidechains } from "../CMSProfileAttributes/aa-sidechains.oa.mjs";
import { aa_signerInfo } from "../CMSProfileAttributes/aa-signerInfo.oa.mjs";
import { aa_signerInfos } from "../CMSProfileAttributes/aa-signerInfos.oa.mjs";
import { aa_timeStamped } from "../CMSProfileAttributes/aa-timeStamped.oa.mjs";

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

/* eslint-enable */
