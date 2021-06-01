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
    SequenceNumberError_problems_Item,
    _decode_SequenceNumberError_problems_Item,
    _encode_SequenceNumberError_problems_Item,
} from '../MhsAcctAsn1Module/SequenceNumberError-problems-Item.ta';
export {
    SequenceNumberError_problems_Item,
    _decode_SequenceNumberError_problems_Item,
    _encode_SequenceNumberError_problems_Item,
} from '../MhsAcctAsn1Module/SequenceNumberError-problems-Item.ta';

/* START_OF_SYMBOL_DEFINITION SequenceNumberError */
/**
 * @summary SequenceNumberError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumberError ::= SET {
 *   problems
 *     [1]  SET SIZE (1..ub-messages) OF
 *            SET {problem          [0]  SequenceNumberProblem,
 *                 sequence-number  [1]  SequenceNumber}
 * }
 * ```
 *
 * @class
 */
export class SequenceNumberError {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: SequenceNumberError_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a SequenceNumberError
     * @description
     *
     * This takes an `object` and converts it to a `SequenceNumberError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SequenceNumberError`.
     * @returns {SequenceNumberError}
     */
    public static _from_object(
        _o: { [_K in keyof SequenceNumberError]: SequenceNumberError[_K] }
    ): SequenceNumberError {
        return new SequenceNumberError(_o.problems);
    }
}
/* END_OF_SYMBOL_DEFINITION SequenceNumberError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SequenceNumberError */
/**
 * @summary The Leading Root Component Types of SequenceNumberError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SequenceNumberError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SequenceNumberError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SequenceNumberError */
/**
 * @summary The Trailing Root Component Types of SequenceNumberError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SequenceNumberError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SequenceNumberError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SequenceNumberError */
/**
 * @summary The Extension Addition Component Types of SequenceNumberError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SequenceNumberError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SequenceNumberError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumberError */
let _cached_decoder_for_SequenceNumberError: $.ASN1Decoder<SequenceNumberError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumberError */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceNumberError */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceNumberError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceNumberError} The decoded data structure.
 */
export function _decode_SequenceNumberError(el: _Element) {
    if (!_cached_decoder_for_SequenceNumberError) {
        _cached_decoder_for_SequenceNumberError = function (
            el: _Element
        ): SequenceNumberError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: SequenceNumberError_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_implicit<
                        SequenceNumberError_problems_Item[]
                    >(() =>
                        $._decodeSetOf<SequenceNumberError_problems_Item>(
                            () => _decode_SequenceNumberError_problems_Item
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SequenceNumberError,
                _extension_additions_list_spec_for_SequenceNumberError,
                _root_component_type_list_2_spec_for_SequenceNumberError,
                undefined
            );
            return new SequenceNumberError /* SET_CONSTRUCTOR_CALL */(problems);
        };
    }
    return _cached_decoder_for_SequenceNumberError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceNumberError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumberError */
let _cached_encoder_for_SequenceNumberError: $.ASN1Encoder<SequenceNumberError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumberError */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceNumberError */
/**
 * @summary Encodes a(n) SequenceNumberError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceNumberError, encoded as an ASN.1 Element.
 */
export function _encode_SequenceNumberError(
    value: SequenceNumberError,
    elGetter: $.ASN1Encoder<SequenceNumberError>
) {
    if (!_cached_encoder_for_SequenceNumberError) {
        _cached_encoder_for_SequenceNumberError = function (
            value: SequenceNumberError,
            elGetter: $.ASN1Encoder<SequenceNumberError>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () =>
                                $._encodeSetOf<SequenceNumberError_problems_Item>(
                                    () =>
                                        _encode_SequenceNumberError_problems_Item,
                                    $.BER
                                ),
                            $.BER
                        )(value.problems, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SequenceNumberError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceNumberError */

/* eslint-enable */
