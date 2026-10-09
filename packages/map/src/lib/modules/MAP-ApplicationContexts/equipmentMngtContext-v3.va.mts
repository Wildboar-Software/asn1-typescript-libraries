/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary equipmentMngtContext_v3
 * @description
 *
 * Equipment checking between MSC and EIR or SGSN and EIR. Initiator is MSC or
 * SGSN; responder is EIR. For SGSN–EIR, versions 1–3 apply. v2 and v1
 * equivalents exist (3GPP TS 29.002 V19.1.0 clause 17.3.2.14).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * equipmentMngtContext-v3  OBJECT IDENTIFIER ::= {map-ac equipmentMngt(13) version3(3)}
 * ```
 * 
 * @constant
 */
export
const equipmentMngtContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* equipmentMngt */ 13,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
