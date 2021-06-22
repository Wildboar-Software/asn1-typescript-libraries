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
import { ALGORITHM } from '../PKI-Stub/ALGORITHM.oca';
export { ALGORITHM } from '../PKI-Stub/ALGORITHM.oca';

/* START_OF_SYMBOL_DEFINITION AlgoInvoke */
/**
 * @summary AlgoInvoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgoInvoke{ALGORITHM:SupportedAlgorithms}  ::=
 *     ALGORITHM.&DynParms({SupportedAlgorithms})
 * ```
 */
export type AlgoInvoke = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgoInvoke */
let _cached_decoder_for_AlgoInvoke: $.ASN1Decoder<AlgoInvoke> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _decode_AlgoInvoke */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgoInvoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgoInvoke} The decoded data structure.
 */
export function _decode_AlgoInvoke(el: _Element) {
    if (!_cached_decoder_for_AlgoInvoke) {
        _cached_decoder_for_AlgoInvoke = $._decodeAny;
    }
    return _cached_decoder_for_AlgoInvoke(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgoInvoke */
let _cached_encoder_for_AlgoInvoke: $.ASN1Encoder<AlgoInvoke> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _encode_AlgoInvoke */
/**
 * @summary Encodes a(n) AlgoInvoke into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgoInvoke, encoded as an ASN.1 Element.
 */
export function _encode_AlgoInvoke(
    value: AlgoInvoke,
    elGetter: $.ASN1Encoder<AlgoInvoke>
) {
    if (!_cached_encoder_for_AlgoInvoke) {
        _cached_encoder_for_AlgoInvoke = $._encodeAny;
    }
    return _cached_encoder_for_AlgoInvoke(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgoInvoke */

/* eslint-enable */
