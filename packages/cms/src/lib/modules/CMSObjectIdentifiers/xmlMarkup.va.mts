/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { id_cms_attributes } from "../CMSObjectIdentifiers/id-cms-attributes.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary xmlMarkup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xmlMarkup OID ::= { id-cms-attributes xml(0) }
 * ```
 *
 * @constant
 */
export const xmlMarkup: OID = _OID.fromParts([/* xml */ 0], id_cms_attributes);

/* eslint-enable */
