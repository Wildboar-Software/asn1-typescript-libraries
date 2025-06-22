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
 * @summary id_nat_suppl_receipt_info
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-suppl-receipt-info ID ::= {id-nat  10}
 * ```
 *
 * @constant
 */
export const id_nat_suppl_receipt_info: ID = _OID.fromParts([10], id_nat);

/* eslint-enable */
