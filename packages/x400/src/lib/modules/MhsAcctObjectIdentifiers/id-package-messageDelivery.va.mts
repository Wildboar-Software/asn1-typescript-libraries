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
import { id_package } from '../MhsAcctObjectIdentifiers/id-package.va.mjs';
/**
 * @summary id_package_messageDelivery
 * @description
 *
 * OBJECT IDENTIFIER `id_package_messageDelivery`. The Message-delivery
 * abstract-operation enables the MTS to deliver a message to an MTS-user. The MTS-user
 * shall not refuse delivery of a message unless the delivery would violate the
 * Delivery-control restrictions then in force. See ITU-T X.411 (1999), §8.3.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-messageDelivery ID ::= {id-package  25}
 * ```
 *
 * @constant
 */
export const id_package_messageDelivery: ID = _OID.fromParts([25], id_package);

/* eslint-enable */
