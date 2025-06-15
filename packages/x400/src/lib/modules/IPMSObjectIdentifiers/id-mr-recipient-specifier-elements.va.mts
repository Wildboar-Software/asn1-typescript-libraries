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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_mr } from '../IPMSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_recipient_specifier_elements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-recipient-specifier-elements ID ::= {id-mr  5}
 * ```
 *
 * @constant
 */
export const id_mr_recipient_specifier_elements: ID = new _OID([5], id_mr);

/* eslint-enable */
