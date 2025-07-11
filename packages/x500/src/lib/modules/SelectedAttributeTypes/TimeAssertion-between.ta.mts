/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimeAssertion_between
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeAssertion-between ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class TimeAssertion_between {
    constructor(
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: GeneralizedTime,
        /**
         * @summary `endTime`.
         * @public
         * @readonly
         */
        readonly endTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `entirely`.
         * @public
         * @readonly
         */
        readonly entirely: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TimeAssertion_between
     * @description
     *
     * This takes an `object` and converts it to a `TimeAssertion_between`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeAssertion_between`.
     * @returns {TimeAssertion_between}
     */
    public static _from_object(
        _o: { [_K in keyof TimeAssertion_between]: TimeAssertion_between[_K] }
    ): TimeAssertion_between {
        return new TimeAssertion_between(
            _o.startTime,
            _o.endTime,
            _o.entirely,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `entirely`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entirely(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeAssertion_between: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startTime",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "endTime",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "entirely",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeAssertion_between: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeAssertion_between: $.ComponentSpec[] = [];

let _cached_decoder_for_TimeAssertion_between: $.ASN1Decoder<TimeAssertion_between> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeAssertion_between
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeAssertion_between} The decoded data structure.
 */
export function _decode_TimeAssertion_between(el: _Element): TimeAssertion_between {
    if (!_cached_decoder_for_TimeAssertion_between) {
        _cached_decoder_for_TimeAssertion_between = function (
            el: _Element
        ): TimeAssertion_between {
            let startTime!: GeneralizedTime;
            let endTime: OPTIONAL<GeneralizedTime>;
            let entirely: OPTIONAL<BOOLEAN> =
                TimeAssertion_between._default_value_for_entirely;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                startTime: (_el: _Element): void => {
                    startTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                endTime: (_el: _Element): void => {
                    endTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                entirely: (_el: _Element): void => {
                    entirely = $._decodeBoolean(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeAssertion_between,
                _extension_additions_list_spec_for_TimeAssertion_between,
                _root_component_type_list_2_spec_for_TimeAssertion_between,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeAssertion_between(
                startTime,
                endTime,
                entirely,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeAssertion_between(el);
}

let _cached_encoder_for_TimeAssertion_between: $.ASN1Encoder<TimeAssertion_between> | null = null;

/**
 * @summary Encodes a(n) TimeAssertion_between into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeAssertion_between, encoded as an ASN.1 Element.
 */
export function _encode_TimeAssertion_between(
    value: TimeAssertion_between,
    elGetter: $.ASN1Encoder<TimeAssertion_between>
): _Element {
    if (!_cached_encoder_for_TimeAssertion_between) {
        _cached_encoder_for_TimeAssertion_between = function (
            value: TimeAssertion_between        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeGeneralizedTime,
                                $.DER
                            )(value.startTime, $.DER),
                            /* IF_ABSENT  */ value.endTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.endTime, $.DER),
                            /* IF_DEFAULT */ value.entirely === undefined ||
                            $.deepEq(
                                value.entirely,
                                TimeAssertion_between._default_value_for_entirely
                            )
                                ? undefined
                                : $._encodeBoolean(value.entirely, $.DER),
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
    return _cached_encoder_for_TimeAssertion_between(value, elGetter);
}


/* eslint-enable */
