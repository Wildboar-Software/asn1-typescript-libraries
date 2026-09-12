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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceError_errorClass, _decode_ServiceError_errorClass, _encode_ServiceError_errorClass } from "../ISO-9506-MMS-1/ServiceError-errorClass.ta.mjs";
// export { ServiceError_errorClass, _decode_ServiceError_errorClass, _encode_ServiceError_errorClass } from "../ISO-9506-MMS-1/ServiceError-errorClass.ta.mjs";
import { ServiceError_serviceSpecificInfo, _decode_ServiceError_serviceSpecificInfo, _encode_ServiceError_serviceSpecificInfo } from "../ISO-9506-MMS-1/ServiceError-serviceSpecificInfo.ta.mjs";
// export { ServiceError_serviceSpecificInfo, _decode_ServiceError_serviceSpecificInfo, _encode_ServiceError_serviceSpecificInfo } from "../ISO-9506-MMS-1/ServiceError-serviceSpecificInfo.ta.mjs";


/**
 * @summary ServiceError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError ::= SEQUENCE {
 *    errorClass          [0] CHOICE {
 *    vmd-state                  [0] IMPLICIT INTEGER {
 *        other                            (0),
 *        vmd-state-conflict               (1),
 *        vmd-operational-problem          (2),
 *        domain-transfer-problem          (3),
 *        state-machine-id-invalid         (4)
 *    } (0..4),
 *    application-reference      [1] IMPLICIT INTEGER {
 *        other                            (0),
 *        application-unreachable          (1),
 *        connection-lost                  (2),
 *        application-reference-invalid    (3),
 *        context-unsupported              (4)
 *    } (0..4),
 *    definition                 [2] IMPLICIT INTEGER {
 *        other                            (0),
 *        object-undefined                 (1),
 *        invalid-address                  (2),
 *        type-unsupported                 (3),
 *        type-inconsistent                (4),
 *        object-exists                    (5),
 *        object-attribute-inconsistent    (6)
 *    } (0..6),
 *    resource                   [3] IMPLICIT INTEGER {
 *        other                            (0),
 *        memory-unavailable               (1),
 *        processor-resource-unavailable   (2),
 *        mass-storage-unavailable         (3),
 *        capability-unavailable           (4),
 *        capability-unknown               (5)
 *    } (0..5),
 *    service                    [4] IMPLICIT INTEGER {
 *        other                            (0),
 *        primitives-out-of-sequence       (1),
 *        object-state-conflict            (2),
 *                     -- Value 3 reserved for further definition
 *        continuation-invalid             (4),
 *        object-constraint-conflict       (5)
 *    } (0..5),
 *    service-preempt            [5] IMPLICIT INTEGER {
 *        other                            (0),
 *        timeout                          (1),
 *        deadlock                         (2),
 *        cancel                           (3)
 *    } (0..3),
 *    time-resolution            [6] IMPLICIT INTEGER {
 *        other                            (0),
 *        unsupportable-time-resolution    (1)
 *    } (0..1),
 *    access                     [7] IMPLICIT INTEGER {
 *        other                            (0),
 *        object-access-unsupported        (1),
 *        object-non-existent              (2),
 *        object-access-denied             (3),
 *        object-invalidated               (4)
 *    } (0..4),
 *    initiate                   [8] IMPLICIT INTEGER {
 *        other                            (0),
 *                     -- Values 1 and 2 are reserved for further definition
 *        max-services-outstanding-calling-insufficient     (3),
 *        max-services-outstanding-called-insufficient      (4),
 *        service-CBB-insufficient         (5),
 *        parameter-CBB-insufficient       (6),
 *        nesting-level-insufficient       (7)
 *    } (0..7),
 *    conclude                   [9] IMPLICIT INTEGER {
 *        other                            (0),
 *        further-communication-required   (1)
 *    } (0..1)
 * ,  cancel                     [10] IMPLICIT INTEGER {
 *        other                            (0),
 *        invoke-id-unknown                (1),
 *        cancel-not-possible              (2)
 *    } (0..2)
 * ,  cancel                     [10] IMPLICIT NULL
 * ,  file                       [11] IMPLICIT INTEGER {
 *        other                            (0),
 *        filename-ambiguous               (1),
 *        file-busy                        (2),
 *        filename-syntax-error            (3),
 *        content-type-invalid             (4),
 *        position-invalid                 (5),
 *        file-access-denied               (6),
 *        file-non-existent                (7),
 *        duplicate-filename               (8),
 *        insufficient-space-in-filestore  (9)
 *    } (0..9)
 * ,  file                       [11] IMPLICIT NULL
 * ,  others                     [12] IMPLICIT INTEGER
 *  } ,
 *    additionalCode         [1] IMPLICIT INTEGER OPTIONAL,
 *    additionalDescription  [2] IMPLICIT VisibleString OPTIONAL,
 *    serviceSpecificInfo    [3] CHOICE {
 *        obtainFile                 [0] IMPLICIT ObtainFile-Error
 * ,      obtainFile                 [0] IMPLICIT NULL
 * ,      start                      [1] IMPLICIT Start-Error
 * ,      start                      [1] IMPLICIT NULL
 * ,      stop                       [2] IMPLICIT Stop-Error
 * ,      stop                       [2] IMPLICIT NULL
 * ,      resume                     [3] IMPLICIT Resume-Error
 * ,      resume                     [3] IMPLICIT NULL
 * ,      reset                      [4] IMPLICIT Reset-Error
 * ,      reset                      [4] IMPLICIT NULL
 * ,      deleteVariableAccess       [5] IMPLICIT DeleteVariableAccess-Error
 * ,      deleteVariableAccess       [5] IMPLICIT NULL
 * ,      deleteNamedVariableList    [6] IMPLICIT DeleteNamedVariableList-Error
 * ,      deleteNamedVariableList    [6] IMPLICIT NULL
 * ,      deleteNamedType            [7] IMPLICIT DeleteNamedType-Error
 * ,      deleteNamedType            [7] IMPLICIT NULL
 * ,      defineEventEnrollment-Error   [8] DefineEventEnrollment-Error
 * ,      defineEventEnrollment-Error   [8] IMPLICIT NULL
 *        -- [9] Reserved for use by annex D
 * ,  fileRename                    [9] IMPLICIT FileRename-Error
 * ,  fileRename                    [9] IMPLICIT NULL
 * ,      additionalService          [10] AdditionalService-Error
 * ,      additionalService          [10] IMPLICIT NULL
 * ,      changeAccessControl        [11] IMPLICIT ChangeAccessControl-Error
 * ,      changeAccessControl        [11] IMPLICIT NULL
 *        } OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class ServiceError {
    constructor (
        /**
         * @summary `errorClass`.
         * @public
         * @readonly
         */
        readonly errorClass: ServiceError_errorClass,
        /**
         * @summary `additionalCode`.
         * @public
         * @readonly
         */
        readonly additionalCode: OPTIONAL<INTEGER>,
        /**
         * @summary `additionalDescription`.
         * @public
         * @readonly
         */
        readonly additionalDescription: OPTIONAL<VisibleString>,
        /**
         * @summary `serviceSpecificInfo`.
         * @public
         * @readonly
         */
        readonly serviceSpecificInfo: OPTIONAL<ServiceError_serviceSpecificInfo>
    ) {}

    /**
     * @summary Restructures an object into a ServiceError
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceError`.
     * @returns {ServiceError}
     */
    public static _from_object (_o: { [_K in keyof (ServiceError)]: (ServiceError)[_K] }): ServiceError {
        return new ServiceError(_o.errorClass, _o.additionalCode, _o.additionalDescription, _o.serviceSpecificInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceError: $.ComponentSpec[] = [
    new $.ComponentSpec("errorClass", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("additionalCode", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("additionalDescription", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serviceSpecificInfo", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ServiceError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceError: $.ASN1Decoder<ServiceError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceError (el: _Element): ServiceError {
    if (!_cached_decoder_for_ServiceError) { _cached_decoder_for_ServiceError = function (el: _Element): ServiceError {
    let errorClass!: ServiceError_errorClass;
    let additionalCode: OPTIONAL<INTEGER>;
    let additionalDescription: OPTIONAL<VisibleString>;
    let serviceSpecificInfo: OPTIONAL<ServiceError_serviceSpecificInfo>;
    const callbacks: $.DecodingMap = {
        "errorClass": (_el: _Element): void => { errorClass = $._decode_explicit<ServiceError_errorClass>(() => _decode_ServiceError_errorClass)(_el); },
        "additionalCode": (_el: _Element): void => { additionalCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "additionalDescription": (_el: _Element): void => { additionalDescription = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "serviceSpecificInfo": (_el: _Element): void => { serviceSpecificInfo = $._decode_explicit<ServiceError_serviceSpecificInfo>(() => _decode_ServiceError_serviceSpecificInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceError,
        _extension_additions_list_spec_for_ServiceError,
        _root_component_type_list_2_spec_for_ServiceError,
        undefined,
    );
    return new ServiceError(
        errorClass,
        additionalCode,
        additionalDescription,
        serviceSpecificInfo
    );
}; }
    return _cached_decoder_for_ServiceError(el);
}

let _cached_encoder_for_ServiceError: $.ASN1Encoder<ServiceError> | null = null;

/**
 * @summary Encodes a(n) ServiceError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceError, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceError (value: ServiceError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceError) { _cached_encoder_for_ServiceError = function (value: ServiceError, elGetter: $.ASN1Encoder<ServiceError>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ServiceError_errorClass, $.BER)(value.errorClass, $.BER),
            /* IF_ABSENT  */ ((value.additionalCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.additionalCode, $.BER)),
            /* IF_ABSENT  */ ((value.additionalDescription === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.additionalDescription, $.BER)),
            /* IF_ABSENT  */ ((value.serviceSpecificInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_ServiceError_serviceSpecificInfo, $.BER)(value.serviceSpecificInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceError(value, elGetter);
}


/* eslint-enable */
