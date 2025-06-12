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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.js';
export {
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.js';
import {
    GenericMessageId,
    _decode_GenericMessageId,
    _encode_GenericMessageId,
} from '../MhsMTAAsn1Module/GenericMessageId.ta.js';
export {
    GenericMessageId,
    _decode_GenericMessageId,
    _encode_GenericMessageId,
} from '../MhsMTAAsn1Module/GenericMessageId.ta.js';

/* START_OF_SYMBOL_DEFINITION EMailMpduIdentifier */
/**
 * @summary EMailMpduIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailMpduIdentifier  ::=  CHOICE {
 *   x400MTSIdentifier      [0]  MTSIdentifier,
 *   genericMpduIdentifier  [1]  GenericMessageId
 * }
 * ```
 */
export type EMailMpduIdentifier =
    | { x400MTSIdentifier: MTSIdentifier } /* CHOICE_ALT_ROOT */
    | { genericMpduIdentifier: GenericMessageId } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailMpduIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailMpduIdentifier */
let _cached_decoder_for_EMailMpduIdentifier: $.ASN1Decoder<EMailMpduIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailMpduIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_EMailMpduIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailMpduIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailMpduIdentifier} The decoded data structure.
 */
export function _decode_EMailMpduIdentifier(el: _Element) {
    if (!_cached_decoder_for_EMailMpduIdentifier) {
        _cached_decoder_for_EMailMpduIdentifier = $._decode_inextensible_choice<EMailMpduIdentifier>(
            {
                'CONTEXT 0': [
                    'x400MTSIdentifier',
                    $._decode_implicit<MTSIdentifier>(
                        () => _decode_MTSIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'genericMpduIdentifier',
                    $._decode_implicit<GenericMessageId>(
                        () => _decode_GenericMessageId
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailMpduIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailMpduIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailMpduIdentifier */
let _cached_encoder_for_EMailMpduIdentifier: $.ASN1Encoder<EMailMpduIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailMpduIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_EMailMpduIdentifier */
/**
 * @summary Encodes a(n) EMailMpduIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailMpduIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_EMailMpduIdentifier(
    value: EMailMpduIdentifier,
    elGetter: $.ASN1Encoder<EMailMpduIdentifier>
) {
    if (!_cached_encoder_for_EMailMpduIdentifier) {
        _cached_encoder_for_EMailMpduIdentifier = $._encode_choice<EMailMpduIdentifier>(
            {
                x400MTSIdentifier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_MTSIdentifier,
                    $.BER
                ),
                genericMpduIdentifier: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericMessageId,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailMpduIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailMpduIdentifier */

/* eslint-enable */
