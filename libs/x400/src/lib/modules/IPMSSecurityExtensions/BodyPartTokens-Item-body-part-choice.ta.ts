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
    EncryptionToken,
    _decode_EncryptionToken,
    _encode_EncryptionToken,
} from '../IPMSSecurityExtensions/EncryptionToken.ta';
export {
    EncryptionToken,
    _decode_EncryptionToken,
    _encode_EncryptionToken,
} from '../IPMSSecurityExtensions/EncryptionToken.ta';
import {
    BodyPartTokens,
    _decode_BodyPartTokens,
    _encode_BodyPartTokens,
} from '../IPMSSecurityExtensions/BodyPartTokens.ta';
export {
    BodyPartTokens,
    _decode_BodyPartTokens,
    _encode_BodyPartTokens,
} from '../IPMSSecurityExtensions/BodyPartTokens.ta';

/* START_OF_SYMBOL_DEFINITION BodyPartTokens_Item_body_part_choice */
/**
 * @summary BodyPartTokens_Item_body_part_choice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartTokens-Item-body-part-choice ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BodyPartTokens_Item_body_part_choice =
    | { encryption_token: EncryptionToken } /* CHOICE_ALT_ROOT */
    | { message_or_content_body_part: BodyPartTokens } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BodyPartTokens_Item_body_part_choice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartTokens_Item_body_part_choice */
let _cached_decoder_for_BodyPartTokens_Item_body_part_choice: $.ASN1Decoder<BodyPartTokens_Item_body_part_choice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartTokens_Item_body_part_choice */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartTokens_Item_body_part_choice */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartTokens_Item_body_part_choice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartTokens_Item_body_part_choice} The decoded data structure.
 */
export function _decode_BodyPartTokens_Item_body_part_choice(el: _Element) {
    if (!_cached_decoder_for_BodyPartTokens_Item_body_part_choice) {
        _cached_decoder_for_BodyPartTokens_Item_body_part_choice = $._decode_inextensible_choice<BodyPartTokens_Item_body_part_choice>(
            {
                'UNIVERSAL 17': ['encryption_token', _decode_EncryptionToken],
                'CONTEXT 0': [
                    'message_or_content_body_part',
                    $._decode_implicit<BodyPartTokens>(
                        () => _decode_BodyPartTokens
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BodyPartTokens_Item_body_part_choice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartTokens_Item_body_part_choice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartTokens_Item_body_part_choice */
let _cached_encoder_for_BodyPartTokens_Item_body_part_choice: $.ASN1Encoder<BodyPartTokens_Item_body_part_choice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartTokens_Item_body_part_choice */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartTokens_Item_body_part_choice */
/**
 * @summary Encodes a(n) BodyPartTokens_Item_body_part_choice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartTokens_Item_body_part_choice, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartTokens_Item_body_part_choice(
    value: BodyPartTokens_Item_body_part_choice,
    elGetter: $.ASN1Encoder<BodyPartTokens_Item_body_part_choice>
) {
    if (!_cached_encoder_for_BodyPartTokens_Item_body_part_choice) {
        _cached_encoder_for_BodyPartTokens_Item_body_part_choice = $._encode_choice<BodyPartTokens_Item_body_part_choice>(
            {
                encryption_token: _encode_EncryptionToken,
                message_or_content_body_part: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_BodyPartTokens,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartTokens_Item_body_part_choice(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartTokens_Item_body_part_choice */

/* eslint-enable */
