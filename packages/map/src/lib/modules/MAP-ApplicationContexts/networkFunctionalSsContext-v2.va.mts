/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary networkFunctionalSsContext_v2
 * @description
 *
 * Functional-like SS handling between VLR and HLR. Initiator is VLR; responder
 * is HLR. Version 2; a v1 equivalent exists (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.19).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkFunctionalSsContext-v2  OBJECT IDENTIFIER ::= {map-ac networkFunctionalSs(18) version2(2)}
 * ```
 * 
 * @constant
 */
export
const networkFunctionalSsContext_v2: OBJECT_IDENTIFIER = _OID.fromParts([
    /* networkFunctionalSs */ 18,
    /* version2 */ 2,
], map_ac);

/* eslint-enable */
