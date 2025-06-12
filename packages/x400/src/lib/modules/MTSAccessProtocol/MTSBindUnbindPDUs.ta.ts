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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Bind,
    _decode_Bind,
    _encode_Bind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Bind.ta.js';
export {
    Bind,
    _decode_Bind,
    _encode_Bind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Bind.ta.js';
import { mts_connect } from '../MTSAbstractService/mts-connect.oa.js';
export { mts_connect } from '../MTSAbstractService/mts-connect.oa.js';
import {
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Unbind.ta.js';
export {
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Unbind.ta.js';

/* START_OF_SYMBOL_DEFINITION MTSBindUnbindPDUs */
/**
 * @summary MTSBindUnbindPDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSBindUnbindPDUs  ::=  CHOICE {
 *   bind    Bind{mts-connect.&bind},
 *   unbind  Unbind{mts-connect.&unbind}
 * }
 * ```
 */
export type MTSBindUnbindPDUs =
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MTSBindUnbindPDUs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSBindUnbindPDUs */
let _cached_decoder_for_MTSBindUnbindPDUs: $.ASN1Decoder<MTSBindUnbindPDUs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSBindUnbindPDUs */

/* START_OF_SYMBOL_DEFINITION _decode_MTSBindUnbindPDUs */
/**
 * @summary Decodes an ASN.1 element into a(n) MTSBindUnbindPDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTSBindUnbindPDUs} The decoded data structure.
 */
export function _decode_MTSBindUnbindPDUs(el: _Element) {
    if (!_cached_decoder_for_MTSBindUnbindPDUs) {
        _cached_decoder_for_MTSBindUnbindPDUs = $._decode_inextensible_choice<MTSBindUnbindPDUs>(
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
    return _cached_decoder_for_MTSBindUnbindPDUs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTSBindUnbindPDUs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSBindUnbindPDUs */
let _cached_encoder_for_MTSBindUnbindPDUs: $.ASN1Encoder<MTSBindUnbindPDUs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSBindUnbindPDUs */

/* START_OF_SYMBOL_DEFINITION _encode_MTSBindUnbindPDUs */
/**
 * @summary Encodes a(n) MTSBindUnbindPDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSBindUnbindPDUs, encoded as an ASN.1 Element.
 */
export function _encode_MTSBindUnbindPDUs(
    value: MTSBindUnbindPDUs,
    elGetter: $.ASN1Encoder<MTSBindUnbindPDUs>
) {
    if (!_cached_encoder_for_MTSBindUnbindPDUs) {
        _cached_encoder_for_MTSBindUnbindPDUs = $._encode_choice<MTSBindUnbindPDUs>(
            {
                bind: _encode_Bind,
                unbind: _encode_Unbind,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTSBindUnbindPDUs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTSBindUnbindPDUs */

/* eslint-enable */
