/* eslint-disable */
import {
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
    ReportTransferEnvelope,
    _decode_ReportTransferEnvelope,
    _encode_ReportTransferEnvelope,
} from '../MTAAbstractService/ReportTransferEnvelope.ta.mjs';
import {
    ReportTransferContent,
    _decode_ReportTransferContent,
    _encode_ReportTransferContent,
} from '../MTAAbstractService/ReportTransferContent.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Report */
/**
 * @summary Report
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Report ::= SEQUENCE {
 *   envelope  ReportTransferEnvelope,
 *   content   ReportTransferContent
 * }
 * ```
 *
 * @class
 */
export class Report {
    constructor(
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: ReportTransferEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: ReportTransferContent
    ) {}

    /**
     * @summary Restructures an object into a Report
     * @description
     *
     * This takes an `object` and converts it to a `Report`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Report`.
     * @returns {Report}
     */
    public static _from_object(
        _o: { [_K in keyof Report]: Report[_K] }
    ): Report {
        return new Report(_o.envelope, _o.content);
    }
}
/* END_OF_SYMBOL_DEFINITION Report */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Report */
/**
 * @summary The Leading Root Component Types of Report
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Report: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'envelope',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Report */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Report */
/**
 * @summary The Trailing Root Component Types of Report
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Report: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Report */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Report */
/**
 * @summary The Extension Addition Component Types of Report
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Report: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Report */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Report */
let _cached_decoder_for_Report: $.ASN1Decoder<Report> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Report */

/* START_OF_SYMBOL_DEFINITION _decode_Report */
/**
 * @summary Decodes an ASN.1 element into a(n) Report
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Report} The decoded data structure.
 */
export function _decode_Report(el: _Element) {
    if (!_cached_decoder_for_Report) {
        _cached_decoder_for_Report = function (el: _Element): Report {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Report contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'envelope';
            sequence[1].name = 'content';
            let envelope!: ReportTransferEnvelope;
            let content!: ReportTransferContent;
            envelope = _decode_ReportTransferEnvelope(sequence[0]);
            content = _decode_ReportTransferContent(sequence[1]);
            return new Report(envelope, content);
        };
    }
    return _cached_decoder_for_Report(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Report */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Report */
let _cached_encoder_for_Report: $.ASN1Encoder<Report> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Report */

/* START_OF_SYMBOL_DEFINITION _encode_Report */
/**
 * @summary Encodes a(n) Report into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Report, encoded as an ASN.1 Element.
 */
export function _encode_Report(value: Report, elGetter: $.ASN1Encoder<Report>) {
    if (!_cached_encoder_for_Report) {
        _cached_encoder_for_Report = function (
            value: Report        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ReportTransferEnvelope(
                            value.envelope,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ReportTransferContent(
                            value.content,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Report(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Report */

/* eslint-enable */
