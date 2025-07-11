/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    OBJECT_IDENTIFIER,
    INSTANCE_OF,
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

/**
 * @summary NonMessageBodyPartSynopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonMessageBodyPartSynopsis ::= SEQUENCE {
 *   type        [0]  OBJECT IDENTIFIER,
 *   parameters  [1]  INSTANCE OF TYPE-IDENTIFIER OPTIONAL,
 *   size        [2]  INTEGER,
 *   processed   [3]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 */
export class NonMessageBodyPartSynopsis {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<INSTANCE_OF>,
        /**
         * @summary `size`.
         * @public
         * @readonly
         */
        readonly size: INTEGER,
        /**
         * @summary `processed`.
         * @public
         * @readonly
         */
        readonly processed: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a NonMessageBodyPartSynopsis
     * @description
     *
     * This takes an `object` and converts it to a `NonMessageBodyPartSynopsis`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonMessageBodyPartSynopsis`.
     * @returns {NonMessageBodyPartSynopsis}
     */
    public static _from_object(
        _o: {
            [_K in keyof NonMessageBodyPartSynopsis]: NonMessageBodyPartSynopsis[_K];
        }
    ): NonMessageBodyPartSynopsis {
        return new NonMessageBodyPartSynopsis(
            _o.type_,
            _o.parameters,
            _o.size,
            _o.processed
        );
    }

    /**
     * @summary Getter that returns the default value for `processed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_processed(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of NonMessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonMessageBodyPartSynopsis: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'size',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'processed',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of NonMessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonMessageBodyPartSynopsis: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NonMessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonMessageBodyPartSynopsis: $.ComponentSpec[] = [];

let _cached_decoder_for_NonMessageBodyPartSynopsis: $.ASN1Decoder<NonMessageBodyPartSynopsis> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonMessageBodyPartSynopsis
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonMessageBodyPartSynopsis} The decoded data structure.
 */
export function _decode_NonMessageBodyPartSynopsis(el: _Element): NonMessageBodyPartSynopsis {
    if (!_cached_decoder_for_NonMessageBodyPartSynopsis) {
        _cached_decoder_for_NonMessageBodyPartSynopsis = function (
            el: _Element
        ): NonMessageBodyPartSynopsis {
            let type_!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<INSTANCE_OF>;
            let size!: INTEGER;
            let processed: OPTIONAL<BOOLEAN> =
                NonMessageBodyPartSynopsis._default_value_for_processed;
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decode_implicit<INSTANCE_OF>(
                        () => $._decodeInstanceOf
                    )(_el);
                },
                size: (_el: _Element): void => {
                    size = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                processed: (_el: _Element): void => {
                    processed = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonMessageBodyPartSynopsis,
                _extension_additions_list_spec_for_NonMessageBodyPartSynopsis,
                _root_component_type_list_2_spec_for_NonMessageBodyPartSynopsis,
                undefined
            );
            return new NonMessageBodyPartSynopsis (
                type_,
                parameters,
                size,
                processed
            );
        };
    }
    return _cached_decoder_for_NonMessageBodyPartSynopsis(el);
}

let _cached_encoder_for_NonMessageBodyPartSynopsis: $.ASN1Encoder<NonMessageBodyPartSynopsis> | null = null;

/**
 * @summary Encodes a(n) NonMessageBodyPartSynopsis into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonMessageBodyPartSynopsis, encoded as an ASN.1 Element.
 */
export function _encode_NonMessageBodyPartSynopsis(
    value: NonMessageBodyPartSynopsis,
    elGetter: $.ASN1Encoder<NonMessageBodyPartSynopsis>
): _Element {
    if (!_cached_encoder_for_NonMessageBodyPartSynopsis) {
        _cached_encoder_for_NonMessageBodyPartSynopsis = function (
            value: NonMessageBodyPartSynopsis        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.type_, $.BER),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInstanceOf,
                                  $.BER
                              )(value.parameters, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => $._encodeInteger,
                            $.BER
                        )(value.size, $.BER),
                        /* IF_DEFAULT */ value.processed === undefined ||
                        $.deepEq(
                            value.processed,
                            NonMessageBodyPartSynopsis._default_value_for_processed
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.processed, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonMessageBodyPartSynopsis(value, elGetter);
}


/* eslint-enable */
