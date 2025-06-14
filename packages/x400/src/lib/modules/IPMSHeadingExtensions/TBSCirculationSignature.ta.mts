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
    CirculationSignatureAlgorithmIdentifier,
    _decode_CirculationSignatureAlgorithmIdentifier,
    _encode_CirculationSignatureAlgorithmIdentifier,
} from '../IPMSHeadingExtensions/CirculationSignatureAlgorithmIdentifier.ta.mjs';
import {
    ThisIPMField,
    _decode_ThisIPMField,
    _encode_ThisIPMField,
} from '../IPMSInformationObjects/ThisIPMField.ta.mjs';
import {
    CirculationTime,
    _decode_CirculationTime,
    _encode_CirculationTime,
} from '../IPMSHeadingExtensions/CirculationTime.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TBSCirculationSignature */
/**
 * @summary TBSCirculationSignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCirculationSignature ::= SEQUENCE {
 *     algorithm-identifier  CirculationSignatureAlgorithmIdentifier,
 *     this-IPM              ThisIPMField,
 *     timestamp             CirculationTime }
 * ```
 *
 * @class
 */
export class TBSCirculationSignature {
    constructor(
        /**
         * @summary `algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly algorithm_identifier: CirculationSignatureAlgorithmIdentifier,
        /**
         * @summary `this_IPM`.
         * @public
         * @readonly
         */
        readonly this_IPM: ThisIPMField,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: CirculationTime
    ) {}

    /**
     * @summary Restructures an object into a TBSCirculationSignature
     * @description
     *
     * This takes an `object` and converts it to a `TBSCirculationSignature`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCirculationSignature`.
     * @returns {TBSCirculationSignature}
     */
    public static _from_object(
        _o: {
            [_K in keyof TBSCirculationSignature]: TBSCirculationSignature[_K];
        }
    ): TBSCirculationSignature {
        return new TBSCirculationSignature(
            _o.algorithm_identifier,
            _o.this_IPM,
            _o.timestamp
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TBSCirculationSignature */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCirculationSignature */
/**
 * @summary The Leading Root Component Types of TBSCirculationSignature
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCirculationSignature: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'algorithm-identifier',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'this-IPM',
        false,
        $.hasTag(_TagClass.application, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'timestamp',
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCirculationSignature */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCirculationSignature */
/**
 * @summary The Trailing Root Component Types of TBSCirculationSignature
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCirculationSignature: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCirculationSignature */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCirculationSignature */
/**
 * @summary The Extension Addition Component Types of TBSCirculationSignature
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCirculationSignature: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCirculationSignature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCirculationSignature */
let _cached_decoder_for_TBSCirculationSignature: $.ASN1Decoder<TBSCirculationSignature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCirculationSignature */

/* START_OF_SYMBOL_DEFINITION _decode_TBSCirculationSignature */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCirculationSignature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCirculationSignature} The decoded data structure.
 */
export function _decode_TBSCirculationSignature(el: _Element) {
    if (!_cached_decoder_for_TBSCirculationSignature) {
        _cached_decoder_for_TBSCirculationSignature = function (
            el: _Element
        ): TBSCirculationSignature {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'TBSCirculationSignature contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'algorithm-identifier';
            sequence[1].name = 'this-IPM';
            sequence[2].name = 'timestamp';
            let algorithm_identifier!: CirculationSignatureAlgorithmIdentifier;
            let this_IPM!: ThisIPMField;
            let timestamp!: CirculationTime;
            algorithm_identifier = _decode_CirculationSignatureAlgorithmIdentifier(
                sequence[0]
            );
            this_IPM = _decode_ThisIPMField(sequence[1]);
            timestamp = _decode_CirculationTime(sequence[2]);
            return new TBSCirculationSignature(
                algorithm_identifier,
                this_IPM,
                timestamp
            );
        };
    }
    return _cached_decoder_for_TBSCirculationSignature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSCirculationSignature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCirculationSignature */
let _cached_encoder_for_TBSCirculationSignature: $.ASN1Encoder<TBSCirculationSignature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCirculationSignature */

/* START_OF_SYMBOL_DEFINITION _encode_TBSCirculationSignature */
/**
 * @summary Encodes a(n) TBSCirculationSignature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCirculationSignature, encoded as an ASN.1 Element.
 */
export function _encode_TBSCirculationSignature(
    value: TBSCirculationSignature,
    elGetter: $.ASN1Encoder<TBSCirculationSignature>
) {
    if (!_cached_encoder_for_TBSCirculationSignature) {
        _cached_encoder_for_TBSCirculationSignature = function (
            value: TBSCirculationSignature        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CirculationSignatureAlgorithmIdentifier(
                            value.algorithm_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ThisIPMField(
                            value.this_IPM,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_CirculationTime(
                            value.timestamp,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TBSCirculationSignature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSCirculationSignature */

/* eslint-enable */
