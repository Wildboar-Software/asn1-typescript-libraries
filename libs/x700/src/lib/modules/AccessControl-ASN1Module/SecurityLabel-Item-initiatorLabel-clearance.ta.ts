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

/* START_OF_SYMBOL_DEFINITION SecurityLabel_Item_initiatorLabel_clearance */
/**
 * @summary SecurityLabel_Item_initiatorLabel_clearance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabel-Item-initiatorLabel-clearance ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SecurityLabel_Item_initiatorLabel_clearance =
    | { localForm: INTEGER } /* CHOICE_ALT_ROOT */
    | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SecurityLabel_Item_initiatorLabel_clearance */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance */
let _cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance: $.ASN1Decoder<SecurityLabel_Item_initiatorLabel_clearance> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityLabel_Item_initiatorLabel_clearance */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabel_Item_initiatorLabel_clearance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabel_Item_initiatorLabel_clearance} The decoded data structure.
 */
export function _decode_SecurityLabel_Item_initiatorLabel_clearance(
    el: _Element
) {
    if (!_cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance) {
        _cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance = $._decode_inextensible_choice<SecurityLabel_Item_initiatorLabel_clearance>(
            {
                'CONTEXT 0': [
                    'localForm',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 1': [
                    'globalForm',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityLabel_Item_initiatorLabel_clearance */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance */
let _cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance: $.ASN1Encoder<SecurityLabel_Item_initiatorLabel_clearance> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityLabel_Item_initiatorLabel_clearance */
/**
 * @summary Encodes a(n) SecurityLabel_Item_initiatorLabel_clearance into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabel_Item_initiatorLabel_clearance, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabel_Item_initiatorLabel_clearance(
    value: SecurityLabel_Item_initiatorLabel_clearance,
    elGetter: $.ASN1Encoder<SecurityLabel_Item_initiatorLabel_clearance>
) {
    if (!_cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance) {
        _cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance = $._encode_choice<SecurityLabel_Item_initiatorLabel_clearance>(
            {
                localForm: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                globalForm: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityLabel_Item_initiatorLabel_clearance */

/* eslint-enable */
