/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { id_tokenization_manifest } from "../CMSObjectIdentifiers/id-tokenization-manifest.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_XPathTokensSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-XPathTokensSet OID ::= { id-tokenization-manifest xPathTokensSet(1) }
 * ```
 *
 * @constant
 */
export const id_XPathTokensSet: OID = _OID.fromParts(
    [/* xPathTokensSet */ 1],
    id_tokenization_manifest
);

/* eslint-enable */
