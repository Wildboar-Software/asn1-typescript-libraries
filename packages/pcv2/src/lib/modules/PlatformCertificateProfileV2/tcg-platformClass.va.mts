/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_platformClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-platformClass                               OBJECT IDENTIFIER ::= {tcg 5}
 * ```
 * 
 * @constant
 */
export
const tcg_platformClass: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], tcg);

/* eslint-enable */
