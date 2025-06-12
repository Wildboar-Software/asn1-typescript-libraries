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

/* START_OF_SYMBOL_DEFINITION ConnectionAS */
/**
 * @summary ConnectionAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionAS{APPLICATION-CONTEXT:ac}  ::=  CHOICE {
 *   bind    Bind{ac.&associationContract.&connection.&bind},
 *   unbind  Unbind{ac.&associationContract.&connection.&unbind}
 * }
 * ```
 */
export type ConnectionAS =
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectionAS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionAS */
let _cached_decoder_for_ConnectionAS: $.ASN1Decoder<ConnectionAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionAS */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectionAS */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionAS} The decoded data structure.
 */
export function _decode_ConnectionAS(el: _Element) {
    if (!_cached_decoder_for_ConnectionAS) {
        _cached_decoder_for_ConnectionAS = $._decode_inextensible_choice<ConnectionAS>(
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
    return _cached_decoder_for_ConnectionAS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectionAS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionAS */
let _cached_encoder_for_ConnectionAS: $.ASN1Encoder<ConnectionAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionAS */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectionAS */
/**
 * @summary Encodes a(n) ConnectionAS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionAS, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionAS(
    value: ConnectionAS,
    elGetter: $.ASN1Encoder<ConnectionAS>
) {
    if (!_cached_encoder_for_ConnectionAS) {
        _cached_encoder_for_ConnectionAS = $._encode_choice<ConnectionAS>(
            {
                bind: _encode_Bind,
                unbind: _encode_Unbind,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectionAS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectionAS */

/* eslint-enable */
