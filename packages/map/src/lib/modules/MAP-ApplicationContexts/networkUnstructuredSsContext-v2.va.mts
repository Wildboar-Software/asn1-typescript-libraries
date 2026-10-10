/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary networkUnstructuredSsContext_v2
 * @description
 *
 * Stimuli-like (USSD) procedures between HLR and VLR, HLR and gsmSCF, and HLR
 * and HLR. Symmetric operations of `unstructuredSsPackage-v2`. Version 2; v1
 * equivalent is `networkFunctionalSs` version 1 (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.20).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkUnstructuredSsContext-v2  OBJECT IDENTIFIER ::= {map-ac networkUnstructuredSs(19) version2(2)}
 * ```
 * 
 * @constant
 */
export
const networkUnstructuredSsContext_v2: OBJECT_IDENTIFIER = _OID.fromParts([
    /* networkUnstructuredSs */ 19,
    /* version2 */ 2,
], map_ac);

/* eslint-enable */
