/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Accuracy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Accuracy ::= SEQUENCE {
 *     seconds        INTEGER           OPTIONAL,
 *     millis     [0] INTEGER  (1..999) OPTIONAL,
 *     micros     [1] INTEGER  (1..999) OPTIONAL  }
 * ```
 *
 */
export class Accuracy {
    constructor(
        /**
         * @summary `seconds`.
         * @public
         * @readonly
         */
        readonly seconds: OPTIONAL<INTEGER>,
        /**
         * @summary `millis`.
         * @public
         * @readonly
         */
        readonly millis: OPTIONAL<INTEGER>,
        /**
         * @summary `micros`.
         * @public
         * @readonly
         */
        readonly micros: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a Accuracy
     * @description
     *
     * This takes an `object` and converts it to a `Accuracy`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Accuracy`.
     * @returns {Accuracy}
     */
    public static _from_object(
        _o: { [_K in keyof Accuracy]: Accuracy[_K] },
    ): Accuracy {
        return new Accuracy(_o.seconds, _o.millis, _o.micros);
    }
}

/**
 * @summary The Leading Root Component Types of Accuracy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Accuracy: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "seconds",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "millis",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "micros",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of Accuracy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Accuracy: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Accuracy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Accuracy: $.ComponentSpec[] = [];

let _cached_decoder_for_Accuracy: $.ASN1Decoder<Accuracy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Accuracy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Accuracy} The decoded data structure.
 */
export function _decode_Accuracy(el: _Element): Accuracy {
    if (!_cached_decoder_for_Accuracy) {
        _cached_decoder_for_Accuracy = function (el: _Element): Accuracy {
            let seconds: OPTIONAL<INTEGER>;
            let millis: OPTIONAL<INTEGER>;
            let micros: OPTIONAL<INTEGER>;
            const callbacks: $.DecodingMap = {
                seconds: (_el: _Element): void => {
                    seconds = $._decodeInteger(_el);
                },
                millis: (_el: _Element): void => {
                    millis = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                micros: (_el: _Element): void => {
                    micros = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Accuracy,
                _extension_additions_list_spec_for_Accuracy,
                _root_component_type_list_2_spec_for_Accuracy,
                undefined
            );
            return new Accuracy(
                seconds,
                millis,
                micros
            );
        };
    }
    return _cached_decoder_for_Accuracy(el);
}

let _cached_encoder_for_Accuracy: $.ASN1Encoder<Accuracy> | null = null;

/**
 * @summary Encodes a(n) Accuracy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Accuracy, encoded as an ASN.1 Element.
 */
export function _encode_Accuracy(
    value: Accuracy,
    elGetter: $.ASN1Encoder<Accuracy>
): _Element {
    if (!_cached_encoder_for_Accuracy) {
        _cached_encoder_for_Accuracy = function (
            value: Accuracy        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.seconds === undefined
                            ? undefined
                            : $._encodeInteger(value.seconds, $.DER),
                        /* IF_ABSENT  */ value.millis === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.DER
                              )(value.millis, $.DER),
                        /* IF_ABSENT  */ value.micros === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.DER
                              )(value.micros, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Accuracy(value, elGetter);
}


/* eslint-enable */
