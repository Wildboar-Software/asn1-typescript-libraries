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
