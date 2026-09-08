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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ChangeSystemStatusFilter, ChangeSystemStatusFilter_requestedStatusFilterInitializing /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterInitializing /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterEnabled /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterEnabled /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterNormal /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterNormal /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterMessageLost /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterMessageLost /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterDisabled /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterDisabled /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterPartiallyDisabled /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterPartiallyDisabled /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterOverloadImminent /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterOverloadImminent /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterOverloadReached /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterOverloadReached /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterOverloadRelieved /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterOverloadRelieved /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_privateData /* IMPORTED_LONG_NAMED_BIT */, ChangeSystemStatusFilter_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ChangeSystemStatusFilter, _encode_ChangeSystemStatusFilter } from "../CSTA-capability-exchange/ChangeSystemStatusFilter.ta.mjs";
// export { ChangeSystemStatusFilter, ChangeSystemStatusFilter_requestedStatusFilterInitializing /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterInitializing /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterEnabled /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterEnabled /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterNormal /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterNormal /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterMessageLost /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterMessageLost /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterDisabled /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterDisabled /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterPartiallyDisabled /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterPartiallyDisabled /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterOverloadImminent /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterOverloadImminent /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterOverloadReached /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterOverloadReached /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_requestedStatusFilterOverloadRelieved /* IMPORTED_LONG_NAMED_BIT */, requestedStatusFilterOverloadRelieved /* IMPORTED_SHORT_NAMED_BIT */, ChangeSystemStatusFilter_privateData /* IMPORTED_LONG_NAMED_BIT */, ChangeSystemStatusFilter_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ChangeSystemStatusFilter, _encode_ChangeSystemStatusFilter } from "../CSTA-capability-exchange/ChangeSystemStatusFilter.ta.mjs";
import { SystemRegister, SystemRegister_requestTypesSystemStatus /* IMPORTED_LONG_NAMED_BIT */, requestTypesSystemStatus /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_requestTypesRequestSystemStatus /* IMPORTED_LONG_NAMED_BIT */, requestTypesRequestSystemStatus /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_requestTypesSwitchingFunctionCapsChanged /* IMPORTED_LONG_NAMED_BIT */, requestTypesSwitchingFunctionCapsChanged /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_requestTypesSwitchingFuncionDevicesChanged /* IMPORTED_LONG_NAMED_BIT */, requestTypesSwitchingFuncionDevicesChanged /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterInitializing /* IMPORTED_LONG_NAMED_BIT */, statusFilterInitializing /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterEnabled /* IMPORTED_LONG_NAMED_BIT */, statusFilterEnabled /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterNormal /* IMPORTED_LONG_NAMED_BIT */, statusFilterNormal /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterMessageLost /* IMPORTED_LONG_NAMED_BIT */, statusFilterMessageLost /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterDisabled /* IMPORTED_LONG_NAMED_BIT */, statusFilterDisabled /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterPartiallyDisabled /* IMPORTED_LONG_NAMED_BIT */, statusFilterPartiallyDisabled /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterOverloadImminent /* IMPORTED_LONG_NAMED_BIT */, statusFilterOverloadImminent /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterOverloadReached /* IMPORTED_LONG_NAMED_BIT */, statusFilterOverloadReached /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterOverloadRelieved /* IMPORTED_LONG_NAMED_BIT */, statusFilterOverloadRelieved /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_privateDataOctetString /* IMPORTED_LONG_NAMED_BIT */, privateDataOctetString /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_privateData /* IMPORTED_LONG_NAMED_BIT */, SystemRegister_privateDataOctetStringInAck /* IMPORTED_LONG_NAMED_BIT */, privateDataOctetStringInAck /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SystemRegister, _encode_SystemRegister } from "../CSTA-capability-exchange/SystemRegister.ta.mjs";
// export { SystemRegister, SystemRegister_requestTypesSystemStatus /* IMPORTED_LONG_NAMED_BIT */, requestTypesSystemStatus /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_requestTypesRequestSystemStatus /* IMPORTED_LONG_NAMED_BIT */, requestTypesRequestSystemStatus /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_requestTypesSwitchingFunctionCapsChanged /* IMPORTED_LONG_NAMED_BIT */, requestTypesSwitchingFunctionCapsChanged /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_requestTypesSwitchingFuncionDevicesChanged /* IMPORTED_LONG_NAMED_BIT */, requestTypesSwitchingFuncionDevicesChanged /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterInitializing /* IMPORTED_LONG_NAMED_BIT */, statusFilterInitializing /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterEnabled /* IMPORTED_LONG_NAMED_BIT */, statusFilterEnabled /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterNormal /* IMPORTED_LONG_NAMED_BIT */, statusFilterNormal /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterMessageLost /* IMPORTED_LONG_NAMED_BIT */, statusFilterMessageLost /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterDisabled /* IMPORTED_LONG_NAMED_BIT */, statusFilterDisabled /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterPartiallyDisabled /* IMPORTED_LONG_NAMED_BIT */, statusFilterPartiallyDisabled /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterOverloadImminent /* IMPORTED_LONG_NAMED_BIT */, statusFilterOverloadImminent /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterOverloadReached /* IMPORTED_LONG_NAMED_BIT */, statusFilterOverloadReached /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_statusFilterOverloadRelieved /* IMPORTED_LONG_NAMED_BIT */, statusFilterOverloadRelieved /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_privateDataOctetString /* IMPORTED_LONG_NAMED_BIT */, privateDataOctetString /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_privateData /* IMPORTED_LONG_NAMED_BIT */, SystemRegister_privateDataOctetStringInAck /* IMPORTED_LONG_NAMED_BIT */, privateDataOctetStringInAck /* IMPORTED_SHORT_NAMED_BIT */, SystemRegister_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SystemRegister, _encode_SystemRegister } from "../CSTA-capability-exchange/SystemRegister.ta.mjs";
import { SystemStatusRegisterAbort, SystemStatusRegisterAbort_privateData /* IMPORTED_LONG_NAMED_BIT */, SystemStatusRegisterAbort_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SystemStatusRegisterAbort, _encode_SystemStatusRegisterAbort } from "../CSTA-capability-exchange/SystemStatusRegisterAbort.ta.mjs";
// export { SystemStatusRegisterAbort, SystemStatusRegisterAbort_privateData /* IMPORTED_LONG_NAMED_BIT */, SystemStatusRegisterAbort_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SystemStatusRegisterAbort, _encode_SystemStatusRegisterAbort } from "../CSTA-capability-exchange/SystemStatusRegisterAbort.ta.mjs";
import { SystemStatusRegisterCancel, SystemStatusRegisterCancel_privateData /* IMPORTED_LONG_NAMED_BIT */, SystemStatusRegisterCancel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SystemStatusRegisterCancel, _encode_SystemStatusRegisterCancel } from "../CSTA-capability-exchange/SystemStatusRegisterCancel.ta.mjs";
// export { SystemStatusRegisterCancel, SystemStatusRegisterCancel_privateData /* IMPORTED_LONG_NAMED_BIT */, SystemStatusRegisterCancel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SystemStatusRegisterCancel, _encode_SystemStatusRegisterCancel } from "../CSTA-capability-exchange/SystemStatusRegisterCancel.ta.mjs";
import { RequestSystemStatus, RequestSystemStatus_privateDataInReq /* IMPORTED_LONG_NAMED_BIT */, privateDataInReq /* IMPORTED_SHORT_NAMED_BIT */, RequestSystemStatus_systemStatusInitializing /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusEnabled /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusNormal /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusMessageLost /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusDisabled /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusPartiallyDisabled /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusOverloadImminent /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusOverloadReached /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusOverloadRelieved /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_switchingFunctionSupportsSending /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_switchingFunctionSupportsReceiving /* IMPORTED_LONG_NAMED_BIT */, _decode_RequestSystemStatus, _encode_RequestSystemStatus } from "../CSTA-capability-exchange/RequestSystemStatus.ta.mjs";
// export { RequestSystemStatus, RequestSystemStatus_privateDataInReq /* IMPORTED_LONG_NAMED_BIT */, privateDataInReq /* IMPORTED_SHORT_NAMED_BIT */, RequestSystemStatus_systemStatusInitializing /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusEnabled /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusNormal /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusMessageLost /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusDisabled /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusPartiallyDisabled /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusOverloadImminent /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusOverloadReached /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_systemStatusOverloadRelieved /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_switchingFunctionSupportsSending /* IMPORTED_LONG_NAMED_BIT */, RequestSystemStatus_switchingFunctionSupportsReceiving /* IMPORTED_LONG_NAMED_BIT */, _decode_RequestSystemStatus, _encode_RequestSystemStatus } from "../CSTA-capability-exchange/RequestSystemStatus.ta.mjs";
import { SystemStatus, SystemStatus_systemStatusInitializing /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusEnabled /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusNormal /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusMessageLost /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusDisabled /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusPartiallyDisabled /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusOverloadImminent /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusOverloadReached /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusOverloadRelieved /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_switchingFunctionSupportsSending /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_switchingFunctionSupportsReceiving /* IMPORTED_LONG_NAMED_BIT */, _decode_SystemStatus, _encode_SystemStatus } from "../CSTA-capability-exchange/SystemStatus.ta.mjs";
// export { SystemStatus, SystemStatus_systemStatusInitializing /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusEnabled /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusNormal /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusMessageLost /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusDisabled /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusPartiallyDisabled /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusOverloadImminent /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusOverloadReached /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_systemStatusOverloadRelieved /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_switchingFunctionSupportsSending /* IMPORTED_LONG_NAMED_BIT */, SystemStatus_switchingFunctionSupportsReceiving /* IMPORTED_LONG_NAMED_BIT */, _decode_SystemStatus, _encode_SystemStatus } from "../CSTA-capability-exchange/SystemStatus.ta.mjs";
import { SwFunctionCapsChanged, SwFunctionCapsChanged_privateData /* IMPORTED_LONG_NAMED_BIT */, SwFunctionCapsChanged_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SwFunctionCapsChanged, _encode_SwFunctionCapsChanged } from "../CSTA-capability-exchange/SwFunctionCapsChanged.ta.mjs";
// export { SwFunctionCapsChanged, SwFunctionCapsChanged_privateData /* IMPORTED_LONG_NAMED_BIT */, SwFunctionCapsChanged_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SwFunctionCapsChanged, _encode_SwFunctionCapsChanged } from "../CSTA-capability-exchange/SwFunctionCapsChanged.ta.mjs";
import { SwFunctionDevicesChanged, SwFunctionDevicesChanged_privateData /* IMPORTED_LONG_NAMED_BIT */, SwFunctionDevicesChanged_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SwFunctionDevicesChanged, _encode_SwFunctionDevicesChanged } from "../CSTA-capability-exchange/SwFunctionDevicesChanged.ta.mjs";
// export { SwFunctionDevicesChanged, SwFunctionDevicesChanged_privateData /* IMPORTED_LONG_NAMED_BIT */, SwFunctionDevicesChanged_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SwFunctionDevicesChanged, _encode_SwFunctionDevicesChanged } from "../CSTA-capability-exchange/SwFunctionDevicesChanged.ta.mjs";
import { GetRegistrations, GetRegistrations_requestedReqTypes /* IMPORTED_LONG_NAMED_BIT */, requestedReqTypes /* IMPORTED_SHORT_NAMED_BIT */, GetRegistrations_privateData /* IMPORTED_LONG_NAMED_BIT */, GetRegistrations_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GetRegistrations_segmentedResponseProvided /* IMPORTED_LONG_NAMED_BIT */, segmentedResponseProvided /* IMPORTED_SHORT_NAMED_BIT */, _decode_GetRegistrations, _encode_GetRegistrations } from "../CSTA-capability-exchange/GetRegistrations.ta.mjs";
// export { GetRegistrations, GetRegistrations_requestedReqTypes /* IMPORTED_LONG_NAMED_BIT */, requestedReqTypes /* IMPORTED_SHORT_NAMED_BIT */, GetRegistrations_privateData /* IMPORTED_LONG_NAMED_BIT */, GetRegistrations_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GetRegistrations_segmentedResponseProvided /* IMPORTED_LONG_NAMED_BIT */, segmentedResponseProvided /* IMPORTED_SHORT_NAMED_BIT */, _decode_GetRegistrations, _encode_GetRegistrations } from "../CSTA-capability-exchange/GetRegistrations.ta.mjs";
import { RegistrationInfo, RegistrationInfo_segmentID /* IMPORTED_LONG_NAMED_BIT */, segmentID /* IMPORTED_SHORT_NAMED_BIT */, RegistrationInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RegistrationInfo, _encode_RegistrationInfo } from "../CSTA-capability-exchange/RegistrationInfo.ta.mjs";
// export { RegistrationInfo, RegistrationInfo_segmentID /* IMPORTED_LONG_NAMED_BIT */, segmentID /* IMPORTED_SHORT_NAMED_BIT */, RegistrationInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RegistrationInfo, _encode_RegistrationInfo } from "../CSTA-capability-exchange/RegistrationInfo.ta.mjs";


