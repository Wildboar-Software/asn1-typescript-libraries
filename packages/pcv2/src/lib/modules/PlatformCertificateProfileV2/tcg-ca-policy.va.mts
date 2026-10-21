/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_ca } from "../PlatformCertificateProfileV2/tcg-ca.va.mjs";


/**
 * @summary tcg_ca_policy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tcg-ca-policy OBJECT IDENTIFIER ::= {tcg-ca 1}
 * ```
 *
 * @constant
 */
export
const tcg_ca_policy: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_ca);

/* eslint-enable */
