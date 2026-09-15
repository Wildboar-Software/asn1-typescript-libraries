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

import {
    MediaServiceType,
    _enum_for_MediaServiceType,
    _decode_MediaServiceType,
    _encode_MediaServiceType
} from "../CSTA-media-services/MediaServiceType.ta.mjs";

import { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";

import {
    ConnectionMode,
    _enum_for_ConnectionMode,
    _decode_ConnectionMode,
    _encode_ConnectionMode
} from "../CSTA-media-services/ConnectionMode.ta.mjs";

import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AttachMediaServiceArgument
 * @description
 *
 * Service request (ECMA-269 Table 19-2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttachMediaServiceArgument ::= SEQUENCE
 * {    connection             ConnectionID,
 *     mediaServiceType         MediaServiceType,
 *     mediaServiceVersion        INTEGER                    OPTIONAL,
 *     mediaServiceInstanceID         MediaServiceInstanceID            OPTIONAL,
 *     connectionMode            ConnectionMode,
 *     requestedConnectionState    LocalConnectionState            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AttachMediaServiceArgument {
    constructor (
        /**
         * @summary `connection`.
         * @description
         *
         * Connection at the attaching device.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `mediaServiceType`.
         * @description
         *
         * Requested media service type.
         * @public
         * @readonly
         */
        readonly mediaServiceType: MediaServiceType,
        /**
         * @summary `mediaServiceVersion`.
         * @description
         *
         * Version of the media service.
         * @public
         * @readonly
         */
        readonly mediaServiceVersion: OPTIONAL<INTEGER>,
        /**
         * @summary `mediaServiceInstanceID`.
         * @description
         *
         * Desired media service instance.
         * @public
         * @readonly
         */
        readonly mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>,
        /**
         * @summary `connectionMode`.
         * @description
         *
         * How the MAD is added (consultation/conference/deflect/join/
         * transfer variants) or `direct` if already in the call.
         * @public
         * @readonly
         */
        readonly connectionMode: ConnectionMode,
        /**
         * @summary `requestedConnectionState`.
         * @description
         *
         * Requested local connection state after attach.
         * @public
         * @readonly
         */
        readonly requestedConnectionState: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AttachMediaServiceArgument
     * @description
     * 
     * This takes an `object` and converts it to a `AttachMediaServiceArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttachMediaServiceArgument`.
     * @returns {AttachMediaServiceArgument}
     */
    public static _from_object (_o: { [_K in keyof (AttachMediaServiceArgument)]: (AttachMediaServiceArgument)[_K] }): AttachMediaServiceArgument {
        return new AttachMediaServiceArgument(_o.connection, _o.mediaServiceType, _o.mediaServiceVersion, _o.mediaServiceInstanceID, _o.connectionMode, _o.requestedConnectionState, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;        /**
         * @summary The enum used as the type of the component `connectionMode`
         * @public
         * @static
         */

    public static _enum_for_connectionMode = _enum_for_ConnectionMode;
}

/**
 * @summary The Leading Root Component Types of AttachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttachMediaServiceArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("mediaServiceVersion", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("mediaServiceInstanceID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("connectionMode", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("requestedConnectionState", true, $.hasTag(_TagClass.application, 14)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of AttachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttachMediaServiceArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttachMediaServiceArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttachMediaServiceArgument: $.ASN1Decoder<AttachMediaServiceArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttachMediaServiceArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttachMediaServiceArgument (el: _Element): AttachMediaServiceArgument {
    if (!_cached_decoder_for_AttachMediaServiceArgument) { _cached_decoder_for_AttachMediaServiceArgument = function (el: _Element): AttachMediaServiceArgument {
    let connection!: ConnectionID;
    let mediaServiceType!: MediaServiceType;
    let mediaServiceVersion: OPTIONAL<INTEGER>;
    let mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>;
    let connectionMode!: ConnectionMode;
    let requestedConnectionState: OPTIONAL<LocalConnectionState>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = _decode_MediaServiceType(_el); },
        "mediaServiceVersion": (_el: _Element): void => { mediaServiceVersion = $._decodeInteger(_el); },
        "mediaServiceInstanceID": (_el: _Element): void => { mediaServiceInstanceID = _decode_MediaServiceInstanceID(_el); },
        "connectionMode": (_el: _Element): void => { connectionMode = _decode_ConnectionMode(_el); },
        "requestedConnectionState": (_el: _Element): void => { requestedConnectionState = _decode_LocalConnectionState(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttachMediaServiceArgument,
        _extension_additions_list_spec_for_AttachMediaServiceArgument,
        _root_component_type_list_2_spec_for_AttachMediaServiceArgument,
        undefined,
    );
    return new AttachMediaServiceArgument(
        connection,
        mediaServiceType,
        mediaServiceVersion,
        mediaServiceInstanceID,
        connectionMode,
        requestedConnectionState,
        extensions
    );
}; }
    return _cached_decoder_for_AttachMediaServiceArgument(el);
}

let _cached_encoder_for_AttachMediaServiceArgument: $.ASN1Encoder<AttachMediaServiceArgument> | null = null;

/**
 * @summary Encodes a(n) AttachMediaServiceArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachMediaServiceArgument, encoded as an ASN.1 Element.
 */
export
function _encode_AttachMediaServiceArgument (value: AttachMediaServiceArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttachMediaServiceArgument) { _cached_encoder_for_AttachMediaServiceArgument = function (value: AttachMediaServiceArgument, elGetter: $.ASN1Encoder<AttachMediaServiceArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_MediaServiceType(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.mediaServiceVersion === undefined) ? undefined : $._encodeInteger(value.mediaServiceVersion, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInstanceID === undefined) ? undefined : _encode_MediaServiceInstanceID(value.mediaServiceInstanceID, $.BER)),
            /* REQUIRED   */ _encode_ConnectionMode(value.connectionMode, $.BER),
            /* IF_ABSENT  */ ((value.requestedConnectionState === undefined) ? undefined : _encode_LocalConnectionState(value.requestedConnectionState, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttachMediaServiceArgument(value, elGetter);
}


/* eslint-enable */
