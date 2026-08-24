/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_mr } from '../MSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_redirection_or_dl_expansion_match
 * @description
 *
 * OBJECT IDENTIFIER `id_mr_redirection_or_dl_expansion_match`. The
 * Redirection-or-DL-expansion-match rule compares for equality a presented value with
 * the OR-address-and- optional-directory-name component of attribute-values of type
 * Redirection-history or DL-expansion-history. redirectionOrDLExpansionMatch
 * MATCHING-RULE ::= { SYNTAX ORAddressAndOptionalDirectoryName ID
 * id-mr-redirection-or-dl-expansion-match } The rule returns true if, and only if, the
 * presented value and at… See ITU-T X.413 (1999), §12.4.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-redirection-or-dl-expansion-match ID ::= {id-mr  21}
 * ```
 *
 * @constant
 */
export const id_mr_redirection_or_dl_expansion_match: ID = _OID.fromParts(
    [21],
    id_mr
);

/* eslint-enable */
