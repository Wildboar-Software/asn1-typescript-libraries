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
    AttributeError_problems_Item,
    _decode_AttributeError_problems_Item,
    _encode_AttributeError_problems_Item,
} from '../MhsAcctAsn1Module/AttributeError-problems-Item.ta';
export {
    AttributeError_problems_Item,
    _decode_AttributeError_problems_Item,
    _encode_AttributeError_problems_Item,
} from '../MhsAcctAsn1Module/AttributeError-problems-Item.ta';

/* START_OF_SYMBOL_DEFINITION AttributeError */
/**
 * @summary AttributeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeError ::= SET {
 *   problems
 *     [0]  SET SIZE (1..ub-per-entry) OF
 *            SET {problem  [0]  AttributeProblem,
 *                 type     [1]  AttributeType}
 * }
 * ```
 *
 * @class
 */
export class AttributeError {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: AttributeError_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a AttributeError
     * @description
     *
     * This takes an `object` and converts it to a `AttributeError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeError`.
     * @returns {AttributeError}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeError]: AttributeError[_K] }
    ): AttributeError {
        return new AttributeError(_o.problems);
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeError */
/**
 * @summary The Leading Root Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeError */
/**
 * @summary The Trailing Root Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeError */
/**
 * @summary The Extension Addition Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeError */
let _cached_decoder_for_AttributeError: $.ASN1Decoder<AttributeError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeError */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeError} The decoded data structure.
 */
export function _decode_AttributeError(el: _Element) {
    if (!_cached_decoder_for_AttributeError) {
        _cached_decoder_for_AttributeError = function (
            el: _Element
        ): AttributeError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: AttributeError_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_implicit<
                        AttributeError_problems_Item[]
                    >(() =>
                        $._decodeSetOf<AttributeError_problems_Item>(
                            () => _decode_AttributeError_problems_Item
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeError,
                _extension_additions_list_spec_for_AttributeError,
                _root_component_type_list_2_spec_for_AttributeError,
                undefined
            );
            return new AttributeError /* SET_CONSTRUCTOR_CALL */(problems);
        };
    }
    return _cached_decoder_for_AttributeError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeError */
let _cached_encoder_for_AttributeError: $.ASN1Encoder<AttributeError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeError */
/**
 * @summary Encodes a(n) AttributeError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeError, encoded as an ASN.1 Element.
 */
export function _encode_AttributeError(
    value: AttributeError,
    elGetter: $.ASN1Encoder<AttributeError>
) {
    if (!_cached_encoder_for_AttributeError) {
        _cached_encoder_for_AttributeError = function (
            value: AttributeError,
            elGetter: $.ASN1Encoder<AttributeError>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<AttributeError_problems_Item>(
                                    () => _encode_AttributeError_problems_Item,
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
    return _cached_encoder_for_AttributeError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeError */

/* eslint-enable */
