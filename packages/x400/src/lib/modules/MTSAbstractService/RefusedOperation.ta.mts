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
    RefusedOperation_refused_argument,
    _decode_RefusedOperation_refused_argument,
    _encode_RefusedOperation_refused_argument,
} from '../MTSAbstractService/RefusedOperation-refused-argument.ta.mjs';
export {
    RefusedOperation_refused_argument,
    _decode_RefusedOperation_refused_argument,
    _encode_RefusedOperation_refused_argument,
} from '../MTSAbstractService/RefusedOperation-refused-argument.ta.mjs';
import {
    RefusalReason,
    RefusalReason_facility_unavailable /* IMPORTED_LONG_NAMED_INTEGER */,
    facility_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusalReason_facility_not_subscribed /* IMPORTED_LONG_NAMED_INTEGER */,
    facility_not_subscribed /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusalReason_parameter_unacceptable /* IMPORTED_LONG_NAMED_INTEGER */,
    parameter_unacceptable /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RefusalReason,
    _encode_RefusalReason,
} from '../MTSAbstractService/RefusalReason.ta.mjs';
export {
    RefusalReason,
    RefusalReason_facility_unavailable /* IMPORTED_LONG_NAMED_INTEGER */,
    facility_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusalReason_facility_not_subscribed /* IMPORTED_LONG_NAMED_INTEGER */,
    facility_not_subscribed /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusalReason_parameter_unacceptable /* IMPORTED_LONG_NAMED_INTEGER */,
    parameter_unacceptable /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RefusalReason,
    _encode_RefusalReason,
} from '../MTSAbstractService/RefusalReason.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RefusedOperation */
/**
 * @summary RefusedOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefusedOperation ::= SET {
 *   refused-argument
 *     CHOICE {built-in-argument  [1]  RefusedArgument,
 *             refused-extension  EXTENSION.&id},
 *   refusal-reason    [2]  RefusalReason
 * }
 * ```
 *
 * @class
 */
export class RefusedOperation {
    constructor(
        /**
         * @summary `refused_argument`.
         * @public
         * @readonly
         */
        readonly refused_argument: RefusedOperation_refused_argument,
        /**
         * @summary `refusal_reason`.
         * @public
         * @readonly
         */
        readonly refusal_reason: RefusalReason
    ) {}

    /**
     * @summary Restructures an object into a RefusedOperation
     * @description
     *
     * This takes an `object` and converts it to a `RefusedOperation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RefusedOperation`.
     * @returns {RefusedOperation}
     */
    public static _from_object(
        _o: { [_K in keyof RefusedOperation]: RefusedOperation[_K] }
    ): RefusedOperation {
        return new RefusedOperation(_o.refused_argument, _o.refusal_reason);
    }
}
/* END_OF_SYMBOL_DEFINITION RefusedOperation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RefusedOperation */
/**
 * @summary The Leading Root Component Types of RefusedOperation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RefusedOperation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'refused-argument',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'refusal-reason',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RefusedOperation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RefusedOperation */
/**
 * @summary The Trailing Root Component Types of RefusedOperation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RefusedOperation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RefusedOperation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RefusedOperation */
/**
 * @summary The Extension Addition Component Types of RefusedOperation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RefusedOperation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RefusedOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusedOperation */
let _cached_decoder_for_RefusedOperation: $.ASN1Decoder<RefusedOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusedOperation */

/* START_OF_SYMBOL_DEFINITION _decode_RefusedOperation */
/**
 * @summary Decodes an ASN.1 element into a(n) RefusedOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefusedOperation} The decoded data structure.
 */
export function _decode_RefusedOperation(el: _Element) {
    if (!_cached_decoder_for_RefusedOperation) {
        _cached_decoder_for_RefusedOperation = function (
            el: _Element
        ): RefusedOperation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let refused_argument!: RefusedOperation_refused_argument;
            let refusal_reason!: RefusalReason;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'refused-argument': (_el: _Element): void => {
                    refused_argument = _decode_RefusedOperation_refused_argument(
                        _el
                    );
                },
                'refusal-reason': (_el: _Element): void => {
                    refusal_reason = $._decode_implicit<RefusalReason>(
                        () => _decode_RefusalReason
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RefusedOperation,
                _extension_additions_list_spec_for_RefusedOperation,
                _root_component_type_list_2_spec_for_RefusedOperation,
                undefined
            );
            return new RefusedOperation /* SET_CONSTRUCTOR_CALL */(
                refused_argument,
                refusal_reason
            );
        };
    }
    return _cached_decoder_for_RefusedOperation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RefusedOperation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusedOperation */
let _cached_encoder_for_RefusedOperation: $.ASN1Encoder<RefusedOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusedOperation */

/* START_OF_SYMBOL_DEFINITION _encode_RefusedOperation */
/**
 * @summary Encodes a(n) RefusedOperation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefusedOperation, encoded as an ASN.1 Element.
 */
export function _encode_RefusedOperation(
    value: RefusedOperation,
    elGetter: $.ASN1Encoder<RefusedOperation>
) {
    if (!_cached_encoder_for_RefusedOperation) {
        _cached_encoder_for_RefusedOperation = function (
            value: RefusedOperation,
            elGetter: $.ASN1Encoder<RefusedOperation>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RefusedOperation_refused_argument(
                            value.refused_argument,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_RefusalReason,
                            $.BER
                        )(value.refusal_reason, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RefusedOperation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RefusedOperation */

/* eslint-enable */
