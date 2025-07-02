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
    Abstract_syntax_name,
    _decode_Abstract_syntax_name,
    _encode_Abstract_syntax_name,
} from '../Connectionless-ACSE-1/Abstract-syntax-name.ta.mjs';
import {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from '../Connectionless-ACSE-1/Transfer-syntax-name.ta.mjs';

/**
 * @summary Default_P_context
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Default-P-context ::= SEQUENCE {
 *   abstract-syntax  [0] IMPLICIT Abstract-syntax-name OPTIONAL,
 *   transfer-syntax  [1] IMPLICIT Transfer-syntax-name
 * }
 * ```
 *
 */
export class Default_P_context {
    constructor(
        /**
         * @summary `abstract_syntax`.
         * @public
         * @readonly
         */
        readonly abstract_syntax: OPTIONAL<Abstract_syntax_name>,
        /**
         * @summary `transfer_syntax`.
         * @public
         * @readonly
         */
        readonly transfer_syntax: Transfer_syntax_name
    ) {}

    /**
     * @summary Restructures an object into a Default_P_context
     * @description
     *
     * This takes an `object` and converts it to a `Default_P_context`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Default_P_context`.
     * @returns {Default_P_context}
     */
    public static _from_object(
        _o: { [_K in keyof Default_P_context]: Default_P_context[_K] }
    ): Default_P_context {
        return new Default_P_context(_o.abstract_syntax, _o.transfer_syntax);
    }
}


/**
 * @summary The Leading Root Component Types of Default_P_context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Default_P_context: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'abstract-syntax',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'transfer-syntax',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of Default_P_context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Default_P_context: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Default_P_context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Default_P_context: $.ComponentSpec[] = [];


let _cached_decoder_for_Default_P_context: $.ASN1Decoder<Default_P_context> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Default_P_context
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Default_P_context} The decoded data structure.
 */
export function _decode_Default_P_context(el: _Element): Default_P_context {
    if (!_cached_decoder_for_Default_P_context) {
        _cached_decoder_for_Default_P_context = function (
            el: _Element
        ): Default_P_context {
            let abstract_syntax: OPTIONAL<Abstract_syntax_name>;
            let transfer_syntax!: Transfer_syntax_name;
            const callbacks: $.DecodingMap = {
                'abstract-syntax': (_el: _Element): void => {
                    abstract_syntax = $._decode_implicit<Abstract_syntax_name>(
                        () => _decode_Abstract_syntax_name
                    )(_el);
                },
                'transfer-syntax': (_el: _Element): void => {
                    transfer_syntax = $._decode_implicit<Transfer_syntax_name>(
                        () => _decode_Transfer_syntax_name
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Default_P_context,
                _extension_additions_list_spec_for_Default_P_context,
                _root_component_type_list_2_spec_for_Default_P_context,
                undefined
            );
            return new Default_P_context (
                abstract_syntax,
                transfer_syntax
            );
        };
    }
    return _cached_decoder_for_Default_P_context(el);
}


let _cached_encoder_for_Default_P_context: $.ASN1Encoder<Default_P_context> | null = null;


/**
 * @summary Encodes a(n) Default_P_context into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Default_P_context, encoded as an ASN.1 Element.
 */
export function _encode_Default_P_context(
    value: Default_P_context,
    elGetter: $.ASN1Encoder<Default_P_context>
): _Element {
    if (!_cached_encoder_for_Default_P_context) {
        _cached_encoder_for_Default_P_context = function (
            value: Default_P_context        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.abstract_syntax === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Abstract_syntax_name,
                                  $.BER
                              )(value.abstract_syntax, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_Transfer_syntax_name,
                            $.BER
                        )(value.transfer_syntax, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Default_P_context(value, elGetter);
}


/* eslint-enable */
