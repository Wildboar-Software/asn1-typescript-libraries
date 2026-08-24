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
 * @summary id_nat_receipt_time
 * @description
 *
 * OBJECT IDENTIFIER `id_nat_receipt_time`. The Receipt Time receipt field (M) identifies
 * when the RN's originator received the subject IPM. It comprises a date and time. See
 * ITU-T X.420 (1999), §8.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-receipt-time ID ::= {id-nat  8}
 * ```
 *
 * @constant
 */
export const id_nat_receipt_time: ID = _OID.fromParts([8], id_nat);

/* eslint-enable */
