/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PeriodicStrategy,
    _decode_PeriodicStrategy,
    _encode_PeriodicStrategy,
} from "../DirectoryShadowAbstractService/PeriodicStrategy.ta.mjs";
/**
 * @summary SchedulingParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchedulingParameters ::= SEQUENCE {
 *   periodic    PeriodicStrategy OPTIONAL, -- shall be present if othertimes
 *   --                                        is set to FALSE
 *   othertimes  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 */
export class SchedulingParameters {
    constructor(
        /**
         * @summary `periodic`.
         * @public
         * @readonly
         */
        readonly periodic: OPTIONAL<PeriodicStrategy>,
        /**
         * @summary `othertimes`.
         * @public
         * @readonly
         */
        readonly othertimes: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SchedulingParameters
     * @description
     *
     * This takes an `object` and converts it to a `SchedulingParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchedulingParameters`.
     * @returns {SchedulingParameters}
     */
    public static _from_object(
        _o: { [_K in keyof SchedulingParameters]: SchedulingParameters[_K] }
    ): SchedulingParameters {
        return new SchedulingParameters(
            _o.periodic,
            _o.othertimes,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `othertimes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_othertimes(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SchedulingParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "periodic",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "othertimes",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SchedulingParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SchedulingParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_SchedulingParameters: $.ASN1Decoder<SchedulingParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingParameters} The decoded data structure.
 */
export function _decode_SchedulingParameters(el: _Element): SchedulingParameters {
    if (!_cached_decoder_for_SchedulingParameters) {
        _cached_decoder_for_SchedulingParameters = function (
            el: _Element
        ): SchedulingParameters {
            let periodic: OPTIONAL<PeriodicStrategy>;
            let othertimes: OPTIONAL<BOOLEAN> =
                SchedulingParameters._default_value_for_othertimes;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                periodic: (_el: _Element): void => {
                    periodic = _decode_PeriodicStrategy(_el);
                },
                othertimes: (_el: _Element): void => {
                    othertimes = $._decodeBoolean(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SchedulingParameters,
                _extension_additions_list_spec_for_SchedulingParameters,
                _root_component_type_list_2_spec_for_SchedulingParameters,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SchedulingParameters(
                periodic,
                othertimes,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SchedulingParameters(el);
}

let _cached_encoder_for_SchedulingParameters: $.ASN1Encoder<SchedulingParameters> | null = null;

/**
 * @summary Encodes a(n) SchedulingParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingParameters, encoded as an ASN.1 Element.
 */
export function _encode_SchedulingParameters(
    value: SchedulingParameters,
    elGetter: $.ASN1Encoder<SchedulingParameters>
): _Element {
    if (!_cached_encoder_for_SchedulingParameters) {
        _cached_encoder_for_SchedulingParameters = function (
            value: SchedulingParameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.periodic === undefined
                                ? undefined
                                : _encode_PeriodicStrategy(
                                      value.periodic,
                                      $.DER
                                  ),
                            /* IF_DEFAULT */ value.othertimes === undefined ||
                            $.deepEq(
                                value.othertimes,
                                SchedulingParameters._default_value_for_othertimes
                            )
                                ? undefined
                                : $._encodeBoolean(value.othertimes, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SchedulingParameters(value, elGetter);
}


/* eslint-enable */
