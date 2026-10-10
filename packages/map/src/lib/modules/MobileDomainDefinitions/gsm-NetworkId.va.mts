/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { mobileDomainId } from "../MobileDomainDefinitions/mobileDomainId.va.mjs";


/**
 * @summary gsm_NetworkId
 * @description
 *
 * `{mobileDomainId gsm-Network(1)}`. MAP application-context, abstract-syntax
 * and module OIDs in TS 29.002 are allocated under this arc (3GPP TS 29.002
 * V19.1.0 clauses 17.3.3, 17.4 and 17.1.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsm-NetworkId OBJECT IDENTIFIER ::= {mobileDomainId gsm-Network (1)}
 * ```
 * 
 * @constant
 */
export
const gsm_NetworkId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* gsm-Network */ 1,
], mobileDomainId);

/* eslint-enable */
