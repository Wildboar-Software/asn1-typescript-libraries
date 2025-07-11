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
    BPUSubprocessInformationList,
    _decode_BPUSubprocessInformationList,
    _encode_BPUSubprocessInformationList,
} from '../AuthenticationContextForBiometrics/BPUSubprocessInformationList.ta.mjs';
import {
    BPUIOStaticInformationList,
    _decode_BPUIOStaticInformationList,
    _encode_BPUIOStaticInformationList,
} from '../AuthenticationContextForBiometrics/BPUIOStaticInformationList.ta.mjs';

/**
 * @summary BPUFunctionReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUFunctionReport ::= SEQUENCE {
 *     bpuSubprocessInformationList    BPUSubprocessInformationList,
 *     bpuInputStaticInformationList   BPUIOStaticInformationList OPTIONAL,
 *     bpuOutputStaticInformationList  BPUIOStaticInformationList OPTIONAL }
 * ```
 *
 */
export class BPUFunctionReport {
    constructor(
        /**
         * @summary `bpuSubprocessInformationList`.
         * @public
         * @readonly
         */
        readonly bpuSubprocessInformationList: BPUSubprocessInformationList,
        /**
         * @summary `bpuInputStaticInformationList`.
         * @public
         * @readonly
         */
        readonly bpuInputStaticInformationList: OPTIONAL<BPUIOStaticInformationList>,
        /**
         * @summary `bpuOutputStaticInformationList`.
         * @public
         * @readonly
         */
        readonly bpuOutputStaticInformationList: OPTIONAL<BPUIOStaticInformationList>
    ) {}

    /**
     * @summary Restructures an object into a BPUFunctionReport
     * @description
     *
     * This takes an `object` and converts it to a `BPUFunctionReport`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUFunctionReport`.
     * @returns {BPUFunctionReport}
     */
    public static _from_object(
        _o: { [_K in keyof BPUFunctionReport]: BPUFunctionReport[_K] }
    ): BPUFunctionReport {
        return new BPUFunctionReport(
            _o.bpuSubprocessInformationList,
            _o.bpuInputStaticInformationList,
            _o.bpuOutputStaticInformationList
        );
    }
}


/**
 * @summary The Leading Root Component Types of BPUFunctionReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BPUFunctionReport: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'bpuSubprocessInformationList',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'bpuInputStaticInformationList',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'bpuOutputStaticInformationList',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of BPUFunctionReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUFunctionReport: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BPUFunctionReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUFunctionReport: $.ComponentSpec[] = [];


let _cached_decoder_for_BPUFunctionReport: $.ASN1Decoder<BPUFunctionReport> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUFunctionReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUFunctionReport} The decoded data structure.
 */
export function _decode_BPUFunctionReport(el: _Element): BPUFunctionReport {
    if (!_cached_decoder_for_BPUFunctionReport) {
        _cached_decoder_for_BPUFunctionReport = function (
            el: _Element
        ): BPUFunctionReport {
            let bpuSubprocessInformationList!: BPUSubprocessInformationList;
            let bpuInputStaticInformationList: OPTIONAL<BPUIOStaticInformationList>;
            let bpuOutputStaticInformationList: OPTIONAL<BPUIOStaticInformationList>;
            const callbacks: $.DecodingMap = {
                bpuSubprocessInformationList: (_el: _Element): void => {
                    bpuSubprocessInformationList = _decode_BPUSubprocessInformationList(
                        _el
                    );
                },
                bpuInputStaticInformationList: (_el: _Element): void => {
                    bpuInputStaticInformationList = _decode_BPUIOStaticInformationList(
                        _el
                    );
                },
                bpuOutputStaticInformationList: (_el: _Element): void => {
                    bpuOutputStaticInformationList = _decode_BPUIOStaticInformationList(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BPUFunctionReport,
                _extension_additions_list_spec_for_BPUFunctionReport,
                _root_component_type_list_2_spec_for_BPUFunctionReport,
                undefined
            );
            return new BPUFunctionReport (
                bpuSubprocessInformationList,
                bpuInputStaticInformationList,
                bpuOutputStaticInformationList
            );
        };
    }
    return _cached_decoder_for_BPUFunctionReport(el);
}


let _cached_encoder_for_BPUFunctionReport: $.ASN1Encoder<BPUFunctionReport> | null = null;


/**
 * @summary Encodes a(n) BPUFunctionReport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUFunctionReport, encoded as an ASN.1 Element.
 */
export function _encode_BPUFunctionReport(
    value: BPUFunctionReport,
    elGetter: $.ASN1Encoder<BPUFunctionReport>
): _Element {
    if (!_cached_encoder_for_BPUFunctionReport) {
        _cached_encoder_for_BPUFunctionReport = function (
            value: BPUFunctionReport        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_BPUSubprocessInformationList(
                            value.bpuSubprocessInformationList,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.bpuInputStaticInformationList ===
                        undefined
                            ? undefined
                            : _encode_BPUIOStaticInformationList(
                                  value.bpuInputStaticInformationList,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.bpuOutputStaticInformationList ===
                        undefined
                            ? undefined
                            : _encode_BPUIOStaticInformationList(
                                  value.bpuOutputStaticInformationList,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BPUFunctionReport(value, elGetter);
}


/* eslint-enable */
