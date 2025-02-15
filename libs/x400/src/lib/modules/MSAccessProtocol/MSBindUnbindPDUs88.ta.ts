/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    Bind,
    _decode_Bind,
    _encode_Bind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Bind.ta';
export {
    Bind,
    _decode_Bind,
    _encode_Bind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Bind.ta';
import { ms_access_contract_88 } from '../MSAbstractService/ms-access-contract-88.oa';
export { ms_access_contract_88 } from '../MSAbstractService/ms-access-contract-88.oa';
import {
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Unbind.ta';
export {
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Unbind.ta';

/* START_OF_SYMBOL_DEFINITION MSBindUnbindPDUs88 */
/**
 * @summary MSBindUnbindPDUs88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSBindUnbindPDUs88  ::=  CHOICE {
 *   bind    Bind{ms-access-contract-88.&connection.&bind},
 *   unbind  Unbind{ms-access-contract-88.&connection.&unbind}
 * }
 * ```
 */
export type MSBindUnbindPDUs88 =
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MSBindUnbindPDUs88 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSBindUnbindPDUs88 */
let _cached_decoder_for_MSBindUnbindPDUs88: $.ASN1Decoder<MSBindUnbindPDUs88> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSBindUnbindPDUs88 */

/* START_OF_SYMBOL_DEFINITION _decode_MSBindUnbindPDUs88 */
/**
 * @summary Decodes an ASN.1 element into a(n) MSBindUnbindPDUs88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSBindUnbindPDUs88} The decoded data structure.
 */
export function _decode_MSBindUnbindPDUs88(el: _Element) {
    if (!_cached_decoder_for_MSBindUnbindPDUs88) {
        _cached_decoder_for_MSBindUnbindPDUs88 = $._decode_inextensible_choice<MSBindUnbindPDUs88>(
            {
                'CONTEXT 16': ['bind', _decode_Bind],
                'CONTEXT 17': ['bind', _decode_Bind],
                'CONTEXT 18': ['bind', _decode_Bind],
                'CONTEXT 19': ['unbind', _decode_Unbind],
                'CONTEXT 20': ['unbind', _decode_Unbind],
                'CONTEXT 21': ['unbind', _decode_Unbind],
            }
        );
    }
    return _cached_decoder_for_MSBindUnbindPDUs88(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MSBindUnbindPDUs88 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSBindUnbindPDUs88 */
let _cached_encoder_for_MSBindUnbindPDUs88: $.ASN1Encoder<MSBindUnbindPDUs88> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSBindUnbindPDUs88 */

/* START_OF_SYMBOL_DEFINITION _encode_MSBindUnbindPDUs88 */
/**
 * @summary Encodes a(n) MSBindUnbindPDUs88 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSBindUnbindPDUs88, encoded as an ASN.1 Element.
 */
export function _encode_MSBindUnbindPDUs88(
    value: MSBindUnbindPDUs88,
    elGetter: $.ASN1Encoder<MSBindUnbindPDUs88>
) {
    if (!_cached_encoder_for_MSBindUnbindPDUs88) {
        _cached_encoder_for_MSBindUnbindPDUs88 = $._encode_choice<MSBindUnbindPDUs88>(
            {
                bind: _encode_Bind,
                unbind: _encode_Unbind,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MSBindUnbindPDUs88(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MSBindUnbindPDUs88 */

/* eslint-enable */
