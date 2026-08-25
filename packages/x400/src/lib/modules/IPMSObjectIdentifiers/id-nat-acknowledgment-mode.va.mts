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
 * @summary id_nat_acknowledgment_mode
 * @description
 *
 * The Acknowledgment Mode receipt field (D manual) identifies the manner in which the RN
 * was originated. See ITU-T X.420 (1999), §8.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-acknowledgment-mode ID ::= {id-nat  9}
 * ```
 *
 * @constant
 */
export const id_nat_acknowledgment_mode: ID = _OID.fromParts([9], id_nat);

/* eslint-enable */
