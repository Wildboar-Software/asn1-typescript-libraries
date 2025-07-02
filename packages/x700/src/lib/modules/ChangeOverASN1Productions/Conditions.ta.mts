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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Condition,
    _decode_Condition,
    _encode_Condition,
} from '../ChangeOverASN1Productions/Condition.ta.mjs';
/**
 * @summary Conditions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Conditions ::= SEQUENCE {
 *   primary    [0] IMPLICIT Condition OPTIONAL,
 *   secondary  [1] IMPLICIT Condition OPTIONAL
 * }
 * ```
 *
 */
export class Conditions {
    constructor(
        /**
         * @summary `primary`.
         * @public
         * @readonly
         */
        readonly primary: OPTIONAL<Condition>,
        /**
         * @summary `secondary`.
         * @public
         * @readonly
         */
        readonly secondary: OPTIONAL<Condition>
    ) {}

    /**
     * @summary Restructures an object into a Conditions
     * @description
     *
     * This takes an `object` and converts it to a `Conditions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Conditions`.
     * @returns {Conditions}
     */
    public static _from_object(
        _o: { [_K in keyof Conditions]: Conditions[_K] }
    ): Conditions {
        return new Conditions(_o.primary, _o.secondary);
    }
}

/**
 * @summary The Leading Root Component Types of Conditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Conditions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'primary',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'secondary',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of Conditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Conditions: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Conditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Conditions: $.ComponentSpec[] = [];

let _cached_decoder_for_Conditions: $.ASN1Decoder<Conditions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Conditions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Conditions} The decoded data structure.
 */
export function _decode_Conditions(el: _Element): Conditions {
    if (!_cached_decoder_for_Conditions) {
        _cached_decoder_for_Conditions = function (el: _Element): Conditions {
            let primary: OPTIONAL<Condition>;
            let secondary: OPTIONAL<Condition>;
            const callbacks: $.DecodingMap = {
                primary: (_el: _Element): void => {
                    primary = $._decode_implicit<Condition>(
                        () => _decode_Condition
                    )(_el);
                },
                secondary: (_el: _Element): void => {
                    secondary = $._decode_implicit<Condition>(
                        () => _decode_Condition
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Conditions,
                _extension_additions_list_spec_for_Conditions,
                _root_component_type_list_2_spec_for_Conditions,
                undefined
            );
            return new Conditions (
                primary,
                secondary
            );
        };
    }
    return _cached_decoder_for_Conditions(el);
}

let _cached_encoder_for_Conditions: $.ASN1Encoder<Conditions> | null = null;

/**
 * @summary Encodes a(n) Conditions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conditions, encoded as an ASN.1 Element.
 */
export function _encode_Conditions(
    value: Conditions,
    elGetter: $.ASN1Encoder<Conditions>
): _Element {
    if (!_cached_encoder_for_Conditions) {
        _cached_encoder_for_Conditions = function (
            value: Conditions        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.primary === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Condition,
                                  $.BER
                              )(value.primary, $.BER),
                        /* IF_ABSENT  */ value.secondary === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Condition,
                                  $.BER
                              )(value.secondary, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Conditions(value, elGetter);
}


/* eslint-enable */
