/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_traits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-traits                                      OBJECT IDENTIFIER ::= {tcg 19}
 * ```
 * 
 * @constant
 */
export
const tcg_traits: OBJECT_IDENTIFIER = _OID.fromParts([
    19,
], tcg);

/* eslint-enable */
