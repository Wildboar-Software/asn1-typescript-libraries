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
import { id_at } from '../MHSObjectIdentifiers/id-at.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_at_mhs_supported_matching_rules */
/**
 * @summary id_at_mhs_supported_matching_rules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-mhs-supported-matching-rules ID ::= {id-at  11}
 * ```
 *
 * @constant
 */
export const id_at_mhs_supported_matching_rules: ID = new _OID([11], id_at);
/* END_OF_SYMBOL_DEFINITION id_at_mhs_supported_matching_rules */

/* eslint-enable */
