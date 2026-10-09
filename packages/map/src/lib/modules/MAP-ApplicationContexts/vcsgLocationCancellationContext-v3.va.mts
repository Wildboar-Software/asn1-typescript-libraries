/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary vcsgLocationCancellationContext_v3
 * @description
 *
 * VCSG location cancellation between CSS and VLR or CSS and SGSN. Initiator is
 * CSS; responder is VLR or SGSN. Version 3 only (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.53).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vcsgLocationCancellationContext-v3  OBJECT IDENTIFIER ::= {map-ac vcsgLocationCancel(47) version3(3)}
 * ```
 * 
 * @constant
 */
export
const vcsgLocationCancellationContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* vcsgLocationCancel */ 47,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
