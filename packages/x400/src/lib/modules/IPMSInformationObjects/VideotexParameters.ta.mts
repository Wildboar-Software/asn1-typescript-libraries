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
import {
    VideotexSyntax,
    VideotexSyntax_ids /* IMPORTED_LONG_NAMED_INTEGER */,
    ids /* IMPORTED_SHORT_NAMED_INTEGER */,
    VideotexSyntax_data_syntax1 /* IMPORTED_LONG_NAMED_INTEGER */,
    data_syntax1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    VideotexSyntax_data_syntax2 /* IMPORTED_LONG_NAMED_INTEGER */,
    data_syntax2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    VideotexSyntax_data_syntax3 /* IMPORTED_LONG_NAMED_INTEGER */,
    data_syntax3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_VideotexSyntax,
    _encode_VideotexSyntax,
} from '../IPMSInformationObjects/VideotexSyntax.ta.mjs';
export {
    VideotexSyntax,
    VideotexSyntax_ids /* IMPORTED_LONG_NAMED_INTEGER */,
    ids /* IMPORTED_SHORT_NAMED_INTEGER */,
    VideotexSyntax_data_syntax1 /* IMPORTED_LONG_NAMED_INTEGER */,
    data_syntax1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    VideotexSyntax_data_syntax2 /* IMPORTED_LONG_NAMED_INTEGER */,
    data_syntax2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    VideotexSyntax_data_syntax3 /* IMPORTED_LONG_NAMED_INTEGER */,
    data_syntax3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_VideotexSyntax,
    _encode_VideotexSyntax,
} from '../IPMSInformationObjects/VideotexSyntax.ta.mjs';

/* START_OF_SYMBOL_DEFINITION VideotexParameters */
/**
 * @summary VideotexParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexParameters ::= SET {syntax  [0]  VideotexSyntax OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class VideotexParameters {
    constructor(
        /**
         * @summary `syntax`.
         * @public
         * @readonly
         */
        readonly syntax: OPTIONAL<VideotexSyntax>
    ) {}

    /**
     * @summary Restructures an object into a VideotexParameters
     * @description
     *
     * This takes an `object` and converts it to a `VideotexParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VideotexParameters`.
     * @returns {VideotexParameters}
     */
    public static _from_object(
        _o: { [_K in keyof VideotexParameters]: VideotexParameters[_K] }
    ): VideotexParameters {
        return new VideotexParameters(_o.syntax);
    }
}
/* END_OF_SYMBOL_DEFINITION VideotexParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VideotexParameters */
/**
 * @summary The Leading Root Component Types of VideotexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VideotexParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'syntax',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VideotexParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VideotexParameters */
/**
 * @summary The Trailing Root Component Types of VideotexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VideotexParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VideotexParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VideotexParameters */
/**
 * @summary The Extension Addition Component Types of VideotexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VideotexParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VideotexParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexParameters */
let _cached_decoder_for_VideotexParameters: $.ASN1Decoder<VideotexParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexParameters */

/* START_OF_SYMBOL_DEFINITION _decode_VideotexParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) VideotexParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VideotexParameters} The decoded data structure.
 */
export function _decode_VideotexParameters(el: _Element) {
    if (!_cached_decoder_for_VideotexParameters) {
        _cached_decoder_for_VideotexParameters = function (
            el: _Element
        ): VideotexParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let syntax: OPTIONAL<VideotexSyntax>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                syntax: (_el: _Element): void => {
                    syntax = $._decode_implicit<VideotexSyntax>(
                        () => _decode_VideotexSyntax
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_VideotexParameters,
                _extension_additions_list_spec_for_VideotexParameters,
                _root_component_type_list_2_spec_for_VideotexParameters,
                undefined
            );
            return new VideotexParameters /* SET_CONSTRUCTOR_CALL */(syntax);
        };
    }
    return _cached_decoder_for_VideotexParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VideotexParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexParameters */
let _cached_encoder_for_VideotexParameters: $.ASN1Encoder<VideotexParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexParameters */

/* START_OF_SYMBOL_DEFINITION _encode_VideotexParameters */
/**
 * @summary Encodes a(n) VideotexParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VideotexParameters, encoded as an ASN.1 Element.
 */
export function _encode_VideotexParameters(
    value: VideotexParameters,
    elGetter: $.ASN1Encoder<VideotexParameters>
) {
    if (!_cached_encoder_for_VideotexParameters) {
        _cached_encoder_for_VideotexParameters = function (
            value: VideotexParameters,
            elGetter: $.ASN1Encoder<VideotexParameters>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.syntax === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_VideotexSyntax,
                                  $.BER
                              )(value.syntax, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_VideotexParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VideotexParameters */

/* eslint-enable */
