/* eslint-disable */
import { uniqueIdentifier } from "../CMSDBKeyManagement/uniqueIdentifier.oa.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";

/**
 * @summary DbEKMAttributes
 * @description
 *
 * Object set of DBEKM attributes. (ITU-T X.894 | ISO/IEC 24824-4 clause 9.2 / Annex A.16).
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
