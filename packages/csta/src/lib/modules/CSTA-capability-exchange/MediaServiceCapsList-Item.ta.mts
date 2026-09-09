/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    MediaServiceType,
    _enum_for_MediaServiceType,
    _decode_MediaServiceType,
    _encode_MediaServiceType
} from "../CSTA-media-services/MediaServiceType.ta.mjs";

import { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";

import { ConnectionModeBMap, _decode_ConnectionModeBMap, _encode_ConnectionModeBMap } from "../CSTA-media-services/ConnectionModeBMap.ta.mjs";



/**
 * @summary MediaServiceCapsList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServiceCapsList-Item ::= SEQUENCE {
 *     mediaServiceType [UNIVERSAL 10] MediaServiceType,
 *     mediaServiceVersion [UNIVERSAL 2] INTEGER OPTIONAL,
 *     mediaServiceInstance [UNIVERSAL 4] MediaServiceInstanceID OPTIONAL,
 *     connectionMode [UNIVERSAL 3] ConnectionModeBMap OPTIONAL,
 *     mediaStreamIDSupported [UNIVERSAL 1] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class MediaServiceCapsList_Item {
    constructor (
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
         * @summary `mediaServiceInstance`.
         * @public
         * @readonly
         */
        readonly mediaServiceInstance: OPTIONAL<MediaServiceInstanceID>,
        /**
         * @summary `connectionMode`.
         * @public
         * @readonly
         */
        readonly connectionMode: OPTIONAL<ConnectionModeBMap>,
        /**
         * @summary `mediaStreamIDSupported`.
         * @public
         * @readonly
         */
        readonly mediaStreamIDSupported: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a MediaServiceCapsList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MediaServiceCapsList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaServiceCapsList_Item`.
     * @returns {MediaServiceCapsList_Item}
     */
    public static _from_object (_o: { [_K in keyof (MediaServiceCapsList_Item)]: (MediaServiceCapsList_Item)[_K] }): MediaServiceCapsList_Item {
        return new MediaServiceCapsList_Item(_o.mediaServiceType, _o.mediaServiceVersion, _o.mediaServiceInstance, _o.connectionMode, _o.mediaStreamIDSupported);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;
}

/**
 * @summary The Leading Root Component Types of MediaServiceCapsList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaServiceCapsList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("mediaServiceVersion", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("mediaServiceInstance", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("connectionMode", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("mediaStreamIDSupported", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of MediaServiceCapsList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaServiceCapsList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaServiceCapsList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaServiceCapsList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaServiceCapsList_Item: $.ASN1Decoder<MediaServiceCapsList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaServiceCapsList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaServiceCapsList_Item (el: _Element): MediaServiceCapsList_Item {
    if (!_cached_decoder_for_MediaServiceCapsList_Item) { _cached_decoder_for_MediaServiceCapsList_Item = function (el: _Element): MediaServiceCapsList_Item {
    let mediaServiceType!: MediaServiceType;
    let mediaServiceVersion: OPTIONAL<INTEGER>;
    let mediaServiceInstance: OPTIONAL<MediaServiceInstanceID>;
    let connectionMode: OPTIONAL<ConnectionModeBMap>;
    let mediaStreamIDSupported!: BOOLEAN;
    const callbacks: $.DecodingMap = {
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = _decode_MediaServiceType(_el); },
        "mediaServiceVersion": (_el: _Element): void => { mediaServiceVersion = $._decodeInteger(_el); },
        "mediaServiceInstance": (_el: _Element): void => { mediaServiceInstance = _decode_MediaServiceInstanceID(_el); },
        "connectionMode": (_el: _Element): void => { connectionMode = _decode_ConnectionModeBMap(_el); },
        "mediaStreamIDSupported": (_el: _Element): void => { mediaStreamIDSupported = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaServiceCapsList_Item,
        _extension_additions_list_spec_for_MediaServiceCapsList_Item,
        _root_component_type_list_2_spec_for_MediaServiceCapsList_Item,
        undefined,
    );
    return new MediaServiceCapsList_Item(
        mediaServiceType,
        mediaServiceVersion,
        mediaServiceInstance,
        connectionMode,
        mediaStreamIDSupported
    );
}; }
    return _cached_decoder_for_MediaServiceCapsList_Item(el);
}

let _cached_encoder_for_MediaServiceCapsList_Item: $.ASN1Encoder<MediaServiceCapsList_Item> | null = null;

/**
 * @summary Encodes a(n) MediaServiceCapsList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaServiceCapsList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MediaServiceCapsList_Item (value: MediaServiceCapsList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaServiceCapsList_Item) { _cached_encoder_for_MediaServiceCapsList_Item = function (value: MediaServiceCapsList_Item, elGetter: $.ASN1Encoder<MediaServiceCapsList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MediaServiceType(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.mediaServiceVersion === undefined) ? undefined : $._encodeInteger(value.mediaServiceVersion, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInstance === undefined) ? undefined : _encode_MediaServiceInstanceID(value.mediaServiceInstance, $.BER)),
            /* IF_ABSENT  */ ((value.connectionMode === undefined) ? undefined : _encode_ConnectionModeBMap(value.connectionMode, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.mediaStreamIDSupported, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaServiceCapsList_Item(value, elGetter);
}


/* eslint-enable */
