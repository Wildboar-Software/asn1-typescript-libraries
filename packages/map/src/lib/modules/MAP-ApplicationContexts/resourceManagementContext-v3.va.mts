/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary resourceManagementContext_v3
 * @description
 *
 * Resource management between GMSC and VMSC. Initiator is GMSC; responder is
 * VMSC. Version 3 only (3GPP TS 29.002 V19.1.0 clause 17.3.2.50).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resourceManagementContext-v3  OBJECT IDENTIFIER ::= {map-ac resourceManagement(44) version3(3)}
 * ```
 * 
 * @constant
 */
export
const resourceManagementContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* resourceManagement */ 44,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
