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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "@wildboar/x500/SelectedAttributeTypes";
/**
 * @summary UniqueIdentifierOfBioParaInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UniqueIdentifierOfBioParaInfo  ::=  UniqueIdentifier
 * ```
 */
export
type UniqueIdentifierOfBioParaInfo = UniqueIdentifier; // DefinedType

let _cached_decoder_for_UniqueIdentifierOfBioParaInfo: $.ASN1Decoder<UniqueIdentifierOfBioParaInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniqueIdentifierOfBioParaInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueIdentifierOfBioParaInfo} The decoded data structure.
 */
export
function _decode_UniqueIdentifierOfBioParaInfo (el: _Element): UniqueIdentifierOfBioParaInfo {
    if (!_cached_decoder_for_UniqueIdentifierOfBioParaInfo) { _cached_decoder_for_UniqueIdentifierOfBioParaInfo = _decode_UniqueIdentifier; }
    return _cached_decoder_for_UniqueIdentifierOfBioParaInfo(el);
}

let _cached_encoder_for_UniqueIdentifierOfBioParaInfo: $.ASN1Encoder<UniqueIdentifierOfBioParaInfo> | null = null;

/**
 * @summary Encodes a(n) UniqueIdentifierOfBioParaInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueIdentifierOfBioParaInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UniqueIdentifierOfBioParaInfo (value: UniqueIdentifierOfBioParaInfo, elGetter: $.ASN1Encoder<UniqueIdentifierOfBioParaInfo>): _Element {
    if (!_cached_encoder_for_UniqueIdentifierOfBioParaInfo) { _cached_encoder_for_UniqueIdentifierOfBioParaInfo = _encode_UniqueIdentifier; }
    return _cached_encoder_for_UniqueIdentifierOfBioParaInfo(value, elGetter);
}


/* eslint-enable */
