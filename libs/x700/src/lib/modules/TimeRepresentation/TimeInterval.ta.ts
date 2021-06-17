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
    Epochs,
    _decode_Epochs,
    _encode_Epochs,
} from '../TimeRepresentation/Epochs.ta';
export {
    Epochs,
    _decode_Epochs,
    _encode_Epochs,
} from '../TimeRepresentation/Epochs.ta';
import {
    Seconds,
    _decode_Seconds,
    _encode_Seconds,
} from '../TimeRepresentation/Seconds.ta';
export {
    Seconds,
    _decode_Seconds,
    _encode_Seconds,
} from '../TimeRepresentation/Seconds.ta';
import {
    Nanoseconds,
    _decode_Nanoseconds,
    _encode_Nanoseconds,
} from '../TimeRepresentation/Nanoseconds.ta';
export {
    Nanoseconds,
    _decode_Nanoseconds,
    _encode_Nanoseconds,
} from '../TimeRepresentation/Nanoseconds.ta';

/* START_OF_SYMBOL_DEFINITION TimeInterval */
/**
 * @summary TimeInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeInterval ::= SEQUENCE {
 *   epochs       Epochs,
 *   seconds      Seconds,
 *   nanoseconds  Nanoseconds
 * }
 * ```
 *
 * @class
 */
export class TimeInterval {
    constructor(
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
        readonly nanoseconds: Nanoseconds
    ) {}

    /**
     * @summary Restructures an object into a TimeInterval
     * @description
     *
     * This takes an `object` and converts it to a `TimeInterval`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeInterval`.
     * @returns {TimeInterval}
     */
    public static _from_object(
        _o: { [_K in keyof TimeInterval]: TimeInterval[_K] }
    ): TimeInterval {
        return new TimeInterval(_o.epochs, _o.seconds, _o.nanoseconds);
    }
}
/* END_OF_SYMBOL_DEFINITION TimeInterval */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeInterval */
/**
 * @summary The Leading Root Component Types of TimeInterval
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeInterval: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeInterval */
/**
 * @summary The Trailing Root Component Types of TimeInterval
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeInterval: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeInterval */
/**
 * @summary The Extension Addition Component Types of TimeInterval
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeInterval: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeInterval */
let _cached_decoder_for_TimeInterval: $.ASN1Decoder<TimeInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _decode_TimeInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeInterval} The decoded data structure.
 */
export function _decode_TimeInterval(el: _Element) {
    if (!_cached_decoder_for_TimeInterval) {
        _cached_decoder_for_TimeInterval = function (
            el: _Element
        ): TimeInterval {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'TimeInterval contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'epochs';
            sequence[1].name = 'seconds';
            sequence[2].name = 'nanoseconds';
            let epochs!: Epochs;
            let seconds!: Seconds;
            let nanoseconds!: Nanoseconds;
            epochs = _decode_Epochs(sequence[0]);
            seconds = _decode_Seconds(sequence[1]);
            nanoseconds = _decode_Nanoseconds(sequence[2]);
            return new TimeInterval(epochs, seconds, nanoseconds);
        };
    }
    return _cached_decoder_for_TimeInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeInterval */
let _cached_encoder_for_TimeInterval: $.ASN1Encoder<TimeInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _encode_TimeInterval */
/**
 * @summary Encodes a(n) TimeInterval into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeInterval, encoded as an ASN.1 Element.
 */
export function _encode_TimeInterval(
    value: TimeInterval,
    elGetter: $.ASN1Encoder<TimeInterval>
) {
    if (!_cached_encoder_for_TimeInterval) {
        _cached_encoder_for_TimeInterval = function (
            value: TimeInterval,
            elGetter: $.ASN1Encoder<TimeInterval>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Epochs(value.epochs, $.BER),
                        /* REQUIRED   */ _encode_Seconds(value.seconds, $.BER),
                        /* REQUIRED   */ _encode_Nanoseconds(
                            value.nanoseconds,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TimeInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeInterval */

/* eslint-enable */
