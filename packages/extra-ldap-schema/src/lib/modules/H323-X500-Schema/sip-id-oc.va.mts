/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { sip_Id } from "../H323-X500-Schema/sip-Id.va.mjs";
// export { sip_Id } from "../H323-X500-Schema/sip-Id.va.mjs";


/**
 * @summary sip_id_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sip-id-oc OBJECT IDENTIFIER ::= {sip-Id oc(2)}
 * ```
 * 
 * @constant
 */
export
const sip_id_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* oc */ 2,
], sip_Id);

/* eslint-enable */
