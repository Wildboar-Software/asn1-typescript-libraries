/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";
/**
 * @summary id_ac_directoryAccessAC
 * @description
 *
 * {id-ac 1}. DAP application-context name, signalled in OSI Bind.
 * Requires abstract syntaxes `id-acseAS` and `id-as-directoryAccessAS`.
 * DUA: at least one DAP op besides abandon; DSA: all DAP ops. OSI:
 * wait for BindResult before operations. DUA initiates; only initiator
 * invokes. OSI DAP may be sync or async; IDM DAP is always async.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-directoryAccessAC                       OBJECT IDENTIFIER ::= {id-ac 1}
 * ```
 *
 * @constant
 */
export const id_ac_directoryAccessAC: OBJECT_IDENTIFIER = _OID.fromParts([1], id_ac);

/* eslint-enable */
