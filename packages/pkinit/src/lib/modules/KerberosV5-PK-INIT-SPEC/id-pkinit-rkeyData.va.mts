/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_rkeyData
 * @description
 *
 * `1.3.6.1.5.2.3.3`. `eContentType` of the inner `SignedData`
 * in the `encKeyPack` alternative of {@link PA_PK_AS_REP}, and
 * the value of that `SignedData`'s signed `content-type`
 * attribute. The content is a `ReplyKeyPack`. This module does
 * not define `ReplyKeyPack`; see {@link PA_PK_AS_REP}.
 *
 * [RFC 4556, section 3.2.3.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-rkeyData      OBJECT IDENTIFIER ::= { id-pkinit 3 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_rkeyData: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_pkinit);

/* eslint-enable */
