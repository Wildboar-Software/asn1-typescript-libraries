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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
import {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta';
export {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta';

/* START_OF_SYMBOL_DEFINITION EMailMtsUserName */
/**
 * @summary EMailMtsUserName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailMtsUserName  ::=  CHOICE {
 *   x400ORName   [0]  ORName,
 *   genericName  [1]  GenericName
 * }
 * ```
 */
export type EMailMtsUserName =
    | { x400ORName: ORName } /* CHOICE_ALT_ROOT */
    | { genericName: GenericName } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailMtsUserName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailMtsUserName */
let _cached_decoder_for_EMailMtsUserName: $.ASN1Decoder<EMailMtsUserName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailMtsUserName */

/* START_OF_SYMBOL_DEFINITION _decode_EMailMtsUserName */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailMtsUserName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailMtsUserName} The decoded data structure.
 */
export function _decode_EMailMtsUserName(el: _Element) {
    if (!_cached_decoder_for_EMailMtsUserName) {
        _cached_decoder_for_EMailMtsUserName = $._decode_inextensible_choice<EMailMtsUserName>(
            {
                'CONTEXT 0': [
                    'x400ORName',
                    $._decode_implicit<ORName>(() => _decode_ORName),
                ],
                'CONTEXT 1': [
                    'genericName',
                    $._decode_implicit<GenericName>(() => _decode_GenericName),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailMtsUserName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailMtsUserName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailMtsUserName */
let _cached_encoder_for_EMailMtsUserName: $.ASN1Encoder<EMailMtsUserName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailMtsUserName */

/* START_OF_SYMBOL_DEFINITION _encode_EMailMtsUserName */
/**
 * @summary Encodes a(n) EMailMtsUserName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailMtsUserName, encoded as an ASN.1 Element.
 */
export function _encode_EMailMtsUserName(
    value: EMailMtsUserName,
    elGetter: $.ASN1Encoder<EMailMtsUserName>
) {
    if (!_cached_encoder_for_EMailMtsUserName) {
        _cached_encoder_for_EMailMtsUserName = $._encode_choice<EMailMtsUserName>(
            {
                x400ORName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ORName,
                    $.BER
                ),
                genericName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailMtsUserName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailMtsUserName */

/* eslint-enable */
