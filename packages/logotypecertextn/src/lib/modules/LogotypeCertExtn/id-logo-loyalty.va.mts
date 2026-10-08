/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_logo } from "../LogotypeCertExtn/id-logo.va.mjs";
// export { id_logo } from "../LogotypeCertExtn/id-logo.va.mjs";


/**
 * @summary id_logo_loyalty
 * @description
 *
 * Loyalty-program logotype, `{ id-logo 1 }`
 * (`1.3.6.1.5.5.7.20.1`). Used as
 * {@link OtherLogotypeInfo.logotypeType}. The logotype is associated
 * with a loyalty program related to the certificate or its use.
 * RFC 3709 leaves that relationship unspecified. One extension may
 * carry more than one loyalty logotype.
 *
 * [RFC 3709, section 4.2](https://www.rfc-editor.org/rfc/rfc3709#section-4.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-logo-loyalty    OBJECT IDENTIFIER ::= { id-logo 1 }
 * ```
 * 
 * @constant
 */
export
const id_logo_loyalty: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_logo);

/* eslint-enable */
