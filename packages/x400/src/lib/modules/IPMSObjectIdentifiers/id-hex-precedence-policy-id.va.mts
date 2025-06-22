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
import { id_hex } from '../IPMSObjectIdentifiers/id-hex.va.mjs';
/**
 * @summary id_hex_precedence_policy_id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hex-precedence-policy-id ID ::= {id-hex  12}
 * ```
 *
 * @constant
 */
export const id_hex_precedence_policy_id: ID = _OID.fromParts([12], id_hex);

/* eslint-enable */
