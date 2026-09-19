/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ad } from "../PKIX1Explicit88/id-ad.va.mjs";
// export { id_ad } from "../PKIX1Explicit88/id-ad.va.mjs";


/**
 * @summary id_ad_timeStamping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ad-timeStamping OBJECT IDENTIFIER ::= { id-ad 3 }
 * ```
 * 
 * @constant
 */
export
const id_ad_timeStamping: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_ad);

/* eslint-enable */
