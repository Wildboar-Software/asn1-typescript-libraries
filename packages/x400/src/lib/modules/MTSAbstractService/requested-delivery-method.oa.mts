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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    RequestedDeliveryMethod,
    _decode_RequestedDeliveryMethod,
    _encode_RequestedDeliveryMethod,
} from '../MTSAbstractService/RequestedDeliveryMethod.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary requested_delivery_method
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * requested-delivery-method EXTENSION ::= {
 *   RequestedDeliveryMethod
 *   IF ABSENT      {any-delivery-method},
 *   IDENTIFIED BY  standard-extension:6
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<RequestedDeliveryMethod>}
 * @implements {EXTENSION<RequestedDeliveryMethod>}
 */
export const requested_delivery_method: EXTENSION<RequestedDeliveryMethod> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_RequestedDeliveryMethod,
    },
    encoderFor: {
        '&Type': _encode_RequestedDeliveryMethod,
    },
    '&absent': undefined,
    '&id': {
        standard_extension: 6,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
