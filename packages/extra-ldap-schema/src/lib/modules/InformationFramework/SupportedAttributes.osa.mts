/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { aliasedEntryName } from "../InformationFramework/aliasedEntryName.oa.mjs";

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
