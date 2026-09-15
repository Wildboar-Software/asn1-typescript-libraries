/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DeviceAttributes
 * @description
 *
 * Extra attributes of a listed device (Table 13-12): media-access
 * and routeing device, group ACD/hunt/pick.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceAttributes  ::=  BIT STRING
 * {     mediaAccessDevice         ( 0),
 *     routeingDevice             ( 1),
 *     groupACD             ( 2),
 *     groupHunt             ( 3),
 *     groupPick             ( 4) }
 * ```
 */
export
type DeviceAttributes = BIT_STRING;

/**
 * @summary DeviceAttributes_mediaAccessDevice
 * @constant
 */
export
const DeviceAttributes_mediaAccessDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mediaAccessDevice
 * @constant
 */
export
const mediaAccessDevice: number = DeviceAttributes_mediaAccessDevice; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceAttributes_routeingDevice
 * @constant
 */
export
const DeviceAttributes_routeingDevice: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary routeingDevice
 * @constant
 */
export
const routeingDevice: number = DeviceAttributes_routeingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceAttributes_groupACD
 * @constant
 */
export
const DeviceAttributes_groupACD: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary groupACD
 * @constant
 */
export
const groupACD: number = DeviceAttributes_groupACD; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceAttributes_groupHunt
 * @constant
 */
export
const DeviceAttributes_groupHunt: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary groupHunt
 * @constant
 */
export
const groupHunt: number = DeviceAttributes_groupHunt; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceAttributes_groupPick
 * @constant
 */
export
const DeviceAttributes_groupPick: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary groupPick
 * @constant
 */
export
const groupPick: number = DeviceAttributes_groupPick; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DeviceAttributes: $.ASN1Decoder<DeviceAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceAttributes (el: _Element): DeviceAttributes {
    if (!_cached_decoder_for_DeviceAttributes) { _cached_decoder_for_DeviceAttributes = $._decodeBitString; }
    return _cached_decoder_for_DeviceAttributes(el);
}

let _cached_encoder_for_DeviceAttributes: $.ASN1Encoder<DeviceAttributes> | null = null;

/**
 * @summary Encodes a(n) DeviceAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceAttributes (value: DeviceAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceAttributes) { _cached_encoder_for_DeviceAttributes = $._encodeBitString; }
    return _cached_encoder_for_DeviceAttributes(value, elGetter);
}


/* eslint-enable */
