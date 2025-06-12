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
} from '../MSAbstractService/ServiceProblem.ta.mjs';
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
} from '../MSAbstractService/ServiceProblem.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ServiceErrorParameter */
/**
 * @summary ServiceErrorParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceErrorParameter ::= SET {
 *   problem                    [0]  ServiceProblem,
 *   -- 1994 extension
 *   supplementary-information
 *     [1]  GeneralString(SIZE (1..ub-supplementary-info-length)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ServiceErrorParameter {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ServiceProblem,
        /**
         * @summary `supplementary_information`.
         * @public
         * @readonly
         */
        readonly supplementary_information: OPTIONAL<GeneralString>
    ) {}

    /**
     * @summary Restructures an object into a ServiceErrorParameter
     * @description
     *
     * This takes an `object` and converts it to a `ServiceErrorParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceErrorParameter`.
     * @returns {ServiceErrorParameter}
     */
    public static _from_object(
        _o: { [_K in keyof ServiceErrorParameter]: ServiceErrorParameter[_K] }
    ): ServiceErrorParameter {
        return new ServiceErrorParameter(
            _o.problem,
            _o.supplementary_information
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ServiceErrorParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceErrorParameter */
/**
 * @summary The Leading Root Component Types of ServiceErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceErrorParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceErrorParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceErrorParameter */
/**
 * @summary The Trailing Root Component Types of ServiceErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceErrorParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceErrorParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceErrorParameter */
/**
 * @summary The Extension Addition Component Types of ServiceErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceErrorParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceErrorParameter */
let _cached_decoder_for_ServiceErrorParameter: $.ASN1Decoder<ServiceErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceErrorParameter */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceErrorParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceErrorParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceErrorParameter} The decoded data structure.
 */
export function _decode_ServiceErrorParameter(el: _Element) {
    if (!_cached_decoder_for_ServiceErrorParameter) {
        _cached_decoder_for_ServiceErrorParameter = function (
            el: _Element
        ): ServiceErrorParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: ServiceProblem;
            let supplementary_information: OPTIONAL<GeneralString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<ServiceProblem>(
                        () => _decode_ServiceProblem
                    )(_el);
                },
                'supplementary-information': (_el: _Element): void => {
                    supplementary_information = $._decode_explicit<GeneralString>(
                        () => $._decodeGeneralString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceErrorParameter,
                _extension_additions_list_spec_for_ServiceErrorParameter,
                _root_component_type_list_2_spec_for_ServiceErrorParameter,
                undefined
            );
            return new ServiceErrorParameter /* SET_CONSTRUCTOR_CALL */(
                problem,
                supplementary_information
            );
        };
    }
    return _cached_decoder_for_ServiceErrorParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceErrorParameter */
let _cached_encoder_for_ServiceErrorParameter: $.ASN1Encoder<ServiceErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceErrorParameter */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceErrorParameter */
/**
 * @summary Encodes a(n) ServiceErrorParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_ServiceErrorParameter(
    value: ServiceErrorParameter,
    elGetter: $.ASN1Encoder<ServiceErrorParameter>
) {
    if (!_cached_encoder_for_ServiceErrorParameter) {
        _cached_encoder_for_ServiceErrorParameter = function (
            value: ServiceErrorParameter,
            elGetter: $.ASN1Encoder<ServiceErrorParameter>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ServiceProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* IF_ABSENT  */ value.supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeGeneralString,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ServiceErrorParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceErrorParameter */

/* eslint-enable */
