/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary groupCallControlContext_v3
 * @description
 *
 * Group call and broadcast call between anchor MSC and relay MSC. Initiator is
 * anchor MSC; responder is relay MSC. Version 3 only (3GPP TS 29.002 V19.1.0
 * clause 17.3.2.30).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupCallControlContext-v3  OBJECT IDENTIFIER ::= {map-ac groupCallControl(31) version3(3)}
 * ```
 * 
 * @constant
 */
export
const groupCallControlContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* groupCallControl */ 31,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
