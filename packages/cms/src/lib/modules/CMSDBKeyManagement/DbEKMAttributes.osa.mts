/* eslint-disable */
import { uniqueIdentifier } from "../CMSDBKeyManagement/uniqueIdentifier.oa.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";

/**
 * @summary DbEKMAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbEKMAttributes ATTRIBUTE ::= {
 * uniqueIdentifier,
 * ...    -- Expect user schema identifier attributes --
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const DbEKMAttributes: ATTRIBUTE[] = [uniqueIdentifier];

/* eslint-enable */
