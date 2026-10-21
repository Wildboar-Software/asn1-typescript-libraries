/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-address                                     OBJECT IDENTIFIER ::= {tcg 17}
 * ```
 * 
 * @constant
 */
export
const tcg_address: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
], tcg);

/* eslint-enable */
