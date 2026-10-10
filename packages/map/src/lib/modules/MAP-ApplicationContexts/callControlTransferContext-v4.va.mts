/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary callControlTransferContext_v4
 * @description
 *
 * Call control transfer between VMSC and GMSC. Initiator is VMSC; responder is
 * GMSC. Version 4; a v3 equivalent exists (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callControlTransferContext-v4  OBJECT IDENTIFIER ::= {map-ac callControlTransfer(6) version4(4)}
 * ```
 * 
 * @constant
 */
export
const callControlTransferContext_v4: OBJECT_IDENTIFIER = _OID.fromParts([
    /* callControlTransfer */ 6,
    /* version4 */ 4,
], map_ac);

/* eslint-enable */
