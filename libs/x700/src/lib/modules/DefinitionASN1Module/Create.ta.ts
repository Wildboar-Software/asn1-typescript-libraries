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
    CreateSpecification,
    _decode_CreateSpecification,
    _encode_CreateSpecification,
} from '../DefinitionASN1Module/CreateSpecification.ta';
export {
    CreateSpecification,
    _decode_CreateSpecification,
    _encode_CreateSpecification,
} from '../DefinitionASN1Module/CreateSpecification.ta';

/* START_OF_SYMBOL_DEFINITION Create */
/**
 * @summary Create
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Create  ::=  CHOICE {present  CreateSpecification,
 *                    absent   NULL
 * }
 * ```
 */
export type Create =
    | { present: CreateSpecification } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Create */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Create */
let _cached_decoder_for_Create: $.ASN1Decoder<Create> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Create */

/* START_OF_SYMBOL_DEFINITION _decode_Create */
/**
 * @summary Decodes an ASN.1 element into a(n) Create
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Create} The decoded data structure.
 */
export function _decode_Create(el: _Element) {
    if (!_cached_decoder_for_Create) {
        _cached_decoder_for_Create = $._decode_inextensible_choice<Create>({
            'UNIVERSAL 16': ['present', _decode_CreateSpecification],
            'UNIVERSAL 5': ['absent', $._decodeNull],
        });
    }
    return _cached_decoder_for_Create(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Create */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Create */
let _cached_encoder_for_Create: $.ASN1Encoder<Create> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Create */

/* START_OF_SYMBOL_DEFINITION _encode_Create */
/**
 * @summary Encodes a(n) Create into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Create, encoded as an ASN.1 Element.
 */
export function _encode_Create(value: Create, elGetter: $.ASN1Encoder<Create>) {
    if (!_cached_encoder_for_Create) {
        _cached_encoder_for_Create = $._encode_choice<Create>(
            {
                present: _encode_CreateSpecification,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Create(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Create */

/* eslint-enable */
