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
import { id_nat } from '../IPMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_discard_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-discard-reason ID ::= {id-nat  5}
 * ```
 *
 * @constant
 */
export const id_nat_discard_reason: ID = _OID.fromParts([5], id_nat);

/* eslint-enable */
