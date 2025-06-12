/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION NonMessageBodyPartSynopsis */
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
 * @class
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
    public static get _default_value_for_processed() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION NonMessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonMessageBodyPartSynopsis */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'size',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'processed',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonMessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonMessageBodyPartSynopsis */
/**
 * @summary The Trailing Root Component Types of NonMessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonMessageBodyPartSynopsis: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonMessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonMessageBodyPartSynopsis */
/**
 * @summary The Extension Addition Component Types of NonMessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonMessageBodyPartSynopsis: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonMessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonMessageBodyPartSynopsis */
let _cached_decoder_for_NonMessageBodyPartSynopsis: $.ASN1Decoder<NonMessageBodyPartSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonMessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _decode_NonMessageBodyPartSynopsis */
/**
 * @summary Decodes an ASN.1 element into a(n) NonMessageBodyPartSynopsis
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonMessageBodyPartSynopsis} The decoded data structure.
 */
export function _decode_NonMessageBodyPartSynopsis(el: _Element) {
    if (!_cached_decoder_for_NonMessageBodyPartSynopsis) {
        _cached_decoder_for_NonMessageBodyPartSynopsis = function (
            el: _Element
        ): NonMessageBodyPartSynopsis {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<INSTANCE_OF>;
            let size!: INTEGER;
            let processed: OPTIONAL<BOOLEAN> =
                NonMessageBodyPartSynopsis._default_value_for_processed;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonMessageBodyPartSynopsis,
                _extension_additions_list_spec_for_NonMessageBodyPartSynopsis,
                _root_component_type_list_2_spec_for_NonMessageBodyPartSynopsis,
                undefined
            );
            return new NonMessageBodyPartSynopsis /* SEQUENCE_CONSTRUCTOR_CALL */(
                type_,
                parameters,
                size,
                processed
            );
        };
    }
    return _cached_decoder_for_NonMessageBodyPartSynopsis(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonMessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonMessageBodyPartSynopsis */
let _cached_encoder_for_NonMessageBodyPartSynopsis: $.ASN1Encoder<NonMessageBodyPartSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonMessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _encode_NonMessageBodyPartSynopsis */
/**
 * @summary Encodes a(n) NonMessageBodyPartSynopsis into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonMessageBodyPartSynopsis, encoded as an ASN.1 Element.
 */
export function _encode_NonMessageBodyPartSynopsis(
    value: NonMessageBodyPartSynopsis,
    elGetter: $.ASN1Encoder<NonMessageBodyPartSynopsis>
) {
    if (!_cached_encoder_for_NonMessageBodyPartSynopsis) {
        _cached_encoder_for_NonMessageBodyPartSynopsis = function (
            value: NonMessageBodyPartSynopsis,
            elGetter: $.ASN1Encoder<NonMessageBodyPartSynopsis>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_NonMessageBodyPartSynopsis */

/* eslint-enable */
