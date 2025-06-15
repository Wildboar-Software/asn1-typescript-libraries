/* eslint-disable */
import {
    OPTIONAL,
    GraphicString,
    GeneralizedTime,
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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    TroubleFound,
    _decode_TroubleFound,
    _encode_TroubleFound,
} from '../X790ASN1Module/TroubleFound.ta.mjs';
import {
    ActivityDuration,
    _decode_ActivityDuration,
    _encode_ActivityDuration,
} from '../X790ASN1Module/ActivityDuration.ta.mjs';
import {
    AdditionalTroubleInfoList,
    _decode_AdditionalTroubleInfoList,
    _encode_AdditionalTroubleInfoList,
} from '../X790ASN1Module/AdditionalTroubleInfoList.ta.mjs';
import {
    AuthorizationList,
    _decode_AuthorizationList,
    _encode_AuthorizationList,
} from '../X790ASN1Module/AuthorizationList.ta.mjs';
import {
    CancelRequestedByManager,
    _decode_CancelRequestedByManager,
    _encode_CancelRequestedByManager,
} from '../X790ASN1Module/CancelRequestedByManager.ta.mjs';
import {
    CloseOutVerification,
    _enum_for_CloseOutVerification,
    _decode_CloseOutVerification,
    _encode_CloseOutVerification,
} from '../X790ASN1Module/CloseOutVerification.ta.mjs';
import {
    CommitmentTime,
    _decode_CommitmentTime,
    _encode_CommitmentTime,
} from '../X790ASN1Module/CommitmentTime.ta.mjs';
import {
    PerceivedTroubleSeverity,
    _decode_PerceivedTroubleSeverity,
    _encode_PerceivedTroubleSeverity,
} from '../X790ASN1Module/PerceivedTroubleSeverity.ta.mjs';
import {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';
import {
    TroubleReportNumberList,
    _decode_TroubleReportNumberList,
    _encode_TroubleReportNumberList,
} from '../X790ASN1Module/TroubleReportNumberList.ta.mjs';
import {
    TroubleType,
    _decode_TroubleType,
    _encode_TroubleType,
} from '../X790ASN1Module/TroubleType.ta.mjs';

/**
 * @summary TroubleHistoryInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleHistoryInfo ::= SEQUENCE {
 *   managedObjectInstance      [0]  ObjectInstance,
 *   receivedTime               [1]  GeneralizedTime,
 *   troubleFound               [2]  TroubleFound,
 *   activityDuration           [3]  ActivityDuration OPTIONAL,
 *   additionalTroubleInfoList  [4]  AdditionalTroubleInfoList OPTIONAL,
 *   authorizationList          [5]  AuthorizationList OPTIONAL,
 *   cancelRequestedByManager   [6]  CancelRequestedByManager OPTIONAL,
 *   closeOutNarr               [7]  GraphicString OPTIONAL,
 *   closeOutVerification       [8]  CloseOutVerification OPTIONAL,
 *   commitmentTime             [9]  CommitmentTime OPTIONAL,
 *   custTroubleTickNum         [10]  GraphicString OPTIONAL,
 *   perceivedTroubleSeverity   [11]  PerceivedTroubleSeverity OPTIONAL,
 *   restoredTime               [12]  GeneralizedTime OPTIONAL,
 *   troubleClearancePerson     [13]  PersonReach OPTIONAL,
 *   troubleReportNumberList    [14]  TroubleReportNumberList OPTIONAL,
 *   troubleType                [15]  TroubleType OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class TroubleHistoryInfo {
    constructor(
        /**
         * @summary `managedObjectInstance`.
         * @public
         * @readonly
         */
        readonly managedObjectInstance: ObjectInstance,
        /**
         * @summary `receivedTime`.
         * @public
         * @readonly
         */
        readonly receivedTime: GeneralizedTime,
        /**
         * @summary `troubleFound`.
         * @public
         * @readonly
         */
        readonly troubleFound: TroubleFound,
        /**
         * @summary `activityDuration`.
         * @public
         * @readonly
         */
        readonly activityDuration: OPTIONAL<ActivityDuration>,
        /**
         * @summary `additionalTroubleInfoList`.
         * @public
         * @readonly
         */
        readonly additionalTroubleInfoList: OPTIONAL<AdditionalTroubleInfoList>,
        /**
         * @summary `authorizationList`.
         * @public
         * @readonly
         */
        readonly authorizationList: OPTIONAL<AuthorizationList>,
        /**
         * @summary `cancelRequestedByManager`.
         * @public
         * @readonly
         */
        readonly cancelRequestedByManager: OPTIONAL<CancelRequestedByManager>,
        /**
         * @summary `closeOutNarr`.
         * @public
         * @readonly
         */
        readonly closeOutNarr: OPTIONAL<GraphicString>,
        /**
         * @summary `closeOutVerification`.
         * @public
         * @readonly
         */
        readonly closeOutVerification: OPTIONAL<CloseOutVerification>,
        /**
         * @summary `commitmentTime`.
         * @public
         * @readonly
         */
        readonly commitmentTime: OPTIONAL<CommitmentTime>,
        /**
         * @summary `custTroubleTickNum`.
         * @public
         * @readonly
         */
        readonly custTroubleTickNum: OPTIONAL<GraphicString>,
        /**
         * @summary `perceivedTroubleSeverity`.
         * @public
         * @readonly
         */
        readonly perceivedTroubleSeverity: OPTIONAL<PerceivedTroubleSeverity>,
        /**
         * @summary `restoredTime`.
         * @public
         * @readonly
         */
        readonly restoredTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `troubleClearancePerson`.
         * @public
         * @readonly
         */
        readonly troubleClearancePerson: OPTIONAL<PersonReach>,
        /**
         * @summary `troubleReportNumberList`.
         * @public
         * @readonly
         */
        readonly troubleReportNumberList: OPTIONAL<TroubleReportNumberList>,
        /**
         * @summary `troubleType`.
         * @public
         * @readonly
         */
        readonly troubleType: OPTIONAL<TroubleType>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TroubleHistoryInfo
     * @description
     *
     * This takes an `object` and converts it to a `TroubleHistoryInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TroubleHistoryInfo`.
     * @returns {TroubleHistoryInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TroubleHistoryInfo]: TroubleHistoryInfo[_K] }
    ): TroubleHistoryInfo {
        return new TroubleHistoryInfo(
            _o.managedObjectInstance,
            _o.receivedTime,
            _o.troubleFound,
            _o.activityDuration,
            _o.additionalTroubleInfoList,
            _o.authorizationList,
            _o.cancelRequestedByManager,
            _o.closeOutNarr,
            _o.closeOutVerification,
            _o.commitmentTime,
            _o.custTroubleTickNum,
            _o.perceivedTroubleSeverity,
            _o.restoredTime,
            _o.troubleClearancePerson,
            _o.troubleReportNumberList,
            _o.troubleType,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `closeOutVerification`
     * @public
     * @static
     */

    public static _enum_for_closeOutVerification = _enum_for_CloseOutVerification;
}


/**
 * @summary The Leading Root Component Types of TroubleHistoryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TroubleHistoryInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'managedObjectInstance',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'receivedTime',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'troubleFound',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'activityDuration',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalTroubleInfoList',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'authorizationList',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'cancelRequestedByManager',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'closeOutNarr',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'closeOutVerification',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'commitmentTime',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'custTroubleTickNum',
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'perceivedTroubleSeverity',
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'restoredTime',
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'troubleClearancePerson',
        true,
        $.hasTag(_TagClass.context, 13),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'troubleReportNumberList',
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'troubleType',
        true,
        $.hasTag(_TagClass.context, 15),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of TroubleHistoryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TroubleHistoryInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TroubleHistoryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TroubleHistoryInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_TroubleHistoryInfo: $.ASN1Decoder<TroubleHistoryInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TroubleHistoryInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleHistoryInfo} The decoded data structure.
 */
export function _decode_TroubleHistoryInfo(el: _Element) {
    if (!_cached_decoder_for_TroubleHistoryInfo) {
        _cached_decoder_for_TroubleHistoryInfo = function (
            el: _Element
        ): TroubleHistoryInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let managedObjectInstance!: ObjectInstance;
            let receivedTime!: GeneralizedTime;
            let troubleFound!: TroubleFound;
            let activityDuration: OPTIONAL<ActivityDuration>;
            let additionalTroubleInfoList: OPTIONAL<AdditionalTroubleInfoList>;
            let authorizationList: OPTIONAL<AuthorizationList>;
            let cancelRequestedByManager: OPTIONAL<CancelRequestedByManager>;
            let closeOutNarr: OPTIONAL<GraphicString>;
            let closeOutVerification: OPTIONAL<CloseOutVerification>;
            let commitmentTime: OPTIONAL<CommitmentTime>;
            let custTroubleTickNum: OPTIONAL<GraphicString>;
            let perceivedTroubleSeverity: OPTIONAL<PerceivedTroubleSeverity>;
            let restoredTime: OPTIONAL<GeneralizedTime>;
            let troubleClearancePerson: OPTIONAL<PersonReach>;
            let troubleReportNumberList: OPTIONAL<TroubleReportNumberList>;
            let troubleType: OPTIONAL<TroubleType>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                managedObjectInstance: (_el: _Element): void => {
                    managedObjectInstance = $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                receivedTime: (_el: _Element): void => {
                    receivedTime = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                troubleFound: (_el: _Element): void => {
                    troubleFound = $._decode_explicit<TroubleFound>(
                        () => _decode_TroubleFound
                    )(_el);
                },
                activityDuration: (_el: _Element): void => {
                    activityDuration = $._decode_implicit<ActivityDuration>(
                        () => _decode_ActivityDuration
                    )(_el);
                },
                additionalTroubleInfoList: (_el: _Element): void => {
                    additionalTroubleInfoList = $._decode_implicit<AdditionalTroubleInfoList>(
                        () => _decode_AdditionalTroubleInfoList
                    )(_el);
                },
                authorizationList: (_el: _Element): void => {
                    authorizationList = $._decode_implicit<AuthorizationList>(
                        () => _decode_AuthorizationList
                    )(_el);
                },
                cancelRequestedByManager: (_el: _Element): void => {
                    cancelRequestedByManager = $._decode_implicit<CancelRequestedByManager>(
                        () => _decode_CancelRequestedByManager
                    )(_el);
                },
                closeOutNarr: (_el: _Element): void => {
                    closeOutNarr = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
                closeOutVerification: (_el: _Element): void => {
                    closeOutVerification = $._decode_implicit<CloseOutVerification>(
                        () => _decode_CloseOutVerification
                    )(_el);
                },
                commitmentTime: (_el: _Element): void => {
                    commitmentTime = $._decode_explicit<CommitmentTime>(
                        () => _decode_CommitmentTime
                    )(_el);
                },
                custTroubleTickNum: (_el: _Element): void => {
                    custTroubleTickNum = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
                perceivedTroubleSeverity: (_el: _Element): void => {
                    perceivedTroubleSeverity = $._decode_explicit<PerceivedTroubleSeverity>(
                        () => _decode_PerceivedTroubleSeverity
                    )(_el);
                },
                restoredTime: (_el: _Element): void => {
                    restoredTime = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                troubleClearancePerson: (_el: _Element): void => {
                    troubleClearancePerson = $._decode_implicit<PersonReach>(
                        () => _decode_PersonReach
                    )(_el);
                },
                troubleReportNumberList: (_el: _Element): void => {
                    troubleReportNumberList = $._decode_implicit<TroubleReportNumberList>(
                        () => _decode_TroubleReportNumberList
                    )(_el);
                },
                troubleType: (_el: _Element): void => {
                    troubleType = $._decode_explicit<TroubleType>(
                        () => _decode_TroubleType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TroubleHistoryInfo,
                _extension_additions_list_spec_for_TroubleHistoryInfo,
                _root_component_type_list_2_spec_for_TroubleHistoryInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TroubleHistoryInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                managedObjectInstance,
                receivedTime,
                troubleFound,
                activityDuration,
                additionalTroubleInfoList,
                authorizationList,
                cancelRequestedByManager,
                closeOutNarr,
                closeOutVerification,
                commitmentTime,
                custTroubleTickNum,
                perceivedTroubleSeverity,
                restoredTime,
                troubleClearancePerson,
                troubleReportNumberList,
                troubleType,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TroubleHistoryInfo(el);
}


let _cached_encoder_for_TroubleHistoryInfo: $.ASN1Encoder<TroubleHistoryInfo> | null = null;


/**
 * @summary Encodes a(n) TroubleHistoryInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleHistoryInfo, encoded as an ASN.1 Element.
 */
export function _encode_TroubleHistoryInfo(
    value: TroubleHistoryInfo,
    elGetter: $.ASN1Encoder<TroubleHistoryInfo>
) {
    if (!_cached_encoder_for_TroubleHistoryInfo) {
        _cached_encoder_for_TroubleHistoryInfo = function (
            value: TroubleHistoryInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ObjectInstance,
                                $.BER
                            )(value.managedObjectInstance, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => $._encodeGeneralizedTime,
                                $.BER
                            )(value.receivedTime, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_TroubleFound,
                                $.BER
                            )(value.troubleFound, $.BER),
                            /* IF_ABSENT  */ value.activityDuration ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_ActivityDuration,
                                      $.BER
                                  )(value.activityDuration, $.BER),
                            /* IF_ABSENT  */ value.additionalTroubleInfoList ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_AdditionalTroubleInfoList,
                                      $.BER
                                  )(value.additionalTroubleInfoList, $.BER),
                            /* IF_ABSENT  */ value.authorizationList ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_AuthorizationList,
                                      $.BER
                                  )(value.authorizationList, $.BER),
                            /* IF_ABSENT  */ value.cancelRequestedByManager ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_CancelRequestedByManager,
                                      $.BER
                                  )(value.cancelRequestedByManager, $.BER),
                            /* IF_ABSENT  */ value.closeOutNarr === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      7,
                                      () => $._encodeGraphicString,
                                      $.BER
                                  )(value.closeOutNarr, $.BER),
                            /* IF_ABSENT  */ value.closeOutVerification ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_CloseOutVerification,
                                      $.BER
                                  )(value.closeOutVerification, $.BER),
                            /* IF_ABSENT  */ value.commitmentTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_CommitmentTime,
                                      $.BER
                                  )(value.commitmentTime, $.BER),
                            /* IF_ABSENT  */ value.custTroubleTickNum ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      10,
                                      () => $._encodeGraphicString,
                                      $.BER
                                  )(value.custTroubleTickNum, $.BER),
                            /* IF_ABSENT  */ value.perceivedTroubleSeverity ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => _encode_PerceivedTroubleSeverity,
                                      $.BER
                                  )(value.perceivedTroubleSeverity, $.BER),
                            /* IF_ABSENT  */ value.restoredTime === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      12,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.restoredTime, $.BER),
                            /* IF_ABSENT  */ value.troubleClearancePerson ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      13,
                                      () => _encode_PersonReach,
                                      $.BER
                                  )(value.troubleClearancePerson, $.BER),
                            /* IF_ABSENT  */ value.troubleReportNumberList ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      14,
                                      () => _encode_TroubleReportNumberList,
                                      $.BER
                                  )(value.troubleReportNumberList, $.BER),
                            /* IF_ABSENT  */ value.troubleType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      15,
                                      () => _encode_TroubleType,
                                      $.BER
                                  )(value.troubleType, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TroubleHistoryInfo(value, elGetter);
}


/* eslint-enable */
