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
    RecipientNumberForAdvice,
    _decode_RecipientNumberForAdvice,
    _encode_RecipientNumberForAdvice,
} from '../MTSAbstractService/RecipientNumberForAdvice.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary recipient_number_for_advice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipient-number-for-advice EXTENSION ::= {
 *   RecipientNumberForAdvice,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:11
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<RecipientNumberForAdvice>}
 * @implements {EXTENSION<RecipientNumberForAdvice>}
 */
export const recipient_number_for_advice: EXTENSION<RecipientNumberForAdvice> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_RecipientNumberForAdvice,
    },
    encoderFor: {
        '&Type': _encode_RecipientNumberForAdvice,
    },
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 11,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
