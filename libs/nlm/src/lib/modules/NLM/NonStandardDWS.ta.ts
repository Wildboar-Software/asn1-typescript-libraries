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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    BidirectionalValues,
    _decode_BidirectionalValues,
    _encode_BidirectionalValues,
} from '../NLM/BidirectionalValues.ta';
export {
    BidirectionalValues,
    _decode_BidirectionalValues,
    _encode_BidirectionalValues,
} from '../NLM/BidirectionalValues.ta';

/* START_OF_SYMBOL_DEFINITION NonStandardDWS */
/**
 * @summary NonStandardDWS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonStandardDWS ::= SEQUENCE {
 *   subscription          [0]  BOOLEAN,
 *   supportedWindowSizes  [1]  SET OF INTEGER OPTIONAL,
 *   selectedWindowSizes   [2]  BidirectionalValues OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NonStandardDWS {
    constructor(
        /**
         * @summary `subscription`.
         * @public
         * @readonly
         */
        readonly subscription: BOOLEAN,
        /**
         * @summary `supportedWindowSizes`.
         * @public
         * @readonly
         */
        readonly supportedWindowSizes: OPTIONAL<INTEGER[]>,
        /**
         * @summary `selectedWindowSizes`.
         * @public
         * @readonly
         */
        readonly selectedWindowSizes: OPTIONAL<BidirectionalValues>
    ) {}

    /**
     * @summary Restructures an object into a NonStandardDWS
     * @description
     *
     * This takes an `object` and converts it to a `NonStandardDWS`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonStandardDWS`.
     * @returns {NonStandardDWS}
     */
    public static _from_object(
        _o: { [_K in keyof NonStandardDWS]: NonStandardDWS[_K] }
    ): NonStandardDWS {
        return new NonStandardDWS(
            _o.subscription,
            _o.supportedWindowSizes,
            _o.selectedWindowSizes
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NonStandardDWS */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonStandardDWS */
/**
 * @summary The Leading Root Component Types of NonStandardDWS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonStandardDWS: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'subscription',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'supportedWindowSizes',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'selectedWindowSizes',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonStandardDWS */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonStandardDWS */
/**
 * @summary The Trailing Root Component Types of NonStandardDWS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonStandardDWS: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonStandardDWS */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonStandardDWS */
/**
 * @summary The Extension Addition Component Types of NonStandardDWS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonStandardDWS: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonStandardDWS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonStandardDWS */
let _cached_decoder_for_NonStandardDWS: $.ASN1Decoder<NonStandardDWS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonStandardDWS */

/* START_OF_SYMBOL_DEFINITION _decode_NonStandardDWS */
/**
 * @summary Decodes an ASN.1 element into a(n) NonStandardDWS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonStandardDWS} The decoded data structure.
 */
export function _decode_NonStandardDWS(el: _Element) {
    if (!_cached_decoder_for_NonStandardDWS) {
        _cached_decoder_for_NonStandardDWS = function (
            el: _Element
        ): NonStandardDWS {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subscription!: BOOLEAN;
            let supportedWindowSizes: OPTIONAL<INTEGER[]>;
            let selectedWindowSizes: OPTIONAL<BidirectionalValues>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subscription: (_el: _Element): void => {
                    subscription = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                supportedWindowSizes: (_el: _Element): void => {
                    supportedWindowSizes = $._decode_implicit<INTEGER[]>(() =>
                        $._decodeSetOf<INTEGER>(() => $._decodeInteger)
                    )(_el);
                },
                selectedWindowSizes: (_el: _Element): void => {
                    selectedWindowSizes = $._decode_implicit<BidirectionalValues>(
                        () => _decode_BidirectionalValues
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonStandardDWS,
                _extension_additions_list_spec_for_NonStandardDWS,
                _root_component_type_list_2_spec_for_NonStandardDWS,
                undefined
            );
            return new NonStandardDWS /* SEQUENCE_CONSTRUCTOR_CALL */(
                subscription,
                supportedWindowSizes,
                selectedWindowSizes
            );
        };
    }
    return _cached_decoder_for_NonStandardDWS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonStandardDWS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonStandardDWS */
let _cached_encoder_for_NonStandardDWS: $.ASN1Encoder<NonStandardDWS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonStandardDWS */

/* START_OF_SYMBOL_DEFINITION _encode_NonStandardDWS */
/**
 * @summary Encodes a(n) NonStandardDWS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonStandardDWS, encoded as an ASN.1 Element.
 */
export function _encode_NonStandardDWS(
    value: NonStandardDWS,
    elGetter: $.ASN1Encoder<NonStandardDWS>
) {
    if (!_cached_encoder_for_NonStandardDWS) {
        _cached_encoder_for_NonStandardDWS = function (
            value: NonStandardDWS,
            elGetter: $.ASN1Encoder<NonStandardDWS>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.subscription, $.BER),
                        /* IF_ABSENT  */ value.supportedWindowSizes ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<INTEGER>(
                                          () => $._encodeInteger,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.supportedWindowSizes, $.BER),
                        /* IF_ABSENT  */ value.selectedWindowSizes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_BidirectionalValues,
                                  $.BER
                              )(value.selectedWindowSizes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonStandardDWS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonStandardDWS */

/* eslint-enable */
