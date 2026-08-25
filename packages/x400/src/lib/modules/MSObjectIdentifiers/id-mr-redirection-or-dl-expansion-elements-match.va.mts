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
 * @summary id_mr_redirection_or_dl_expansion_elements_match
 * @description
 *
 * The Redirection-or-DL-expansion-elements-match rule determines whether a presented value
 * is a subset of the elements present in the OR-address-and-optional-directory-name
 * component of some value of an attribute of type Redirection-history or
 * DL-expansion-history. See ITU-T X.413 (1999), §12.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-redirection-or-dl-expansion-elements-match ID ::= {id-mr  20}
 * ```
 *
 * @constant
 */
export const id_mr_redirection_or_dl_expansion_elements_match: ID = _OID.fromParts(
    [20],
    id_mr
);

/* eslint-enable */
