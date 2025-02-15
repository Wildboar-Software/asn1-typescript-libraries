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
    ConnectivityPointer,
    _decode_ConnectivityPointer,
    _encode_ConnectivityPointer,
} from '../ASN1DefinedTypesModule/ConnectivityPointer.ta';
export {
    ConnectivityPointer,
    _decode_ConnectivityPointer,
    _encode_ConnectivityPointer,
} from '../ASN1DefinedTypesModule/ConnectivityPointer.ta';

/* START_OF_SYMBOL_DEFINITION CTPUpstreamPointer */
/**
 * @summary CTPUpstreamPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CTPUpstreamPointer  ::=
 *   ConnectivityPointer
 *     (WITH COMPONENTS {
 *        ...,
 *
 *        -- the other two choices are present
 *        concatenated  ABSENT
 *      })
 * ```
 */
export type CTPUpstreamPointer = ConnectivityPointer; // DefinedType
/* END_OF_SYMBOL_DEFINITION CTPUpstreamPointer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CTPUpstreamPointer */
let _cached_decoder_for_CTPUpstreamPointer: $.ASN1Decoder<CTPUpstreamPointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CTPUpstreamPointer */

/* START_OF_SYMBOL_DEFINITION _decode_CTPUpstreamPointer */
/**
 * @summary Decodes an ASN.1 element into a(n) CTPUpstreamPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CTPUpstreamPointer} The decoded data structure.
 */
export function _decode_CTPUpstreamPointer(el: _Element) {
    if (!_cached_decoder_for_CTPUpstreamPointer) {
        _cached_decoder_for_CTPUpstreamPointer = _decode_ConnectivityPointer;
    }
    return _cached_decoder_for_CTPUpstreamPointer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CTPUpstreamPointer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CTPUpstreamPointer */
let _cached_encoder_for_CTPUpstreamPointer: $.ASN1Encoder<CTPUpstreamPointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CTPUpstreamPointer */

/* START_OF_SYMBOL_DEFINITION _encode_CTPUpstreamPointer */
/**
 * @summary Encodes a(n) CTPUpstreamPointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTPUpstreamPointer, encoded as an ASN.1 Element.
 */
export function _encode_CTPUpstreamPointer(
    value: CTPUpstreamPointer,
    elGetter: $.ASN1Encoder<CTPUpstreamPointer>
) {
    if (!_cached_encoder_for_CTPUpstreamPointer) {
        _cached_encoder_for_CTPUpstreamPointer = _encode_ConnectivityPointer;
    }
    return _cached_encoder_for_CTPUpstreamPointer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CTPUpstreamPointer */

/* eslint-enable */
