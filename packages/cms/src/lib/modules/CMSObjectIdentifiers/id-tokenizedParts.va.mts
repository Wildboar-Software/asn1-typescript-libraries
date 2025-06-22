/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_tokenization_manifest } from "../CMSObjectIdentifiers/id-tokenization-manifest.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_tokenizedParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-tokenizedParts OID ::= { id-tokenization-manifest tokenizedParts(0) }
 * ```
 *
 * @constant
 */
export const id_tokenizedParts: OID = _OID.fromParts(
    [/* tokenizedParts */ 0],
    id_tokenization_manifest
);

/* eslint-enable */
