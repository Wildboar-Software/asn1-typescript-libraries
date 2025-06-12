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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
export {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
import {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta.mjs';
export {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EMailMtaName */
/**
 * @summary EMailMtaName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailMtaName  ::=  CHOICE {
 *   x400MTAName     [0]  MTAName,
 *   genericMTAName  [1]  GenericName
 * }
 * ```
 */
export type EMailMtaName =
    | { x400MTAName: MTAName } /* CHOICE_ALT_ROOT */
    | { genericMTAName: GenericName } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailMtaName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailMtaName */
let _cached_decoder_for_EMailMtaName: $.ASN1Decoder<EMailMtaName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailMtaName */

/* START_OF_SYMBOL_DEFINITION _decode_EMailMtaName */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailMtaName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailMtaName} The decoded data structure.
 */
export function _decode_EMailMtaName(el: _Element) {
    if (!_cached_decoder_for_EMailMtaName) {
        _cached_decoder_for_EMailMtaName = $._decode_inextensible_choice<EMailMtaName>(
            {
                'CONTEXT 0': [
                    'x400MTAName',
                    $._decode_implicit<MTAName>(() => _decode_MTAName),
                ],
                'CONTEXT 1': [
                    'genericMTAName',
                    $._decode_implicit<GenericName>(() => _decode_GenericName),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailMtaName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailMtaName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailMtaName */
let _cached_encoder_for_EMailMtaName: $.ASN1Encoder<EMailMtaName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailMtaName */

/* START_OF_SYMBOL_DEFINITION _encode_EMailMtaName */
/**
 * @summary Encodes a(n) EMailMtaName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailMtaName, encoded as an ASN.1 Element.
 */
export function _encode_EMailMtaName(
    value: EMailMtaName,
    elGetter: $.ASN1Encoder<EMailMtaName>
) {
    if (!_cached_encoder_for_EMailMtaName) {
        _cached_encoder_for_EMailMtaName = $._encode_choice<EMailMtaName>(
            {
                x400MTAName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_MTAName,
                    $.BER
                ),
                genericMTAName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailMtaName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailMtaName */

/* eslint-enable */
