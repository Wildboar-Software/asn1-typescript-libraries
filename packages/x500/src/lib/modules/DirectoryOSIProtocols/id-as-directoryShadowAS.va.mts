/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_as } from "../UsefulDefinitions/id-as.va.mjs";
/**
 * @summary id_as_directoryShadowAS
 * @description
 *
 * {id-as 3}. DISP abstract syntax (all four DISP ACs share it).
 * {id-as 5}/{id-as 6} were reliable-shadow syntaxes (withdrawn).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-directoryShadowAS                       OBJECT IDENTIFIER ::= {id-as 3}
 * ```
 *
 * @constant
 */
export const id_as_directoryShadowAS: OBJECT_IDENTIFIER = _OID.fromParts([3], id_as);

/* eslint-enable */
