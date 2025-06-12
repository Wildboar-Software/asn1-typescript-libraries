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
    BPUSubprocessInformationList,
    _decode_BPUSubprocessInformationList,
    _encode_BPUSubprocessInformationList,
} from '../AuthenticationContextForBiometrics/BPUSubprocessInformationList.ta.js';
export {
    BPUSubprocessInformationList,
    _decode_BPUSubprocessInformationList,
    _encode_BPUSubprocessInformationList,
} from '../AuthenticationContextForBiometrics/BPUSubprocessInformationList.ta.js';
import {
    BPUIOStaticInformationList,
    _decode_BPUIOStaticInformationList,
    _encode_BPUIOStaticInformationList,
} from '../AuthenticationContextForBiometrics/BPUIOStaticInformationList.ta.js';
export {
    BPUIOStaticInformationList,
    _decode_BPUIOStaticInformationList,
    _encode_BPUIOStaticInformationList,
} from '../AuthenticationContextForBiometrics/BPUIOStaticInformationList.ta.js';

/* START_OF_SYMBOL_DEFINITION BPUFunctionReport */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION BPUFunctionReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUFunctionReport */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bpuInputStaticInformationList',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bpuOutputStaticInformationList',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUFunctionReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUFunctionReport */
/**
 * @summary The Trailing Root Component Types of BPUFunctionReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUFunctionReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUFunctionReport */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUFunctionReport */
/**
 * @summary The Extension Addition Component Types of BPUFunctionReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUFunctionReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUFunctionReport */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUFunctionReport */
let _cached_decoder_for_BPUFunctionReport: $.ASN1Decoder<BPUFunctionReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUFunctionReport */

/* START_OF_SYMBOL_DEFINITION _decode_BPUFunctionReport */
/**
 * @summary Decodes an ASN.1 element into a(n) BPUFunctionReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUFunctionReport} The decoded data structure.
 */
export function _decode_BPUFunctionReport(el: _Element) {
    if (!_cached_decoder_for_BPUFunctionReport) {
        _cached_decoder_for_BPUFunctionReport = function (
            el: _Element
        ): BPUFunctionReport {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bpuSubprocessInformationList!: BPUSubprocessInformationList;
            let bpuInputStaticInformationList: OPTIONAL<BPUIOStaticInformationList>;
            let bpuOutputStaticInformationList: OPTIONAL<BPUIOStaticInformationList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BPUFunctionReport,
                _extension_additions_list_spec_for_BPUFunctionReport,
                _root_component_type_list_2_spec_for_BPUFunctionReport,
                undefined
            );
            return new BPUFunctionReport /* SEQUENCE_CONSTRUCTOR_CALL */(
                bpuSubprocessInformationList,
                bpuInputStaticInformationList,
                bpuOutputStaticInformationList
            );
        };
    }
    return _cached_decoder_for_BPUFunctionReport(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BPUFunctionReport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUFunctionReport */
let _cached_encoder_for_BPUFunctionReport: $.ASN1Encoder<BPUFunctionReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUFunctionReport */

/* START_OF_SYMBOL_DEFINITION _encode_BPUFunctionReport */
/**
 * @summary Encodes a(n) BPUFunctionReport into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUFunctionReport, encoded as an ASN.1 Element.
 */
export function _encode_BPUFunctionReport(
    value: BPUFunctionReport,
    elGetter: $.ASN1Encoder<BPUFunctionReport>
) {
    if (!_cached_encoder_for_BPUFunctionReport) {
        _cached_encoder_for_BPUFunctionReport = function (
            value: BPUFunctionReport,
            elGetter: $.ASN1Encoder<BPUFunctionReport>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_BPUFunctionReport */

/* eslint-enable */
