/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_as } from "../UsefulDefinitions/id-as.va.mjs";
/**
 * @summary id_as_directoryAccessAS
 * @description
 *
 * {id-as 1}. DAP abstract syntax. OSI Bind presentation-context list
 * has exactly two entries: this (or the protocol's AS) plus `id-acseAS`.
 * PCIs shall be distinct odd integers. Abstract-syntax OIDs are OSI-
 * only; IDM does not assign them.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-directoryAccessAS                       OBJECT IDENTIFIER ::= {id-as 1}
 * ```
 *
 * @constant
 */
export const id_as_directoryAccessAS: OBJECT_IDENTIFIER = _OID.fromParts([1], id_as);

/* eslint-enable */
