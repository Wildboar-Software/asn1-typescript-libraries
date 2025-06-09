/* eslint-disable */
import { aliasedEntryName } from "../InformationFramework/aliasedEntryName.oa.js";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import { objectClass } from "../InformationFramework/objectClass.oa.js";
export { aliasedEntryName } from "../InformationFramework/aliasedEntryName.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { objectClass } from "../InformationFramework/objectClass.oa.js";

/* START_OF_SYMBOL_DEFINITION SupportedAttributes */
/**
 * @summary SupportedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAttributes ATTRIBUTE ::= {objectClass | aliasedEntryName, ...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SupportedAttributes: ATTRIBUTE[] = [objectClass, aliasedEntryName];
/* END_OF_SYMBOL_DEFINITION SupportedAttributes */

/* eslint-enable */
