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
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.js';
export {
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.js';
import {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta.js';
export {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta.js';

/* START_OF_SYMBOL_DEFINITION EMailGlobalDomainId */
/**
 * @summary EMailGlobalDomainId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailGlobalDomainId  ::=  CHOICE {
 *   x400GlobalDomainId     [0]  GlobalDomainIdentifier,
 *   genericGlobalDomainId  [1]  GenericName
 * }
 * ```
 */
export type EMailGlobalDomainId =
    | { x400GlobalDomainId: GlobalDomainIdentifier } /* CHOICE_ALT_ROOT */
    | { genericGlobalDomainId: GenericName } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailGlobalDomainId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailGlobalDomainId */
let _cached_decoder_for_EMailGlobalDomainId: $.ASN1Decoder<EMailGlobalDomainId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailGlobalDomainId */

/* START_OF_SYMBOL_DEFINITION _decode_EMailGlobalDomainId */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailGlobalDomainId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailGlobalDomainId} The decoded data structure.
 */
export function _decode_EMailGlobalDomainId(el: _Element) {
    if (!_cached_decoder_for_EMailGlobalDomainId) {
        _cached_decoder_for_EMailGlobalDomainId = $._decode_inextensible_choice<EMailGlobalDomainId>(
            {
                'CONTEXT 0': [
                    'x400GlobalDomainId',
                    $._decode_implicit<GlobalDomainIdentifier>(
                        () => _decode_GlobalDomainIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'genericGlobalDomainId',
                    $._decode_implicit<GenericName>(() => _decode_GenericName),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailGlobalDomainId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailGlobalDomainId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailGlobalDomainId */
let _cached_encoder_for_EMailGlobalDomainId: $.ASN1Encoder<EMailGlobalDomainId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailGlobalDomainId */

/* START_OF_SYMBOL_DEFINITION _encode_EMailGlobalDomainId */
/**
 * @summary Encodes a(n) EMailGlobalDomainId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailGlobalDomainId, encoded as an ASN.1 Element.
 */
export function _encode_EMailGlobalDomainId(
    value: EMailGlobalDomainId,
    elGetter: $.ASN1Encoder<EMailGlobalDomainId>
) {
    if (!_cached_encoder_for_EMailGlobalDomainId) {
        _cached_encoder_for_EMailGlobalDomainId = $._encode_choice<EMailGlobalDomainId>(
            {
                x400GlobalDomainId: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_GlobalDomainIdentifier,
                    $.BER
                ),
                genericGlobalDomainId: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailGlobalDomainId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailGlobalDomainId */

/* eslint-enable */
