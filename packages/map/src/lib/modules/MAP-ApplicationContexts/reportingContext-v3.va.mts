/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary reportingContext_v3
 * @description
 *
 * Reporting procedures between HLR and VLR. Either HLR or VLR may be initiator.
 * Version 3 only (3GPP TS 29.002 V19.1.0 clause 17.3.2.37).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reportingContext-v3  OBJECT IDENTIFIER ::= {map-ac reporting(7) version3(3)}
 * ```
 * 
 * @constant
 */
export
const reportingContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* reporting */ 7,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
