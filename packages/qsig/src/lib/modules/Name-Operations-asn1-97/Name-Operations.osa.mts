/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callingName } from "../Name-Operations-asn1-97/callingName.oa.mjs";
import { calledName } from "../Name-Operations-asn1-97/calledName.oa.mjs";
import { connectedName } from "../Name-Operations-asn1-97/connectedName.oa.mjs";
import { busyName } from "../Name-Operations-asn1-97/busyName.oa.mjs";

/**
 * @summary Name_Operations
 * @description
 *
 * Name notifications for SS-CNIP and SS-CONP (ECMA-164 §6.1): `callingName`,
 * `calledName`, `connectedName`, and `busyName`. All are unconfirmed. Each
 * invoke is addressed to `endPINX`, and the Interpretation APDU discards an
 * unrecognised invoke (§6.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-163/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Name-Operations OPERATION ::= {
 *     callingName
 *     | calledName
 *     | connectedName
 *     | busyName
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Name_Operations: (OPERATION)[] = [ callingName, calledName, connectedName, busyName, ];

/* eslint-enable */
