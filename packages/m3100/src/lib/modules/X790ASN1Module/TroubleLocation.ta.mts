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
    LocationAddress,
    _decode_LocationAddress,
    _encode_LocationAddress,
} from '../X790ASN1Module/LocationAddress.ta.mjs';
export {
    LocationAddress,
    _decode_LocationAddress,
    _encode_LocationAddress,
} from '../X790ASN1Module/LocationAddress.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TroubleLocation */
/**
 * @summary TroubleLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleLocation  ::=  CHOICE {
 *   locationAddress         [0]  LocationAddress,
 *   locationPtr             [1]  ObjectInstance,
 *   noTroubleLocationValue  [2]  NULL, -- used when Trouble Location not relevant
 *   ...
 * }
 * ```
 */
export type TroubleLocation =
    | { locationAddress: LocationAddress } /* CHOICE_ALT_ROOT */
    | { locationPtr: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { noTroubleLocationValue: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TroubleLocation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleLocation */
let _cached_decoder_for_TroubleLocation: $.ASN1Decoder<TroubleLocation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleLocation */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleLocation */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleLocation} The decoded data structure.
 */
export function _decode_TroubleLocation(el: _Element) {
    if (!_cached_decoder_for_TroubleLocation) {
        _cached_decoder_for_TroubleLocation = $._decode_extensible_choice<TroubleLocation>(
            {
                'CONTEXT 0': [
                    'locationAddress',
                    $._decode_implicit<LocationAddress>(
                        () => _decode_LocationAddress
                    ),
                ],
                'CONTEXT 1': [
                    'locationPtr',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 2': [
                    'noTroubleLocationValue',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_TroubleLocation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleLocation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleLocation */
let _cached_encoder_for_TroubleLocation: $.ASN1Encoder<TroubleLocation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleLocation */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleLocation */
/**
 * @summary Encodes a(n) TroubleLocation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleLocation, encoded as an ASN.1 Element.
 */
export function _encode_TroubleLocation(
    value: TroubleLocation,
    elGetter: $.ASN1Encoder<TroubleLocation>
) {
    if (!_cached_encoder_for_TroubleLocation) {
        _cached_encoder_for_TroubleLocation = $._encode_choice<TroubleLocation>(
            {
                locationAddress: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_LocationAddress,
                    $.BER
                ),
                locationPtr: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                noTroubleLocationValue: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TroubleLocation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleLocation */

/* eslint-enable */
