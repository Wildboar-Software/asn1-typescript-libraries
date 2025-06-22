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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_aae } from '../EDIMSObjectIdentifiers/id-aae.va.mjs';
/**
 * @summary id_aae_duplicate_edin
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aae-duplicate-edin ID ::= {id-aae  1}
 * ```
 *
 * @constant
 */
export const id_aae_duplicate_edin: ID = _OID.fromParts([1], id_aae);

/* eslint-enable */
