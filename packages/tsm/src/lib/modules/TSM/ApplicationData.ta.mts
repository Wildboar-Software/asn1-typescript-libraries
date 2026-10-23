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
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary ApplicationData
 * @description
 *
 * Record-layer application payload (`Opaque`). After the handshake,
 * biometric transportation data for the negotiated model is carried
 * here (clause 11; transfer encodings in Appendices I–II). ITU-T Rec.
 * X.1084 (05/2008) §10, §10.3.1, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationData  ::=     Opaque
 * ```
 */
export
type ApplicationData = Opaque; // DefinedType

let _cached_decoder_for_ApplicationData: $.ASN1Decoder<ApplicationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationData (el: _Element): ApplicationData {
    if (!_cached_decoder_for_ApplicationData) { _cached_decoder_for_ApplicationData = _decode_Opaque; }
    return _cached_decoder_for_ApplicationData(el);
}

let _cached_encoder_for_ApplicationData: $.ASN1Encoder<ApplicationData> | null = null;

/**
 * @summary Encodes a(n) ApplicationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationData, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationData (value: ApplicationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationData) { _cached_encoder_for_ApplicationData = _encode_Opaque; }
    return _cached_encoder_for_ApplicationData(value, elGetter);
}


/* eslint-enable */
