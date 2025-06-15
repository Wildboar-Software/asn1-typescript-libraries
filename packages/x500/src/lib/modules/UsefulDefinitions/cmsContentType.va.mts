/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary cmsContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cmsContentType                           ID ::= {ds 42}
 * ```
 *
 * @constant
 */
export const cmsContentType: ID = new _OID([42], ds);

/* eslint-enable */
