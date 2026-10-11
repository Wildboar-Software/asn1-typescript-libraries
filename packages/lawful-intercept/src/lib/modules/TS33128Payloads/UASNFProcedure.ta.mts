/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UASNFProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASNFProcedure  ::=  ENUMERATED
 * {
 *     configurationCreate(1),
 *     configurationRetrieve(2),
 *     configurationUpdate(3),
 *     configurationModify(4),
 *     configurationDelete(5),
 *     authenticationAuthorize(6),
 *     authenticationNotification(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UASNFProcedure {
    configurationCreate = 1,
    configurationRetrieve = 2,
    configurationUpdate = 3,
    configurationModify = 4,
    configurationDelete = 5,
    authenticationAuthorize = 6,
    authenticationNotification = 7,
}

/**
 * @summary UASNFProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASNFProcedure  ::=  ENUMERATED
 * {
 *     configurationCreate(1),
 *     configurationRetrieve(2),
 *     configurationUpdate(3),
 *     configurationModify(4),
 *     configurationDelete(5),
 *     authenticationAuthorize(6),
 *     authenticationNotification(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UASNFProcedure = _enum_for_UASNFProcedure;

/**
 * @summary UASNFProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASNFProcedure  ::=  ENUMERATED
 * {
 *     configurationCreate(1),
 *     configurationRetrieve(2),
 *     configurationUpdate(3),
 *     configurationModify(4),
 *     configurationDelete(5),
 *     authenticationAuthorize(6),
 *     authenticationNotification(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UASNFProcedure = _enum_for_UASNFProcedure;

/**
 * @summary UASNFProcedure_configurationCreate
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationCreate: UASNFProcedure = UASNFProcedure.configurationCreate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationCreate
 * @constant
 * @type {number}
 */
export
const configurationCreate: UASNFProcedure = UASNFProcedure.configurationCreate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationRetrieve
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationRetrieve: UASNFProcedure = UASNFProcedure.configurationRetrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationRetrieve
 * @constant
 * @type {number}
 */
export
const configurationRetrieve: UASNFProcedure = UASNFProcedure.configurationRetrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationUpdate
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationUpdate: UASNFProcedure = UASNFProcedure.configurationUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationUpdate
 * @constant
 * @type {number}
 */
export
const configurationUpdate: UASNFProcedure = UASNFProcedure.configurationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationModify
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationModify: UASNFProcedure = UASNFProcedure.configurationModify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationModify
 * @constant
 * @type {number}
 */
export
const configurationModify: UASNFProcedure = UASNFProcedure.configurationModify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationDelete
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationDelete: UASNFProcedure = UASNFProcedure.configurationDelete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationDelete
 * @constant
 * @type {number}
 */
export
const configurationDelete: UASNFProcedure = UASNFProcedure.configurationDelete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_authenticationAuthorize
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_authenticationAuthorize: UASNFProcedure = UASNFProcedure.authenticationAuthorize; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationAuthorize
 * @constant
 * @type {number}
 */
export
const authenticationAuthorize: UASNFProcedure = UASNFProcedure.authenticationAuthorize; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_authenticationNotification
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_authenticationNotification: UASNFProcedure = UASNFProcedure.authenticationNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationNotification
 * @constant
 * @type {number}
 */
export
const authenticationNotification: UASNFProcedure = UASNFProcedure.authenticationNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UASNFProcedure: $.ASN1Decoder<UASNFProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UASNFProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UASNFProcedure (el: _Element): UASNFProcedure {
    if (!_cached_decoder_for_UASNFProcedure) { _cached_decoder_for_UASNFProcedure = $._decodeEnumerated; }
    return _cached_decoder_for_UASNFProcedure(el);
}

let _cached_encoder_for_UASNFProcedure: $.ASN1Encoder<UASNFProcedure> | null = null;

/**
 * @summary Encodes a(n) UASNFProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UASNFProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_UASNFProcedure (value: UASNFProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UASNFProcedure) { _cached_encoder_for_UASNFProcedure = $._encodeEnumerated; }
    return _cached_encoder_for_UASNFProcedure(value, elGetter);
}


/* eslint-enable */
