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
import { DfrTitle, _decode_DfrTitle, _encode_DfrTitle } from "../DFRAbstractService/DfrTitle.ta.mjs";


/**
 * @summary DfrPathName
 * @description
 *
 * Sequence of `DfrTitle` values identifying an entry. After Cor.1 this is the
 * titles of the entry and all ancestors, from the root down. Unambiguous only
 * if title uniqueness is enforced (local or global). ISO/IEC 10166-1:1991
 * §8.1.4; ISO/IEC 10166-1:1991/Cor.1:1994 §8.1.4, §9.2.5. Cor.3 removed the
 * convention that a root group's pathname is empty (ISO/IEC
 * 10166-1:1991/Cor.3:1994 §9.2.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrPathName  ::=  SEQUENCE OF DfrTitle
 * ```
 */
export
type DfrPathName = DfrTitle[]; // SequenceOfType

let _cached_decoder_for_DfrPathName: $.ASN1Decoder<DfrPathName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrPathName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrPathName (el: _Element): DfrPathName {
    if (!_cached_decoder_for_DfrPathName) { _cached_decoder_for_DfrPathName = $._decodeSequenceOf<DfrTitle>(() => _decode_DfrTitle); }
    return _cached_decoder_for_DfrPathName(el);
}

let _cached_encoder_for_DfrPathName: $.ASN1Encoder<DfrPathName> | null = null;

/**
 * @summary Encodes a(n) DfrPathName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrPathName, encoded as an ASN.1 Element.
 */
export
function _encode_DfrPathName (value: DfrPathName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrPathName) { _cached_encoder_for_DfrPathName = $._encodeSequenceOf<DfrTitle>(() => _encode_DfrTitle, $.BER); }
    return _cached_encoder_for_DfrPathName(value, elGetter);
}


/* eslint-enable */
