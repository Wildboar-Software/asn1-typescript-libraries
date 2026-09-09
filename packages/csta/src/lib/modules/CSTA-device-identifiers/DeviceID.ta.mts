/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID_deviceIdentifier, _decode_DeviceID_deviceIdentifier, _encode_DeviceID_deviceIdentifier } from "../CSTA-device-identifiers/DeviceID-deviceIdentifier.ta.mjs";

import { NumberDigits, _decode_NumberDigits, _encode_NumberDigits } from "../CSTA-device-identifiers/NumberDigits.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";



/**
 * @summary DeviceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceID ::= SEQUENCE
 * {    deviceIdentifier CHOICE
 *     {    dialingNumber             [ 0] IMPLICIT     NumberDigits,
 *         deviceNumber             [ 1] IMPLICIT     DeviceNumber,
 *         implicitPublic             [ 2] IMPLICIT     NumberDigits,
 *         explicitPublic             [ 3] PublicTON,
 *         implicitPrivate         [ 4] IMPLICIT     NumberDigits,
 *         explicitPrivate         [ 5] PrivateTON,
 *         other                 [ 6] IMPLICIT     OtherPlan },
 *     privateNumber            [ 0] NumberDigits            OPTIONAL,
 *     privateName            [ 1] IA5String                OPTIONAL,
 *     mediaCallCharacteristics     MediaCallCharacteristics         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DeviceID {
    constructor (
        /**
         * @summary `deviceIdentifier`.
         * @public
         * @readonly
         */
        readonly deviceIdentifier: DeviceID_deviceIdentifier,
        /**
         * @summary `privateNumber`.
         * @public
         * @readonly
         */
        readonly privateNumber: OPTIONAL<NumberDigits>,
        /**
         * @summary `privateName`.
         * @public
         * @readonly
         */
        readonly privateName: OPTIONAL<IA5String>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>
    ) {}

    /**
     * @summary Restructures an object into a DeviceID
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceID`.
     * @returns {DeviceID}
     */
    public static _from_object (_o: { [_K in keyof (DeviceID)]: (DeviceID)[_K] }): DeviceID {
        return new DeviceID(_o.deviceIdentifier, _o.privateNumber, _o.privateName, _o.mediaCallCharacteristics);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceID: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceIdentifier", false, $.hasAnyTag),
    new $.ComponentSpec("privateNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("privateName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of DeviceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceID: $.ASN1Decoder<DeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceID (el: _Element): DeviceID {
    if (!_cached_decoder_for_DeviceID) { _cached_decoder_for_DeviceID = function (el: _Element): DeviceID {
    let deviceIdentifier!: DeviceID_deviceIdentifier;
    let privateNumber: OPTIONAL<NumberDigits>;
    let privateName: OPTIONAL<IA5String>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    const callbacks: $.DecodingMap = {
        "deviceIdentifier": (_el: _Element): void => { deviceIdentifier = _decode_DeviceID_deviceIdentifier(_el); },
        "privateNumber": (_el: _Element): void => { privateNumber = $._decode_explicit<NumberDigits>(() => _decode_NumberDigits)(_el); },
        "privateName": (_el: _Element): void => { privateName = $._decode_explicit<IA5String>(() => $._decodeIA5String)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = _decode_MediaCallCharacteristics(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceID,
        _extension_additions_list_spec_for_DeviceID,
        _root_component_type_list_2_spec_for_DeviceID,
        undefined,
    );
    return new DeviceID(
        deviceIdentifier,
        privateNumber,
        privateName,
        mediaCallCharacteristics
    );
}; }
    return _cached_decoder_for_DeviceID(el);
}

let _cached_encoder_for_DeviceID: $.ASN1Encoder<DeviceID> | null = null;

/**
 * @summary Encodes a(n) DeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceID (value: DeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceID) { _cached_encoder_for_DeviceID = function (value: DeviceID, elGetter: $.ASN1Encoder<DeviceID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID_deviceIdentifier(value.deviceIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.privateNumber === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_NumberDigits, $.BER)(value.privateNumber, $.BER)),
            /* IF_ABSENT  */ ((value.privateName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.privateName, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : _encode_MediaCallCharacteristics(value.mediaCallCharacteristics, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceID(value, elGetter);
}


/* eslint-enable */
