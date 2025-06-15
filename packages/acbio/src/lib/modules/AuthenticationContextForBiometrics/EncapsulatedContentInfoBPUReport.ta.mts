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

/**
 * @summary EncapsulatedContentInfoBPUReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncapsulatedContentInfoBPUReport ::= SEQUENCE {
 *     eContentType    CONTENT-TYPE.&id({ContentTypeBPUReportContentInfo}),
 *     eContent        [0] CONTENT-TYPE.&Type({ContentTypeBPUReportContentInfo}{@eContentType}) }
 * ```
 *
 * @class
 */
export class EncapsulatedContentInfoBPUReport {
    constructor(
        /**
         * @summary `eContentType`.
         * @public
         * @readonly
         */
        readonly eContentType: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        /**
         * @summary `eContent`.
         * @public
         * @readonly
         */
        readonly eContent: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
    ) {}

    /**
     * @summary Restructures an object into a EncapsulatedContentInfoBPUReport
     * @description
     *
     * This takes an `object` and converts it to a `EncapsulatedContentInfoBPUReport`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncapsulatedContentInfoBPUReport`.
     * @returns {EncapsulatedContentInfoBPUReport}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncapsulatedContentInfoBPUReport]: EncapsulatedContentInfoBPUReport[_K];
        }
    ): EncapsulatedContentInfoBPUReport {
        return new EncapsulatedContentInfoBPUReport(
            _o.eContentType,
            _o.eContent
        );
    }
}


/**
 * @summary The Leading Root Component Types of EncapsulatedContentInfoBPUReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfoBPUReport: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'eContentType',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'eContent',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of EncapsulatedContentInfoBPUReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfoBPUReport: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncapsulatedContentInfoBPUReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncapsulatedContentInfoBPUReport: $.ComponentSpec[] = [];


let _cached_decoder_for_EncapsulatedContentInfoBPUReport: $.ASN1Decoder<EncapsulatedContentInfoBPUReport> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedContentInfoBPUReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncapsulatedContentInfoBPUReport} The decoded data structure.
 */
export function _decode_EncapsulatedContentInfoBPUReport(el: _Element) {
    if (!_cached_decoder_for_EncapsulatedContentInfoBPUReport) {
        _cached_decoder_for_EncapsulatedContentInfoBPUReport = function (
            el: _Element
        ): EncapsulatedContentInfoBPUReport {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EncapsulatedContentInfoBPUReport contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'eContentType';
            sequence[1].name = 'eContent';
            let eContentType!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            let eContent!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            eContentType = $._decodeAny(
                /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ sequence[0]
            );
            eContent = $._decode_implicit<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(
                () => $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
            )(sequence[1]);
            return new EncapsulatedContentInfoBPUReport(eContentType, eContent);
        };
    }
    return _cached_decoder_for_EncapsulatedContentInfoBPUReport(el);
}


let _cached_encoder_for_EncapsulatedContentInfoBPUReport: $.ASN1Encoder<EncapsulatedContentInfoBPUReport> | null = null;


/**
 * @summary Encodes a(n) EncapsulatedContentInfoBPUReport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedContentInfoBPUReport, encoded as an ASN.1 Element.
 */
export function _encode_EncapsulatedContentInfoBPUReport(
    value: EncapsulatedContentInfoBPUReport,
    elGetter: $.ASN1Encoder<EncapsulatedContentInfoBPUReport>
) {
    if (!_cached_encoder_for_EncapsulatedContentInfoBPUReport) {
        _cached_encoder_for_EncapsulatedContentInfoBPUReport = function (
            value: EncapsulatedContentInfoBPUReport        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeAny(
                            /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.eContentType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
                            $.BER
                        )(value.eContent, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncapsulatedContentInfoBPUReport(
        value,
        elGetter
    );
}


/* eslint-enable */
