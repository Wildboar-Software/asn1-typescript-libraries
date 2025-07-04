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
} from '@wildboar/asn1';
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
    ConversionWithLossProhibited,
    _enum_for_ConversionWithLossProhibited,
    conversion_with_loss_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ConversionWithLossProhibited,
    _encode_ConversionWithLossProhibited,
} from '../MTSAbstractService/ConversionWithLossProhibited.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary conversion_with_loss_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * conversion-with-loss-prohibited EXTENSION ::= {
 *   ConversionWithLossProhibited
 *   IF ABSENT                conversion-with-loss-allowed,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:4
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ConversionWithLossProhibited>}
 * @implements {EXTENSION<ConversionWithLossProhibited>}
 */
export const conversion_with_loss_prohibited: EXTENSION<ConversionWithLossProhibited> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ConversionWithLossProhibited,
    },
    encoderFor: {
        '&Type': _encode_ConversionWithLossProhibited,
    },
    '&absent': conversion_with_loss_allowed /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 4,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
