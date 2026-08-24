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
 * @summary id_nat_returned_ipm
 * @description
 *
 * OBJECT IDENTIFIER `id_nat_returned_ipm`. The Returned IPM non-receipt field (C) is
 * precisely the subject IPM. ReturnedIPMField ::= IPM This conditional field shall be
 * present if, and only if, ipm-return is among the values of the Notification-requests
 * component of the subject recipient specifier and the subject IPM was not subjected to
 * conversion for delivery to the NRN's originator. See ITU-T X.420 (1999), §8.2.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-returned-ipm ID ::= {id-nat  7}
 * ```
 *
 * @constant
 */
export const id_nat_returned_ipm: ID = _OID.fromParts([7], id_nat);

/* eslint-enable */
