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
import { SMIMECapability, _decode_SMIMECapability, _encode_SMIMECapability } from "../AlgorithmInformation-2009/SMIMECapability.ta.mjs";

/**
 * @summary SMIMECapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMIMECapabilities { SMIME-CAPS:CapabilitySet }  ::=
 * SEQUENCE SIZE (1..MAX) OF SMIMECapability{{CapabilitySet} }
 * ```
 */
export
type SMIMECapabilities = SMIMECapability[]; // SequenceOfType


let _cached_decoder_for_SMIMECapabilities: $.ASN1Decoder<SMIMECapabilities> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SMIMECapabilities
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SMIMECapabilities} The decoded data structure.
 */
export
function _decode_SMIMECapabilities (el: _Element): SMIMECapabilities {
    if (!_cached_decoder_for_SMIMECapabilities) { _cached_decoder_for_SMIMECapabilities = $._decodeSequenceOf<SMIMECapability>(() => _decode_SMIMECapability); }
    return _cached_decoder_for_SMIMECapabilities(el);
}


let _cached_encoder_for_SMIMECapabilities: $.ASN1Encoder<SMIMECapabilities> | null = null;


/**
 * @summary Encodes a(n) SMIMECapabilities into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMIMECapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_SMIMECapabilities (value: SMIMECapabilities, elGetter: $.ASN1Encoder<SMIMECapabilities>): _Element {
    if (!_cached_encoder_for_SMIMECapabilities) { _cached_encoder_for_SMIMECapabilities = $._encodeSequenceOf<SMIMECapability>(() => _encode_SMIMECapability, $.DER); }
    return _cached_encoder_for_SMIMECapabilities(value, elGetter);
}


/* eslint-enable */
