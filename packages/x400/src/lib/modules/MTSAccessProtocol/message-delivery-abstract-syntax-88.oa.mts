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
} from 'asn1-ts';
import {
    MessageDeliveryPDUs88,
    _decode_MessageDeliveryPDUs88,
    _encode_MessageDeliveryPDUs88,
} from '../MTSAccessProtocol/MessageDeliveryPDUs88.ta.mjs';
import { id_as_mdse_88 } from '../MHSProtocolObjectIdentifiers/id-as-mdse-88.va.mjs';
/**
 * @summary message_delivery_abstract_syntax_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-delivery-abstract-syntax-88 ABSTRACT-SYNTAX ::= {
 *   MessageDeliveryPDUs88
 *   IDENTIFIED BY  id-as-mdse-88
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MessageDeliveryPDUs88>}
 * @implements {ABSTRACT_SYNTAX<MessageDeliveryPDUs88>}
 */
export const message_delivery_abstract_syntax_88: ABSTRACT_SYNTAX<MessageDeliveryPDUs88> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MessageDeliveryPDUs88,
    },
    encoderFor: {
        '&Type': _encode_MessageDeliveryPDUs88,
    },
    '&id': id_as_mdse_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