/**
 * @summary SystemStatusServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemStatusServList ::= SEQUENCE
 * {     changeSystemStatusFilter     [ 0] IMPLICIT ChangeSystemStatusFilter        OPTIONAL,
 *     systemRegister             [ 1] IMPLICIT SystemRegister             OPTIONAL,
 *     systemStatusRegisterAbort     [ 2] IMPLICIT SystemStatusRegisterAbort     OPTIONAL,
 *     systemStatusRegisterCancel     [ 3] IMPLICIT SystemStatusRegisterCancel     OPTIONAL,
 *     requestSystemStatus         [ 4] IMPLICIT RequestSystemStatus         OPTIONAL,
 *     systemStatus             [ 5] IMPLICIT SystemStatus             OPTIONAL,
 *     swFunctionCapsChanged         [ 6] IMPLICIT SwFunctionCapsChanged         OPTIONAL,
 *     swFunctionDevicesChanged     [ 7] IMPLICIT SwFunctionDevicesChanged         OPTIONAL,
 *     getRegistrations        [ 8] IMPLICIT GetRegistrations            OPTIONAL,
 *     registrationInfo        [ 9] IMPLICIT RegistrationInfo            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SystemStatusServList {
    constructor (
        /**
         * @summary `changeSystemStatusFilter`.
         * @public
         * @readonly
         */
        readonly changeSystemStatusFilter: OPTIONAL<ChangeSystemStatusFilter>,
        /**
         * @summary `systemRegister`.
         * @public
         * @readonly
         */
        readonly systemRegister: OPTIONAL<SystemRegister>,
        /**
         * @summary `systemStatusRegisterAbort`.
         * @public
         * @readonly
         */
        readonly systemStatusRegisterAbort: OPTIONAL<SystemStatusRegisterAbort>,
        /**
         * @summary `systemStatusRegisterCancel`.
         * @public
         * @readonly
         */
        readonly systemStatusRegisterCancel: OPTIONAL<SystemStatusRegisterCancel>,
        /**
         * @summary `requestSystemStatus`.
         * @public
         * @readonly
         */
        readonly requestSystemStatus: OPTIONAL<RequestSystemStatus>,
        /**
         * @summary `systemStatus`.
         * @public
         * @readonly
         */
        readonly systemStatus: OPTIONAL<SystemStatus>,
        /**
         * @summary `swFunctionCapsChanged`.
         * @public
         * @readonly
         */
        readonly swFunctionCapsChanged: OPTIONAL<SwFunctionCapsChanged>,
        /**
         * @summary `swFunctionDevicesChanged`.
         * @public
         * @readonly
         */
        readonly swFunctionDevicesChanged: OPTIONAL<SwFunctionDevicesChanged>,
        /**
         * @summary `getRegistrations`.
         * @public
         * @readonly
         */
        readonly getRegistrations: OPTIONAL<GetRegistrations>,
        /**
         * @summary `registrationInfo`.
         * @public
         * @readonly
         */
        readonly registrationInfo: OPTIONAL<RegistrationInfo>
    ) {}

    /**
     * @summary Restructures an object into a SystemStatusServList
     * @description
     * 
     * This takes an `object` and converts it to a `SystemStatusServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SystemStatusServList`.
     * @returns {SystemStatusServList}
     */
    public static _from_object (_o: { [_K in keyof (SystemStatusServList)]: (SystemStatusServList)[_K] }): SystemStatusServList {
        return new SystemStatusServList(_o.changeSystemStatusFilter, _o.systemRegister, _o.systemStatusRegisterAbort, _o.systemStatusRegisterCancel, _o.requestSystemStatus, _o.systemStatus, _o.swFunctionCapsChanged, _o.swFunctionDevicesChanged, _o.getRegistrations, _o.registrationInfo);
    }


}

