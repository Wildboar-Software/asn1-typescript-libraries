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
    AARQ_apdu,
    _decode_AARQ_apdu,
    _encode_AARQ_apdu,
} from '../DialoguePDUs/AARQ-apdu.ta.js';
export {
    AARQ_apdu,
    _decode_AARQ_apdu,
    _encode_AARQ_apdu,
} from '../DialoguePDUs/AARQ-apdu.ta.js';
import {
    AARE_apdu,
    _decode_AARE_apdu,
    _encode_AARE_apdu,
} from '../DialoguePDUs/AARE-apdu.ta.js';
export {
    AARE_apdu,
    _decode_AARE_apdu,
    _encode_AARE_apdu,
} from '../DialoguePDUs/AARE-apdu.ta.js';
import {
    ABRT_apdu,
    _decode_ABRT_apdu,
    _encode_ABRT_apdu,
} from '../DialoguePDUs/ABRT-apdu.ta.js';
export {
    ABRT_apdu,
    _decode_ABRT_apdu,
    _encode_ABRT_apdu,
} from '../DialoguePDUs/ABRT-apdu.ta.js';

/* START_OF_SYMBOL_DEFINITION DialoguePDU */
/**
 * @summary DialoguePDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialoguePDU  ::=  CHOICE {
 *   dialogueRequest   AARQ-apdu,
 *   dialogueResponse  AARE-apdu,
 *   dialogueAbort     ABRT-apdu
 * }
 * ```
 */
export type DialoguePDU =
    | { dialogueRequest: AARQ_apdu } /* CHOICE_ALT_ROOT */
    | { dialogueResponse: AARE_apdu } /* CHOICE_ALT_ROOT */
    | { dialogueAbort: ABRT_apdu } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DialoguePDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DialoguePDU */
let _cached_decoder_for_DialoguePDU: $.ASN1Decoder<DialoguePDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DialoguePDU */

/* START_OF_SYMBOL_DEFINITION _decode_DialoguePDU */
/**
 * @summary Decodes an ASN.1 element into a(n) DialoguePDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DialoguePDU} The decoded data structure.
 */
export function _decode_DialoguePDU(el: _Element) {
    if (!_cached_decoder_for_DialoguePDU) {
        _cached_decoder_for_DialoguePDU = $._decode_inextensible_choice<DialoguePDU>(
            {
                'APPLICATION 0': ['dialogueRequest', _decode_AARQ_apdu],
                'APPLICATION 1': ['dialogueResponse', _decode_AARE_apdu],
                'APPLICATION 4': ['dialogueAbort', _decode_ABRT_apdu],
            }
        );
    }
    return _cached_decoder_for_DialoguePDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DialoguePDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DialoguePDU */
let _cached_encoder_for_DialoguePDU: $.ASN1Encoder<DialoguePDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DialoguePDU */

/* START_OF_SYMBOL_DEFINITION _encode_DialoguePDU */
/**
 * @summary Encodes a(n) DialoguePDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialoguePDU, encoded as an ASN.1 Element.
 */
export function _encode_DialoguePDU(
    value: DialoguePDU,
    elGetter: $.ASN1Encoder<DialoguePDU>
) {
    if (!_cached_encoder_for_DialoguePDU) {
        _cached_encoder_for_DialoguePDU = $._encode_choice<DialoguePDU>(
            {
                dialogueRequest: _encode_AARQ_apdu,
                dialogueResponse: _encode_AARE_apdu,
                dialogueAbort: _encode_ABRT_apdu,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DialoguePDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DialoguePDU */

/* eslint-enable */
