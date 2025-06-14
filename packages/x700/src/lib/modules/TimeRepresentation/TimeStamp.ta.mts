/* eslint-disable */
import {
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
    Epochs,
    _decode_Epochs,
    _encode_Epochs,
} from '../TimeRepresentation/Epochs.ta.mjs';
import {
    Seconds,
    _decode_Seconds,
    _encode_Seconds,
} from '../TimeRepresentation/Seconds.ta.mjs';
import {
    Nanoseconds,
    _decode_Nanoseconds,
    _encode_Nanoseconds,
} from '../TimeRepresentation/Nanoseconds.ta.mjs';
import {
    MaximumErrorInNanoseconds,
    _decode_MaximumErrorInNanoseconds,
    _encode_MaximumErrorInNanoseconds,
} from '../TimeRepresentation/MaximumErrorInNanoseconds.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TimeStamp */
/**
 * @summary TimeStamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStamp ::= SEQUENCE {
 *   epoch         Epochs,
 *   second        Seconds,
 *   nanosecond    Nanoseconds,
 *   maximumError  MaximumErrorInNanoseconds
 * }
 * ```
 *
 * @class
 */
export class TimeStamp {
    constructor(
        /**
         * @summary `epoch`.
         * @public
         * @readonly
         */
        readonly epoch: Epochs,
        /**
         * @summary `second`.
         * @public
         * @readonly
         */
        readonly second: Seconds,
        /**
         * @summary `nanosecond`.
         * @public
         * @readonly
         */
        readonly nanosecond: Nanoseconds,
        /**
         * @summary `maximumError`.
         * @public
         * @readonly
         */
        readonly maximumError: MaximumErrorInNanoseconds
    ) {}

    /**
     * @summary Restructures an object into a TimeStamp
     * @description
     *
     * This takes an `object` and converts it to a `TimeStamp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeStamp`.
     * @returns {TimeStamp}
     */
    public static _from_object(
        _o: { [_K in keyof TimeStamp]: TimeStamp[_K] }
    ): TimeStamp {
        return new TimeStamp(
            _o.epoch,
            _o.second,
            _o.nanosecond,
            _o.maximumError
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TimeStamp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeStamp */
/**
 * @summary The Leading Root Component Types of TimeStamp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeStamp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'epoch',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'second',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nanosecond',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeStamp */
/**
 * @summary The Trailing Root Component Types of TimeStamp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeStamp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeStamp */
/**
 * @summary The Extension Addition Component Types of TimeStamp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeStamp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStamp */
let _cached_decoder_for_TimeStamp: $.ASN1Decoder<TimeStamp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStamp */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeStamp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStamp} The decoded data structure.
 */
export function _decode_TimeStamp(el: _Element) {
    if (!_cached_decoder_for_TimeStamp) {
        _cached_decoder_for_TimeStamp = function (el: _Element): TimeStamp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    'TimeStamp contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'epoch';
            sequence[1].name = 'second';
            sequence[2].name = 'nanosecond';
            sequence[3].name = 'maximumError';
            let epoch!: Epochs;
            let second!: Seconds;
            let nanosecond!: Nanoseconds;
            let maximumError!: MaximumErrorInNanoseconds;
            epoch = _decode_Epochs(sequence[0]);
            second = _decode_Seconds(sequence[1]);
            nanosecond = _decode_Nanoseconds(sequence[2]);
            maximumError = _decode_MaximumErrorInNanoseconds(sequence[3]);
            return new TimeStamp(epoch, second, nanosecond, maximumError);
        };
    }
    return _cached_decoder_for_TimeStamp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStamp */
let _cached_encoder_for_TimeStamp: $.ASN1Encoder<TimeStamp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStamp */
/**
 * @summary Encodes a(n) TimeStamp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStamp, encoded as an ASN.1 Element.
 */
export function _encode_TimeStamp(
    value: TimeStamp,
    elGetter: $.ASN1Encoder<TimeStamp>
) {
    if (!_cached_encoder_for_TimeStamp) {
        _cached_encoder_for_TimeStamp = function (
            value: TimeStamp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Epochs(value.epoch, $.BER),
                        /* REQUIRED   */ _encode_Seconds(value.second, $.BER),
                        /* REQUIRED   */ _encode_Nanoseconds(
                            value.nanosecond,
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
    return _cached_encoder_for_TimeStamp(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeStamp */

/* eslint-enable */