/**
 * @summary The Leading Root Component Types of SystemStatusServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SystemStatusServList: $.ComponentSpec[] = [
    new $.ComponentSpec("changeSystemStatusFilter", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("systemRegister", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("systemStatusRegisterAbort", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("systemStatusRegisterCancel", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("requestSystemStatus", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("systemStatus", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("swFunctionCapsChanged", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("swFunctionDevicesChanged", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("getRegistrations", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("registrationInfo", true, $.hasTag(_TagClass.context, 9), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SystemStatusServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SystemStatusServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SystemStatusServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SystemStatusServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SystemStatusServList: $.ASN1Decoder<SystemStatusServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemStatusServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemStatusServList (el: _Element): SystemStatusServList {
    if (!_cached_decoder_for_SystemStatusServList) { _cached_decoder_for_SystemStatusServList = function (el: _Element): SystemStatusServList {
    let changeSystemStatusFilter: OPTIONAL<ChangeSystemStatusFilter>;
    let systemRegister: OPTIONAL<SystemRegister>;
    let systemStatusRegisterAbort: OPTIONAL<SystemStatusRegisterAbort>;
    let systemStatusRegisterCancel: OPTIONAL<SystemStatusRegisterCancel>;
    let requestSystemStatus: OPTIONAL<RequestSystemStatus>;
    let systemStatus: OPTIONAL<SystemStatus>;
    let swFunctionCapsChanged: OPTIONAL<SwFunctionCapsChanged>;
    let swFunctionDevicesChanged: OPTIONAL<SwFunctionDevicesChanged>;
    let getRegistrations: OPTIONAL<GetRegistrations>;
    let registrationInfo: OPTIONAL<RegistrationInfo>;
    const callbacks: $.DecodingMap = {
        "changeSystemStatusFilter": (_el: _Element): void => { changeSystemStatusFilter = $._decode_implicit<ChangeSystemStatusFilter>(() => _decode_ChangeSystemStatusFilter)(_el); },
        "systemRegister": (_el: _Element): void => { systemRegister = $._decode_implicit<SystemRegister>(() => _decode_SystemRegister)(_el); },
        "systemStatusRegisterAbort": (_el: _Element): void => { systemStatusRegisterAbort = $._decode_implicit<SystemStatusRegisterAbort>(() => _decode_SystemStatusRegisterAbort)(_el); },
        "systemStatusRegisterCancel": (_el: _Element): void => { systemStatusRegisterCancel = $._decode_implicit<SystemStatusRegisterCancel>(() => _decode_SystemStatusRegisterCancel)(_el); },
        "requestSystemStatus": (_el: _Element): void => { requestSystemStatus = $._decode_implicit<RequestSystemStatus>(() => _decode_RequestSystemStatus)(_el); },
        "systemStatus": (_el: _Element): void => { systemStatus = $._decode_implicit<SystemStatus>(() => _decode_SystemStatus)(_el); },
        "swFunctionCapsChanged": (_el: _Element): void => { swFunctionCapsChanged = $._decode_implicit<SwFunctionCapsChanged>(() => _decode_SwFunctionCapsChanged)(_el); },
        "swFunctionDevicesChanged": (_el: _Element): void => { swFunctionDevicesChanged = $._decode_implicit<SwFunctionDevicesChanged>(() => _decode_SwFunctionDevicesChanged)(_el); },
        "getRegistrations": (_el: _Element): void => { getRegistrations = $._decode_implicit<GetRegistrations>(() => _decode_GetRegistrations)(_el); },
        "registrationInfo": (_el: _Element): void => { registrationInfo = $._decode_implicit<RegistrationInfo>(() => _decode_RegistrationInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SystemStatusServList,
        _extension_additions_list_spec_for_SystemStatusServList,
        _root_component_type_list_2_spec_for_SystemStatusServList,
        undefined,
    );
    return new SystemStatusServList(
        changeSystemStatusFilter,
        systemRegister,
        systemStatusRegisterAbort,
        systemStatusRegisterCancel,
        requestSystemStatus,
        systemStatus,
        swFunctionCapsChanged,
        swFunctionDevicesChanged,
        getRegistrations,
        registrationInfo
    );
}; }
    return _cached_decoder_for_SystemStatusServList(el);
}

let _cached_encoder_for_SystemStatusServList: $.ASN1Encoder<SystemStatusServList> | null = null;

/**
 * @summary Encodes a(n) SystemStatusServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemStatusServList, encoded as an ASN.1 Element.
 */
