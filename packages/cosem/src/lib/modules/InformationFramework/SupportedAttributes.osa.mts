/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { aliasedEntryName } from "../InformationFramework/aliasedEntryName.oa.mjs";
// export { aliasedEntryName } from "../InformationFramework/aliasedEntryName.oa.mjs";


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
export
const SupportedAttributes: (ATTRIBUTE)[] = [ objectClass, aliasedEntryName, ];

/* eslint-enable */
