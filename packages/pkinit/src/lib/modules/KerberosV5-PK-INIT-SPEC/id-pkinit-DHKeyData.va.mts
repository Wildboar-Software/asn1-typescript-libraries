/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_DHKeyData
 * @description
 *
 * `1.3.6.1.5.2.3.2`. `eContentType` of the `SignedData` in
 * {@link DHRepInfo.dhSignedData}, and the value of that
 * `SignedData`'s signed `content-type` attribute. The content
 * is a {@link KDCDHKeyInfo}.
 *
 * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-DHKeyData     OBJECT IDENTIFIER ::= { id-pkinit 2 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_DHKeyData: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_pkinit);

/* eslint-enable */
