/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { xmlMarkup } from "../CMSObjectIdentifiers/xmlMarkup.va.mjs";

/**
 * @summary id_cms_SAML
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cms-SAML OID ::= { xmlMarkup saml(1) }
 * ```
 *
 * @constant
 */
export const id_cms_SAML: OID = _OID.fromParts([/* saml */ 1], xmlMarkup);

/* eslint-enable */
