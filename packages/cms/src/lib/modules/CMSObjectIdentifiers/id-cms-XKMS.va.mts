/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { xmlMarkup } from "../CMSObjectIdentifiers/xmlMarkup.va.mjs";

/**
 * @summary id_cms_XKMS
 * @description
 *
 * OID for CMS XKMS XML markup (ITU-T X.894 | ISO/IEC 24824-4).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cms-XKMS OID ::= { xmlMarkup xkms(2) }
 * ```
 *
 * @constant
 */
export const id_cms_XKMS: OID = _OID.fromParts([/* xkms */ 2], xmlMarkup);

/* eslint-enable */
