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
import { id_aae } from '../IPMSObjectIdentifiers/id-aae.va.mjs';
/**
 * @summary id_aae_auto_discard_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aae-auto-discard-error ID ::= {id-aae  0}
 * ```
 *
 * @constant
 */
export const id_aae_auto_discard_error: ID = _OID.fromParts([0], id_aae);

/* eslint-enable */
