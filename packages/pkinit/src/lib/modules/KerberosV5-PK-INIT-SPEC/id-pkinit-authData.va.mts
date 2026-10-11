/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_authData
 * @description
 *
 * `1.3.6.1.5.2.3.1`. `eContentType` of the `SignedData` in
 * {@link PA_PK_AS_REQ.signedAuthPack}, and the value of that
 * `SignedData`'s signed `content-type` attribute. The content
 * is an {@link AuthPack}. If the KDC will not accept the digest
 * algorithm used with this content type, it returns
 * `KDC_ERR_DIGEST_IN_SIGNED_DATA_NOT_ACCEPTED` (80).
 *
 * [RFC 4556, section 3.2.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-authData      OBJECT IDENTIFIER ::= { id-pkinit 1 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_authData: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_pkinit);

/* eslint-enable */
