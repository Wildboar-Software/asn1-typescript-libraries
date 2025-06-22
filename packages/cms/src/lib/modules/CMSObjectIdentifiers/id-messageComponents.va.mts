/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { xmlMarkup } from "../CMSObjectIdentifiers/xmlMarkup.va.mjs";

/**
 * @summary id_messageComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-messageComponents OID ::= { xmlMarkup mc(3) }
 * ```
 *
 * @constant
 */
export const id_messageComponents: OID = _OID.fromParts([/* mc */ 3], xmlMarkup);

/* eslint-enable */
