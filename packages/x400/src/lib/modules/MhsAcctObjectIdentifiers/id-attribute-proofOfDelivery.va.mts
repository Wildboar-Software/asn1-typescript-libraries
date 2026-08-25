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
 * @summary id_attribute_proofOfDelivery
 * @description
 *
 * This argument provides the originator of the message with proof that the message has
 * been delivered to the recipient (to provide the Proof of Delivery element-of-service as
 * defined in Delivery element-of-service (as defined in The proof-of-delivery is computed
 * using the algorithm identified by the proof-of-delivery-algorithm-identifier (an
 * algorithm-identifier). See ITU-T X.411 (1999), §8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-proofOfDelivery ID ::= {id-attribute  94}
 * ```
 *
 * @constant
 */
export const id_attribute_proofOfDelivery: ID = _OID.fromParts([94], id_attribute);

/* eslint-enable */
