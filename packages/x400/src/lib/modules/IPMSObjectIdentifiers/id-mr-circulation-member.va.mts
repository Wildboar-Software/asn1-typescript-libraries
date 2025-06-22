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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_mr } from '../IPMSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_circulation_member
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-circulation-member ID ::= {id-mr  10}
 * ```
 *
 * @constant
 */
export const id_mr_circulation_member: ID = _OID.fromParts([10], id_mr);

/* eslint-enable */
