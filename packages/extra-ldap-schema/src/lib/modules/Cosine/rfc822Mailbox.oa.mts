/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { mail } from "../Cosine/mail.oa.mjs";


/**
 * @summary rfc822Mailbox
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rfc822Mailbox ATTRIBUTE ::= mail
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const rfc822Mailbox: ATTRIBUTE = mail;

/* eslint-enable */

