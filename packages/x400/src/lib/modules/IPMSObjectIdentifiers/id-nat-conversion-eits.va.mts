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
 * @summary id_nat_conversion_eits
 * @description
 *
 * The Conversion EITs common field (C) identifies the EITs of the subject IPM upon
 * delivery to the IPN's originator. It comprises an EITs descriptor. See ITU-T X.420
 * (1999), §8.1.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-conversion-eits ID ::= {id-nat  3}
 * ```
 *
 * @constant
 */
export const id_nat_conversion_eits: ID = _OID.fromParts([3], id_nat);

/* eslint-enable */
