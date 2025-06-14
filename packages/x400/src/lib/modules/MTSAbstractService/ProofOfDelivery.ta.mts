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
} from 'asn1-ts';
import {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.mjs';
export {
    SIGNATURE,
    _decode_SIGNATURE as _decode_ProofOfDelivery,
    _encode_SIGNATURE as _encode_ProofOfDelivery,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ProofOfDelivery */
/**
 * @summary ProofOfDelivery
 * @description
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
/* END_OF_SYMBOL_DEFINITION ProofOfDelivery */

/* END_OF_SYMBOL_DEFINITION _encode_ProofOfDelivery */

/* eslint-enable */
