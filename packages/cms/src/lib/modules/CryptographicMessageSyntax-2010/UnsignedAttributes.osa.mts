/* eslint-disable */
import { aa_countersignature } from "../CryptographicMessageSyntax-2010/aa-countersignature.oa.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
export { aa_countersignature } from "../CryptographicMessageSyntax-2010/aa-countersignature.oa.mjs";

/* START_OF_SYMBOL_DEFINITION UnsignedAttributes */
/**
 * @summary UnsignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedAttributes ATTRIBUTE ::= { aa-countersignature, ... }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const UnsignedAttributes: ATTRIBUTE[] = [aa_countersignature];
/* END_OF_SYMBOL_DEFINITION UnsignedAttributes */

/* eslint-enable */
