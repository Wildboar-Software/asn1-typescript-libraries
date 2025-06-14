/* eslint-disable */
import {
    TRUE_BIT,
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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    LatestDeliveryTime,
    _decode_LatestDeliveryTime,
    _encode_LatestDeliveryTime,
} from '../MTSAbstractService/LatestDeliveryTime.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION latest_delivery_time */
/**
 * @summary latest_delivery_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * latest-delivery-time EXTENSION ::= {
 *   LatestDeliveryTime,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:5
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<LatestDeliveryTime>}
 * @implements {EXTENSION<LatestDeliveryTime>}
 */
export const latest_delivery_time: EXTENSION<LatestDeliveryTime> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_LatestDeliveryTime,
    },
    encoderFor: {
        '&Type': _encode_LatestDeliveryTime,
    },
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 5,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION latest_delivery_time */

/* eslint-enable */
