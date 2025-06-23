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
    ActionResponse,
    _decode_ActionResponse,
    _encode_ActionResponse,
} from '../UsageMeteringFunction/ActionResponse.ta.mjs';
import {
    ReportingTriggers,
    _decode_ReportingTriggers,
    _encode_ReportingTriggers,
} from '../UsageMeteringFunction/ReportingTriggers.ta.mjs';
import {
    AccountableObjectsReferenceList,
    _decode_AccountableObjectsReferenceList,
    _encode_AccountableObjectsReferenceList,
} from '../UsageMeteringFunction/AccountableObjectsReferenceList.ta.mjs';
import {
    DataObjectsReferenceList,
    _decode_DataObjectsReferenceList,
    _encode_DataObjectsReferenceList,
} from '../UsageMeteringFunction/DataObjectsReferenceList.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
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
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'reportingTriggers',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'accountableObjectsReferenceList',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'dataObjectsReferenceList',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'additionalInformation',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of ControlInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ControlInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ControlInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ControlInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ControlInfo: $.ASN1Decoder<ControlInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlInfo} The decoded data structure.
 */
export function _decode_ControlInfo(el: _Element) {
    if (!_cached_decoder_for_ControlInfo) {
        _cached_decoder_for_ControlInfo = function (el: _Element): ControlInfo {
            let actionResponse!: ActionResponse;
            let reportingTriggers: OPTIONAL<ReportingTriggers>;
            let accountableObjectsReferenceList: OPTIONAL<AccountableObjectsReferenceList>;
            let dataObjectsReferenceList: OPTIONAL<DataObjectsReferenceList>;
            let additionalInformation!: ManagementExtension[];
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ControlInfo,
                _extension_additions_list_spec_for_ControlInfo,
                _root_component_type_list_2_spec_for_ControlInfo,
                undefined
            );
            return new ControlInfo (
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

let _cached_encoder_for_ControlInfo: $.ASN1Encoder<ControlInfo> | null = null;

/**
 * @summary Encodes a(n) ControlInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlInfo, encoded as an ASN.1 Element.
 */
export function _encode_ControlInfo(
    value: ControlInfo,
    elGetter: $.ASN1Encoder<ControlInfo>
) {
    if (!_cached_encoder_for_ControlInfo) {
        _cached_encoder_for_ControlInfo = function (
            value: ControlInfo        ): _Element {
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


/* eslint-enable */
