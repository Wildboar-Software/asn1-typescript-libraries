/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { as_Id } from "../MobileDomainDefinitions/as-Id.va.mjs";
import { gsm_NetworkId } from "../MobileDomainDefinitions/gsm-NetworkId.va.mjs";


/**
 * @summary map_DialogueAS
 * @description
 *
 * Abstract syntax name for `MAP-DialoguePDU`. A value of `MAP-DialoguePDU` is
 * carried as the single-ASN.1-type of TCAP user-information; this OID is the
 * direct reference (3GPP TS 29.002 V19.1.0 clauses 17.1 and 17.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * map-DialogueAS  OBJECT IDENTIFIER ::= {gsm-NetworkId as-Id map-DialoguePDU (1) version1 (1)}
 * ```
 * 
 * @constant
 */
export
const map_DialogueAS: OBJECT_IDENTIFIER = _OID.fromParts([
    Number(as_Id),
    /* map-DialoguePDU */ 1,
    /* version1 */ 1,
], gsm_NetworkId);

/* eslint-enable */
