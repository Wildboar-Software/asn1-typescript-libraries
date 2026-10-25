/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { pathReplacePropose } from "../Path-Replacement-Operations-asn1-97/pathReplacePropose.oa.mjs";
import { pathReplaceSetup } from "../Path-Replacement-Operations-asn1-97/pathReplaceSetup.oa.mjs";
import { pathReplaceRetain } from "../Path-Replacement-Operations-asn1-97/pathReplaceRetain.oa.mjs";
import { pathReplaceInvite } from "../Path-Replacement-Operations-asn1-97/pathReplaceInvite.oa.mjs";

/**
 * @summary Path_Replacement_Operations
 * @description
 *
 * The four operations that support ANF-PR: propose, setup, retain, and
 * invite. ECMA-176 §6.3.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path-Replacement-Operations OPERATION ::= {
 *     pathReplacePropose
 *     | pathReplaceSetup
 *     | pathReplaceRetain
 *     | pathReplaceInvite
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Path_Replacement_Operations: (OPERATION)[] = [ pathReplacePropose, pathReplaceSetup, pathReplaceRetain, pathReplaceInvite, ];

/* eslint-enable */
