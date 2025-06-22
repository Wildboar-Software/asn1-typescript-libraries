/* eslint-disable */
import {
    ABSTRACT_SYNTAX,
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
    MessageDeliveryPDUs,
    _decode_MessageDeliveryPDUs,
    _encode_MessageDeliveryPDUs,
} from '../MTSAccessProtocol/MessageDeliveryPDUs.ta.mjs';
import { id_as_mdse_94 } from '../MHSProtocolObjectIdentifiers/id-as-mdse-94.va.mjs';
/**
 * @summary message_delivery_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-delivery-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   MessageDeliveryPDUs
 *   IDENTIFIED BY  id-as-mdse-94
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MessageDeliveryPDUs>}
 * @implements {ABSTRACT_SYNTAX<MessageDeliveryPDUs>}
 */
export const message_delivery_abstract_syntax: ABSTRACT_SYNTAX<MessageDeliveryPDUs> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MessageDeliveryPDUs,
    },
    encoderFor: {
        '&Type': _encode_MessageDeliveryPDUs,
    },
    '&id': id_as_mdse_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
