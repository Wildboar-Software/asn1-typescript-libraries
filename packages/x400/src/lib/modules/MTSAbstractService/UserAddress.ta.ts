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
    UserAddress_x121,
    _decode_UserAddress_x121,
    _encode_UserAddress_x121,
} from '../MTSAbstractService/UserAddress-x121.ta';
export {
    UserAddress_x121,
    _decode_UserAddress_x121,
    _encode_UserAddress_x121,
} from '../MTSAbstractService/UserAddress-x121.ta';
import {
    PSAPAddress,
    _decode_PSAPAddress,
    _encode_PSAPAddress,
} from '../MTSAbstractService/PSAPAddress.ta';
export {
    PSAPAddress,
    _decode_PSAPAddress,
    _encode_PSAPAddress,
} from '../MTSAbstractService/PSAPAddress.ta';

/* START_OF_SYMBOL_DEFINITION UserAddress */
/**
 * @summary UserAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserAddress  ::=  CHOICE {
 *   x121
 *     [0]  SEQUENCE {x121-address
 *                      NumericString(SIZE (1..ub-x121-address-length)) OPTIONAL,
 *                    tsap-id
 *                      PrintableString(SIZE (1..ub-tsap-id-length)) OPTIONAL
 *   },
 *   presentation  [1]  PSAPAddress
 * }
 * ```
 */
export type UserAddress =
    | { x121: UserAddress_x121 } /* CHOICE_ALT_ROOT */
    | { presentation: PSAPAddress } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION UserAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserAddress */
let _cached_decoder_for_UserAddress: $.ASN1Decoder<UserAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserAddress */

/* START_OF_SYMBOL_DEFINITION _decode_UserAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) UserAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserAddress} The decoded data structure.
 */
export function _decode_UserAddress(el: _Element) {
    if (!_cached_decoder_for_UserAddress) {
        _cached_decoder_for_UserAddress = $._decode_inextensible_choice<UserAddress>(
            {
                'CONTEXT 0': [
                    'x121',
                    $._decode_implicit<UserAddress_x121>(
                        () => _decode_UserAddress_x121
                    ),
                ],
                'CONTEXT 1': [
                    'presentation',
                    $._decode_implicit<PSAPAddress>(() => _decode_PSAPAddress),
                ],
            }
        );
    }
    return _cached_decoder_for_UserAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserAddress */
let _cached_encoder_for_UserAddress: $.ASN1Encoder<UserAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserAddress */

/* START_OF_SYMBOL_DEFINITION _encode_UserAddress */
/**
 * @summary Encodes a(n) UserAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserAddress, encoded as an ASN.1 Element.
 */
export function _encode_UserAddress(
    value: UserAddress,
    elGetter: $.ASN1Encoder<UserAddress>
) {
    if (!_cached_encoder_for_UserAddress) {
        _cached_encoder_for_UserAddress = $._encode_choice<UserAddress>(
            {
                x121: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_UserAddress_x121,
                    $.BER
                ),
                presentation: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PSAPAddress,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_UserAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UserAddress */

/* eslint-enable */
