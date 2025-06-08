/* eslint-disable */
import { uniqueIdentifier } from "../CMSDBKeyManagement/uniqueIdentifier.oa";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
export { uniqueIdentifier } from "../CMSDBKeyManagement/uniqueIdentifier.oa";

/* START_OF_SYMBOL_DEFINITION DbEKMAttributes */
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
/* END_OF_SYMBOL_DEFINITION DbEKMAttributes */

/* eslint-enable */
