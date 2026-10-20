/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../EKCredentialProfileV2/tcg.va.mjs";
// export { tcg } from "../EKCredentialProfileV2/tcg.va.mjs";


/**
 * @summary tcg_kp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp                          OBJECT IDENTIFIER ::= {tcg 8}
 * ```
 * 
 * @constant
 */
export
const tcg_kp: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], tcg);

/* eslint-enable */
