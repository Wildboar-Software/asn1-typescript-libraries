/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary PerRecipientReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientReport ::= SEQUENCE {
 *   report-entry  [0]  SequenceNumber,
 *   position      [1]  INTEGER(1..ub-recipients) DEFAULT 1
 * }
 * ```
 *
 */
export class PerRecipientReport {
    constructor(
        /**
         * @summary `report_entry`.
         * @public
         * @readonly
         */
        readonly report_entry: SequenceNumber,
        /**
         * @summary `position`.
         * @public
         * @readonly
         */
        readonly position: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a PerRecipientReport
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientReport`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientReport`.
     * @returns {PerRecipientReport}
     */
    public static _from_object(
        _o: { [_K in keyof PerRecipientReport]: PerRecipientReport[_K] }
    ): PerRecipientReport {
        return new PerRecipientReport(_o.report_entry, _o.position);
    }

    /**
     * @summary Getter that returns the default value for `position`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_position() {
        return 1;
    }
}

/**
 * @summary The Leading Root Component Types of PerRecipientReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientReport: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'report-entry',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'position',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of PerRecipientReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientReport: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerRecipientReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientReport: $.ComponentSpec[] = [];

let _cached_decoder_for_PerRecipientReport: $.ASN1Decoder<PerRecipientReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientReport} The decoded data structure.
 */
export function _decode_PerRecipientReport(el: _Element): PerRecipientReport {
    if (!_cached_decoder_for_PerRecipientReport) {
        _cached_decoder_for_PerRecipientReport = function (
            el: _Element
        ): PerRecipientReport {
            let report_entry!: SequenceNumber;
            let position: OPTIONAL<INTEGER> =
                PerRecipientReport._default_value_for_position;
            const callbacks: $.DecodingMap = {
                'report-entry': (_el: _Element): void => {
                    report_entry = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                position: (_el: _Element): void => {
                    position = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerRecipientReport,
                _extension_additions_list_spec_for_PerRecipientReport,
                _root_component_type_list_2_spec_for_PerRecipientReport,
                undefined
            );
            return new PerRecipientReport (
                report_entry,
                position
            );
        };
    }
    return _cached_decoder_for_PerRecipientReport(el);
}

let _cached_encoder_for_PerRecipientReport: $.ASN1Encoder<PerRecipientReport> | null = null;

/**
 * @summary Encodes a(n) PerRecipientReport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientReport, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientReport(
    value: PerRecipientReport,
    elGetter: $.ASN1Encoder<PerRecipientReport>
): _Element {
    if (!_cached_encoder_for_PerRecipientReport) {
        _cached_encoder_for_PerRecipientReport = function (
            value: PerRecipientReport        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_SequenceNumber,
                            $.BER
                        )(value.report_entry, $.BER),
                        /* IF_DEFAULT */ value.position === undefined ||
                        $.deepEq(
                            value.position,
                            PerRecipientReport._default_value_for_position
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.position, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PerRecipientReport(value, elGetter);
}


/* eslint-enable */
