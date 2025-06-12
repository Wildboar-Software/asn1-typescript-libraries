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
    BPUFunctionReport,
    _decode_BPUFunctionReport,
    _encode_BPUFunctionReport,
} from '../AuthenticationContextForBiometrics/BPUFunctionReport.ta.js';
export {
    BPUFunctionReport,
    _decode_BPUFunctionReport,
    _encode_BPUFunctionReport,
} from '../AuthenticationContextForBiometrics/BPUFunctionReport.ta.js';
import {
    BPUSecurityReport,
    _decode_BPUSecurityReport,
    _encode_BPUSecurityReport,
} from '../AuthenticationContextForBiometrics/BPUSecurityReport.ta.js';
export {
    BPUSecurityReport,
    _decode_BPUSecurityReport,
    _encode_BPUSecurityReport,
} from '../AuthenticationContextForBiometrics/BPUSecurityReport.ta.js';

/* START_OF_SYMBOL_DEFINITION BPUReportContentInformation */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION BPUReportContentInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUReportContentInformation */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bpuSecurityReport',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUReportContentInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUReportContentInformation */
/**
 * @summary The Trailing Root Component Types of BPUReportContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUReportContentInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUReportContentInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUReportContentInformation */
/**
 * @summary The Extension Addition Component Types of BPUReportContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUReportContentInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUReportContentInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUReportContentInformation */
let _cached_decoder_for_BPUReportContentInformation: $.ASN1Decoder<BPUReportContentInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUReportContentInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BPUReportContentInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) BPUReportContentInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUReportContentInformation} The decoded data structure.
 */
export function _decode_BPUReportContentInformation(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_BPUReportContentInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUReportContentInformation */
let _cached_encoder_for_BPUReportContentInformation: $.ASN1Encoder<BPUReportContentInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUReportContentInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BPUReportContentInformation */
/**
 * @summary Encodes a(n) BPUReportContentInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUReportContentInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUReportContentInformation(
    value: BPUReportContentInformation,
    elGetter: $.ASN1Encoder<BPUReportContentInformation>
) {
    if (!_cached_encoder_for_BPUReportContentInformation) {
        _cached_encoder_for_BPUReportContentInformation = function (
            value: BPUReportContentInformation,
            elGetter: $.ASN1Encoder<BPUReportContentInformation>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_BPUReportContentInformation */

/* eslint-enable */
