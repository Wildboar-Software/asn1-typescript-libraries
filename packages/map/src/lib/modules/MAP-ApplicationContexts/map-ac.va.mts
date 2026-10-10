/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { ac_Id } from "../MobileDomainDefinitions/ac-Id.va.mjs";
import { gsm_NetworkId } from "../MobileDomainDefinitions/gsm-NetworkId.va.mjs";


/**
 * @summary map_ac
 * @description
 *
 * OID arc `{gsm-NetworkId ac-Id}` under which MAP application-context-names are
 * assigned (3GPP TS 29.002 V19.1.0 clauses 17.3.3 and 17.1.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * map-ac  OBJECT IDENTIFIER ::= {gsm-NetworkId ac-Id}
 * ```
 * 
 * @constant
 */
export
const map_ac: OBJECT_IDENTIFIER = _OID.fromParts([
    Number(ac_Id),
], gsm_NetworkId);

/* eslint-enable */
