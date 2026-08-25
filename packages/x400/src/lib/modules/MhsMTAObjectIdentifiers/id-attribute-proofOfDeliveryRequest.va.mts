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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsMTAObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_proofOfDeliveryRequest
 * @description
 *
 * This argument indicates whether or not the originator of the message requires
 * proof-of-delivery (to provide the Proof of Delivery element-of-service as defined in
 * recipient of the message. This argument may have one of the following values:
 * proof-of-delivery-requested or proof-of-delivery-not- requested. See ITU-T X.411 (1999),
 * §8.2.1.1.1.32.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-proofOfDeliveryRequest ID ::= {id-attribute  132}
 * ```
 *
 * @constant
 */
export const id_attribute_proofOfDeliveryRequest: ID = _OID.fromParts(
    [132],
    id_attribute
);

/* eslint-enable */
