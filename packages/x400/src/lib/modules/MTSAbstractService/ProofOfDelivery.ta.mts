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
import {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from '@wildboar/x500/AuthenticationFramework';
export {
    SIGNATURE,
    _decode_SIGNATURE as _decode_ProofOfDelivery,
    _encode_SIGNATURE as _encode_ProofOfDelivery,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary ProofOfDelivery
 * @description
 *
 * `ProofOfDelivery`. This argument provides the originator of the message with proof
 * that the message has been delivered to the recipient (to provide the Proof of Delivery
 * element-of-service as defined in Delivery element-of-service (as defined in The
 * proof-of-delivery is computed using the algorithm identified by the
 * proof-of-delivery-algorithm-identifier (an algorithm-identifier). The
 * proof-of-delivery contains the… See ITU-T X.411 (1999), §8.3.1.1.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfDelivery  ::=
 *   SIGNATURE
 *     {SEQUENCE {algorithm-identifier
 *                  ProofOfDeliveryAlgorithmIdentifier,
 *                delivery-time                       MessageDeliveryTime,
 *                this-recipient-name                 ThisRecipientName,
 *                originally-intended-recipient-name
 *                  OriginallyIntendedRecipientName OPTIONAL,
 *                content                             Content,
 *                content-identifier                  ContentIdentifier OPTIONAL,
 *                message-security-label
 *                  MessageSecurityLabel OPTIONAL}}
 * ```
 */
export type ProofOfDelivery = SIGNATURE; // DefinedType


/* eslint-enable */
