/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import {
    MediaServiceType,
    _enum_for_MediaServiceType,
    _decode_MediaServiceType,
    _encode_MediaServiceType
} from "../CSTA-media-services/MediaServiceType.ta.mjs";

import { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";

import { MediaStreamID, _decode_MediaStreamID, _encode_MediaStreamID } from "../CSTA-media-services/MediaStreamID.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary MediaDetachedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaDetachedEvent ::= SEQUENCE
 * {    mediaConnection         ConnectionID,
 *     mediaDevice             SubjectDeviceID,
 *     mediaServiceType         MediaServiceType,
 *     mediaServiceVersion        INTEGER                    OPTIONAL,
 *     mediaServiceInstanceID        [0] IMPLICIT MediaServiceInstanceID     OPTIONAL,
 *     mediaStreamID             [1] IMPLICIT MediaStreamID        OPTIONAL,
 *     mediaCallCharacteristics     [2] IMPLICIT MediaCallCharacteristics    OPTIONAL,
 *     callCharacteristics        CallCharacteristics            OPTIONAL,
 *     localConnectionInfo        LocalConnectionState            OPTIONAL,
 *     mediaConnectionInfo         [3] IMPLICIT ConnectionInformation    OPTIONAL,
 *     extension            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MediaDetachedEvent {
    constructor (
        /**
         * @summary `mediaConnection`.
         * @public
         * @readonly
         */
        readonly mediaConnection: ConnectionID,
        /**
         * @summary `mediaDevice`.
         * @public
         * @readonly
         */
        readonly mediaDevice: SubjectDeviceID,
        /**
         * @summary `mediaServiceType`.
         * @public
         * @readonly
         */
        readonly mediaServiceType: MediaServiceType,
        /**
         * @summary `mediaServiceVersion`.
         * @public
         * @readonly
         */
        readonly mediaServiceVersion: OPTIONAL<INTEGER>,
        /**
         * @summary `mediaServiceInstanceID`.
         * @public
         * @readonly
         */
        readonly mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>,
        /**
         * @summary `mediaStreamID`.
         * @public
         * @readonly
         */
        readonly mediaStreamID: OPTIONAL<MediaStreamID>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callCharacteristics`.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `localConnectionInfo`.
         * @public
         * @readonly
         */
        readonly localConnectionInfo: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `mediaConnectionInfo`.
         * @public
         * @readonly
         */
        readonly mediaConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `extension`.
         * @public
         * @readonly
         */
        readonly extension: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MediaDetachedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `MediaDetachedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaDetachedEvent`.
     * @returns {MediaDetachedEvent}
     */
    public static _from_object (_o: { [_K in keyof (MediaDetachedEvent)]: (MediaDetachedEvent)[_K] }): MediaDetachedEvent {
        return new MediaDetachedEvent(_o.mediaConnection, _o.mediaDevice, _o.mediaServiceType, _o.mediaServiceVersion, _o.mediaServiceInstanceID, _o.mediaStreamID, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.localConnectionInfo, _o.mediaConnectionInfo, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;
}

/**
 * @summary The Leading Root Component Types of MediaDetachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaDetachedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("mediaDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("mediaServiceVersion", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("mediaServiceInstanceID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mediaStreamID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14)),
    new $.ComponentSpec("mediaConnectionInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extension", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MediaDetachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaDetachedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaDetachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaDetachedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaDetachedEvent: $.ASN1Decoder<MediaDetachedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaDetachedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaDetachedEvent (el: _Element): MediaDetachedEvent {
    if (!_cached_decoder_for_MediaDetachedEvent) { _cached_decoder_for_MediaDetachedEvent = function (el: _Element): MediaDetachedEvent {
    let mediaConnection!: ConnectionID;
    let mediaDevice!: SubjectDeviceID;
    let mediaServiceType!: MediaServiceType;
    let mediaServiceVersion: OPTIONAL<INTEGER>;
    let mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>;
    let mediaStreamID: OPTIONAL<MediaStreamID>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let mediaConnectionInfo: OPTIONAL<ConnectionInformation>;
    let extension: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "mediaConnection": (_el: _Element): void => { mediaConnection = _decode_ConnectionID(_el); },
        "mediaDevice": (_el: _Element): void => { mediaDevice = _decode_SubjectDeviceID(_el); },
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = _decode_MediaServiceType(_el); },
        "mediaServiceVersion": (_el: _Element): void => { mediaServiceVersion = $._decodeInteger(_el); },
        "mediaServiceInstanceID": (_el: _Element): void => { mediaServiceInstanceID = $._decode_implicit<MediaServiceInstanceID>(() => _decode_MediaServiceInstanceID)(_el); },
        "mediaStreamID": (_el: _Element): void => { mediaStreamID = $._decode_implicit<MediaStreamID>(() => _decode_MediaStreamID)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = _decode_CallCharacteristics(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "mediaConnectionInfo": (_el: _Element): void => { mediaConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaDetachedEvent,
        _extension_additions_list_spec_for_MediaDetachedEvent,
        _root_component_type_list_2_spec_for_MediaDetachedEvent,
        undefined,
    );
    return new MediaDetachedEvent(
        mediaConnection,
        mediaDevice,
        mediaServiceType,
        mediaServiceVersion,
        mediaServiceInstanceID,
        mediaStreamID,
        mediaCallCharacteristics,
        callCharacteristics,
        localConnectionInfo,
        mediaConnectionInfo,
        extension
    );
}; }
    return _cached_decoder_for_MediaDetachedEvent(el);
}

let _cached_encoder_for_MediaDetachedEvent: $.ASN1Encoder<MediaDetachedEvent> | null = null;

/**
 * @summary Encodes a(n) MediaDetachedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaDetachedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_MediaDetachedEvent (value: MediaDetachedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaDetachedEvent) { _cached_encoder_for_MediaDetachedEvent = function (value: MediaDetachedEvent, elGetter: $.ASN1Encoder<MediaDetachedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.mediaConnection, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.mediaDevice, $.BER),
            /* REQUIRED   */ _encode_MediaServiceType(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.mediaServiceVersion === undefined) ? undefined : $._encodeInteger(value.mediaServiceVersion, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInstanceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MediaServiceInstanceID, $.BER)(value.mediaServiceInstanceID, $.BER)),
            /* IF_ABSENT  */ ((value.mediaStreamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MediaStreamID, $.BER)(value.mediaStreamID, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : _encode_CallCharacteristics(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.mediaConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ConnectionInformation, $.BER)(value.mediaConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extension === undefined) ? undefined : _encode_CSTACommonArguments(value.extension, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaDetachedEvent(value, elGetter);
}


/* eslint-enable */
