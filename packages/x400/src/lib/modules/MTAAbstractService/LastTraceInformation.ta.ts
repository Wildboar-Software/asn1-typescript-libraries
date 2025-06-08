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
    ArrivalTime,
    _decode_ArrivalTime,
    _encode_ArrivalTime,
} from '../MTAAbstractService/ArrivalTime.ta';
export {
    ArrivalTime,
    _decode_ArrivalTime,
    _encode_ArrivalTime,
} from '../MTAAbstractService/ArrivalTime.ta';
import {
    ConvertedEncodedInformationTypes,
    _decode_ConvertedEncodedInformationTypes,
    _encode_ConvertedEncodedInformationTypes,
} from '../MTSAbstractService/ConvertedEncodedInformationTypes.ta';
export {
    ConvertedEncodedInformationTypes,
    _decode_ConvertedEncodedInformationTypes,
    _encode_ConvertedEncodedInformationTypes,
} from '../MTSAbstractService/ConvertedEncodedInformationTypes.ta';
import {
    ReportType,
    _decode_ReportType,
    _encode_ReportType,
} from '../MTSAbstractService/ReportType.ta';
export {
    ReportType,
    _decode_ReportType,
    _encode_ReportType,
} from '../MTSAbstractService/ReportType.ta';

/* START_OF_SYMBOL_DEFINITION LastTraceInformation */
/**
 * @summary LastTraceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastTraceInformation ::= SET {
 *   arrival-time                         [0]  ArrivalTime,
 *   converted-encoded-information-types
 *     ConvertedEncodedInformationTypes OPTIONAL,
 *   report-type                          [1]  ReportType
 * }
 * ```
 *
 * @class
 */
export class LastTraceInformation {
    constructor(
        /**
         * @summary `arrival_time`.
         * @public
         * @readonly
         */
        readonly arrival_time: ArrivalTime,
        /**
         * @summary `converted_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>,
        /**
         * @summary `report_type`.
         * @public
         * @readonly
         */
        readonly report_type: ReportType
    ) {}

    /**
     * @summary Restructures an object into a LastTraceInformation
     * @description
     *
     * This takes an `object` and converts it to a `LastTraceInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LastTraceInformation`.
     * @returns {LastTraceInformation}
     */
    public static _from_object(
        _o: { [_K in keyof LastTraceInformation]: LastTraceInformation[_K] }
    ): LastTraceInformation {
        return new LastTraceInformation(
            _o.arrival_time,
            _o.converted_encoded_information_types,
            _o.report_type
        );
    }
}
/* END_OF_SYMBOL_DEFINITION LastTraceInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LastTraceInformation */
/**
 * @summary The Leading Root Component Types of LastTraceInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LastTraceInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'arrival-time',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'converted-encoded-information-types',
        true,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'report-type',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LastTraceInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LastTraceInformation */
/**
 * @summary The Trailing Root Component Types of LastTraceInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LastTraceInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LastTraceInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LastTraceInformation */
/**
 * @summary The Extension Addition Component Types of LastTraceInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LastTraceInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LastTraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LastTraceInformation */
let _cached_decoder_for_LastTraceInformation: $.ASN1Decoder<LastTraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LastTraceInformation */

/* START_OF_SYMBOL_DEFINITION _decode_LastTraceInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) LastTraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastTraceInformation} The decoded data structure.
 */
export function _decode_LastTraceInformation(el: _Element) {
    if (!_cached_decoder_for_LastTraceInformation) {
        _cached_decoder_for_LastTraceInformation = function (
            el: _Element
        ): LastTraceInformation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let arrival_time!: ArrivalTime;
            let converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>;
            let report_type!: ReportType;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'arrival-time': (_el: _Element): void => {
                    arrival_time = $._decode_implicit<ArrivalTime>(
                        () => _decode_ArrivalTime
                    )(_el);
                },
                'converted-encoded-information-types': (
                    _el: _Element
                ): void => {
                    converted_encoded_information_types = _decode_ConvertedEncodedInformationTypes(
                        _el
                    );
                },
                'report-type': (_el: _Element): void => {
                    report_type = $._decode_explicit<ReportType>(
                        () => _decode_ReportType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LastTraceInformation,
                _extension_additions_list_spec_for_LastTraceInformation,
                _root_component_type_list_2_spec_for_LastTraceInformation,
                undefined
            );
            return new LastTraceInformation /* SET_CONSTRUCTOR_CALL */(
                arrival_time,
                converted_encoded_information_types,
                report_type
            );
        };
    }
    return _cached_decoder_for_LastTraceInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LastTraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LastTraceInformation */
let _cached_encoder_for_LastTraceInformation: $.ASN1Encoder<LastTraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LastTraceInformation */

/* START_OF_SYMBOL_DEFINITION _encode_LastTraceInformation */
/**
 * @summary Encodes a(n) LastTraceInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastTraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_LastTraceInformation(
    value: LastTraceInformation,
    elGetter: $.ASN1Encoder<LastTraceInformation>
) {
    if (!_cached_encoder_for_LastTraceInformation) {
        _cached_encoder_for_LastTraceInformation = function (
            value: LastTraceInformation,
            elGetter: $.ASN1Encoder<LastTraceInformation>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ArrivalTime,
                            $.BER
                        )(value.arrival_time, $.BER),
                        /* IF_ABSENT  */ value.converted_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_ConvertedEncodedInformationTypes(
                                  value.converted_encoded_information_types,
                                  $.BER
                              ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_ReportType,
                            $.BER
                        )(value.report_type, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LastTraceInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LastTraceInformation */

/* eslint-enable */
