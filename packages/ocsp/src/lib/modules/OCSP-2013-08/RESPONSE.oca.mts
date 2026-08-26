/* eslint-disable */
import { TYPE_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary RESPONSE
 * @description
 *
 * Information object class for OCSP response types (a
 * `TYPE-IDENTIFIER` relating a response type OID to its ASN.1 type)
 * ([RFC 6960](https://datatracker.ietf.org/doc/html/rfc6960)
 * Appendix B.2). Instances such as `basicResponse` populate
 * `ResponseSet` and type the `ResponseBytes` fields.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RESPONSE ::= TYPE-IDENTIFIER
 * ```
 */
export type RESPONSE<Type> = TYPE_IDENTIFIER<Type>;

/* eslint-enable */
