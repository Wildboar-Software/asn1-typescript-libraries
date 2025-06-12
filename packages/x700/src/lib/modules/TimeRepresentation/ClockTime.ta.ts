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
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from '../TimeRepresentation/TimeStamp.ta.js';
export {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from '../TimeRepresentation/TimeStamp.ta.js';
import {
    CumLeapSeconds,
    _decode_CumLeapSeconds,
    _encode_CumLeapSeconds,
} from '../TimeRepresentation/CumLeapSeconds.ta.js';
export {
    CumLeapSeconds,
    _decode_CumLeapSeconds,
    _encode_CumLeapSeconds,
} from '../TimeRepresentation/CumLeapSeconds.ta.js';
import {
    TimeZone,
    TimeZone_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TimeZone,
    _encode_TimeZone,
} from '../TimeRepresentation/TimeZone.ta.js';
export {
    TimeZone,
    TimeZone_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TimeZone,
    _encode_TimeZone,
} from '../TimeRepresentation/TimeZone.ta.js';

/* START_OF_SYMBOL_DEFINITION ClockTime */
/**
 * @summary ClockTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockTime ::= SEQUENCE {
 *   time           TimeStamp,
 *   leapSeconds    CumLeapSeconds,
 *   localTimeZone  TimeZone
 * }
 * ```
 *
 * @class
 */
export class ClockTime {
    constructor(
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `leapSeconds`.
         * @public
         * @readonly
         */
        readonly leapSeconds: CumLeapSeconds,
        /**
         * @summary `localTimeZone`.
         * @public
         * @readonly
         */
        readonly localTimeZone: TimeZone
    ) {}

    /**
     * @summary Restructures an object into a ClockTime
     * @description
     *
     * This takes an `object` and converts it to a `ClockTime`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClockTime`.
     * @returns {ClockTime}
     */
    public static _from_object(
        _o: { [_K in keyof ClockTime]: ClockTime[_K] }
    ): ClockTime {
        return new ClockTime(_o.time, _o.leapSeconds, _o.localTimeZone);
    }
}
/* END_OF_SYMBOL_DEFINITION ClockTime */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ClockTime */
/**
 * @summary The Leading Root Component Types of ClockTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ClockTime: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'time',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'leapSeconds',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'localTimeZone',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ClockTime */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ClockTime */
/**
 * @summary The Trailing Root Component Types of ClockTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ClockTime: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ClockTime */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ClockTime */
/**
 * @summary The Extension Addition Component Types of ClockTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ClockTime: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ClockTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockTime */
let _cached_decoder_for_ClockTime: $.ASN1Decoder<ClockTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockTime */

/* START_OF_SYMBOL_DEFINITION _decode_ClockTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockTime} The decoded data structure.
 */
export function _decode_ClockTime(el: _Element) {
    if (!_cached_decoder_for_ClockTime) {
        _cached_decoder_for_ClockTime = function (el: _Element): ClockTime {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'ClockTime contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'time';
            sequence[1].name = 'leapSeconds';
            sequence[2].name = 'localTimeZone';
            let time!: TimeStamp;
            let leapSeconds!: CumLeapSeconds;
            let localTimeZone!: TimeZone;
            time = _decode_TimeStamp(sequence[0]);
            leapSeconds = _decode_CumLeapSeconds(sequence[1]);
            localTimeZone = _decode_TimeZone(sequence[2]);
            return new ClockTime(time, leapSeconds, localTimeZone);
        };
    }
    return _cached_decoder_for_ClockTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockTime */
let _cached_encoder_for_ClockTime: $.ASN1Encoder<ClockTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockTime */

/* START_OF_SYMBOL_DEFINITION _encode_ClockTime */
/**
 * @summary Encodes a(n) ClockTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockTime, encoded as an ASN.1 Element.
 */
export function _encode_ClockTime(
    value: ClockTime,
    elGetter: $.ASN1Encoder<ClockTime>
) {
    if (!_cached_encoder_for_ClockTime) {
        _cached_encoder_for_ClockTime = function (
            value: ClockTime,
            elGetter: $.ASN1Encoder<ClockTime>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TimeStamp(value.time, $.BER),
                        /* REQUIRED   */ _encode_CumLeapSeconds(
                            value.leapSeconds,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TimeZone(
                            value.localTimeZone,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ClockTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockTime */

/* eslint-enable */
