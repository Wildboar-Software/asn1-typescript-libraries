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
 * @summary DefinedType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefinedType ::= SEQUENCE {
 *   module     [0]  Identifier OPTIONAL,
 *   reference  [1]  Identifier
 * }
 * ```
 *
 * @class
 */
export class DefinedType {
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
     * @summary Restructures an object into a DefinedType
     * @description
     *
     * This takes an `object` and converts it to a `DefinedType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefinedType`.
     * @returns {DefinedType}
     */
    public static _from_object(
        _o: { [_K in keyof DefinedType]: DefinedType[_K] }
    ): DefinedType {
        return new DefinedType(_o.module_, _o.reference);
    }
}


/**
 * @summary The Leading Root Component Types of DefinedType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DefinedType: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of DefinedType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DefinedType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DefinedType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DefinedType: $.ComponentSpec[] = [];


let _cached_decoder_for_DefinedType: $.ASN1Decoder<DefinedType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DefinedType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefinedType} The decoded data structure.
 */
export function _decode_DefinedType(el: _Element) {
    if (!_cached_decoder_for_DefinedType) {
        _cached_decoder_for_DefinedType = function (el: _Element): DefinedType {
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
                _root_component_type_list_1_spec_for_DefinedType,
                _extension_additions_list_spec_for_DefinedType,
                _root_component_type_list_2_spec_for_DefinedType,
                undefined
            );
            return new DefinedType (
                module_,
                reference
            );
        };
    }
    return _cached_decoder_for_DefinedType(el);
}


let _cached_encoder_for_DefinedType: $.ASN1Encoder<DefinedType> | null = null;


/**
 * @summary Encodes a(n) DefinedType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefinedType, encoded as an ASN.1 Element.
 */
export function _encode_DefinedType(
    value: DefinedType,
    elGetter: $.ASN1Encoder<DefinedType>
) {
    if (!_cached_encoder_for_DefinedType) {
        _cached_encoder_for_DefinedType = function (
            value: DefinedType        ): _Element {
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
    return _cached_encoder_for_DefinedType(value, elGetter);
}


/* eslint-enable */
