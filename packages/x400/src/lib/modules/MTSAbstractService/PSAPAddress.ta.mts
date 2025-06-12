/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta.mjs';
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PSAPAddress */
/**
 * @summary PSAPAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSAPAddress  ::=  PresentationAddress
 * ```
 */
export type PSAPAddress = PresentationAddress; // DefinedType
/* END_OF_SYMBOL_DEFINITION PSAPAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PSAPAddress */
let _cached_decoder_for_PSAPAddress: $.ASN1Decoder<PSAPAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PSAPAddress */

/* START_OF_SYMBOL_DEFINITION _decode_PSAPAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) PSAPAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PSAPAddress} The decoded data structure.
 */
export function _decode_PSAPAddress(el: _Element) {
    if (!_cached_decoder_for_PSAPAddress) {
        _cached_decoder_for_PSAPAddress = _decode_PresentationAddress;
    }
    return _cached_decoder_for_PSAPAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PSAPAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PSAPAddress */
let _cached_encoder_for_PSAPAddress: $.ASN1Encoder<PSAPAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PSAPAddress */

/* START_OF_SYMBOL_DEFINITION _encode_PSAPAddress */
/**
 * @summary Encodes a(n) PSAPAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSAPAddress, encoded as an ASN.1 Element.
 */
export function _encode_PSAPAddress(
    value: PSAPAddress,
    elGetter: $.ASN1Encoder<PSAPAddress>
) {
    if (!_cached_encoder_for_PSAPAddress) {
        _cached_encoder_for_PSAPAddress = _encode_PresentationAddress;
    }
    return _cached_encoder_for_PSAPAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PSAPAddress */

/* eslint-enable */
