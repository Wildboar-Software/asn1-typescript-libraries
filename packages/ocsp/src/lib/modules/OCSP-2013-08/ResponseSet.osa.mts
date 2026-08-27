/* eslint-disable */
import { basicResponse } from "../OCSP-2013-08/basicResponse.oa.mjs";
import { type RESPONSE } from "../OCSP-2013-08/RESPONSE.oca.mjs";

/**
 * @summary ResponseSet
 * @description
 *
 * Extensible set of known OCSP `RESPONSE` information objects
 * ([RFC 6960](https://datatracker.ietf.org/doc/html/rfc6960)
 * Appendix B.2). Starts with `basicResponse` (`id-pkix-ocsp-basic`);
 * further response types may be added via the extension marker.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSet RESPONSE ::= {basicResponse, ...}
 * ```
 *
 * @constant
 * @type {RESPONSE[]}
 *
 */
export const ResponseSet: RESPONSE<any>[] = [basicResponse];

/* eslint-enable */
