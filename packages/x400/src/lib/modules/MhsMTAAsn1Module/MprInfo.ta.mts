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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    MprInfo_Item,
    _decode_MprInfo_Item,
    _encode_MprInfo_Item,
} from '../MhsMTAAsn1Module/MprInfo-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MprInfo */
/**
 * @summary MprInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MprInfo  ::=
 *   SET OF
 *     SEQUENCE {mprId            EMailMpduIdentifier,
 *               arrivalTime      Time,
 *               processingState  ProcessingState}
 * ```
 */
export type MprInfo = MprInfo_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION MprInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MprInfo */
let _cached_decoder_for_MprInfo: $.ASN1Decoder<MprInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MprInfo */

/* START_OF_SYMBOL_DEFINITION _decode_MprInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) MprInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MprInfo} The decoded data structure.
 */
export function _decode_MprInfo(el: _Element) {
    if (!_cached_decoder_for_MprInfo) {
        _cached_decoder_for_MprInfo = $._decodeSetOf<MprInfo_Item>(
            () => _decode_MprInfo_Item
        );
    }
    return _cached_decoder_for_MprInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MprInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MprInfo */
let _cached_encoder_for_MprInfo: $.ASN1Encoder<MprInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MprInfo */

/* START_OF_SYMBOL_DEFINITION _encode_MprInfo */
/**
 * @summary Encodes a(n) MprInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MprInfo, encoded as an ASN.1 Element.
 */
export function _encode_MprInfo(
    value: MprInfo,
    elGetter: $.ASN1Encoder<MprInfo>
) {
    if (!_cached_encoder_for_MprInfo) {
        _cached_encoder_for_MprInfo = $._encodeSetOf<MprInfo_Item>(
            () => _encode_MprInfo_Item,
            $.BER
        );
    }
    return _cached_encoder_for_MprInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MprInfo */

/* eslint-enable */
