/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION CommonCreationAndDeletionInfo */
/**
 * @summary CommonCreationAndDeletionInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonCreationAndDeletionInfo  ::=  INTEGER {
 *   unknown(0), ressourceOperation(1), managementOperation(2)}
 * ```
 */
export type CommonCreationAndDeletionInfo = INTEGER;
/* END_OF_SYMBOL_DEFINITION CommonCreationAndDeletionInfo */

/* START_OF_SYMBOL_DEFINITION CommonCreationAndDeletionInfo_unknown */
/**
 * @summary CommonCreationAndDeletionInfo_unknown
 * @constant
 * @type {number}
 */
export const CommonCreationAndDeletionInfo_unknown: CommonCreationAndDeletionInfo = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CommonCreationAndDeletionInfo_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary CommonCreationAndDeletionInfo_unknown
 * @constant
 * @type {number}
 */
export const unknown: CommonCreationAndDeletionInfo = CommonCreationAndDeletionInfo_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION CommonCreationAndDeletionInfo_ressourceOperation */
/**
 * @summary CommonCreationAndDeletionInfo_ressourceOperation
 * @constant
 * @type {number}
 */
export const CommonCreationAndDeletionInfo_ressourceOperation: CommonCreationAndDeletionInfo = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CommonCreationAndDeletionInfo_ressourceOperation */

/* START_OF_SYMBOL_DEFINITION ressourceOperation */
/**
 * @summary CommonCreationAndDeletionInfo_ressourceOperation
 * @constant
 * @type {number}
 */
export const ressourceOperation: CommonCreationAndDeletionInfo = CommonCreationAndDeletionInfo_ressourceOperation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ressourceOperation */

/* START_OF_SYMBOL_DEFINITION CommonCreationAndDeletionInfo_managementOperation */
/**
 * @summary CommonCreationAndDeletionInfo_managementOperation
 * @constant
 * @type {number}
 */
export const CommonCreationAndDeletionInfo_managementOperation: CommonCreationAndDeletionInfo = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CommonCreationAndDeletionInfo_managementOperation */

/* START_OF_SYMBOL_DEFINITION managementOperation */
/**
 * @summary CommonCreationAndDeletionInfo_managementOperation
 * @constant
 * @type {number}
 */
export const managementOperation: CommonCreationAndDeletionInfo = CommonCreationAndDeletionInfo_managementOperation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managementOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonCreationAndDeletionInfo */
let _cached_decoder_for_CommonCreationAndDeletionInfo: $.ASN1Decoder<CommonCreationAndDeletionInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonCreationAndDeletionInfo */

/* START_OF_SYMBOL_DEFINITION _decode_CommonCreationAndDeletionInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonCreationAndDeletionInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonCreationAndDeletionInfo} The decoded data structure.
 */
export function _decode_CommonCreationAndDeletionInfo(el: _Element) {
    if (!_cached_decoder_for_CommonCreationAndDeletionInfo) {
        _cached_decoder_for_CommonCreationAndDeletionInfo = $._decodeInteger;
    }
    return _cached_decoder_for_CommonCreationAndDeletionInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonCreationAndDeletionInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonCreationAndDeletionInfo */
let _cached_encoder_for_CommonCreationAndDeletionInfo: $.ASN1Encoder<CommonCreationAndDeletionInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonCreationAndDeletionInfo */

/* START_OF_SYMBOL_DEFINITION _encode_CommonCreationAndDeletionInfo */
/**
 * @summary Encodes a(n) CommonCreationAndDeletionInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonCreationAndDeletionInfo, encoded as an ASN.1 Element.
 */
export function _encode_CommonCreationAndDeletionInfo(
    value: CommonCreationAndDeletionInfo,
    elGetter: $.ASN1Encoder<CommonCreationAndDeletionInfo>
) {
    if (!_cached_encoder_for_CommonCreationAndDeletionInfo) {
        _cached_encoder_for_CommonCreationAndDeletionInfo = $._encodeInteger;
    }
    return _cached_encoder_for_CommonCreationAndDeletionInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonCreationAndDeletionInfo */

/* eslint-enable */
