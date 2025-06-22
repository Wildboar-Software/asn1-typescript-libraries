/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { usgov } from "../AlgorithmObjectIdentifiers/usgov.va.mjs";
/**
 * @summary dodAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dodAlgorithms           ID ::= { usgov dod(2) infosec(1) algorithms(1) }
 * ```
 *
 * @constant
 */
export const dodAlgorithms: ID = _OID.fromParts(
    [/* dod */ 2, /* infosec */ 1, /* algorithms */ 1],
    usgov
);

/* eslint-enable */
