/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";
/**
 * @summary id_ac_directorySystemAC
 * @description
 *
 * {id-ac 2}. DSP application-context name. Requires `id-acseAS` and
 * `id-as-directorySystemAS`. Implies all DSP ops. Either DSA may Bind;
 * both sides may invoke. Always asynchronous.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-directorySystemAC                       OBJECT IDENTIFIER ::= {id-ac 2}
 * ```
 *
 * @constant
 */
export const id_ac_directorySystemAC: OBJECT_IDENTIFIER = _OID.fromParts([2], id_ac);

/* eslint-enable */
