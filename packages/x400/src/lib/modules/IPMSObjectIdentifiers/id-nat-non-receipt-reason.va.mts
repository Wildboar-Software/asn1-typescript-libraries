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
 * @summary id_nat_non_receipt_reason
 * @description
 *
 * The Non-receipt Reason non-receipt field (M) indicates why the NRN's originator has not
 * received the subject IPM (even though it was delivered to him). See ITU-T X.420 (1999),
 * §8.2.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-non-receipt-reason ID ::= {id-nat  4}
 * ```
 *
 * @constant
 */
export const id_nat_non_receipt_reason: ID = _OID.fromParts([4], id_nat);

/* eslint-enable */
