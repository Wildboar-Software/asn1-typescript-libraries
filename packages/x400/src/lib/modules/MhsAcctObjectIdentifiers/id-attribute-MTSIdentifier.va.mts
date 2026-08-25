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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_MTSIdentifier
 * @description
 *
 * MTS-identifiers are assigned by the MTS to distinguish between messages and probes at
 * the MTS Abstract Service, and between messages, probes and reports within the MTS. The
 * MTS-identifier assigned to a message at a submission-port (
 * message-submission-identifier) is identical to the corresponding message-identifier at a
 * transfer-port and corresponding message-delivery-identifier at a delivery-port. See
 * ITU-T X.411 (1999), §8.5.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-MTSIdentifier ID ::= {id-attribute  63}
 * ```
 *
 * @constant
 */
export const id_attribute_MTSIdentifier: ID = _OID.fromParts([63], id_attribute);

/* eslint-enable */
