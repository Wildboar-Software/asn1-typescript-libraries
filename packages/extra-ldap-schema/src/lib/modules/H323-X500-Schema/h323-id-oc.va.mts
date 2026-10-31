/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { h323_Id } from "../H323-X500-Schema/h323-Id.va.mjs";
// export { h323_Id } from "../H323-X500-Schema/h323-Id.va.mjs";


/**
 * @summary h323_id_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h323-id-oc OBJECT IDENTIFIER ::= {h323-Id oc(2)}
 * ```
 * 
 * @constant
 */
export
const h323_id_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* oc */ 2,
], h323_Id);

/* eslint-enable */
