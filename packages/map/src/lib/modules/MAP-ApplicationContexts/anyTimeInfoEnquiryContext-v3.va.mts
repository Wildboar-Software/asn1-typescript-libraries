/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary anyTimeInfoEnquiryContext_v3
 * @description
 *
 * Any time information enquiry between gsmSCF and HLR, gsmSCF and GMLC, or
 * gsmSCF and NPLR. Initiator is gsmSCF; responder is HLR, GMLC or NPLR. Version
 * 3 only (3GPP TS 29.002 V19.1.0 clause 17.3.2.29).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * anyTimeInfoEnquiryContext-v3  OBJECT IDENTIFIER ::= {map-ac anyTimeInfoEnquiry(29) version3(3)}
 * ```
 * 
 * @constant
 */
export
const anyTimeInfoEnquiryContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* anyTimeInfoEnquiry */ 29,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
