/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary mwdMngtContext_v3
 * @description
 *
 * Short message waiting data management between VLR and HLR or SGSN and HLR.
 * Initiator is VLR or SGSN; responder is HLR. For SGSN–HLR only version 3
 * applies. v2 and v1 equivalents exist (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.25).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mwdMngtContext-v3  OBJECT IDENTIFIER ::= {map-ac mwdMngt(24) version3(3)}
 * ```
 * 
 * @constant
 */
export
const mwdMngtContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* mwdMngt */ 24,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
