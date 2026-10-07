/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary locationSvcEnquiryContext_v3
 * @description
 *
 * Location service enquiry. Initiator GMLC with responder MSC or SGSN, or
 * initiator MSC or SGSN with responder GMLC (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.40).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationSvcEnquiryContext-v3  OBJECT IDENTIFIER ::= {map-ac locationSvcEnquiry(38) version3(3)}
 * ```
 * 
 * @constant
 */
export
const locationSvcEnquiryContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* locationSvcEnquiry */ 38,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
