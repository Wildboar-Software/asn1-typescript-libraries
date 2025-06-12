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
    ServiceProblem,
    ServiceProblem_busy /* IMPORTED_LONG_NAMED_INTEGER */,
    busy /* IMPORTED_SHORT_NAMED_INTEGER */,
    ServiceProblem_unavailable /* IMPORTED_LONG_NAMED_INTEGER */,
    unavailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    ServiceProblem_unwilling_to_perform /* IMPORTED_LONG_NAMED_INTEGER */,
    unwilling_to_perform /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from '../MSAbstractService/ServiceProblem.ta.js';
export {
    ServiceProblem,
    ServiceProblem_busy /* IMPORTED_LONG_NAMED_INTEGER */,
    busy /* IMPORTED_SHORT_NAMED_INTEGER */,
    ServiceProblem_unavailable /* IMPORTED_LONG_NAMED_INTEGER */,
    unavailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    ServiceProblem_unwilling_to_perform /* IMPORTED_LONG_NAMED_INTEGER */,
    unwilling_to_perform /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from '../MSAbstractService/ServiceProblem.ta.js';

/* START_OF_SYMBOL_DEFINITION ServiceError */
/**
 * @summary ServiceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceError ::= SET {problem  [0]  ServiceProblem
 * }
 * ```
 *
 * @class
 */
export class ServiceError {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ServiceProblem
    ) {}

    /**
     * @summary Restructures an object into a ServiceError
     * @description
     *
     * This takes an `object` and converts it to a `ServiceError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceError`.
     * @returns {ServiceError}
     */
    public static _from_object(
        _o: { [_K in keyof ServiceError]: ServiceError[_K] }
    ): ServiceError {
        return new ServiceError(_o.problem);
    }
}
/* END_OF_SYMBOL_DEFINITION ServiceError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceError */
/**
 * @summary The Leading Root Component Types of ServiceError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceError */
/**
 * @summary The Trailing Root Component Types of ServiceError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceError */
/**
 * @summary The Extension Addition Component Types of ServiceError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceError */
let _cached_decoder_for_ServiceError: $.ASN1Decoder<ServiceError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceError */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceError */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceError} The decoded data structure.
 */
export function _decode_ServiceError(el: _Element) {
    if (!_cached_decoder_for_ServiceError) {
        _cached_decoder_for_ServiceError = function (
            el: _Element
        ): ServiceError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: ServiceProblem;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_implicit<ServiceProblem>(
                        () => _decode_ServiceProblem
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceError,
                _extension_additions_list_spec_for_ServiceError,
                _root_component_type_list_2_spec_for_ServiceError,
                undefined
            );
            return new ServiceError /* SET_CONSTRUCTOR_CALL */(problem);
        };
    }
    return _cached_decoder_for_ServiceError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceError */
let _cached_encoder_for_ServiceError: $.ASN1Encoder<ServiceError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceError */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceError */
/**
 * @summary Encodes a(n) ServiceError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceError, encoded as an ASN.1 Element.
 */
export function _encode_ServiceError(
    value: ServiceError,
    elGetter: $.ASN1Encoder<ServiceError>
) {
    if (!_cached_encoder_for_ServiceError) {
        _cached_encoder_for_ServiceError = function (
            value: ServiceError,
            elGetter: $.ASN1Encoder<ServiceError>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ServiceProblem,
                            $.BER
                        )(value.problem, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ServiceError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceError */

/* eslint-enable */
