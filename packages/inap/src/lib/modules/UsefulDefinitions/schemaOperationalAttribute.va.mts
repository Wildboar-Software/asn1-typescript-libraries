/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary schemaOperationalAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schemaOperationalAttribute ID ::= {ds  21}
 * ```
 * 
 * @constant
 */
export
const schemaOperationalAttribute: ID = _OID.fromParts([
    21,
], ds);

/* eslint-enable */
