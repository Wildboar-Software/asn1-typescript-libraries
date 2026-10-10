/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_KPClientAuth
 * @description
 *
 * `1.3.6.1.5.2.3.4`. Extended key usage a KDC may require on
 * the client certificate. RFC 4556 glosses it as "PKINIT client
 * authentication". When this usage restricts the certificate,
 * the `digitalSignature` key-usage bit must be set. If the KDC
 * requires the usage and it is missing, or
 * [RFC 3280 section 4.2.1.13](https://www.rfc-editor.org/rfc/rfc3280#section-4.2.1.13)
 * forbids this purpose, the KDC returns
 * `KDC_ERR_INCONSISTENT_KEY_PURPOSE` (77) with no e-data.
 *
 * A KDC that enforces this usage should also accept
 * `id-ms-kp-sc-logon` (`1.3.6.1.4.1.311.20.2.2`). Windows 2000
 * and Windows Server 2003 KDCs instead require that Microsoft
 * usage together with the SAN `id-ms-san-sc-logon-upn`
 * (`1.3.6.1.4.1.311.20.2.3`). That SAN is a UTF-8 string equal
 * to the account's `UserPrincipalName`.
 *
 * [RFC 4556, section 3.2.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.2)
 * and
 * [Appendix C](https://www.rfc-editor.org/rfc/rfc4556#appendix-C).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-KPClientAuth  OBJECT IDENTIFIER ::= { id-pkinit 4 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_KPClientAuth: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_pkinit);

/* eslint-enable */
