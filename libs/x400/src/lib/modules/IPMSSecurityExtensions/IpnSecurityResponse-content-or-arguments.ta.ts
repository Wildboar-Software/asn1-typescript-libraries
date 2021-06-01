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
    OriginalContent,
    _decode_OriginalContent,
    _encode_OriginalContent,
} from '../IPMSSecurityExtensions/OriginalContent.ta';
export {
    OriginalContent,
    _decode_OriginalContent,
    _encode_OriginalContent,
} from '../IPMSSecurityExtensions/OriginalContent.ta';
import {
    IpnSecurityResponse_content_or_arguments_original_security_arguments,
    _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
    _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
} from '../IPMSSecurityExtensions/IpnSecurityResponse-content-or-arguments-original-security-arguments.ta';
export {
    IpnSecurityResponse_content_or_arguments_original_security_arguments,
    _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
    _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
} from '../IPMSSecurityExtensions/IpnSecurityResponse-content-or-arguments-original-security-arguments.ta';

/* START_OF_SYMBOL_DEFINITION IpnSecurityResponse_content_or_arguments */
/**
 * @summary IpnSecurityResponse_content_or_arguments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IpnSecurityResponse-content-or-arguments ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type IpnSecurityResponse_content_or_arguments =
    | { original_content: OriginalContent } /* CHOICE_ALT_ROOT */
    | {
          original_security_arguments: IpnSecurityResponse_content_or_arguments_original_security_arguments;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION IpnSecurityResponse_content_or_arguments */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IpnSecurityResponse_content_or_arguments */
let _cached_decoder_for_IpnSecurityResponse_content_or_arguments: $.ASN1Decoder<IpnSecurityResponse_content_or_arguments> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IpnSecurityResponse_content_or_arguments */

/* START_OF_SYMBOL_DEFINITION _decode_IpnSecurityResponse_content_or_arguments */
/**
 * @summary Decodes an ASN.1 element into a(n) IpnSecurityResponse_content_or_arguments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IpnSecurityResponse_content_or_arguments} The decoded data structure.
 */
export function _decode_IpnSecurityResponse_content_or_arguments(el: _Element) {
    if (!_cached_decoder_for_IpnSecurityResponse_content_or_arguments) {
        _cached_decoder_for_IpnSecurityResponse_content_or_arguments = $._decode_inextensible_choice<IpnSecurityResponse_content_or_arguments>(
            {
                'UNIVERSAL 4': ['original_content', _decode_OriginalContent],
                'UNIVERSAL 17': [
                    'original_security_arguments',
                    _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
                ],
            }
        );
    }
    return _cached_decoder_for_IpnSecurityResponse_content_or_arguments(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IpnSecurityResponse_content_or_arguments */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IpnSecurityResponse_content_or_arguments */
let _cached_encoder_for_IpnSecurityResponse_content_or_arguments: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IpnSecurityResponse_content_or_arguments */

/* START_OF_SYMBOL_DEFINITION _encode_IpnSecurityResponse_content_or_arguments */
/**
 * @summary Encodes a(n) IpnSecurityResponse_content_or_arguments into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpnSecurityResponse_content_or_arguments, encoded as an ASN.1 Element.
 */
export function _encode_IpnSecurityResponse_content_or_arguments(
    value: IpnSecurityResponse_content_or_arguments,
    elGetter: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments>
) {
    if (!_cached_encoder_for_IpnSecurityResponse_content_or_arguments) {
        _cached_encoder_for_IpnSecurityResponse_content_or_arguments = $._encode_choice<IpnSecurityResponse_content_or_arguments>(
            {
                original_content: _encode_OriginalContent,
                original_security_arguments: _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
            },
            $.BER
        );
    }
    return _cached_encoder_for_IpnSecurityResponse_content_or_arguments(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_IpnSecurityResponse_content_or_arguments */

/* eslint-enable */
