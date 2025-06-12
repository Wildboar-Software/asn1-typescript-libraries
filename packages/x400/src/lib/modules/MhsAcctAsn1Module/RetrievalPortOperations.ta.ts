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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.js';
export {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.js';

/* START_OF_SYMBOL_DEFINITION RetrievalPortOperations */
/**
 * @summary RetrievalPortOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RetrievalPortOperations  ::=
 *   EventTypeId(alert | delete | fetch | list | register-ms | summarize)
 * ```
 */
export type RetrievalPortOperations = EventTypeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION RetrievalPortOperations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RetrievalPortOperations */
let _cached_decoder_for_RetrievalPortOperations: $.ASN1Decoder<RetrievalPortOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RetrievalPortOperations */

/* START_OF_SYMBOL_DEFINITION _decode_RetrievalPortOperations */
/**
 * @summary Decodes an ASN.1 element into a(n) RetrievalPortOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RetrievalPortOperations} The decoded data structure.
 */
export function _decode_RetrievalPortOperations(el: _Element) {
    if (!_cached_decoder_for_RetrievalPortOperations) {
        _cached_decoder_for_RetrievalPortOperations = _decode_EventTypeId;
    }
    return _cached_decoder_for_RetrievalPortOperations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RetrievalPortOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RetrievalPortOperations */
let _cached_encoder_for_RetrievalPortOperations: $.ASN1Encoder<RetrievalPortOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RetrievalPortOperations */

/* START_OF_SYMBOL_DEFINITION _encode_RetrievalPortOperations */
/**
 * @summary Encodes a(n) RetrievalPortOperations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrievalPortOperations, encoded as an ASN.1 Element.
 */
export function _encode_RetrievalPortOperations(
    value: RetrievalPortOperations,
    elGetter: $.ASN1Encoder<RetrievalPortOperations>
) {
    if (!_cached_encoder_for_RetrievalPortOperations) {
        _cached_encoder_for_RetrievalPortOperations = _encode_EventTypeId;
    }
    return _cached_encoder_for_RetrievalPortOperations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RetrievalPortOperations */

/* eslint-enable */
