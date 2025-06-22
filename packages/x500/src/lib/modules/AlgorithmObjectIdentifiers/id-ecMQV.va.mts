/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom } from "../AlgorithmObjectIdentifiers/certicom.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
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
export const id_ecMQV: ID = _OID.fromParts(
    [/* schemes */ 1, /* ecmqv */ 13],
    certicom
);

/* eslint-enable */
