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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
import {
    NotificationCause,
    _decode_NotificationCause,
    _encode_NotificationCause,
} from '../UsageMeteringFunction/NotificationCause.ta';
export {
    NotificationCause,
    _decode_NotificationCause,
    _encode_NotificationCause,
} from '../UsageMeteringFunction/NotificationCause.ta';
import {
    UsageInfo,
    _decode_UsageInfo,
    _encode_UsageInfo,
} from '../UsageMeteringDataInfo/UsageInfo.ta';
export {
    UsageInfo,
    _decode_UsageInfo,
    _encode_UsageInfo,
} from '../UsageMeteringDataInfo/UsageInfo.ta';
import {
    AuditInfo,
    _decode_AuditInfo,
    _encode_AuditInfo,
} from '../UsageMeteringFunction/AuditInfo.ta';
export {
    AuditInfo,
    _decode_AuditInfo,
    _encode_AuditInfo,
} from '../UsageMeteringFunction/AuditInfo.ta';
import {
    DataErrors,
    _decode_DataErrors,
    _encode_DataErrors,
} from '../UsageMeteringFunction/DataErrors.ta';
export {
    DataErrors,
    _decode_DataErrors,
    _encode_DataErrors,
} from '../UsageMeteringFunction/DataErrors.ta';
import {
    ProviderId,
    _decode_ProviderId,
    _encode_ProviderId,
} from '../UsageMeteringFunction/ProviderId.ta';
export {
    ProviderId,
    _decode_ProviderId,
    _encode_ProviderId,
} from '../UsageMeteringFunction/ProviderId.ta';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';

/* START_OF_SYMBOL_DEFINITION UsageDataInfo */
/**
 * @summary UsageDataInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageDataInfo ::= SEQUENCE {
 *   accountableObjectReference  [0]  ObjectInstance,
 *   notificationCause           [1]  NotificationCause,
 *   usageInfo                   [2]  UsageInfo,
 *   auditInfo                   [3]  AuditInfo OPTIONAL,
 *   dataErrors                  [4]  DataErrors,
 *   providerId                  [5]  ProviderId OPTIONAL,
 *   additionalInformation       [6]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class UsageDataInfo {
    constructor(
        /**
         * @summary `accountableObjectReference`.
         * @public
         * @readonly
         */
        readonly accountableObjectReference: ObjectInstance,
        /**
         * @summary `notificationCause`.
         * @public
         * @readonly
         */
        readonly notificationCause: NotificationCause,
        /**
         * @summary `usageInfo`.
         * @public
         * @readonly
         */
        readonly usageInfo: UsageInfo,
        /**
         * @summary `auditInfo`.
         * @public
         * @readonly
         */
        readonly auditInfo: OPTIONAL<AuditInfo>,
        /**
         * @summary `dataErrors`.
         * @public
         * @readonly
         */
        readonly dataErrors: DataErrors,
        /**
         * @summary `providerId`.
         * @public
         * @readonly
         */
        readonly providerId: OPTIONAL<ProviderId>,
        /**
         * @summary `additionalInformation`.
         * @public
         * @readonly
         */
        readonly additionalInformation: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a UsageDataInfo
     * @description
     *
     * This takes an `object` and converts it to a `UsageDataInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UsageDataInfo`.
     * @returns {UsageDataInfo}
     */
    public static _from_object(
        _o: { [_K in keyof UsageDataInfo]: UsageDataInfo[_K] }
    ): UsageDataInfo {
        return new UsageDataInfo(
            _o.accountableObjectReference,
            _o.notificationCause,
            _o.usageInfo,
            _o.auditInfo,
            _o.dataErrors,
            _o.providerId,
            _o.additionalInformation
        );
    }
}
/* END_OF_SYMBOL_DEFINITION UsageDataInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UsageDataInfo */
/**
 * @summary The Leading Root Component Types of UsageDataInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UsageDataInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'accountableObjectReference',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notificationCause',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'usageInfo',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'auditInfo',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dataErrors',
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'providerId',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UsageDataInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UsageDataInfo */
/**
 * @summary The Trailing Root Component Types of UsageDataInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UsageDataInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UsageDataInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UsageDataInfo */
