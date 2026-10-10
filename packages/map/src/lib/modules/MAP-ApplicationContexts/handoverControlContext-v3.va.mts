/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary handoverControlContext_v3
 * @description
 *
 * Handover procedures between MSCs. Initiator is MSCA; responder is MSCB.
 * Version 3; v2 and v1 equivalents exist (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * handoverControlContext-v3  OBJECT IDENTIFIER ::= {map-ac handoverControl(11) version3(3)}
 * ```
 * 
 * @constant
 */
export
const handoverControlContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* handoverControl */ 11,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
