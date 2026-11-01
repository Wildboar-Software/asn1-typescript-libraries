/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { h235_Id } from "../H323-X500-Schema/h235-Id.va.mjs";
// export { h235_Id } from "../H323-X500-Schema/h235-Id.va.mjs";


/**
 * @summary h235_id_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h235-id-at OBJECT IDENTIFIER ::= {h235-Id at(1)}
 * ```
 * 
 * @constant
 */
export
const h235_id_at: OBJECT_IDENTIFIER = _OID.fromParts([
    /* at */ 1,
], h235_Id);

/* eslint-enable */
