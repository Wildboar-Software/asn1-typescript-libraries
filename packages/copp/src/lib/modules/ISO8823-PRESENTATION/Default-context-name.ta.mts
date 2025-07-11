/* eslint-disable */
import {
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
} from '../ISO8823-PRESENTATION/Abstract-syntax-name.ta.mjs';
import {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from '../ISO8823-PRESENTATION/Transfer-syntax-name.ta.mjs';

/**
 * @summary Default_context_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Default-context-name ::= SEQUENCE {
 *   abstract-syntax-name  [0] IMPLICIT Abstract-syntax-name,
 *   transfer-syntax-name  [1] IMPLICIT Transfer-syntax-name
 * }
 * ```
 *
 */
export class Default_context_name {
    constructor(
        /**
         * @summary `abstract_syntax_name`.
         * @public
         * @readonly
         */
        readonly abstract_syntax_name: Abstract_syntax_name,
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}

    /**
     * @summary Restructures an object into a Default_context_name
     * @description
     *
     * This takes an `object` and converts it to a `Default_context_name`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Default_context_name`.
     * @returns {Default_context_name}
     */
    public static _from_object(
        _o: { [_K in keyof Default_context_name]: Default_context_name[_K] }
    ): Default_context_name {
        return new Default_context_name(
            _o.abstract_syntax_name,
            _o.transfer_syntax_name
        );
    }
}


/**
 * @summary The Leading Root Component Types of Default_context_name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Default_context_name: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'abstract-syntax-name',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'transfer-syntax-name',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of Default_context_name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Default_context_name: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Default_context_name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Default_context_name: $.ComponentSpec[] = [];


let _cached_decoder_for_Default_context_name: $.ASN1Decoder<Default_context_name> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Default_context_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Default_context_name} The decoded data structure.
 */
export function _decode_Default_context_name(el: _Element): Default_context_name {
    if (!_cached_decoder_for_Default_context_name) {
        _cached_decoder_for_Default_context_name = function (
            el: _Element
        ): Default_context_name {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Default-context-name contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'abstract-syntax-name';
            sequence[1].name = 'transfer-syntax-name';
            let abstract_syntax_name!: Abstract_syntax_name;
            let transfer_syntax_name!: Transfer_syntax_name;
            abstract_syntax_name = $._decode_implicit<Abstract_syntax_name>(
                () => _decode_Abstract_syntax_name
            )(sequence[0]);
            transfer_syntax_name = $._decode_implicit<Transfer_syntax_name>(
                () => _decode_Transfer_syntax_name
            )(sequence[1]);
            return new Default_context_name(
                abstract_syntax_name,
                transfer_syntax_name
            );
        };
    }
    return _cached_decoder_for_Default_context_name(el);
}


let _cached_encoder_for_Default_context_name: $.ASN1Encoder<Default_context_name> | null = null;


/**
 * @summary Encodes a(n) Default_context_name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Default_context_name, encoded as an ASN.1 Element.
 */
export function _encode_Default_context_name(
    value: Default_context_name,
    elGetter: $.ASN1Encoder<Default_context_name>
): _Element {
    if (!_cached_encoder_for_Default_context_name) {
        _cached_encoder_for_Default_context_name = function (
            value: Default_context_name        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_Abstract_syntax_name,
                            $.BER
                        )(value.abstract_syntax_name, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_Transfer_syntax_name,
                            $.BER
                        )(value.transfer_syntax_name, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Default_context_name(value, elGetter);
}


/* eslint-enable */
