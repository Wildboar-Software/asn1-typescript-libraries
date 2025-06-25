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
import { BiometricPara_Item, _decode_BiometricPara_Item, _encode_BiometricPara_Item } from "../TAI/BiometricPara-Item.ta.mjs";
/**
 * @summary BiometricPara
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricPara  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {biometricType   BIT STRING,
 *               --CBEFF defined type
 *               fMR-Value       INTEGER(-2147483648..2147483647),
 *               trialNumber     INTEGER OPTIONAL,
 *               requestQuality  INTEGER OPTIONAL,
 *               ...}
 * ```
 */
export
type BiometricPara = BiometricPara_Item[]; // SequenceOfType

let _cached_decoder_for_BiometricPara: $.ASN1Decoder<BiometricPara> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricPara
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricPara} The decoded data structure.
 */
export
function _decode_BiometricPara (el: _Element): BiometricPara {
    if (!_cached_decoder_for_BiometricPara) { _cached_decoder_for_BiometricPara = $._decodeSequenceOf<BiometricPara_Item>(() => _decode_BiometricPara_Item); }
    return _cached_decoder_for_BiometricPara(el);
}

let _cached_encoder_for_BiometricPara: $.ASN1Encoder<BiometricPara> | null = null;

/**
 * @summary Encodes a(n) BiometricPara into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricPara, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricPara (value: BiometricPara, elGetter: $.ASN1Encoder<BiometricPara>): _Element {
    if (!_cached_encoder_for_BiometricPara) { _cached_encoder_for_BiometricPara = $._encodeSequenceOf<BiometricPara_Item>(() => _encode_BiometricPara_Item, $.BER); }
    return _cached_encoder_for_BiometricPara(value, elGetter);
}


/* eslint-enable */
