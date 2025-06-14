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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_mr } from '../MSObjectIdentifiers/id-mr.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mr_redirection_or_dl_expansion_single_element_match */
/**
 * @summary id_mr_redirection_or_dl_expansion_single_element_match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-redirection-or-dl-expansion-single-element-match ID ::= {id-mr  25}
 * ```
 *
 * @constant
 */
export const id_mr_redirection_or_dl_expansion_single_element_match: ID = new _OID(
    [25],
    id_mr
);
/* END_OF_SYMBOL_DEFINITION id_mr_redirection_or_dl_expansion_single_element_match */

/* eslint-enable */
