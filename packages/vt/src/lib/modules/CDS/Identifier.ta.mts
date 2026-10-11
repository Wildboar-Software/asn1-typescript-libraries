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
import { Identifier_Item, _decode_Identifier_Item, _encode_Identifier_Item } from "../CDS/Identifier-Item.ta.mjs";


/**
 * @summary Identifier
 * @description
 *
 * MIN invitations for display-object VTE-parameters. Each member names
 * one display object and lists which of its parameters are invited
 * (`NULL` presence = invite). ISO/IEC 9041-1:1997 §12.3.1;
 * ISO/IEC 9040:1997 §18.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Identifier  ::=  SET OF SEQUENCE {
 *     name    PrintableString,
 *     idents  ParameterIdents
 * }
 * ```
 */
export
type Identifier = Identifier_Item[]; // SetOfType

let _cached_decoder_for_Identifier: $.ASN1Decoder<Identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Identifier (el: _Element): Identifier {
    if (!_cached_decoder_for_Identifier) { _cached_decoder_for_Identifier = $._decodeSetOf<Identifier_Item>(() => _decode_Identifier_Item); }
    return _cached_decoder_for_Identifier(el);
}

let _cached_encoder_for_Identifier: $.ASN1Encoder<Identifier> | null = null;

/**
 * @summary Encodes a(n) Identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identifier, encoded as an ASN.1 Element.
 */
export
function _encode_Identifier (value: Identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Identifier) { _cached_encoder_for_Identifier = $._encodeSetOf<Identifier_Item>(() => _encode_Identifier_Item, $.BER); }
    return _cached_encoder_for_Identifier(value, elGetter);
}


/* eslint-enable */
