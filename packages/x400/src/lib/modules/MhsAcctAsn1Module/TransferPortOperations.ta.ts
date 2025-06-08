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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta';
export {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta';

/* START_OF_SYMBOL_DEFINITION TransferPortOperations */
/**
 * @summary TransferPortOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferPortOperations  ::=
 *   EventTypeId
 *     (message-transfer-in | message-transfer-out | probe-transfer-in |
 *      probe-transfer-out | report-transfer-in | report-transfer-out)
 * ```
 */
export type TransferPortOperations = EventTypeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION TransferPortOperations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransferPortOperations */
let _cached_decoder_for_TransferPortOperations: $.ASN1Decoder<TransferPortOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransferPortOperations */

/* START_OF_SYMBOL_DEFINITION _decode_TransferPortOperations */
/**
 * @summary Decodes an ASN.1 element into a(n) TransferPortOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransferPortOperations} The decoded data structure.
 */
export function _decode_TransferPortOperations(el: _Element) {
    if (!_cached_decoder_for_TransferPortOperations) {
        _cached_decoder_for_TransferPortOperations = _decode_EventTypeId;
    }
    return _cached_decoder_for_TransferPortOperations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransferPortOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransferPortOperations */
let _cached_encoder_for_TransferPortOperations: $.ASN1Encoder<TransferPortOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransferPortOperations */

/* START_OF_SYMBOL_DEFINITION _encode_TransferPortOperations */
/**
 * @summary Encodes a(n) TransferPortOperations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferPortOperations, encoded as an ASN.1 Element.
 */
export function _encode_TransferPortOperations(
    value: TransferPortOperations,
    elGetter: $.ASN1Encoder<TransferPortOperations>
) {
    if (!_cached_encoder_for_TransferPortOperations) {
        _cached_encoder_for_TransferPortOperations = _encode_EventTypeId;
    }
    return _cached_encoder_for_TransferPortOperations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransferPortOperations */

/* eslint-enable */
