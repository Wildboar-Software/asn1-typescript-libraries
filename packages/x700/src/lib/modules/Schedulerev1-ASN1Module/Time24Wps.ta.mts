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

/* START_OF_SYMBOL_DEFINITION Time24Wps */
/**
 * @summary Time24Wps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time24Wps ::= SEQUENCE {
 *   hour          [1]  INTEGER(0..23),
 *   minute        [2]  INTEGER(0..59) OPTIONAL,
 *   second        [3]  INTEGER(0..59) OPTIONAL,
 *   milliseconds  [4]  INTEGER(0..999) OPTIONAL,
 *   microseconds  [5]  INTEGER(0..999999) OPTIONAL,
 *   nanoseconds   [6]  INTEGER(0..999999999) OPTIONAL,
 *   picoseconds   [7]  INTEGER(0..999999999999) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Time24Wps {
    constructor(
        /**
         * @summary `hour`.
         * @public
         * @readonly
         */
        readonly hour: INTEGER,
        /**
         * @summary `minute`.
         * @public
         * @readonly
         */
        readonly minute: OPTIONAL<INTEGER>,
        /**
         * @summary `second`.
         * @public
         * @readonly
         */
        readonly second: OPTIONAL<INTEGER>,
        /**
         * @summary `milliseconds`.
         * @public
         * @readonly
         */
        readonly milliseconds: OPTIONAL<INTEGER>,
        /**
         * @summary `microseconds`.
         * @public
         * @readonly
         */
        readonly microseconds: OPTIONAL<INTEGER>,
        /**
         * @summary `nanoseconds`.
         * @public
         * @readonly
         */
        readonly nanoseconds: OPTIONAL<INTEGER>,
        /**
         * @summary `picoseconds`.
         * @public
         * @readonly
         */
        readonly picoseconds: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a Time24Wps
     * @description
     *
     * This takes an `object` and converts it to a `Time24Wps`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Time24Wps`.
     * @returns {Time24Wps}
     */
    public static _from_object(
        _o: { [_K in keyof Time24Wps]: Time24Wps[_K] }
    ): Time24Wps {
        return new Time24Wps(
            _o.hour,
            _o.minute,
            _o.second,
            _o.milliseconds,
            _o.microseconds,
            _o.nanoseconds,
            _o.picoseconds
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Time24Wps */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Time24Wps */
/**
 * @summary The Leading Root Component Types of Time24Wps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Time24Wps: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'hour',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'minute',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'second',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'milliseconds',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'microseconds',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nanoseconds',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'picoseconds',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Time24Wps */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Time24Wps */
/**
 * @summary The Trailing Root Component Types of Time24Wps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Time24Wps: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Time24Wps */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Time24Wps */
/**
 * @summary The Extension Addition Component Types of Time24Wps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Time24Wps: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Time24Wps */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Time24Wps */
let _cached_decoder_for_Time24Wps: $.ASN1Decoder<Time24Wps> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Time24Wps */

/* START_OF_SYMBOL_DEFINITION _decode_Time24Wps */
/**
 * @summary Decodes an ASN.1 element into a(n) Time24Wps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time24Wps} The decoded data structure.
 */
export function _decode_Time24Wps(el: _Element) {
    if (!_cached_decoder_for_Time24Wps) {
        _cached_decoder_for_Time24Wps = function (el: _Element): Time24Wps {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hour!: INTEGER;
            let minute: OPTIONAL<INTEGER>;
            let second: OPTIONAL<INTEGER>;
            let milliseconds: OPTIONAL<INTEGER>;
            let microseconds: OPTIONAL<INTEGER>;
            let nanoseconds: OPTIONAL<INTEGER>;
            let picoseconds: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                hour: (_el: _Element): void => {
                    hour = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                minute: (_el: _Element): void => {
                    minute = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                second: (_el: _Element): void => {
                    second = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                milliseconds: (_el: _Element): void => {
                    milliseconds = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                microseconds: (_el: _Element): void => {
                    microseconds = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                nanoseconds: (_el: _Element): void => {
                    nanoseconds = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                picoseconds: (_el: _Element): void => {
                    picoseconds = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Time24Wps,
                _extension_additions_list_spec_for_Time24Wps,
                _root_component_type_list_2_spec_for_Time24Wps,
                undefined
            );
            return new Time24Wps /* SEQUENCE_CONSTRUCTOR_CALL */(
                hour,
                minute,
                second,
                milliseconds,
                microseconds,
                nanoseconds,
                picoseconds
            );
        };
    }
    return _cached_decoder_for_Time24Wps(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Time24Wps */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Time24Wps */
let _cached_encoder_for_Time24Wps: $.ASN1Encoder<Time24Wps> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Time24Wps */

/* START_OF_SYMBOL_DEFINITION _encode_Time24Wps */
/**
 * @summary Encodes a(n) Time24Wps into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time24Wps, encoded as an ASN.1 Element.
 */
export function _encode_Time24Wps(
    value: Time24Wps,
    elGetter: $.ASN1Encoder<Time24Wps>
) {
    if (!_cached_encoder_for_Time24Wps) {
        _cached_encoder_for_Time24Wps = function (
            value: Time24Wps,
            elGetter: $.ASN1Encoder<Time24Wps>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.hour, $.BER),
                        /* IF_ABSENT  */ value.minute === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.minute, $.BER),
                        /* IF_ABSENT  */ value.second === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.second, $.BER),
                        /* IF_ABSENT  */ value.milliseconds === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.milliseconds, $.BER),
                        /* IF_ABSENT  */ value.microseconds === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.microseconds, $.BER),
                        /* IF_ABSENT  */ value.nanoseconds === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.nanoseconds, $.BER),
                        /* IF_ABSENT  */ value.picoseconds === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.picoseconds, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Time24Wps(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Time24Wps */

/* eslint-enable */
