/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Time,
    _decode_Time,
    _encode_Time,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary OptionalValidity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalValidity ::= SEQUENCE {
 *     notBefore  [0] Time OPTIONAL,
 *     notAfter   [1] Time OPTIONAL }
 * ```
 *
 */
export class OptionalValidity {
    constructor(
        /**
         * @summary `notBefore`.
         * @public
         * @readonly
         */
        readonly notBefore: OPTIONAL<Time>,
        /**
         * @summary `notAfter`.
         * @public
         * @readonly
         */
        readonly notAfter: OPTIONAL<Time>
    ) {}

    /**
     * @summary Restructures an object into a OptionalValidity
     * @description
     *
     * This takes an `object` and converts it to a `OptionalValidity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OptionalValidity`.
     * @returns {OptionalValidity}
     */
    public static _from_object(
        _o: { [_K in keyof OptionalValidity]: OptionalValidity[_K] }
    ): OptionalValidity {
        return new OptionalValidity(_o.notBefore, _o.notAfter);
    }
}


/**
 * @summary The Leading Root Component Types of OptionalValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OptionalValidity: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notBefore",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "notAfter",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of OptionalValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OptionalValidity: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of OptionalValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OptionalValidity: $.ComponentSpec[] = [];


let _cached_decoder_for_OptionalValidity: $.ASN1Decoder<OptionalValidity> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OptionalValidity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalValidity} The decoded data structure.
 */
export function _decode_OptionalValidity(el: _Element): OptionalValidity {
    if (!_cached_decoder_for_OptionalValidity) {
        _cached_decoder_for_OptionalValidity = function (
            el: _Element
        ): OptionalValidity {
            let notBefore: OPTIONAL<Time>;
            let notAfter: OPTIONAL<Time>;
            const callbacks: $.DecodingMap = {
                notBefore: (_el: _Element): void => {
                    notBefore = $._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
                },
                notAfter: (_el: _Element): void => {
                    notAfter = $._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OptionalValidity,
                _extension_additions_list_spec_for_OptionalValidity,
                _root_component_type_list_2_spec_for_OptionalValidity,
                undefined
            );
            return new OptionalValidity (
                notBefore,
                notAfter
            );
        };
    }
    return _cached_decoder_for_OptionalValidity(el);
}


let _cached_encoder_for_OptionalValidity: $.ASN1Encoder<OptionalValidity> | null = null;


/**
 * @summary Encodes a(n) OptionalValidity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalValidity, encoded as an ASN.1 Element.
 */
export function _encode_OptionalValidity(
    value: OptionalValidity,
    elGetter: $.ASN1Encoder<OptionalValidity>
): _Element {
    if (!_cached_encoder_for_OptionalValidity) {
        _cached_encoder_for_OptionalValidity = function (
            value: OptionalValidity        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.notBefore === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Time,
                                  $.DER
                              )(value.notBefore, $.DER),
                        /* IF_ABSENT  */ value.notAfter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Time,
                                  $.DER
                              )(value.notAfter, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OptionalValidity(value, elGetter);
}


/* eslint-enable */
