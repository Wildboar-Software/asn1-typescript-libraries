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
import { ModemIdentity_Item, _decode_ModemIdentity_Item, _encode_ModemIdentity_Item } from "../V59/ModemIdentity-Item.ta.mjs";

/**
 * @summary ModemIdentity
 * @description
 *
 * High-level DCE identity (Tag-ID `00xx`). ITU-T Rec. V.59 (11/2000) §6.3,
 * §6.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModemIdentity  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {manufacturer       V59String,
 *               model              V59String,
 *               firmwareVersion    V59String,
 *               diagnosticVersion  V59String,
 *               multimediaMode
 *                 BIT STRING {dataMode(0), faxT30(1), faxT30C(2), fAXT30F(3),
 *                             voiceV253(4), sVDV70(5), sVDV61(6), vidTelH324(7),
 *                             v80other(8), v18Text(9)} OPTIONAL,
 *               ...}
 * ```
 */
export
type ModemIdentity = ModemIdentity_Item[]; // SequenceOfType

let _cached_decoder_for_ModemIdentity: $.ASN1Decoder<ModemIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModemIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModemIdentity (el: _Element): ModemIdentity {
    if (!_cached_decoder_for_ModemIdentity) { _cached_decoder_for_ModemIdentity = $._decodeSequenceOf<ModemIdentity_Item>(() => _decode_ModemIdentity_Item); }
    return _cached_decoder_for_ModemIdentity(el);
}

let _cached_encoder_for_ModemIdentity: $.ASN1Encoder<ModemIdentity> | null = null;

/**
 * @summary Encodes a(n) ModemIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModemIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_ModemIdentity (value: ModemIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModemIdentity) { _cached_encoder_for_ModemIdentity = $._encodeSequenceOf<ModemIdentity_Item>(() => _encode_ModemIdentity_Item, $.BER); }
    return _cached_encoder_for_ModemIdentity(value, elGetter);
}

/* eslint-enable */
