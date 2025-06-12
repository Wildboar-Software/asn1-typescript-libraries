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
    PSAPAddress,
    _decode_PSAPAddress,
    _encode_PSAPAddress,
} from '../MTSAbstractService/PSAPAddress.ta.js';
export {
    PSAPAddress,
    _decode_PSAPAddress,
    _encode_PSAPAddress,
} from '../MTSAbstractService/PSAPAddress.ta.js';
import {
    GenericAddress,
    _decode_GenericAddress,
    _encode_GenericAddress,
} from '../MhsMTAAsn1Module/GenericAddress.ta.js';
export {
    GenericAddress,
    _decode_GenericAddress,
    _encode_GenericAddress,
} from '../MhsMTAAsn1Module/GenericAddress.ta.js';

/* START_OF_SYMBOL_DEFINITION EMailAccessPointAddress */
/**
 * @summary EMailAccessPointAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailAccessPointAddress  ::=  CHOICE {
 *   psap            [0]  PSAPAddress,
 *   genericAddress  [1]  GenericAddress
 * }
 * ```
 */
export type EMailAccessPointAddress =
    | { psap: PSAPAddress } /* CHOICE_ALT_ROOT */
    | { genericAddress: GenericAddress } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailAccessPointAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailAccessPointAddress */
let _cached_decoder_for_EMailAccessPointAddress: $.ASN1Decoder<EMailAccessPointAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailAccessPointAddress */

/* START_OF_SYMBOL_DEFINITION _decode_EMailAccessPointAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailAccessPointAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailAccessPointAddress} The decoded data structure.
 */
export function _decode_EMailAccessPointAddress(el: _Element) {
    if (!_cached_decoder_for_EMailAccessPointAddress) {
        _cached_decoder_for_EMailAccessPointAddress = $._decode_inextensible_choice<EMailAccessPointAddress>(
            {
                'CONTEXT 0': [
                    'psap',
                    $._decode_implicit<PSAPAddress>(() => _decode_PSAPAddress),
                ],
                'CONTEXT 1': [
                    'genericAddress',
                    $._decode_implicit<GenericAddress>(
                        () => _decode_GenericAddress
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailAccessPointAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailAccessPointAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailAccessPointAddress */
let _cached_encoder_for_EMailAccessPointAddress: $.ASN1Encoder<EMailAccessPointAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailAccessPointAddress */

/* START_OF_SYMBOL_DEFINITION _encode_EMailAccessPointAddress */
/**
 * @summary Encodes a(n) EMailAccessPointAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailAccessPointAddress, encoded as an ASN.1 Element.
 */
export function _encode_EMailAccessPointAddress(
    value: EMailAccessPointAddress,
    elGetter: $.ASN1Encoder<EMailAccessPointAddress>
) {
    if (!_cached_encoder_for_EMailAccessPointAddress) {
        _cached_encoder_for_EMailAccessPointAddress = $._encode_choice<EMailAccessPointAddress>(
            {
                psap: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PSAPAddress,
                    $.BER
                ),
                genericAddress: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericAddress,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailAccessPointAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailAccessPointAddress */

/* eslint-enable */