export
function _encode_SystemStatusServList (value: SystemStatusServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemStatusServList) { _cached_encoder_for_SystemStatusServList = function (value: SystemStatusServList, elGetter: $.ASN1Encoder<SystemStatusServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.changeSystemStatusFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ChangeSystemStatusFilter, $.BER)(value.changeSystemStatusFilter, $.BER)),
            /* IF_ABSENT  */ ((value.systemRegister === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SystemRegister, $.BER)(value.systemRegister, $.BER)),
            /* IF_ABSENT  */ ((value.systemStatusRegisterAbort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SystemStatusRegisterAbort, $.BER)(value.systemStatusRegisterAbort, $.BER)),
            /* IF_ABSENT  */ ((value.systemStatusRegisterCancel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SystemStatusRegisterCancel, $.BER)(value.systemStatusRegisterCancel, $.BER)),
            /* IF_ABSENT  */ ((value.requestSystemStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RequestSystemStatus, $.BER)(value.requestSystemStatus, $.BER)),
            /* IF_ABSENT  */ ((value.systemStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SystemStatus, $.BER)(value.systemStatus, $.BER)),
            /* IF_ABSENT  */ ((value.swFunctionCapsChanged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SwFunctionCapsChanged, $.BER)(value.swFunctionCapsChanged, $.BER)),
            /* IF_ABSENT  */ ((value.swFunctionDevicesChanged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SwFunctionDevicesChanged, $.BER)(value.swFunctionDevicesChanged, $.BER)),
            /* IF_ABSENT  */ ((value.getRegistrations === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_GetRegistrations, $.BER)(value.getRegistrations, $.BER)),
            /* IF_ABSENT  */ ((value.registrationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_RegistrationInfo, $.BER)(value.registrationInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SystemStatusServList(value, elGetter);
}


/* eslint-enable */
