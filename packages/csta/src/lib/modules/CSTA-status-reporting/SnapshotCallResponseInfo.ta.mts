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
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
// export { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
// export { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";
// export { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";
import { CallMediaInfoList, _decode_CallMediaInfoList, _encode_CallMediaInfoList } from "../CSTA-status-reporting/CallMediaInfoList.ta.mjs";
// export { CallMediaInfoList, _decode_CallMediaInfoList, _encode_CallMediaInfoList } from "../CSTA-status-reporting/CallMediaInfoList.ta.mjs";
import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";
// export { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";


/**
 * @summary SnapshotCallResponseInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotCallResponseInfo ::= SEQUENCE
 * {     deviceOnCall             SubjectDeviceID,
 *     callIdentifier             ConnectionID                 OPTIONAL,
 *     localConnectionState         LocalConnectionState             OPTIONAL,
 *     servicesPermitted         [0] IMPLICIT ServicesPermitted         OPTIONAL,
 *     mediaServiceInfoList         [1] IMPLICIT CallMediaInfoList        OPTIONAL,
 *     locationInfo             [2] IMPLICIT LocationInfoList        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SnapshotCallResponseInfo {
    constructor (
        /**
         * @summary `deviceOnCall`.
         * @public
         * @readonly
         */
        readonly deviceOnCall: SubjectDeviceID,
        /**
         * @summary `callIdentifier`.
         * @public
         * @readonly
         */
        readonly callIdentifier: OPTIONAL<ConnectionID>,
        /**
         * @summary `localConnectionState`.
         * @public
         * @readonly
         */
        readonly localConnectionState: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `servicesPermitted`.
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `mediaServiceInfoList`.
         * @public
         * @readonly
         */
        readonly mediaServiceInfoList: OPTIONAL<CallMediaInfoList>,
        /**
         * @summary `locationInfo`.
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfoList>
    ) {}

    /**
     * @summary Restructures an object into a SnapshotCallResponseInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotCallResponseInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotCallResponseInfo`.
     * @returns {SnapshotCallResponseInfo}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotCallResponseInfo)]: (SnapshotCallResponseInfo)[_K] }): SnapshotCallResponseInfo {
        return new SnapshotCallResponseInfo(_o.deviceOnCall, _o.callIdentifier, _o.localConnectionState, _o.servicesPermitted, _o.mediaServiceInfoList, _o.locationInfo);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotCallResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotCallResponseInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceOnCall", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("callIdentifier", true, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("localConnectionState", true, $.hasTag(_TagClass.application, 14), undefined, undefined),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mediaServiceInfoList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SnapshotCallResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotCallResponseInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotCallResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotCallResponseInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotCallResponseInfo: $.ASN1Decoder<SnapshotCallResponseInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotCallResponseInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotCallResponseInfo (el: _Element): SnapshotCallResponseInfo {
    if (!_cached_decoder_for_SnapshotCallResponseInfo) { _cached_decoder_for_SnapshotCallResponseInfo = function (el: _Element): SnapshotCallResponseInfo {
    let deviceOnCall!: SubjectDeviceID;
    let callIdentifier: OPTIONAL<ConnectionID>;
    let localConnectionState: OPTIONAL<LocalConnectionState>;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let mediaServiceInfoList: OPTIONAL<CallMediaInfoList>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    const callbacks: $.DecodingMap = {
        "deviceOnCall": (_el: _Element): void => { deviceOnCall = _decode_SubjectDeviceID(_el); },
        "callIdentifier": (_el: _Element): void => { callIdentifier = _decode_ConnectionID(_el); },
        "localConnectionState": (_el: _Element): void => { localConnectionState = _decode_LocalConnectionState(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "mediaServiceInfoList": (_el: _Element): void => { mediaServiceInfoList = $._decode_implicit<CallMediaInfoList>(() => _decode_CallMediaInfoList)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SnapshotCallResponseInfo,
        _extension_additions_list_spec_for_SnapshotCallResponseInfo,
        _root_component_type_list_2_spec_for_SnapshotCallResponseInfo,
        undefined,
    );
    return new SnapshotCallResponseInfo(
        deviceOnCall,
        callIdentifier,
        localConnectionState,
        servicesPermitted,
        mediaServiceInfoList,
        locationInfo
    );
}; }
    return _cached_decoder_for_SnapshotCallResponseInfo(el);
}

let _cached_encoder_for_SnapshotCallResponseInfo: $.ASN1Encoder<SnapshotCallResponseInfo> | null = null;

/**
 * @summary Encodes a(n) SnapshotCallResponseInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotCallResponseInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotCallResponseInfo (value: SnapshotCallResponseInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotCallResponseInfo) { _cached_encoder_for_SnapshotCallResponseInfo = function (value: SnapshotCallResponseInfo, elGetter: $.ASN1Encoder<SnapshotCallResponseInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.deviceOnCall, $.BER),
            /* IF_ABSENT  */ ((value.callIdentifier === undefined) ? undefined : _encode_ConnectionID(value.callIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.localConnectionState === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionState, $.BER)),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInfoList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallMediaInfoList, $.BER)(value.mediaServiceInfoList, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotCallResponseInfo(value, elGetter);
}


/* eslint-enable */
