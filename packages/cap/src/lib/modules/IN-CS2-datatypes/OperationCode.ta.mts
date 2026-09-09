/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
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



/**
 * @summary OperationCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationCode  ::=  CHOICE {globalCode  OBJECT IDENTIFIER,
 *                           local       INTEGER
 * }
 * ```
 */
export
type OperationCode =
    { globalCode: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { local: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OperationCode: $.ASN1Decoder<OperationCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OperationCode (el: _Element): OperationCode {
    if (!_cached_decoder_for_OperationCode) { _cached_decoder_for_OperationCode = $._decode_inextensible_choice<OperationCode>({
    "UNIVERSAL 6": [ "globalCode", $._decodeObjectIdentifier ],
    "UNIVERSAL 2": [ "local", $._decodeInteger ]
}); }
    return _cached_decoder_for_OperationCode(el);
}

let _cached_encoder_for_OperationCode: $.ASN1Encoder<OperationCode> | null = null;

/**
 * @summary Encodes a(n) OperationCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationCode, encoded as an ASN.1 Element.
 */
export
function _encode_OperationCode (value: OperationCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OperationCode) { _cached_encoder_for_OperationCode = $._encode_choice<OperationCode>({
    "globalCode": $._encodeObjectIdentifier,
    "local": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_OperationCode(value, elGetter);
}


/* eslint-enable */