/**
 * @summary The Extension Addition Component Types of UsageDataInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UsageDataInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UsageDataInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageDataInfo */
let _cached_decoder_for_UsageDataInfo: $.ASN1Decoder<UsageDataInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageDataInfo */

/* START_OF_SYMBOL_DEFINITION _decode_UsageDataInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) UsageDataInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsageDataInfo} The decoded data structure.
 */
export function _decode_UsageDataInfo(el: _Element) {
    if (!_cached_decoder_for_UsageDataInfo) {
        _cached_decoder_for_UsageDataInfo = function (
            el: _Element
        ): UsageDataInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let accountableObjectReference!: ObjectInstance;
            let notificationCause!: NotificationCause;
            let usageInfo!: UsageInfo;
            let auditInfo: OPTIONAL<AuditInfo>;
            let dataErrors!: DataErrors;
            let providerId: OPTIONAL<ProviderId>;
            let additionalInformation: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                accountableObjectReference: (_el: _Element): void => {
                    accountableObjectReference = $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                notificationCause: (_el: _Element): void => {
                    notificationCause = $._decode_explicit<NotificationCause>(
                        () => _decode_NotificationCause
                    )(_el);
                },
                usageInfo: (_el: _Element): void => {
                    usageInfo = $._decode_implicit<UsageInfo>(
                        () => _decode_UsageInfo
                    )(_el);
                },
                auditInfo: (_el: _Element): void => {
                    auditInfo = $._decode_implicit<AuditInfo>(
                        () => _decode_AuditInfo
                    )(_el);
                },
                dataErrors: (_el: _Element): void => {
                    dataErrors = $._decode_explicit<DataErrors>(
                        () => _decode_DataErrors
                    )(_el);
                },
                providerId: (_el: _Element): void => {
                    providerId = $._decode_explicit<ProviderId>(
                        () => _decode_ProviderId
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
                _root_component_type_list_1_spec_for_UsageDataInfo,
                _extension_additions_list_spec_for_UsageDataInfo,
                _root_component_type_list_2_spec_for_UsageDataInfo,
                undefined
            );
            return new UsageDataInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                accountableObjectReference,
                notificationCause,
                usageInfo,
                auditInfo,
                dataErrors,
                providerId,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_UsageDataInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UsageDataInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageDataInfo */
let _cached_encoder_for_UsageDataInfo: $.ASN1Encoder<UsageDataInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageDataInfo */

/* START_OF_SYMBOL_DEFINITION _encode_UsageDataInfo */
/**
 * @summary Encodes a(n) UsageDataInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsageDataInfo, encoded as an ASN.1 Element.
 */
export function _encode_UsageDataInfo(
    value: UsageDataInfo,
    elGetter: $.ASN1Encoder<UsageDataInfo>
) {
    if (!_cached_encoder_for_UsageDataInfo) {
        _cached_encoder_for_UsageDataInfo = function (
            value: UsageDataInfo,
            elGetter: $.ASN1Encoder<UsageDataInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.accountableObjectReference, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_NotificationCause,
                            $.BER
                        )(value.notificationCause, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_UsageInfo,
                            $.BER
                        )(value.usageInfo, $.BER),
                        /* IF_ABSENT  */ value.auditInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_AuditInfo,
                                  $.BER
                              )(value.auditInfo, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            4,
                            () => _encode_DataErrors,
                            $.BER
                        )(value.dataErrors, $.BER),
                        /* IF_ABSENT  */ value.providerId === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_ProviderId,
                                  $.BER
                              )(value.providerId, $.BER),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
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
    return _cached_encoder_for_UsageDataInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UsageDataInfo */

/* eslint-enable */
