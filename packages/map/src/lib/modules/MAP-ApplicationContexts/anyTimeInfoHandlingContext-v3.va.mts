/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary anyTimeInfoHandlingContext_v3
 * @description
 *
 * Any time information handling between gsmSCF and HLR. Initiator is gsmSCF;
 * responder is HLR. Version 3 only (3GPP TS 29.002 V19.1.0 clause 17.3.2.47).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * anyTimeInfoHandlingContext-v3  OBJECT IDENTIFIER ::= {map-ac anyTimeInfoHandling(43) version3(3)}
 * ```
 * 
 * @constant
 */
export
const anyTimeInfoHandlingContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* anyTimeInfoHandling */ 43,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
