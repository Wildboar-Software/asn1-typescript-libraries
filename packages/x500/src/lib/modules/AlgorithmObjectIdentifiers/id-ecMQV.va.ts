/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom } from "../AlgorithmObjectIdentifiers/certicom.va.js";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { certicom } from "../AlgorithmObjectIdentifiers/certicom.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_ecMQV */
/**
 * @summary id_ecMQV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecMQV                ID ::= { certicom schemes(1) ecmqv(13) }
 * ```
 *
 * @constant
 */
export const id_ecMQV: ID = new _OID(
    [/* schemes */ 1, /* ecmqv */ 13],
    certicom
);
/* END_OF_SYMBOL_DEFINITION id_ecMQV */

/* eslint-enable */
