/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary vcsgLocationUpdateContext_v3
 * @description
 *
 * VCSG location updating between CSS and VLR or CSS and SGSN. Initiator is VLR
 * or SGSN; responder is CSS. Version 3 only (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.52).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vcsgLocationUpdateContext-v3  OBJECT IDENTIFIER ::= {map-ac vcsgLocationUpdate(46) version3(3)}
 * ```
 * 
 * @constant
 */
export
const vcsgLocationUpdateContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* vcsgLocationUpdate */ 46,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
