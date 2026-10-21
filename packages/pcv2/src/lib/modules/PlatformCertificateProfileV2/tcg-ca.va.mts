/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_ca
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-ca                                          OBJECT IDENTIFIER ::= {tcg 11}
 * ```
 * 
 * @constant
 */
export
const tcg_ca: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], tcg);

/* eslint-enable */
