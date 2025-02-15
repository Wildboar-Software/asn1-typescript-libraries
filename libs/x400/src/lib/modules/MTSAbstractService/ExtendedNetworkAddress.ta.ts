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
    ExtendedNetworkAddress_e163_4_address,
    _decode_ExtendedNetworkAddress_e163_4_address,
    _encode_ExtendedNetworkAddress_e163_4_address,
} from '../MTSAbstractService/ExtendedNetworkAddress-e163-4-address.ta';
export {
    ExtendedNetworkAddress_e163_4_address,
    _decode_ExtendedNetworkAddress_e163_4_address,
    _encode_ExtendedNetworkAddress_e163_4_address,
} from '../MTSAbstractService/ExtendedNetworkAddress-e163-4-address.ta';
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta';
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta';

/* START_OF_SYMBOL_DEFINITION ExtendedNetworkAddress */
/**
 * @summary ExtendedNetworkAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedNetworkAddress  ::=  CHOICE {
 *   e163-4-address
 *     SEQUENCE {number
 *                 [0]  NumericString(SIZE (1..ub-e163-4-number-length)),
 *               sub-address
 *                 [1]  NumericString(SIZE (1..ub-e163-4-sub-address-length))
 *                   OPTIONAL},
 *   psap-address    [0]  PresentationAddress
 * }
 * ```
 */
export type ExtendedNetworkAddress =
    | {
          e163_4_address: ExtendedNetworkAddress_e163_4_address;
      } /* CHOICE_ALT_ROOT */
    | { psap_address: PresentationAddress } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ExtendedNetworkAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedNetworkAddress */
let _cached_decoder_for_ExtendedNetworkAddress: $.ASN1Decoder<ExtendedNetworkAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedNetworkAddress */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedNetworkAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedNetworkAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedNetworkAddress} The decoded data structure.
 */
export function _decode_ExtendedNetworkAddress(el: _Element) {
    if (!_cached_decoder_for_ExtendedNetworkAddress) {
        _cached_decoder_for_ExtendedNetworkAddress = $._decode_inextensible_choice<ExtendedNetworkAddress>(
            {
                'UNIVERSAL 16': [
                    'e163_4_address',
                    _decode_ExtendedNetworkAddress_e163_4_address,
                ],
                'CONTEXT 0': [
                    'psap_address',
                    $._decode_implicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExtendedNetworkAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedNetworkAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedNetworkAddress */
let _cached_encoder_for_ExtendedNetworkAddress: $.ASN1Encoder<ExtendedNetworkAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedNetworkAddress */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedNetworkAddress */
/**
 * @summary Encodes a(n) ExtendedNetworkAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedNetworkAddress, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedNetworkAddress(
    value: ExtendedNetworkAddress,
    elGetter: $.ASN1Encoder<ExtendedNetworkAddress>
) {
    if (!_cached_encoder_for_ExtendedNetworkAddress) {
        _cached_encoder_for_ExtendedNetworkAddress = $._encode_choice<ExtendedNetworkAddress>(
            {
                e163_4_address: _encode_ExtendedNetworkAddress_e163_4_address,
                psap_address: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PresentationAddress,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedNetworkAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedNetworkAddress */

/* eslint-enable */
