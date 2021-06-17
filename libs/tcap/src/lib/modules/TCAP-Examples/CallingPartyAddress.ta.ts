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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    IsdnNumber,
    _decode_IsdnNumber,
    _encode_IsdnNumber,
} from '../TCAP-Examples/IsdnNumber.ta';
export {
    IsdnNumber,
    _decode_IsdnNumber,
    _encode_IsdnNumber,
} from '../TCAP-Examples/IsdnNumber.ta';

/* START_OF_SYMBOL_DEFINITION CallingPartyAddress */
/**
 * @summary CallingPartyAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallingPartyAddress  ::=  IsdnNumber
 * ```
 */
export type CallingPartyAddress = IsdnNumber; // DefinedType
/* END_OF_SYMBOL_DEFINITION CallingPartyAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CallingPartyAddress */
let _cached_decoder_for_CallingPartyAddress: $.ASN1Decoder<CallingPartyAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CallingPartyAddress */

/* START_OF_SYMBOL_DEFINITION _decode_CallingPartyAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) CallingPartyAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CallingPartyAddress} The decoded data structure.
 */
export function _decode_CallingPartyAddress(el: _Element) {
    if (!_cached_decoder_for_CallingPartyAddress) {
        _cached_decoder_for_CallingPartyAddress = _decode_IsdnNumber;
    }
    return _cached_decoder_for_CallingPartyAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CallingPartyAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CallingPartyAddress */
let _cached_encoder_for_CallingPartyAddress: $.ASN1Encoder<CallingPartyAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CallingPartyAddress */

/* START_OF_SYMBOL_DEFINITION _encode_CallingPartyAddress */
/**
 * @summary Encodes a(n) CallingPartyAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingPartyAddress, encoded as an ASN.1 Element.
 */
export function _encode_CallingPartyAddress(
    value: CallingPartyAddress,
    elGetter: $.ASN1Encoder<CallingPartyAddress>
) {
    if (!_cached_encoder_for_CallingPartyAddress) {
        _cached_encoder_for_CallingPartyAddress = _encode_IsdnNumber;
    }
    return _cached_encoder_for_CallingPartyAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CallingPartyAddress */

/* eslint-enable */
