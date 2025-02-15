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
    AUDT_apdu,
    _decode_AUDT_apdu,
    _encode_AUDT_apdu,
} from '../UnidialoguePDUs/AUDT-apdu.ta';
export {
    AUDT_apdu,
    _decode_AUDT_apdu,
    _encode_AUDT_apdu,
} from '../UnidialoguePDUs/AUDT-apdu.ta';

/* START_OF_SYMBOL_DEFINITION UniDialoguePDU */
/**
 * @summary UniDialoguePDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniDialoguePDU  ::=  CHOICE {unidialoguePDU  AUDT-apdu
 * }
 * ```
 */
export type UniDialoguePDU = {
    unidialoguePDU: AUDT_apdu;
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION UniDialoguePDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniDialoguePDU */
let _cached_decoder_for_UniDialoguePDU: $.ASN1Decoder<UniDialoguePDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniDialoguePDU */

/* START_OF_SYMBOL_DEFINITION _decode_UniDialoguePDU */
/**
 * @summary Decodes an ASN.1 element into a(n) UniDialoguePDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniDialoguePDU} The decoded data structure.
 */
export function _decode_UniDialoguePDU(el: _Element) {
    if (!_cached_decoder_for_UniDialoguePDU) {
        _cached_decoder_for_UniDialoguePDU = $._decode_inextensible_choice<UniDialoguePDU>(
            {
                'APPLICATION 0': ['unidialoguePDU', _decode_AUDT_apdu],
            }
        );
    }
    return _cached_decoder_for_UniDialoguePDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniDialoguePDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniDialoguePDU */
let _cached_encoder_for_UniDialoguePDU: $.ASN1Encoder<UniDialoguePDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniDialoguePDU */

/* START_OF_SYMBOL_DEFINITION _encode_UniDialoguePDU */
/**
 * @summary Encodes a(n) UniDialoguePDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniDialoguePDU, encoded as an ASN.1 Element.
 */
export function _encode_UniDialoguePDU(
    value: UniDialoguePDU,
    elGetter: $.ASN1Encoder<UniDialoguePDU>
) {
    if (!_cached_encoder_for_UniDialoguePDU) {
        _cached_encoder_for_UniDialoguePDU = $._encode_choice<UniDialoguePDU>(
            {
                unidialoguePDU: _encode_AUDT_apdu,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UniDialoguePDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniDialoguePDU */

/* eslint-enable */
