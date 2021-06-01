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
    ExtendedEncodedInformationTypes,
    _decode_ExtendedEncodedInformationTypes,
    _encode_ExtendedEncodedInformationTypes,
} from '../MTSAbstractService/ExtendedEncodedInformationTypes.ta';
export {
    ExtendedEncodedInformationTypes,
    _decode_ExtendedEncodedInformationTypes,
    _encode_ExtendedEncodedInformationTypes,
} from '../MTSAbstractService/ExtendedEncodedInformationTypes.ta';

/* START_OF_SYMBOL_DEFINITION EncodedInformationTypesConstraints */
/**
 * @summary EncodedInformationTypesConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedInformationTypesConstraints ::= SEQUENCE {
 *   unacceptable-eits            [0]  ExtendedEncodedInformationTypes OPTIONAL,
 *   acceptable-eits              [1]  ExtendedEncodedInformationTypes OPTIONAL,
 *   exclusively-acceptable-eits  [2]  ExtendedEncodedInformationTypes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncodedInformationTypesConstraints {
    constructor(
        /**
         * @summary `unacceptable_eits`.
         * @public
         * @readonly
         */
        readonly unacceptable_eits: OPTIONAL<ExtendedEncodedInformationTypes>,
        /**
         * @summary `acceptable_eits`.
         * @public
         * @readonly
         */
        readonly acceptable_eits: OPTIONAL<ExtendedEncodedInformationTypes>,
        /**
         * @summary `exclusively_acceptable_eits`.
         * @public
         * @readonly
         */
        readonly exclusively_acceptable_eits: OPTIONAL<ExtendedEncodedInformationTypes>
    ) {}

    /**
     * @summary Restructures an object into a EncodedInformationTypesConstraints
     * @description
     *
     * This takes an `object` and converts it to a `EncodedInformationTypesConstraints`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncodedInformationTypesConstraints`.
     * @returns {EncodedInformationTypesConstraints}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncodedInformationTypesConstraints]: EncodedInformationTypesConstraints[_K];
        }
    ): EncodedInformationTypesConstraints {
        return new EncodedInformationTypesConstraints(
            _o.unacceptable_eits,
            _o.acceptable_eits,
            _o.exclusively_acceptable_eits
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncodedInformationTypesConstraints */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncodedInformationTypesConstraints */
/**
 * @summary The Leading Root Component Types of EncodedInformationTypesConstraints
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncodedInformationTypesConstraints: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'unacceptable-eits',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'acceptable-eits',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'exclusively-acceptable-eits',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncodedInformationTypesConstraints */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncodedInformationTypesConstraints */
/**
 * @summary The Trailing Root Component Types of EncodedInformationTypesConstraints
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncodedInformationTypesConstraints: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncodedInformationTypesConstraints */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncodedInformationTypesConstraints */
/**
 * @summary The Extension Addition Component Types of EncodedInformationTypesConstraints
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncodedInformationTypesConstraints: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncodedInformationTypesConstraints */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedInformationTypesConstraints */
let _cached_decoder_for_EncodedInformationTypesConstraints: $.ASN1Decoder<EncodedInformationTypesConstraints> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedInformationTypesConstraints */

/* START_OF_SYMBOL_DEFINITION _decode_EncodedInformationTypesConstraints */
/**
 * @summary Decodes an ASN.1 element into a(n) EncodedInformationTypesConstraints
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncodedInformationTypesConstraints} The decoded data structure.
 */
export function _decode_EncodedInformationTypesConstraints(el: _Element) {
    if (!_cached_decoder_for_EncodedInformationTypesConstraints) {
        _cached_decoder_for_EncodedInformationTypesConstraints = function (
            el: _Element
        ): EncodedInformationTypesConstraints {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let unacceptable_eits: OPTIONAL<ExtendedEncodedInformationTypes>;
            let acceptable_eits: OPTIONAL<ExtendedEncodedInformationTypes>;
            let exclusively_acceptable_eits: OPTIONAL<ExtendedEncodedInformationTypes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'unacceptable-eits': (_el: _Element): void => {
                    unacceptable_eits = $._decode_implicit<ExtendedEncodedInformationTypes>(
                        () => _decode_ExtendedEncodedInformationTypes
                    )(_el);
                },
                'acceptable-eits': (_el: _Element): void => {
                    acceptable_eits = $._decode_implicit<ExtendedEncodedInformationTypes>(
                        () => _decode_ExtendedEncodedInformationTypes
                    )(_el);
                },
                'exclusively-acceptable-eits': (_el: _Element): void => {
                    exclusively_acceptable_eits = $._decode_implicit<ExtendedEncodedInformationTypes>(
                        () => _decode_ExtendedEncodedInformationTypes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncodedInformationTypesConstraints,
                _extension_additions_list_spec_for_EncodedInformationTypesConstraints,
                _root_component_type_list_2_spec_for_EncodedInformationTypesConstraints,
                undefined
            );
            return new EncodedInformationTypesConstraints /* SEQUENCE_CONSTRUCTOR_CALL */(
                unacceptable_eits,
                acceptable_eits,
                exclusively_acceptable_eits
            );
        };
    }
    return _cached_decoder_for_EncodedInformationTypesConstraints(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncodedInformationTypesConstraints */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedInformationTypesConstraints */
let _cached_encoder_for_EncodedInformationTypesConstraints: $.ASN1Encoder<EncodedInformationTypesConstraints> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedInformationTypesConstraints */

/* START_OF_SYMBOL_DEFINITION _encode_EncodedInformationTypesConstraints */
/**
 * @summary Encodes a(n) EncodedInformationTypesConstraints into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodedInformationTypesConstraints, encoded as an ASN.1 Element.
 */
export function _encode_EncodedInformationTypesConstraints(
    value: EncodedInformationTypesConstraints,
    elGetter: $.ASN1Encoder<EncodedInformationTypesConstraints>
) {
    if (!_cached_encoder_for_EncodedInformationTypesConstraints) {
        _cached_encoder_for_EncodedInformationTypesConstraints = function (
            value: EncodedInformationTypesConstraints,
            elGetter: $.ASN1Encoder<EncodedInformationTypesConstraints>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.unacceptable_eits === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ExtendedEncodedInformationTypes,
                                  $.BER
                              )(value.unacceptable_eits, $.BER),
                        /* IF_ABSENT  */ value.acceptable_eits === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ExtendedEncodedInformationTypes,
                                  $.BER
                              )(value.acceptable_eits, $.BER),
                        /* IF_ABSENT  */ value.exclusively_acceptable_eits ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ExtendedEncodedInformationTypes,
                                  $.BER
                              )(value.exclusively_acceptable_eits, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncodedInformationTypesConstraints(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EncodedInformationTypesConstraints */

/* eslint-enable */
