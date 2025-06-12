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
    ReportIdentifier,
    _decode_ReportIdentifier,
    _encode_ReportIdentifier,
} from '../MTAAbstractService/ReportIdentifier.ta.js';
export {
    ReportIdentifier,
    _decode_ReportIdentifier,
    _encode_ReportIdentifier,
} from '../MTAAbstractService/ReportIdentifier.ta.js';
import {
    ReportDestinationName,
    _decode_ReportDestinationName,
    _encode_ReportDestinationName,
} from '../MTAAbstractService/ReportDestinationName.ta.js';
export {
    ReportDestinationName,
    _decode_ReportDestinationName,
    _encode_ReportDestinationName,
} from '../MTAAbstractService/ReportDestinationName.ta.js';
import {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.js';
export {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.js';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.js';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.js';

/* START_OF_SYMBOL_DEFINITION ReportTransferEnvelope */
/**
 * @summary ReportTransferEnvelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportTransferEnvelope ::= SET {
 *   report-identifier        ReportIdentifier,
 *   report-destination-name  ReportDestinationName,
 *   trace-information        TraceInformation,
 *   extensions
 *     [1]  SET OF ExtensionField{{ReportTransferEnvelopeExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class ReportTransferEnvelope {
    constructor(
        /**
         * @summary `report_identifier`.
         * @public
         * @readonly
         */
        readonly report_identifier: ReportIdentifier,
        /**
         * @summary `report_destination_name`.
         * @public
         * @readonly
         */
        readonly report_destination_name: ReportDestinationName,
        /**
         * @summary `trace_information`.
         * @public
         * @readonly
         */
        readonly trace_information: TraceInformation,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a ReportTransferEnvelope
     * @description
     *
     * This takes an `object` and converts it to a `ReportTransferEnvelope`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportTransferEnvelope`.
     * @returns {ReportTransferEnvelope}
     */
    public static _from_object(
        _o: { [_K in keyof ReportTransferEnvelope]: ReportTransferEnvelope[_K] }
    ): ReportTransferEnvelope {
        return new ReportTransferEnvelope(
            _o.report_identifier,
            _o.report_destination_name,
            _o.trace_information,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions() {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION ReportTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReportTransferEnvelope */
/**
 * @summary The Leading Root Component Types of ReportTransferEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReportTransferEnvelope: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'report-identifier',
        false,
        $.hasTag(_TagClass.application, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'report-destination-name',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'trace-information',
        false,
        $.hasTag(_TagClass.application, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReportTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReportTransferEnvelope */
/**
 * @summary The Trailing Root Component Types of ReportTransferEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReportTransferEnvelope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReportTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReportTransferEnvelope */
/**
 * @summary The Extension Addition Component Types of ReportTransferEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReportTransferEnvelope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReportTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportTransferEnvelope */
let _cached_decoder_for_ReportTransferEnvelope: $.ASN1Decoder<ReportTransferEnvelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _decode_ReportTransferEnvelope */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportTransferEnvelope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportTransferEnvelope} The decoded data structure.
 */
export function _decode_ReportTransferEnvelope(el: _Element) {
    if (!_cached_decoder_for_ReportTransferEnvelope) {
        _cached_decoder_for_ReportTransferEnvelope = function (
            el: _Element
        ): ReportTransferEnvelope {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let report_identifier!: ReportIdentifier;
            let report_destination_name!: ReportDestinationName;
            let trace_information!: TraceInformation;
            let extensions: OPTIONAL<ExtensionField[]> =
                ReportTransferEnvelope._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'report-identifier': (_el: _Element): void => {
                    report_identifier = _decode_ReportIdentifier(_el);
                },
                'report-destination-name': (_el: _Element): void => {
                    report_destination_name = _decode_ReportDestinationName(
                        _el
                    );
                },
                'trace-information': (_el: _Element): void => {
                    trace_information = _decode_TraceInformation(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReportTransferEnvelope,
                _extension_additions_list_spec_for_ReportTransferEnvelope,
                _root_component_type_list_2_spec_for_ReportTransferEnvelope,
                undefined
            );
            return new ReportTransferEnvelope /* SET_CONSTRUCTOR_CALL */(
                report_identifier,
                report_destination_name,
                trace_information,
                extensions
            );
        };
    }
    return _cached_decoder_for_ReportTransferEnvelope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportTransferEnvelope */
let _cached_encoder_for_ReportTransferEnvelope: $.ASN1Encoder<ReportTransferEnvelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _encode_ReportTransferEnvelope */
/**
 * @summary Encodes a(n) ReportTransferEnvelope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportTransferEnvelope, encoded as an ASN.1 Element.
 */
export function _encode_ReportTransferEnvelope(
    value: ReportTransferEnvelope,
    elGetter: $.ASN1Encoder<ReportTransferEnvelope>
) {
    if (!_cached_encoder_for_ReportTransferEnvelope) {
        _cached_encoder_for_ReportTransferEnvelope = function (
            value: ReportTransferEnvelope,
            elGetter: $.ASN1Encoder<ReportTransferEnvelope>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ReportIdentifier(
                            value.report_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ReportDestinationName(
                            value.report_destination_name,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TraceInformation(
                            value.trace_information,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            ReportTransferEnvelope._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ExtensionField>(
                                          () => _encode_ExtensionField,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ReportTransferEnvelope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportTransferEnvelope */

/* eslint-enable */
