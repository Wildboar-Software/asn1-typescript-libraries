/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_logo } from "../LogotypeCertExtn/id-logo.va.mjs";
// export { id_logo } from "../LogotypeCertExtn/id-logo.va.mjs";


/**
 * @summary id_logo_background
 * @description
 *
 * Certificate-background logotype, `{ id-logo 2 }`
 * (`1.3.6.1.5.5.7.20.2`). Used as
 * {@link OtherLogotypeInfo.logotypeType}. It carries a graphical
 * image intended as the certificate background, a general audio
 * sequence for the certificate, or both. A background image keeps
 * black text clearly readable when the text is placed on top of it.
 * An extension contains at most one certificate-background logotype.
 * Every logotype included in a certificate also has at least one
 * image file
 * ([section 3](https://www.rfc-editor.org/rfc/rfc3709#section-3)).
 *
 * [RFC 3709, section 4.2](https://www.rfc-editor.org/rfc/rfc3709#section-4.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-logo-background OBJECT IDENTIFIER ::= { id-logo 2 }
 * ```
 * 
 * @constant
 */
export
const id_logo_background: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_logo);

/* eslint-enable */
