/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_KPKdc
 * @description
 *
 * `1.3.6.1.5.2.3.5`. Extended key usage for a certificate that
 * signs KDC replies. RFC 4556 glosses it as "Signing KDC
 * responses". Unless the client already knows the certificate
 * belongs to a KDC, the client must require this usage. It is
 * not required when the certificate's {@link id_pkinit_san}
 * names the TGS of the target realm. When this usage restricts
 * the certificate, the `digitalSignature` key-usage bit must
 * be set.
 *
 * The client must also confirm that the issuing CA is allowed
 * to issue KDC certificates for that realm. Which CAs those
 * are is local policy. If a trusted CA also issues other
 * certificates, local policy must be able to tell the KDC
 * certificates apart, for example by requiring this usage or
 * an `id-pkinit-san`.
 *
 * Windows 2000 Enterprise CAs put a `dNSName` of the KDC host
 * and `id-kp-serverAuth` on KDC certificates, not this usage.
 * Windows 2003 adds `id-ms-kp-sc-logon`. The Windows release
 * RFC 4556 anticipated uses a `dNSName` of the KDC's domain
 * plus this usage and `id-kp-serverAuth`, and still does not
 * use `id-pkinit-san`. Windows clients also require the issuer
 * to be one of a configured set of KDC-certificate issuers.
 *
 * [RFC 4556, section 3.2.4](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.4)
 * and
 * [Appendix C](https://www.rfc-editor.org/rfc/rfc4556#appendix-C).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-KPKdc         OBJECT IDENTIFIER ::= { id-pkinit 5 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_KPKdc: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_pkinit);

/* eslint-enable */
