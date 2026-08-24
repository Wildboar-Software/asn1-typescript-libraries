/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary LinkId
 * @description
 *
 * INTEGER uniquely identifying an outstanding LDAP operation among those
 * forwarded to a particular adjacent DSA. OPTIONAL on `LdapArgument`
 * (present iff the LDAP op may yield multiple results); required on
 * `LinkedArgument`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkId  ::=  INTEGER
 * ```
 */
export type LinkId = INTEGER;


export const _decode_LinkId = $._decodeInteger;


export const _encode_LinkId = $._encodeInteger;


/* eslint-enable */
