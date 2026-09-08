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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";
// export { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
// export { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary AttachMediaServiceResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttachMediaServiceResult ::= SEQUENCE
 * {    mediaConnection         ConnectionID                OPTIONAL,
 *     mediaDevice             [0] IMPLICIT DeviceID             OPTIONAL,
 *     mediaServiceInstanceID         MediaServiceInstanceID            OPTIONAL,
 *     mediaConnectionInfo         [1] IMPLICIT ConnectionInformation     OPTIONAL,
 *     callLinkageData            [2] IMPLICIT CallLinkageData        OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AttachMediaServiceResult {
    constructor (
        /**
         * @summary `mediaConnection`.
         * @public
         * @readonly
         */
        readonly mediaConnection: OPTIONAL<ConnectionID>,
        /**
         * @summary `mediaDevice`.
         * @public
         * @readonly
         */
        readonly mediaDevice: OPTIONAL<DeviceID>,
        /**
         * @summary `mediaServiceInstanceID`.
         * @public
         * @readonly
         */
        readonly mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>,
        /**
         * @summary `mediaConnectionInfo`.
         * @public
         * @readonly
         */
        readonly mediaConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AttachMediaServiceResult
     * @description
     * 
     * This takes an `object` and converts it to a `AttachMediaServiceResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttachMediaServiceResult`.
     * @returns {AttachMediaServiceResult}
     */
    public static _from_object (_o: { [_K in keyof (AttachMediaServiceResult)]: (AttachMediaServiceResult)[_K] }): AttachMediaServiceResult {
        return new AttachMediaServiceResult(_o.mediaConnection, _o.mediaDevice, _o.mediaServiceInstanceID, _o.mediaConnectionInfo, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of AttachMediaServiceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttachMediaServiceResult: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaConnection", true, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("mediaDevice", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mediaServiceInstanceID", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("mediaConnectionInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AttachMediaServiceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttachMediaServiceResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttachMediaServiceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttachMediaServiceResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttachMediaServiceResult: $.ASN1Decoder<AttachMediaServiceResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttachMediaServiceResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttachMediaServiceResult (el: _Element): AttachMediaServiceResult {
    if (!_cached_decoder_for_AttachMediaServiceResult) { _cached_decoder_for_AttachMediaServiceResult = function (el: _Element): AttachMediaServiceResult {
    let mediaConnection: OPTIONAL<ConnectionID>;
    let mediaDevice: OPTIONAL<DeviceID>;
    let mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>;
    let mediaConnectionInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "mediaConnection": (_el: _Element): void => { mediaConnection = _decode_ConnectionID(_el); },
        "mediaDevice": (_el: _Element): void => { mediaDevice = $._decode_implicit<DeviceID>(() => _decode_DeviceID)(_el); },
        "mediaServiceInstanceID": (_el: _Element): void => { mediaServiceInstanceID = _decode_MediaServiceInstanceID(_el); },
        "mediaConnectionInfo": (_el: _Element): void => { mediaConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttachMediaServiceResult,
        _extension_additions_list_spec_for_AttachMediaServiceResult,
        _root_component_type_list_2_spec_for_AttachMediaServiceResult,
        undefined,
    );
    return new AttachMediaServiceResult(
        mediaConnection,
        mediaDevice,
        mediaServiceInstanceID,
        mediaConnectionInfo,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_AttachMediaServiceResult(el);
}

let _cached_encoder_for_AttachMediaServiceResult: $.ASN1Encoder<AttachMediaServiceResult> | null = null;

/**
 * @summary Encodes a(n) AttachMediaServiceResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachMediaServiceResult, encoded as an ASN.1 Element.
 */
export
function _encode_AttachMediaServiceResult (value: AttachMediaServiceResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttachMediaServiceResult) { _cached_encoder_for_AttachMediaServiceResult = function (value: AttachMediaServiceResult, elGetter: $.ASN1Encoder<AttachMediaServiceResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mediaConnection === undefined) ? undefined : _encode_ConnectionID(value.mediaConnection, $.BER)),
            /* IF_ABSENT  */ ((value.mediaDevice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DeviceID, $.BER)(value.mediaDevice, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInstanceID === undefined) ? undefined : _encode_MediaServiceInstanceID(value.mediaServiceInstanceID, $.BER)),
            /* IF_ABSENT  */ ((value.mediaConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ConnectionInformation, $.BER)(value.mediaConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttachMediaServiceResult(value, elGetter);
}


/* eslint-enable */
