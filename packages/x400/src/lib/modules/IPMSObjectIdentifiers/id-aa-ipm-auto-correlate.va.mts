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
import { id_aa } from '../IPMSObjectIdentifiers/id-aa.va.mjs';
/**
 * @summary id_aa_ipm_auto_correlate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-ipm-auto-correlate ID ::= {id-aa  1}
 * ```
 *
 * @constant
 */
export const id_aa_ipm_auto_correlate: ID = new _OID([1], id_aa);

/* eslint-enable */
