/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MediaStreamID, _decode_MediaStreamID, _encode_MediaStreamID } from "../CSTA-media-services/MediaStreamID.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";



/**
 * @summary DeviceMediaInfoList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceMediaInfoList-Item ::= SEQUENCE {
 *     mediaStreamID [UNIVERSAL 4] MediaStreamID OPTIONAL,
 *     connectionInformation [UNIVERSAL 16] ConnectionInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DeviceMediaInfoList_Item {
    constructor (
        /**
         * @summary `mediaStreamID`.
         * @public
         * @readonly
         */
        readonly mediaStreamID: OPTIONAL<MediaStreamID>,
        /**
         * @summary `connectionInformation`.
         * @public
         * @readonly
         */
        readonly connectionInformation: OPTIONAL<ConnectionInformation>
    ) {}

    /**
     * @summary Restructures an object into a DeviceMediaInfoList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceMediaInfoList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceMediaInfoList_Item`.
     * @returns {DeviceMediaInfoList_Item}
     */
    public static _from_object (_o: { [_K in keyof (DeviceMediaInfoList_Item)]: (DeviceMediaInfoList_Item)[_K] }): DeviceMediaInfoList_Item {
        return new DeviceMediaInfoList_Item(_o.mediaStreamID, _o.connectionInformation);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceMediaInfoList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceMediaInfoList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaStreamID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("connectionInformation", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of DeviceMediaInfoList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceMediaInfoList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceMediaInfoList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceMediaInfoList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceMediaInfoList_Item: $.ASN1Decoder<DeviceMediaInfoList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceMediaInfoList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceMediaInfoList_Item (el: _Element): DeviceMediaInfoList_Item {
    if (!_cached_decoder_for_DeviceMediaInfoList_Item) { _cached_decoder_for_DeviceMediaInfoList_Item = function (el: _Element): DeviceMediaInfoList_Item {
    let mediaStreamID: OPTIONAL<MediaStreamID>;
    let connectionInformation: OPTIONAL<ConnectionInformation>;
    const callbacks: $.DecodingMap = {
        "mediaStreamID": (_el: _Element): void => { mediaStreamID = _decode_MediaStreamID(_el); },
        "connectionInformation": (_el: _Element): void => { connectionInformation = _decode_ConnectionInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceMediaInfoList_Item,
        _extension_additions_list_spec_for_DeviceMediaInfoList_Item,
        _root_component_type_list_2_spec_for_DeviceMediaInfoList_Item,
        undefined,
    );
    return new DeviceMediaInfoList_Item(
        mediaStreamID,
        connectionInformation
    );
}; }
    return _cached_decoder_for_DeviceMediaInfoList_Item(el);
}

let _cached_encoder_for_DeviceMediaInfoList_Item: $.ASN1Encoder<DeviceMediaInfoList_Item> | null = null;

/**
 * @summary Encodes a(n) DeviceMediaInfoList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceMediaInfoList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceMediaInfoList_Item (value: DeviceMediaInfoList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceMediaInfoList_Item) { _cached_encoder_for_DeviceMediaInfoList_Item = function (value: DeviceMediaInfoList_Item, elGetter: $.ASN1Encoder<DeviceMediaInfoList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mediaStreamID === undefined) ? undefined : _encode_MediaStreamID(value.mediaStreamID, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInformation === undefined) ? undefined : _encode_ConnectionInformation(value.connectionInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceMediaInfoList_Item(value, elGetter);
}


/* eslint-enable */
