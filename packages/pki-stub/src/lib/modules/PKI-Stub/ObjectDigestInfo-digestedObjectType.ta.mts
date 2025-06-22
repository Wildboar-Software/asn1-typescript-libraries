/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "jsr:@wildboar/asn1";
import * as $ from "jsr:@wildboar/asn1/functional";

/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo-digestedObjectType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ObjectDigestInfo_digestedObjectType {
    publicKey = 0,
    publicKeyCert = 1,
    otherObjectTypes = 2,
}

/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo-digestedObjectType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type ObjectDigestInfo_digestedObjectType =
    _enum_for_ObjectDigestInfo_digestedObjectType;

/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo-digestedObjectType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const ObjectDigestInfo_digestedObjectType =
    _enum_for_ObjectDigestInfo_digestedObjectType;

/**
 * @summary ObjectDigestInfo_digestedObjectType_publicKey
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_publicKey: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKey; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary publicKey
 * @constant
 * @type {number}
 */
export const publicKey: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKey; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectDigestInfo_digestedObjectType_publicKeyCert
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_publicKeyCert: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKeyCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary publicKeyCert
 * @constant
 * @type {number}
 */
export const publicKeyCert: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKeyCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectDigestInfo_digestedObjectType_otherObjectTypes
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_otherObjectTypes: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.otherObjectTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherObjectTypes
 * @constant
 * @type {number}
 */
export const otherObjectTypes: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.otherObjectTypes; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ObjectDigestInfo_digestedObjectType: $.ASN1Decoder<ObjectDigestInfo_digestedObjectType> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectDigestInfo_digestedObjectType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectDigestInfo_digestedObjectType} The decoded data structure.
 */
export function _decode_ObjectDigestInfo_digestedObjectType(el: _Element) {
    if (!_cached_decoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_decoder_for_ObjectDigestInfo_digestedObjectType =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_ObjectDigestInfo_digestedObjectType(el);
}

let _cached_encoder_for_ObjectDigestInfo_digestedObjectType: $.ASN1Encoder<ObjectDigestInfo_digestedObjectType> | null =
    null;

/**
 * @summary Encodes a(n) ObjectDigestInfo_digestedObjectType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectDigestInfo_digestedObjectType, encoded as an ASN.1 Element.
 */
export function _encode_ObjectDigestInfo_digestedObjectType(
    value: ObjectDigestInfo_digestedObjectType,
    elGetter: $.ASN1Encoder<ObjectDigestInfo_digestedObjectType>
) {
    if (!_cached_encoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_encoder_for_ObjectDigestInfo_digestedObjectType =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_ObjectDigestInfo_digestedObjectType(
        value,
        elGetter
    );
}


/* eslint-enable */
