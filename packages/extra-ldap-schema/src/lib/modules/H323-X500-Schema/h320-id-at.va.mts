/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { h320_Id } from "../H323-X500-Schema/h320-Id.va.mjs";


/**
 * @summary h320_id_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h320-id-at OBJECT IDENTIFIER ::= {h320-Id at(1)}
 * ```
 * 
 * @constant
 */
export
const h320_id_at: OBJECT_IDENTIFIER = _OID.fromParts([
    /* at */ 1,
], h320_Id);

/* eslint-enable */

