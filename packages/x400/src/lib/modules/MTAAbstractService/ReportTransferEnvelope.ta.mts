/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ReportIdentifier,
    _decode_ReportIdentifier,
    _encode_ReportIdentifier,
} from '../MTAAbstractService/ReportIdentifier.ta.mjs';
import {
    ReportDestinationName,
    _decode_ReportDestinationName,
    _encode_ReportDestinationName,
} from '../MTAAbstractService/ReportDestinationName.ta.mjs';
import {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
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
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}

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
        $.hasTag(_TagClass.application, 4)
    ),
    new $.ComponentSpec(
        'report-destination-name',
        false,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'trace-information',
        false,
        $.hasTag(_TagClass.application, 9)
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ReportTransferEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReportTransferEnvelope: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ReportTransferEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReportTransferEnvelope: $.ComponentSpec[] = [];

let _cached_decoder_for_ReportTransferEnvelope: $.ASN1Decoder<ReportTransferEnvelope> | null = null;

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

let _cached_encoder_for_ReportTransferEnvelope: $.ASN1Encoder<ReportTransferEnvelope> | null = null;

/**
 * @summary Encodes a(n) ReportTransferEnvelope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportTransferEnvelope, encoded as an ASN.1 Element.
 */
export function _encode_ReportTransferEnvelope(
    value: ReportTransferEnvelope,
    elGetter: $.ASN1Encoder<ReportTransferEnvelope>
) {
    if (!_cached_encoder_for_ReportTransferEnvelope) {
        _cached_encoder_for_ReportTransferEnvelope = function (
            value: ReportTransferEnvelope        ): _Element {
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


/* eslint-enable */
