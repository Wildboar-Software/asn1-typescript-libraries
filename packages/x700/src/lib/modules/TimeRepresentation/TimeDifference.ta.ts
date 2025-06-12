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
    TimeDifference_sign,
    _enum_for_TimeDifference_sign,
    TimeDifference_sign_positive /* IMPORTED_LONG_ENUMERATION_ITEM */,
    positive /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TimeDifference_sign_negative /* IMPORTED_LONG_ENUMERATION_ITEM */,
    negative /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TimeDifference_sign,
    _encode_TimeDifference_sign,
} from '../TimeRepresentation/TimeDifference-sign.ta.js';
export {
    TimeDifference_sign,
    _enum_for_TimeDifference_sign,
    TimeDifference_sign_positive /* IMPORTED_LONG_ENUMERATION_ITEM */,
    positive /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TimeDifference_sign_negative /* IMPORTED_LONG_ENUMERATION_ITEM */,
    negative /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TimeDifference_sign,
    _encode_TimeDifference_sign,
} from '../TimeRepresentation/TimeDifference-sign.ta.js';
import {
    Epochs,
    _decode_Epochs,
    _encode_Epochs,
} from '../TimeRepresentation/Epochs.ta.js';
export {
    Epochs,
    _decode_Epochs,
    _encode_Epochs,
} from '../TimeRepresentation/Epochs.ta.js';
import {
    Seconds,
    _decode_Seconds,
    _encode_Seconds,
} from '../TimeRepresentation/Seconds.ta.js';
export {
    Seconds,
    _decode_Seconds,
    _encode_Seconds,
} from '../TimeRepresentation/Seconds.ta.js';
import {
    Nanoseconds,
    _decode_Nanoseconds,
    _encode_Nanoseconds,
} from '../TimeRepresentation/Nanoseconds.ta.js';
export {
    Nanoseconds,
    _decode_Nanoseconds,
    _encode_Nanoseconds,
} from '../TimeRepresentation/Nanoseconds.ta.js';
import {
    MaximumErrorInNanoseconds,
    MaximumErrorInNanoseconds_noEstimate /* IMPORTED_LONG_NAMED_INTEGER */,
    noEstimate /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_MaximumErrorInNanoseconds,
    _encode_MaximumErrorInNanoseconds,
} from '../TimeRepresentation/MaximumErrorInNanoseconds.ta.js';
export {
    MaximumErrorInNanoseconds,
    MaximumErrorInNanoseconds_noEstimate /* IMPORTED_LONG_NAMED_INTEGER */,
    noEstimate /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_MaximumErrorInNanoseconds,
    _encode_MaximumErrorInNanoseconds,
} from '../TimeRepresentation/MaximumErrorInNanoseconds.ta.js';

/* START_OF_SYMBOL_DEFINITION TimeDifference */
/**
 * @summary TimeDifference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeDifference ::= SEQUENCE {
 *   sign          ENUMERATED {positive(0), negative(1)},
 *   epochs        Epochs,
 *   seconds       Seconds,
 *   nanoseconds   Nanoseconds,
 *   maximumError  MaximumErrorInNanoseconds
 * }
 * ```
 *
 * @class
 */
export class TimeDifference {
    constructor(
        /**
         * @summary `sign`.
         * @public
         * @readonly
         */
        readonly sign: TimeDifference_sign,
        /**
         * @summary `epochs`.
         * @public
         * @readonly
         */
        readonly epochs: Epochs,
        /**
         * @summary `seconds`.
         * @public
         * @readonly
         */
        readonly seconds: Seconds,
        /**
         * @summary `nanoseconds`.
         * @public
         * @readonly
         */
        readonly nanoseconds: Nanoseconds,
        /**
         * @summary `maximumError`.
         * @public
         * @readonly
         */
        readonly maximumError: MaximumErrorInNanoseconds
    ) {}

    /**
     * @summary Restructures an object into a TimeDifference
     * @description
     *
     * This takes an `object` and converts it to a `TimeDifference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeDifference`.
     * @returns {TimeDifference}
     */
    public static _from_object(
        _o: { [_K in keyof TimeDifference]: TimeDifference[_K] }
    ): TimeDifference {
        return new TimeDifference(
            _o.sign,
            _o.epochs,
            _o.seconds,
            _o.nanoseconds,
            _o.maximumError
        );
    }

    /**
     * @summary The enum used as the type of the component `sign`
     * @public
     * @static
     */

    public static _enum_for_sign = _enum_for_TimeDifference_sign;
}
/* END_OF_SYMBOL_DEFINITION TimeDifference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeDifference */
/**
 * @summary The Leading Root Component Types of TimeDifference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeDifference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'sign',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'epochs',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'seconds',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nanoseconds',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'maximumError',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeDifference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeDifference */
/**
 * @summary The Trailing Root Component Types of TimeDifference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeDifference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeDifference */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeDifference */
/**
 * @summary The Extension Addition Component Types of TimeDifference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeDifference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeDifference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeDifference */
let _cached_decoder_for_TimeDifference: $.ASN1Decoder<TimeDifference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeDifference */

/* START_OF_SYMBOL_DEFINITION _decode_TimeDifference */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeDifference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeDifference} The decoded data structure.
 */
export function _decode_TimeDifference(el: _Element) {
    if (!_cached_decoder_for_TimeDifference) {
        _cached_decoder_for_TimeDifference = function (
            el: _Element
        ): TimeDifference {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 5) {
                throw new _ConstructionError(
                    'TimeDifference contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'sign';
            sequence[1].name = 'epochs';
            sequence[2].name = 'seconds';
            sequence[3].name = 'nanoseconds';
            sequence[4].name = 'maximumError';
            let sign!: TimeDifference_sign;
            let epochs!: Epochs;
            let seconds!: Seconds;
            let nanoseconds!: Nanoseconds;
            let maximumError!: MaximumErrorInNanoseconds;
            sign = _decode_TimeDifference_sign(sequence[0]);
            epochs = _decode_Epochs(sequence[1]);
            seconds = _decode_Seconds(sequence[2]);
            nanoseconds = _decode_Nanoseconds(sequence[3]);
            maximumError = _decode_MaximumErrorInNanoseconds(sequence[4]);
            return new TimeDifference(
                sign,
                epochs,
                seconds,
                nanoseconds,
                maximumError
            );
        };
    }
    return _cached_decoder_for_TimeDifference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeDifference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeDifference */
let _cached_encoder_for_TimeDifference: $.ASN1Encoder<TimeDifference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeDifference */

/* START_OF_SYMBOL_DEFINITION _encode_TimeDifference */
/**
 * @summary Encodes a(n) TimeDifference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeDifference, encoded as an ASN.1 Element.
 */
export function _encode_TimeDifference(
    value: TimeDifference,
    elGetter: $.ASN1Encoder<TimeDifference>
) {
    if (!_cached_encoder_for_TimeDifference) {
        _cached_encoder_for_TimeDifference = function (
            value: TimeDifference,
            elGetter: $.ASN1Encoder<TimeDifference>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TimeDifference_sign(
                            value.sign,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Epochs(value.epochs, $.BER),
                        /* REQUIRED   */ _encode_Seconds(value.seconds, $.BER),
                        /* REQUIRED   */ _encode_Nanoseconds(
                            value.nanoseconds,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MaximumErrorInNanoseconds(
                            value.maximumError,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TimeDifference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeDifference */

/* eslint-enable */
