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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    ActualRecipientName,
    _decode_ActualRecipientName,
    _encode_ActualRecipientName,
} from '../MTSAbstractService/ActualRecipientName.ta.mjs';
import {
    OriginallyIntendedRecipientName,
    _decode_OriginallyIntendedRecipientName,
    _encode_OriginallyIntendedRecipientName,
} from '../MTSAbstractService/OriginallyIntendedRecipientName.ta.mjs';
import {
    PerRecipientReportFields_report_type,
    _decode_PerRecipientReportFields_report_type,
    _encode_PerRecipientReportFields_report_type,
} from '../MTSAbstractService/PerRecipientReportFields-report-type.ta.mjs';
/**
 * @summary PerRecipientReportFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientReportFields ::= SEQUENCE {
 *   actual-recipient-name               ActualRecipientName,
 *   originally-intended-recipient-name  OriginallyIntendedRecipientName OPTIONAL,
 *   report-type
 *     CHOICE {delivery      [0]  PerRecipientDeliveryReportFields,
 *             non-delivery  [1]  PerRecipientNonDeliveryReportFields}
 * }
 * ```
 *
 * @class
 */
export class PerRecipientReportFields {
    constructor(
        /**
         * @summary `actual_recipient_name`.
         * @public
         * @readonly
         */
        readonly actual_recipient_name: ActualRecipientName,
        /**
         * @summary `originally_intended_recipient_name`.
         * @public
         * @readonly
         */
        readonly originally_intended_recipient_name: OPTIONAL<OriginallyIntendedRecipientName>,
        /**
         * @summary `report_type`.
         * @public
         * @readonly
         */
        readonly report_type: PerRecipientReportFields_report_type
    ) {}

    /**
     * @summary Restructures an object into a PerRecipientReportFields
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientReportFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientReportFields`.
     * @returns {PerRecipientReportFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerRecipientReportFields]: PerRecipientReportFields[_K];
        }
    ): PerRecipientReportFields {
        return new PerRecipientReportFields(
            _o.actual_recipient_name,
            _o.originally_intended_recipient_name,
            _o.report_type
        );
    }
}

/**
 * @summary The Leading Root Component Types of PerRecipientReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientReportFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'actual-recipient-name',
        false,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'originally-intended-recipient-name',
        true,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'report-type',
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of PerRecipientReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientReportFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerRecipientReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientReportFields: $.ComponentSpec[] = [];

let _cached_decoder_for_PerRecipientReportFields: $.ASN1Decoder<PerRecipientReportFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientReportFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientReportFields} The decoded data structure.
 */
export function _decode_PerRecipientReportFields(el: _Element) {
    if (!_cached_decoder_for_PerRecipientReportFields) {
        _cached_decoder_for_PerRecipientReportFields = function (
            el: _Element
        ): PerRecipientReportFields {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let actual_recipient_name!: ActualRecipientName;
            let originally_intended_recipient_name: OPTIONAL<OriginallyIntendedRecipientName>;
            let report_type!: PerRecipientReportFields_report_type;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'actual-recipient-name': (_el: _Element): void => {
                    actual_recipient_name = _decode_ActualRecipientName(_el);
                },
                'originally-intended-recipient-name': (_el: _Element): void => {
                    originally_intended_recipient_name = _decode_OriginallyIntendedRecipientName(
                        _el
                    );
                },
                'report-type': (_el: _Element): void => {
                    report_type = _decode_PerRecipientReportFields_report_type(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerRecipientReportFields,
                _extension_additions_list_spec_for_PerRecipientReportFields,
                _root_component_type_list_2_spec_for_PerRecipientReportFields,
                undefined
            );
            return new PerRecipientReportFields /* SEQUENCE_CONSTRUCTOR_CALL */(
                actual_recipient_name,
                originally_intended_recipient_name,
                report_type
            );
        };
    }
    return _cached_decoder_for_PerRecipientReportFields(el);
}

let _cached_encoder_for_PerRecipientReportFields: $.ASN1Encoder<PerRecipientReportFields> | null = null;

/**
 * @summary Encodes a(n) PerRecipientReportFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientReportFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientReportFields(
    value: PerRecipientReportFields,
    elGetter: $.ASN1Encoder<PerRecipientReportFields>
) {
    if (!_cached_encoder_for_PerRecipientReportFields) {
        _cached_encoder_for_PerRecipientReportFields = function (
            value: PerRecipientReportFields        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ActualRecipientName(
                            value.actual_recipient_name,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.originally_intended_recipient_name ===
                        undefined
                            ? undefined
                            : _encode_OriginallyIntendedRecipientName(
                                  value.originally_intended_recipient_name,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_PerRecipientReportFields_report_type(
                            value.report_type,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PerRecipientReportFields(value, elGetter);
}


/* eslint-enable */
