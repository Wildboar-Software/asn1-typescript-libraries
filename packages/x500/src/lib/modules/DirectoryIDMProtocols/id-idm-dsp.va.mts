/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_idm } from "../UsefulDefinitions/id-idm.va.mjs";
/**
 * @summary id_idm_dsp
 * @description
 *
 * {id-idm 1}. `protocolID` for DSP-over-IDM (`dsp-ip`). Either DSA
 * may Bind; both sides may request. Always async.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm-dsp  OBJECT IDENTIFIER ::= {id-idm 1}
 * ```
 *
 * @constant
 */
export const id_idm_dsp: OBJECT_IDENTIFIER = _OID.fromParts([1], id_idm);

/* eslint-enable */
