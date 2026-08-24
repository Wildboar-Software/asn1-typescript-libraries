/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_idm } from "../UsefulDefinitions/id-idm.va.mjs";
/**
 * @summary id_idm_disp
 * @description
 *
 * {id-idm 2}. `protocolID` for DISP-over-IDM (`disp-ip`). One IDM
 * protocol for all DISP ops (unlike OSI, which splits by initiator
 * and sync/async). Both sides may request. Always async.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm-disp OBJECT IDENTIFIER ::= {id-idm 2}
 * ```
 *
 * @constant
 */
export const id_idm_disp: OBJECT_IDENTIFIER = _OID.fromParts([2], id_idm);

/* eslint-enable */
