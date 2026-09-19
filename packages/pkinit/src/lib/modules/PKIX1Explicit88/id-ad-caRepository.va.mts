/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ad } from "../PKIX1Explicit88/id-ad.va.mjs";
// export { id_ad } from "../PKIX1Explicit88/id-ad.va.mjs";


/**
 * @summary id_ad_caRepository
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ad-caRepository OBJECT IDENTIFIER ::= { id-ad 5 }
 * ```
 * 
 * @constant
 */
export
const id_ad_caRepository: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_ad);

/* eslint-enable */
