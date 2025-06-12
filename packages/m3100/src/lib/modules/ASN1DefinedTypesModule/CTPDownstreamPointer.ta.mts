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
    DownstreamConnectivityPointer,
    _decode_DownstreamConnectivityPointer,
    _encode_DownstreamConnectivityPointer,
} from '../ASN1DefinedTypesModule/DownstreamConnectivityPointer.ta.mjs';
export {
    DownstreamConnectivityPointer,
    _decode_DownstreamConnectivityPointer,
    _encode_DownstreamConnectivityPointer,
} from '../ASN1DefinedTypesModule/DownstreamConnectivityPointer.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CTPDownstreamPointer */
/**
 * @summary CTPDownstreamPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CTPDownstreamPointer  ::=
 *   DownstreamConnectivityPointer
 *     (WITH COMPONENTS {
 *        ...,
 *        concatenated           ABSENT,
 *        broadcastConcatenated  ABSENT
 *
 *      -- other choices are present
 *      })
 * ```
 */
export type CTPDownstreamPointer = DownstreamConnectivityPointer; // DefinedType
/* END_OF_SYMBOL_DEFINITION CTPDownstreamPointer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CTPDownstreamPointer */
let _cached_decoder_for_CTPDownstreamPointer: $.ASN1Decoder<CTPDownstreamPointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CTPDownstreamPointer */

/* START_OF_SYMBOL_DEFINITION _decode_CTPDownstreamPointer */
/**
 * @summary Decodes an ASN.1 element into a(n) CTPDownstreamPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CTPDownstreamPointer} The decoded data structure.
 */
export function _decode_CTPDownstreamPointer(el: _Element) {
    if (!_cached_decoder_for_CTPDownstreamPointer) {
        _cached_decoder_for_CTPDownstreamPointer = _decode_DownstreamConnectivityPointer;
    }
    return _cached_decoder_for_CTPDownstreamPointer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CTPDownstreamPointer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CTPDownstreamPointer */
let _cached_encoder_for_CTPDownstreamPointer: $.ASN1Encoder<CTPDownstreamPointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CTPDownstreamPointer */

/* START_OF_SYMBOL_DEFINITION _encode_CTPDownstreamPointer */
/**
 * @summary Encodes a(n) CTPDownstreamPointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTPDownstreamPointer, encoded as an ASN.1 Element.
 */
export function _encode_CTPDownstreamPointer(
    value: CTPDownstreamPointer,
    elGetter: $.ASN1Encoder<CTPDownstreamPointer>
) {
    if (!_cached_encoder_for_CTPDownstreamPointer) {
        _cached_encoder_for_CTPDownstreamPointer = _encode_DownstreamConnectivityPointer;
    }
    return _cached_encoder_for_CTPDownstreamPointer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CTPDownstreamPointer */

/* eslint-enable */
