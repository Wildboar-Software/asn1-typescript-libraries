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
    ARU_PPDU,
    _decode_ARU_PPDU,
    _encode_ARU_PPDU,
} from '../ISO8823-PRESENTATION/ARU-PPDU.ta.js';
export {
    ARU_PPDU,
    _decode_ARU_PPDU,
    _encode_ARU_PPDU,
} from '../ISO8823-PRESENTATION/ARU-PPDU.ta.js';
import {
    ARP_PPDU,
    _decode_ARP_PPDU,
    _encode_ARP_PPDU,
} from '../ISO8823-PRESENTATION/ARP-PPDU.ta.js';
export {
    ARP_PPDU,
    _decode_ARP_PPDU,
    _encode_ARP_PPDU,
} from '../ISO8823-PRESENTATION/ARP-PPDU.ta.js';

/* START_OF_SYMBOL_DEFINITION Abort_type */
/**
 * @summary Abort_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort-type  ::=  CHOICE {
 *   aru-ppdu  ARU-PPDU -- for a P-U-ABORT --,
 *   arp-ppdu  ARP-PPDU -- for a P-P-ABORT
 * }
 * ```
 */
export type Abort_type =
    | { aru_ppdu: ARU_PPDU } /* CHOICE_ALT_ROOT */
    | { arp_ppdu: ARP_PPDU } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Abort_type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort_type */
let _cached_decoder_for_Abort_type: $.ASN1Decoder<Abort_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort_type */

/* START_OF_SYMBOL_DEFINITION _decode_Abort_type */
/**
 * @summary Decodes an ASN.1 element into a(n) Abort_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abort_type} The decoded data structure.
 */
export function _decode_Abort_type(el: _Element) {
    if (!_cached_decoder_for_Abort_type) {
        _cached_decoder_for_Abort_type = $._decode_inextensible_choice<Abort_type>(
            {
                'UNIVERSAL 17': ['aru_ppdu', _decode_ARU_PPDU],
                'CONTEXT 0': ['aru_ppdu', _decode_ARU_PPDU],
                'UNIVERSAL 16': ['arp_ppdu', _decode_ARP_PPDU],
            }
        );
    }
    return _cached_decoder_for_Abort_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Abort_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort_type */
let _cached_encoder_for_Abort_type: $.ASN1Encoder<Abort_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort_type */

/* START_OF_SYMBOL_DEFINITION _encode_Abort_type */
/**
 * @summary Encodes a(n) Abort_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort_type, encoded as an ASN.1 Element.
 */
export function _encode_Abort_type(
    value: Abort_type,
    elGetter: $.ASN1Encoder<Abort_type>
) {
    if (!_cached_encoder_for_Abort_type) {
        _cached_encoder_for_Abort_type = $._encode_choice<Abort_type>(
            {
                aru_ppdu: _encode_ARU_PPDU,
                arp_ppdu: _encode_ARP_PPDU,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Abort_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Abort_type */

/* eslint-enable */
