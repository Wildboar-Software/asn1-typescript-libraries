/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JPEG
 * @description
 *
 * A JPEG image (JFIF), as an octet string.
 *
 * Common content uses it for `aCPNetworkSchemaEdB`, a
 * drawing of a network and the rules of that network,
 * and for `aCPNetwAccessSchemaEdB`, a drawing of how to
 * complete access from one network to another when the
 * connection is complex enough to need one. Leave the
 * access-schema attribute empty when the connection is
 * not that complex. ACP 133 SUPP-1(A) also uses this
 * syntax for `jpegPhoto`.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.5](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.5)
 * and
 * [section 3.6](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.6).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JPEG  ::=  OCTET STRING
 * ```
 */
export
type JPEG = OCTET_STRING; // OctetStringType
export const _decode_JPEG = $._decodeOctetString;
export const _encode_JPEG = $._encodeOctetString;


/* eslint-enable */
