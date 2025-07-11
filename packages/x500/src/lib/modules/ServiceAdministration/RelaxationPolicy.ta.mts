/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    MRMapping,
    _decode_MRMapping,
    _encode_MRMapping,
} from "../ServiceAdministration/MRMapping.ta.mjs";
/**
 * @summary RelaxationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelaxationPolicy ::= SEQUENCE {
 *   basic        [0]  MRMapping DEFAULT {},
 *   tightenings  [1]  SEQUENCE SIZE (1..MAX) OF MRMapping OPTIONAL,
 *   relaxations  [2]  SEQUENCE SIZE (1..MAX) OF MRMapping OPTIONAL,
 *   maximum      [3]  INTEGER OPTIONAL, -- mandatory if tightenings is present
 *   minimum      [4]  INTEGER DEFAULT 1,
 *   ... }
 * ```
 *
 */
export class RelaxationPolicy {
    constructor(
        /**
         * @summary `basic`.
         * @public
         * @readonly
         */
        readonly basic: OPTIONAL<MRMapping>,
        /**
         * @summary `tightenings`.
         * @public
         * @readonly
         */
        readonly tightenings: OPTIONAL<MRMapping[]>,
        /**
         * @summary `relaxations`.
         * @public
         * @readonly
         */
        readonly relaxations: OPTIONAL<MRMapping[]>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<INTEGER>,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RelaxationPolicy
     * @description
     *
     * This takes an `object` and converts it to a `RelaxationPolicy`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelaxationPolicy`.
     * @returns {RelaxationPolicy}
     */
    public static _from_object(
        _o: { [_K in keyof RelaxationPolicy]: RelaxationPolicy[_K] }
    ): RelaxationPolicy {
        return new RelaxationPolicy(
            _o.basic,
            _o.tightenings,
            _o.relaxations,
            _o.maximum,
            _o.minimum,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `basic`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_basic(): MRMapping {
        return MRMapping._from_object({});
    }
    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum(): INTEGER {
        return 1;
    }
}

/**
 * @summary The Leading Root Component Types of RelaxationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RelaxationPolicy: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "basic",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "tightenings",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "relaxations",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "maximum",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "minimum",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of RelaxationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RelaxationPolicy: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RelaxationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RelaxationPolicy: $.ComponentSpec[] = [];

let _cached_decoder_for_RelaxationPolicy: $.ASN1Decoder<RelaxationPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelaxationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelaxationPolicy} The decoded data structure.
 */
export function _decode_RelaxationPolicy(el: _Element): RelaxationPolicy {
    if (!_cached_decoder_for_RelaxationPolicy) {
        _cached_decoder_for_RelaxationPolicy = function (
            el: _Element
        ): RelaxationPolicy {
            let basic: OPTIONAL<MRMapping> =
                RelaxationPolicy._default_value_for_basic;
            let tightenings: OPTIONAL<MRMapping[]>;
            let relaxations: OPTIONAL<MRMapping[]>;
            let maximum: OPTIONAL<INTEGER>;
            let minimum: OPTIONAL<INTEGER> =
                RelaxationPolicy._default_value_for_minimum;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                basic: (_el: _Element): void => {
                    basic = $._decode_explicit<MRMapping>(
                        () => _decode_MRMapping
                    )(_el);
                },
                tightenings: (_el: _Element): void => {
                    tightenings = $._decode_explicit<MRMapping[]>(() =>
                        $._decodeSequenceOf<MRMapping>(() => _decode_MRMapping)
                    )(_el);
                },
                relaxations: (_el: _Element): void => {
                    relaxations = $._decode_explicit<MRMapping[]>(() =>
                        $._decodeSequenceOf<MRMapping>(() => _decode_MRMapping)
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RelaxationPolicy,
                _extension_additions_list_spec_for_RelaxationPolicy,
                _root_component_type_list_2_spec_for_RelaxationPolicy,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RelaxationPolicy(
                basic,
                tightenings,
                relaxations,
                maximum,
                minimum,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RelaxationPolicy(el);
}

let _cached_encoder_for_RelaxationPolicy: $.ASN1Encoder<RelaxationPolicy> | null = null;

/**
 * @summary Encodes a(n) RelaxationPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelaxationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_RelaxationPolicy(
    value: RelaxationPolicy,
    elGetter: $.ASN1Encoder<RelaxationPolicy>
): _Element {
    if (!_cached_encoder_for_RelaxationPolicy) {
        _cached_encoder_for_RelaxationPolicy = function (
            value: RelaxationPolicy        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.basic === undefined ||
                            $.deepEq(
                                value.basic,
                                RelaxationPolicy._default_value_for_basic
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_MRMapping,
                                      $.DER
                                  )(value.basic, $.DER),
                            /* IF_ABSENT  */ value.tightenings === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSequenceOf<MRMapping>(
                                              () => _encode_MRMapping,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.tightenings, $.DER),
                            /* IF_ABSENT  */ value.relaxations === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSequenceOf<MRMapping>(
                                              () => _encode_MRMapping,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.relaxations, $.DER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeInteger,
                                      $.DER
                                  )(value.maximum, $.DER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                RelaxationPolicy._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeInteger,
                                      $.DER
                                  )(value.minimum, $.DER),
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
    return _cached_encoder_for_RelaxationPolicy(value, elGetter);
}


/* eslint-enable */
