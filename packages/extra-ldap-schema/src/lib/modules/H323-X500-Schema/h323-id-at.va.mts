/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { h323_Id } from "../H323-X500-Schema/h323-Id.va.mjs";

/**
 * @summary h323_id_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h323-id-at OBJECT IDENTIFIER ::= {h323-Id at(1)}
 * ```
 * 
 * @constant
 */
export
const h323_id_at: OBJECT_IDENTIFIER = _OID.fromParts([
    /* at */ 1,
], h323_Id);

/* eslint-enable */
