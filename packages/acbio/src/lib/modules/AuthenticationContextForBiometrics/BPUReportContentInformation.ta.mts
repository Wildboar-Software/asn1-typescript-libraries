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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    BPUFunctionReport,
    _decode_BPUFunctionReport,
    _encode_BPUFunctionReport,
} from '../AuthenticationContextForBiometrics/BPUFunctionReport.ta.mjs';
import {
    BPUSecurityReport,
    _decode_BPUSecurityReport,
    _encode_BPUSecurityReport,
} from '../AuthenticationContextForBiometrics/BPUSecurityReport.ta.mjs';

/**
 * @summary BPUReportContentInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUReportContentInformation ::= SEQUENCE {
 *     bpuFunctionReport   BPUFunctionReport,
 *     bpuSecurityReport   BPUSecurityReport }
 * ```
 *
 */
export class BPUReportContentInformation {
    constructor(
        /**
         * @summary `bpuFunctionReport`.
         * @public
         * @readonly
         */
        readonly bpuFunctionReport: BPUFunctionReport,
        /**
         * @summary `bpuSecurityReport`.
         * @public
         * @readonly
         */
        readonly bpuSecurityReport: BPUSecurityReport
    ) {}

    /**
     * @summary Restructures an object into a BPUReportContentInformation
     * @description
     *
     * This takes an `object` and converts it to a `BPUReportContentInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUReportContentInformation`.
     * @returns {BPUReportContentInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof BPUReportContentInformation]: BPUReportContentInformation[_K];
        }
    ): BPUReportContentInformation {
        return new BPUReportContentInformation(
            _o.bpuFunctionReport,
            _o.bpuSecurityReport
        );
    }
}


/**
 * @summary The Leading Root Component Types of BPUReportContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BPUReportContentInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'bpuFunctionReport',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'bpuSecurityReport',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of BPUReportContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUReportContentInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BPUReportContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUReportContentInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_BPUReportContentInformation: $.ASN1Decoder<BPUReportContentInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUReportContentInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUReportContentInformation} The decoded data structure.
 */
export function _decode_BPUReportContentInformation(el: _Element): BPUReportContentInformation {
    if (!_cached_decoder_for_BPUReportContentInformation) {
        _cached_decoder_for_BPUReportContentInformation = function (
            el: _Element
        ): BPUReportContentInformation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BPUReportContentInformation contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'bpuFunctionReport';
            sequence[1].name = 'bpuSecurityReport';
            let bpuFunctionReport!: BPUFunctionReport;
            let bpuSecurityReport!: BPUSecurityReport;
            bpuFunctionReport = _decode_BPUFunctionReport(sequence[0]);
            bpuSecurityReport = _decode_BPUSecurityReport(sequence[1]);
            return new BPUReportContentInformation(
                bpuFunctionReport,
                bpuSecurityReport
            );
        };
    }
    return _cached_decoder_for_BPUReportContentInformation(el);
}


let _cached_encoder_for_BPUReportContentInformation: $.ASN1Encoder<BPUReportContentInformation> | null = null;


/**
 * @summary Encodes a(n) BPUReportContentInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUReportContentInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUReportContentInformation(
    value: BPUReportContentInformation,
    elGetter: $.ASN1Encoder<BPUReportContentInformation>
): _Element {
    if (!_cached_encoder_for_BPUReportContentInformation) {
        _cached_encoder_for_BPUReportContentInformation = function (
            value: BPUReportContentInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_BPUFunctionReport(
                            value.bpuFunctionReport,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_BPUSecurityReport(
                            value.bpuSecurityReport,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BPUReportContentInformation(value, elGetter);
}


/* eslint-enable */
