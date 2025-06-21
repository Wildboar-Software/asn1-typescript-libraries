/* eslint-disable */
import {
    OPTIONAL,
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
    CreationTime,
    _decode_CreationTime,
    _encode_CreationTime,
} from '../MSAbstractService/CreationTime.ta.mjs';
/**
 * @summary TimeRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeRange ::= SEQUENCE {
 *   from  [0]  CreationTime OPTIONAL -- omitted means no lower bound--,
 *   to    [1]  CreationTime OPTIONAL -- omitted means no upper bound--
 * }
 * ```
 *
 * @class
 */
export class TimeRange {
    constructor(
        /**
         * @summary `from_`.
         * @public
         * @readonly
         */
        readonly from_: OPTIONAL<CreationTime>,
        /**
         * @summary `to`.
         * @public
         * @readonly
         */
        readonly to: OPTIONAL<CreationTime>
    ) {}

    /**
     * @summary Restructures an object into a TimeRange
     * @description
     *
     * This takes an `object` and converts it to a `TimeRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeRange`.
     * @returns {TimeRange}
     */
    public static _from_object(
        _o: { [_K in keyof TimeRange]: TimeRange[_K] }
    ): TimeRange {
        return new TimeRange(_o.from_, _o.to);
    }
}

/**
 * @summary The Leading Root Component Types of TimeRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'from',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'to',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TimeRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeRange: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TimeRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeRange: $.ComponentSpec[] = [];

let _cached_decoder_for_TimeRange: $.ASN1Decoder<TimeRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeRange} The decoded data structure.
 */
export function _decode_TimeRange(el: _Element) {
    if (!_cached_decoder_for_TimeRange) {
        _cached_decoder_for_TimeRange = function (el: _Element): TimeRange {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let from_: OPTIONAL<CreationTime>;
            let to: OPTIONAL<CreationTime>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                from: (_el: _Element): void => {
                    from_ = $._decode_explicit<CreationTime>(
                        () => _decode_CreationTime
                    )(_el);
                },
                to: (_el: _Element): void => {
                    to = $._decode_explicit<CreationTime>(
                        () => _decode_CreationTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeRange,
                _extension_additions_list_spec_for_TimeRange,
                _root_component_type_list_2_spec_for_TimeRange,
                undefined
            );
            return new TimeRange /* SEQUENCE_CONSTRUCTOR_CALL */(from_, to);
        };
    }
    return _cached_decoder_for_TimeRange(el);
}

let _cached_encoder_for_TimeRange: $.ASN1Encoder<TimeRange> | null = null;

/**
 * @summary Encodes a(n) TimeRange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeRange, encoded as an ASN.1 Element.
 */
export function _encode_TimeRange(
    value: TimeRange,
    elGetter: $.ASN1Encoder<TimeRange>
) {
    if (!_cached_encoder_for_TimeRange) {
        _cached_encoder_for_TimeRange = function (
            value: TimeRange        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.from_ === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CreationTime,
                                  $.BER
                              )(value.from_, $.BER),
                        /* IF_ABSENT  */ value.to === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CreationTime,
                                  $.BER
                              )(value.to, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TimeRange(value, elGetter);
}


/* eslint-enable */
