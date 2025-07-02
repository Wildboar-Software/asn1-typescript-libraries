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
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
/**
 * @summary DefinedValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefinedValue ::= SEQUENCE {
 *   module     [0]  Identifier OPTIONAL,
 *   reference  [1]  Identifier
 * }
 * ```
 *
 */
export class DefinedValue {
    constructor(
        /**
         * @summary `module_`.
         * @public
         * @readonly
         */
        readonly module_: OPTIONAL<Identifier>,
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: Identifier
    ) {}

    /**
     * @summary Restructures an object into a DefinedValue
     * @description
     *
     * This takes an `object` and converts it to a `DefinedValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefinedValue`.
     * @returns {DefinedValue}
     */
    public static _from_object(
        _o: { [_K in keyof DefinedValue]: DefinedValue[_K] }
    ): DefinedValue {
        return new DefinedValue(_o.module_, _o.reference);
    }
}

/**
 * @summary The Leading Root Component Types of DefinedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DefinedValue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'module',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'reference',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of DefinedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DefinedValue: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DefinedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DefinedValue: $.ComponentSpec[] = [];

let _cached_decoder_for_DefinedValue: $.ASN1Decoder<DefinedValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefinedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefinedValue} The decoded data structure.
 */
export function _decode_DefinedValue(el: _Element): DefinedValue {
    if (!_cached_decoder_for_DefinedValue) {
        _cached_decoder_for_DefinedValue = function (
            el: _Element
        ): DefinedValue {
            let module_: OPTIONAL<Identifier>;
            let reference!: Identifier;
            const callbacks: $.DecodingMap = {
                module: (_el: _Element): void => {
                    module_ = $._decode_implicit<Identifier>(
                        () => _decode_Identifier
                    )(_el);
                },
                reference: (_el: _Element): void => {
                    reference = $._decode_implicit<Identifier>(
                        () => _decode_Identifier
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DefinedValue,
                _extension_additions_list_spec_for_DefinedValue,
                _root_component_type_list_2_spec_for_DefinedValue,
                undefined
            );
            return new DefinedValue (
                module_,
                reference
            );
        };
    }
    return _cached_decoder_for_DefinedValue(el);
}

let _cached_encoder_for_DefinedValue: $.ASN1Encoder<DefinedValue> | null = null;

/**
 * @summary Encodes a(n) DefinedValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefinedValue, encoded as an ASN.1 Element.
 */
export function _encode_DefinedValue(
    value: DefinedValue,
    elGetter: $.ASN1Encoder<DefinedValue>
): _Element {
    if (!_cached_encoder_for_DefinedValue) {
        _cached_encoder_for_DefinedValue = function (
            value: DefinedValue        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.module_ === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Identifier,
                                  $.BER
                              )(value.module_, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_Identifier,
                            $.BER
                        )(value.reference, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DefinedValue(value, elGetter);
}


/* eslint-enable */
