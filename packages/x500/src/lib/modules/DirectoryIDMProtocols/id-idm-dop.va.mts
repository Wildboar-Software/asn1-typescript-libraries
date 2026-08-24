/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_idm } from "../UsefulDefinitions/id-idm.va.mjs";
/**
 * @summary id_idm_dop
 * @description
 *
 * {id-idm 3}. `protocolID` for DOP-over-IDM (`dop-ip`). IDM mapping
 * allows either side to request (OSI DOP: initiator only).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm-dop  OBJECT IDENTIFIER ::= {id-idm 3}
 * ```
 *
 * @constant
 */
export const id_idm_dop: OBJECT_IDENTIFIER = _OID.fromParts([3], id_idm);

/* eslint-enable */
