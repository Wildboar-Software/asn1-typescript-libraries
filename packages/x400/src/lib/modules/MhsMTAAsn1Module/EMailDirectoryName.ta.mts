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
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs';
export {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs';
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

/* START_OF_SYMBOL_DEFINITION EMailDirectoryName */
/**
 * @summary EMailDirectoryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailDirectoryName  ::=  CHOICE {
 *   x500DirectoryName  [0]  Name,
 *   genericNames       [1]  SET OF GenericName
 * }
 * ```
 */
export type EMailDirectoryName =
    | { x500DirectoryName: Name } /* CHOICE_ALT_ROOT */
    | { genericNames: GenericName[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailDirectoryName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailDirectoryName */
let _cached_decoder_for_EMailDirectoryName: $.ASN1Decoder<EMailDirectoryName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailDirectoryName */

/* START_OF_SYMBOL_DEFINITION _decode_EMailDirectoryName */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailDirectoryName} The decoded data structure.
 */
export function _decode_EMailDirectoryName(el: _Element) {
    if (!_cached_decoder_for_EMailDirectoryName) {
        _cached_decoder_for_EMailDirectoryName = $._decode_inextensible_choice<EMailDirectoryName>(
            {
                'CONTEXT 0': [
                    'x500DirectoryName',
                    $._decode_explicit<Name>(() => _decode_Name),
                ],
                'CONTEXT 1': [
                    'genericNames',
                    $._decode_implicit<GenericName[]>(() =>
                        $._decodeSetOf<GenericName>(() => _decode_GenericName)
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailDirectoryName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailDirectoryName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailDirectoryName */
let _cached_encoder_for_EMailDirectoryName: $.ASN1Encoder<EMailDirectoryName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailDirectoryName */

/* START_OF_SYMBOL_DEFINITION _encode_EMailDirectoryName */
/**
 * @summary Encodes a(n) EMailDirectoryName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailDirectoryName, encoded as an ASN.1 Element.
 */
export function _encode_EMailDirectoryName(
    value: EMailDirectoryName,
    elGetter: $.ASN1Encoder<EMailDirectoryName>
) {
    if (!_cached_encoder_for_EMailDirectoryName) {
        _cached_encoder_for_EMailDirectoryName = $._encode_choice<EMailDirectoryName>(
            {
                x500DirectoryName: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Name,
                    $.BER
                ),
                genericNames: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<GenericName>(
                            () => _encode_GenericName,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailDirectoryName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailDirectoryName */

/* eslint-enable */
