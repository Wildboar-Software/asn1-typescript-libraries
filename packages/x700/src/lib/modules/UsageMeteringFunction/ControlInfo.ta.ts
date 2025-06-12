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
    ActionResponse,
    _decode_ActionResponse,
    _encode_ActionResponse,
} from '../UsageMeteringFunction/ActionResponse.ta.js';
export {
    ActionResponse,
    _decode_ActionResponse,
    _encode_ActionResponse,
} from '../UsageMeteringFunction/ActionResponse.ta.js';
import {
    ReportingTriggers,
    _decode_ReportingTriggers,
    _encode_ReportingTriggers,
} from '../UsageMeteringFunction/ReportingTriggers.ta.js';
export {
    ReportingTriggers,
    _decode_ReportingTriggers,
    _encode_ReportingTriggers,
} from '../UsageMeteringFunction/ReportingTriggers.ta.js';
import {
    AccountableObjectsReferenceList,
    _decode_AccountableObjectsReferenceList,
    _encode_AccountableObjectsReferenceList,
} from '../UsageMeteringFunction/AccountableObjectsReferenceList.ta.js';
export {
    AccountableObjectsReferenceList,
    _decode_AccountableObjectsReferenceList,
    _encode_AccountableObjectsReferenceList,
} from '../UsageMeteringFunction/AccountableObjectsReferenceList.ta.js';
import {
    DataObjectsReferenceList,
    _decode_DataObjectsReferenceList,
    _encode_DataObjectsReferenceList,
} from '../UsageMeteringFunction/DataObjectsReferenceList.ta.js';
export {
    DataObjectsReferenceList,
    _decode_DataObjectsReferenceList,
    _encode_DataObjectsReferenceList,
} from '../UsageMeteringFunction/DataObjectsReferenceList.ta.js';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.js';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.js';

/* START_OF_SYMBOL_DEFINITION ControlInfo */
/**
 * @summary ControlInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlInfo ::= SEQUENCE {
 *   actionResponse                   ActionResponse,
 *   reportingTriggers                [0]  ReportingTriggers OPTIONAL,
 *   accountableObjectsReferenceList
 *     [1]  AccountableObjectsReferenceList OPTIONAL,
 *   dataObjectsReferenceList         [2]  DataObjectsReferenceList OPTIONAL,
 *   additionalInformation            [3]  SET OF ManagementExtension
 * }
 * ```
 *
 * @class
 */
export class ControlInfo {
    constructor(
        /**
         * @summary `actionResponse`.
         * @public
         * @readonly
         */
        readonly actionResponse: ActionResponse,
        /**
         * @summary `reportingTriggers`.
         * @public
         * @readonly
         */
        readonly reportingTriggers: OPTIONAL<ReportingTriggers>,
        /**
         * @summary `accountableObjectsReferenceList`.
         * @public
         * @readonly
         */
        readonly accountableObjectsReferenceList: OPTIONAL<AccountableObjectsReferenceList>,
        /**
         * @summary `dataObjectsReferenceList`.
         * @public
         * @readonly
         */
        readonly dataObjectsReferenceList: OPTIONAL<DataObjectsReferenceList>,
        /**
         * @summary `additionalInformation`.
         * @public
         * @readonly
         */
        readonly additionalInformation: ManagementExtension[]
    ) {}

    /**
     * @summary Restructures an object into a ControlInfo
     * @description
     *
     * This takes an `object` and converts it to a `ControlInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlInfo`.
     * @returns {ControlInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ControlInfo]: ControlInfo[_K] }
    ): ControlInfo {
        return new ControlInfo(
            _o.actionResponse,
            _o.reportingTriggers,
            _o.accountableObjectsReferenceList,
            _o.dataObjectsReferenceList,
            _o.additionalInformation
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ControlInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ControlInfo */
/**
 * @summary The Leading Root Component Types of ControlInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ControlInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'actionResponse',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reportingTriggers',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'accountableObjectsReferenceList',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dataObjectsReferenceList',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ControlInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ControlInfo */
/**
 * @summary The Trailing Root Component Types of ControlInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ControlInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ControlInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ControlInfo */
/**
 * @summary The Extension Addition Component Types of ControlInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ControlInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ControlInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlInfo */
let _cached_decoder_for_ControlInfo: $.ASN1Decoder<ControlInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ControlInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlInfo} The decoded data structure.
 */
export function _decode_ControlInfo(el: _Element) {
    if (!_cached_decoder_for_ControlInfo) {
        _cached_decoder_for_ControlInfo = function (el: _Element): ControlInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let actionResponse!: ActionResponse;
            let reportingTriggers: OPTIONAL<ReportingTriggers>;
            let accountableObjectsReferenceList: OPTIONAL<AccountableObjectsReferenceList>;
            let dataObjectsReferenceList: OPTIONAL<DataObjectsReferenceList>;
            let additionalInformation!: ManagementExtension[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                actionResponse: (_el: _Element): void => {
                    actionResponse = _decode_ActionResponse(_el);
                },
                reportingTriggers: (_el: _Element): void => {
                    reportingTriggers = $._decode_implicit<ReportingTriggers>(
                        () => _decode_ReportingTriggers
                    )(_el);
                },
                accountableObjectsReferenceList: (_el: _Element): void => {
                    accountableObjectsReferenceList = $._decode_implicit<AccountableObjectsReferenceList>(
                        () => _decode_AccountableObjectsReferenceList
                    )(_el);
                },
                dataObjectsReferenceList: (_el: _Element): void => {
                    dataObjectsReferenceList = $._decode_implicit<DataObjectsReferenceList>(
                        () => _decode_DataObjectsReferenceList
                    )(_el);
                },
                additionalInformation: (_el: _Element): void => {
                    additionalInformation = $._decode_implicit<
                        ManagementExtension[]
                    >(() =>
                        $._decodeSetOf<ManagementExtension>(
                            () => _decode_ManagementExtension
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ControlInfo,
                _extension_additions_list_spec_for_ControlInfo,
                _root_component_type_list_2_spec_for_ControlInfo,
                undefined
            );
            return new ControlInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                actionResponse,
                reportingTriggers,
                accountableObjectsReferenceList,
                dataObjectsReferenceList,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_ControlInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlInfo */
let _cached_encoder_for_ControlInfo: $.ASN1Encoder<ControlInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ControlInfo */
/**
 * @summary Encodes a(n) ControlInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlInfo, encoded as an ASN.1 Element.
 */
export function _encode_ControlInfo(
    value: ControlInfo,
    elGetter: $.ASN1Encoder<ControlInfo>
) {
    if (!_cached_encoder_for_ControlInfo) {
        _cached_encoder_for_ControlInfo = function (
            value: ControlInfo,
            elGetter: $.ASN1Encoder<ControlInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ActionResponse(
                            value.actionResponse,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.reportingTriggers === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ReportingTriggers,
                                  $.BER
                              )(value.reportingTriggers, $.BER),
                        /* IF_ABSENT  */ value.accountableObjectsReferenceList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AccountableObjectsReferenceList,
                                  $.BER
                              )(value.accountableObjectsReferenceList, $.BER),
                        /* IF_ABSENT  */ value.dataObjectsReferenceList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_DataObjectsReferenceList,
                                  $.BER
                              )(value.dataObjectsReferenceList, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            3,
                            () =>
                                $._encodeSetOf<ManagementExtension>(
                                    () => _encode_ManagementExtension,
                                    $.BER
                                ),
                            $.BER
                        )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ControlInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlInfo */

/* eslint-enable */
