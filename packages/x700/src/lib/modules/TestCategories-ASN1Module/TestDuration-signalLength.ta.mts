/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
    DataRate,
    _decode_DataRate,
    _encode_DataRate,
} from '../TestCategories-ASN1Module/DataRate.ta.mjs';
/**
 * @summary TestDuration_signalLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestDuration-signalLength ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TestDuration_signalLength {
    constructor(
        /**
         * @summary `size`.
         * @public
         * @readonly
         */
        readonly size: INTEGER,
        /**
         * @summary `dataRate`.
         * @public
         * @readonly
         */
        readonly dataRate: OPTIONAL<DataRate>
    ) {}

    /**
     * @summary Restructures an object into a TestDuration_signalLength
     * @description
     *
     * This takes an `object` and converts it to a `TestDuration_signalLength`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestDuration_signalLength`.
     * @returns {TestDuration_signalLength}
     */
    public static _from_object(
        _o: {
            [_K in keyof TestDuration_signalLength]: TestDuration_signalLength[_K];
        }
    ): TestDuration_signalLength {
        return new TestDuration_signalLength(_o.size, _o.dataRate);
    }
}

/**
 * @summary The Leading Root Component Types of TestDuration_signalLength
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestDuration_signalLength: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'size',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec('dataRate', true, $.hasAnyTag, undefined, undefined),
];

/**
 * @summary The Trailing Root Component Types of TestDuration_signalLength
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestDuration_signalLength: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TestDuration_signalLength
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestDuration_signalLength: $.ComponentSpec[] = [];

let _cached_decoder_for_TestDuration_signalLength: $.ASN1Decoder<TestDuration_signalLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestDuration_signalLength
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestDuration_signalLength} The decoded data structure.
 */
export function _decode_TestDuration_signalLength(el: _Element) {
    if (!_cached_decoder_for_TestDuration_signalLength) {
        _cached_decoder_for_TestDuration_signalLength = function (
            el: _Element
        ): TestDuration_signalLength {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let size!: INTEGER;
            let dataRate: OPTIONAL<DataRate>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                size: (_el: _Element): void => {
                    size = $._decodeInteger(_el);
                },
                dataRate: (_el: _Element): void => {
                    dataRate = _decode_DataRate(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestDuration_signalLength,
                _extension_additions_list_spec_for_TestDuration_signalLength,
                _root_component_type_list_2_spec_for_TestDuration_signalLength,
                undefined
            );
            return new TestDuration_signalLength /* SEQUENCE_CONSTRUCTOR_CALL */(
                size,
                dataRate
            );
        };
    }
    return _cached_decoder_for_TestDuration_signalLength(el);
}

let _cached_encoder_for_TestDuration_signalLength: $.ASN1Encoder<TestDuration_signalLength> | null = null;

/**
 * @summary Encodes a(n) TestDuration_signalLength into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestDuration_signalLength, encoded as an ASN.1 Element.
 */
export function _encode_TestDuration_signalLength(
    value: TestDuration_signalLength,
    elGetter: $.ASN1Encoder<TestDuration_signalLength>
) {
    if (!_cached_encoder_for_TestDuration_signalLength) {
        _cached_encoder_for_TestDuration_signalLength = function (
            value: TestDuration_signalLength        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.size, $.BER),
                        /* IF_ABSENT  */ value.dataRate === undefined
                            ? undefined
                            : _encode_DataRate(value.dataRate, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestDuration_signalLength(value, elGetter);
}


/* eslint-enable */
