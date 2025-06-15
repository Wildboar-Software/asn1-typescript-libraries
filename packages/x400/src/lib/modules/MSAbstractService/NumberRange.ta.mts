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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary NumberRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberRange ::= SEQUENCE {
 *   from  [0]  SequenceNumber OPTIONAL -- omitted means no lower bound--,
 *   to    [1]  SequenceNumber OPTIONAL -- omitted means no upper bound--
 * }
 * ```
 *
 * @class
 */
export class NumberRange {
    constructor(
        /**
         * @summary `from_`.
         * @public
         * @readonly
         */
        readonly from_: OPTIONAL<SequenceNumber>,
        /**
         * @summary `to`.
         * @public
         * @readonly
         */
        readonly to: OPTIONAL<SequenceNumber>
    ) {}

    /**
     * @summary Restructures an object into a NumberRange
     * @description
     *
     * This takes an `object` and converts it to a `NumberRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberRange`.
     * @returns {NumberRange}
     */
    public static _from_object(
        _o: { [_K in keyof NumberRange]: NumberRange[_K] }
    ): NumberRange {
        return new NumberRange(_o.from_, _o.to);
    }
}

/**
 * @summary The Leading Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NumberRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'from',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'to',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NumberRange: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NumberRange: $.ComponentSpec[] = [];

let _cached_decoder_for_NumberRange: $.ASN1Decoder<NumberRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberRange} The decoded data structure.
 */
export function _decode_NumberRange(el: _Element) {
    if (!_cached_decoder_for_NumberRange) {
        _cached_decoder_for_NumberRange = function (el: _Element): NumberRange {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let from_: OPTIONAL<SequenceNumber>;
            let to: OPTIONAL<SequenceNumber>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                from: (_el: _Element): void => {
                    from_ = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                to: (_el: _Element): void => {
                    to = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NumberRange,
                _extension_additions_list_spec_for_NumberRange,
                _root_component_type_list_2_spec_for_NumberRange,
                undefined
            );
            return new NumberRange /* SEQUENCE_CONSTRUCTOR_CALL */(from_, to);
        };
    }
    return _cached_decoder_for_NumberRange(el);
}

let _cached_encoder_for_NumberRange: $.ASN1Encoder<NumberRange> | null = null;

/**
 * @summary Encodes a(n) NumberRange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberRange, encoded as an ASN.1 Element.
 */
export function _encode_NumberRange(
    value: NumberRange,
    elGetter: $.ASN1Encoder<NumberRange>
) {
    if (!_cached_encoder_for_NumberRange) {
        _cached_encoder_for_NumberRange = function (
            value: NumberRange        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.from_ === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.from_, $.BER),
                        /* IF_ABSENT  */ value.to === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.to, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NumberRange(value, elGetter);
}


/* eslint-enable */
