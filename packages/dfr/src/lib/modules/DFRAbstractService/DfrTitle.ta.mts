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
import { CharacterData, _decode_CharacterData, _encode_CharacterData } from "../DFRAbstractService/CharacterData.ta.mjs";
// export { CharacterData, _decode_CharacterData, _encode_CharacterData } from "../DFRAbstractService/CharacterData.ta.mjs";


/**
 * @summary DfrTitle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrTitle  ::=  CharacterData
 * ```
 */
export
type DfrTitle = CharacterData; // DefinedType

let _cached_decoder_for_DfrTitle: $.ASN1Decoder<DfrTitle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrTitle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrTitle (el: _Element): DfrTitle {
    if (!_cached_decoder_for_DfrTitle) { _cached_decoder_for_DfrTitle = _decode_CharacterData; }
    return _cached_decoder_for_DfrTitle(el);
}

let _cached_encoder_for_DfrTitle: $.ASN1Encoder<DfrTitle> | null = null;

/**
 * @summary Encodes a(n) DfrTitle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrTitle, encoded as an ASN.1 Element.
 */
export
function _encode_DfrTitle (value: DfrTitle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrTitle) { _cached_encoder_for_DfrTitle = _encode_CharacterData; }
    return _cached_encoder_for_DfrTitle(value, elGetter);
}


/* eslint-enable */
