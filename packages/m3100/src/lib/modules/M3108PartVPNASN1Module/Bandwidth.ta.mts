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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Bandwidth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bandwidth ::= SEQUENCE {
 *   peakBandwidth         [0]  INTEGER OPTIONAL,
 *   sustainableBandwidth  [1]  INTEGER OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class Bandwidth {
    constructor(
        /**
         * @summary `peakBandwidth`.
         * @public
         * @readonly
         */
        readonly peakBandwidth: OPTIONAL<INTEGER>,
        /**
         * @summary `sustainableBandwidth`.
         * @public
         * @readonly
         */
        readonly sustainableBandwidth: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Bandwidth
     * @description
     *
     * This takes an `object` and converts it to a `Bandwidth`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Bandwidth`.
     * @returns {Bandwidth}
     */
    public static _from_object(
        _o: { [_K in keyof Bandwidth]: Bandwidth[_K] }
    ): Bandwidth {
        return new Bandwidth(
            _o.peakBandwidth,
            _o.sustainableBandwidth,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of Bandwidth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Bandwidth: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'peakBandwidth',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'sustainableBandwidth',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of Bandwidth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Bandwidth: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Bandwidth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Bandwidth: $.ComponentSpec[] = [];


let _cached_decoder_for_Bandwidth: $.ASN1Decoder<Bandwidth> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Bandwidth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bandwidth} The decoded data structure.
 */
export function _decode_Bandwidth(el: _Element) {
    if (!_cached_decoder_for_Bandwidth) {
        _cached_decoder_for_Bandwidth = function (el: _Element): Bandwidth {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let peakBandwidth: OPTIONAL<INTEGER>;
            let sustainableBandwidth: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                peakBandwidth: (_el: _Element): void => {
                    peakBandwidth = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                sustainableBandwidth: (_el: _Element): void => {
                    sustainableBandwidth = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Bandwidth,
                _extension_additions_list_spec_for_Bandwidth,
                _root_component_type_list_2_spec_for_Bandwidth,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Bandwidth /* SEQUENCE_CONSTRUCTOR_CALL */(
                peakBandwidth,
                sustainableBandwidth,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Bandwidth(el);
}


let _cached_encoder_for_Bandwidth: $.ASN1Encoder<Bandwidth> | null = null;


/**
 * @summary Encodes a(n) Bandwidth into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bandwidth, encoded as an ASN.1 Element.
 */
export function _encode_Bandwidth(
    value: Bandwidth,
    elGetter: $.ASN1Encoder<Bandwidth>
) {
    if (!_cached_encoder_for_Bandwidth) {
        _cached_encoder_for_Bandwidth = function (
            value: Bandwidth        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.peakBandwidth === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.peakBandwidth, $.BER),
                            /* IF_ABSENT  */ value.sustainableBandwidth ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.sustainableBandwidth, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Bandwidth(value, elGetter);
}


/* eslint-enable */
