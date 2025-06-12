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
    RangeProblem,
    RangeProblem_reversed /* IMPORTED_LONG_NAMED_INTEGER */,
    reversed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RangeProblem,
    _encode_RangeProblem,
} from '../MSAbstractService/RangeProblem.ta.mjs';
export {
    RangeProblem,
    RangeProblem_reversed /* IMPORTED_LONG_NAMED_INTEGER */,
    reversed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RangeProblem,
    _encode_RangeProblem,
} from '../MSAbstractService/RangeProblem.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RangeError */
/**
 * @summary RangeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeError ::= SET {problem  [0]  RangeProblem
 * }
 * ```
 *
 * @class
 */
export class RangeError {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: RangeProblem
    ) {}

    /**
     * @summary Restructures an object into a RangeError
     * @description
     *
     * This takes an `object` and converts it to a `RangeError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RangeError`.
     * @returns {RangeError}
     */
    public static _from_object(
        _o: { [_K in keyof RangeError]: RangeError[_K] }
    ): RangeError {
        return new RangeError(_o.problem);
    }
}
/* END_OF_SYMBOL_DEFINITION RangeError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RangeError */
/**
 * @summary The Leading Root Component Types of RangeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RangeError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RangeError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RangeError */
/**
 * @summary The Trailing Root Component Types of RangeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RangeError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RangeError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RangeError */
/**
 * @summary The Extension Addition Component Types of RangeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RangeError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RangeError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeError */
let _cached_decoder_for_RangeError: $.ASN1Decoder<RangeError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeError */

/* START_OF_SYMBOL_DEFINITION _decode_RangeError */
/**
 * @summary Decodes an ASN.1 element into a(n) RangeError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RangeError} The decoded data structure.
 */
export function _decode_RangeError(el: _Element) {
    if (!_cached_decoder_for_RangeError) {
        _cached_decoder_for_RangeError = function (el: _Element): RangeError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: RangeProblem;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_implicit<RangeProblem>(
                        () => _decode_RangeProblem
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RangeError,
                _extension_additions_list_spec_for_RangeError,
                _root_component_type_list_2_spec_for_RangeError,
                undefined
            );
            return new RangeError /* SET_CONSTRUCTOR_CALL */(problem);
        };
    }
    return _cached_decoder_for_RangeError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RangeError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeError */
let _cached_encoder_for_RangeError: $.ASN1Encoder<RangeError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeError */

/* START_OF_SYMBOL_DEFINITION _encode_RangeError */
/**
 * @summary Encodes a(n) RangeError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RangeError, encoded as an ASN.1 Element.
 */
export function _encode_RangeError(
    value: RangeError,
    elGetter: $.ASN1Encoder<RangeError>
) {
    if (!_cached_encoder_for_RangeError) {
        _cached_encoder_for_RangeError = function (
            value: RangeError,
            elGetter: $.ASN1Encoder<RangeError>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_RangeProblem,
                            $.BER
                        )(value.problem, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RangeError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RangeError */

/* eslint-enable */
