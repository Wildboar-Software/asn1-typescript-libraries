/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary serviceTerminationContext_v3
 * @description
 *
 * IST service termination between HLR and MSC (VMSC or GMSC). Initiator is HLR;
 * responder is VMSC or GMSC. Version 3 only. The OID uses
 * `immediateTermination(9)` in the module in clause 17.3.3 (3GPP TS 29.002
 * V19.1.0 clauses 17.3.2.45 and 17.3.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceTerminationContext-v3  OBJECT IDENTIFIER ::= {map-ac immediateTermination(9) version3(3)}
 * ```
 * 
 * @constant
 */
export
const serviceTerminationContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* immediateTermination */ 9,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
