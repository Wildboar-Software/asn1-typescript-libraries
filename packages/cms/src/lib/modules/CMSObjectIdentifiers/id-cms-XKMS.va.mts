/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { xmlMarkup } from "../CMSObjectIdentifiers/xmlMarkup.va.mjs";

/**
 * @summary id_cms_XKMS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cms-XKMS OID ::= { xmlMarkup xkms(2) }
 * ```
 *
 * @constant
 */
export const id_cms_XKMS: OID = new _OID([/* xkms */ 2], xmlMarkup);

/* eslint-enable */
