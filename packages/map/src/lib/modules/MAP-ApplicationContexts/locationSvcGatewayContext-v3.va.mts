/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary locationSvcGatewayContext_v3
 * @description
 *
 * Location service gateway procedures. Initiator is GMLC; responder is HLR
 * (3GPP TS 29.002 V19.1.0 clause 17.3.2.39).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationSvcGatewayContext-v3  OBJECT IDENTIFIER ::= {map-ac locationSvcGateway(37) version3(3)}
 * ```
 * 
 * @constant
 */
export
const locationSvcGatewayContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* locationSvcGateway */ 37,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
