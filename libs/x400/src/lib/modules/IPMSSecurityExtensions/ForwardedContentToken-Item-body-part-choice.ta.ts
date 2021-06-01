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
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta';
export {
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta';
import {
    ForwardedContentToken,
    _decode_ForwardedContentToken,
    _encode_ForwardedContentToken,
} from '../IPMSSecurityExtensions/ForwardedContentToken.ta';
export {
    ForwardedContentToken,
    _decode_ForwardedContentToken,
    _encode_ForwardedContentToken,
} from '../IPMSSecurityExtensions/ForwardedContentToken.ta';

/* START_OF_SYMBOL_DEFINITION ForwardedContentToken_Item_body_part_choice */
/**
 * @summary ForwardedContentToken_Item_body_part_choice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardedContentToken-Item-body-part-choice ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ForwardedContentToken_Item_body_part_choice =
    | { forwarding_token: MessageToken } /* CHOICE_ALT_ROOT */
    | {
          message_or_content_body_part: ForwardedContentToken;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ForwardedContentToken_Item_body_part_choice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardedContentToken_Item_body_part_choice */
let _cached_decoder_for_ForwardedContentToken_Item_body_part_choice: $.ASN1Decoder<ForwardedContentToken_Item_body_part_choice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardedContentToken_Item_body_part_choice */

/* START_OF_SYMBOL_DEFINITION _decode_ForwardedContentToken_Item_body_part_choice */
/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedContentToken_Item_body_part_choice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardedContentToken_Item_body_part_choice} The decoded data structure.
 */
export function _decode_ForwardedContentToken_Item_body_part_choice(
    el: _Element
) {
    if (!_cached_decoder_for_ForwardedContentToken_Item_body_part_choice) {
        _cached_decoder_for_ForwardedContentToken_Item_body_part_choice = $._decode_inextensible_choice<ForwardedContentToken_Item_body_part_choice>(
            {
                'UNIVERSAL 16': ['forwarding_token', _decode_MessageToken],
                'UNIVERSAL 17': [
                    'message_or_content_body_part',
                    _decode_ForwardedContentToken,
                ],
            }
        );
    }
    return _cached_decoder_for_ForwardedContentToken_Item_body_part_choice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ForwardedContentToken_Item_body_part_choice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardedContentToken_Item_body_part_choice */
let _cached_encoder_for_ForwardedContentToken_Item_body_part_choice: $.ASN1Encoder<ForwardedContentToken_Item_body_part_choice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardedContentToken_Item_body_part_choice */

/* START_OF_SYMBOL_DEFINITION _encode_ForwardedContentToken_Item_body_part_choice */
/**
 * @summary Encodes a(n) ForwardedContentToken_Item_body_part_choice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedContentToken_Item_body_part_choice, encoded as an ASN.1 Element.
 */
export function _encode_ForwardedContentToken_Item_body_part_choice(
    value: ForwardedContentToken_Item_body_part_choice,
    elGetter: $.ASN1Encoder<ForwardedContentToken_Item_body_part_choice>
) {
    if (!_cached_encoder_for_ForwardedContentToken_Item_body_part_choice) {
        _cached_encoder_for_ForwardedContentToken_Item_body_part_choice = $._encode_choice<ForwardedContentToken_Item_body_part_choice>(
            {
                forwarding_token: _encode_MessageToken,
                message_or_content_body_part: _encode_ForwardedContentToken,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ForwardedContentToken_Item_body_part_choice(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ForwardedContentToken_Item_body_part_choice */

/* eslint-enable */
