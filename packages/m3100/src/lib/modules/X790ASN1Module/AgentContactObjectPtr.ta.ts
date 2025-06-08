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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION AgentContactObjectPtr */
/**
 * @summary AgentContactObjectPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AgentContactObjectPtr  ::=  CHOICE {
 *   noContact  NULL,
 *   contact    ObjectInstance,
 *   ...
 * }
 * ```
 */
export type AgentContactObjectPtr =
    | { noContact: NULL } /* CHOICE_ALT_ROOT */
    | { contact: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AgentContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AgentContactObjectPtr */
let _cached_decoder_for_AgentContactObjectPtr: $.ASN1Decoder<AgentContactObjectPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AgentContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _decode_AgentContactObjectPtr */
/**
 * @summary Decodes an ASN.1 element into a(n) AgentContactObjectPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AgentContactObjectPtr} The decoded data structure.
 */
export function _decode_AgentContactObjectPtr(el: _Element) {
    if (!_cached_decoder_for_AgentContactObjectPtr) {
        _cached_decoder_for_AgentContactObjectPtr = $._decode_extensible_choice<AgentContactObjectPtr>(
            {
                'UNIVERSAL 5': ['noContact', $._decodeNull],
                'CONTEXT 2': ['contact', _decode_ObjectInstance],
                'CONTEXT 3': ['contact', _decode_ObjectInstance],
                'CONTEXT 4': ['contact', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_AgentContactObjectPtr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AgentContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AgentContactObjectPtr */
let _cached_encoder_for_AgentContactObjectPtr: $.ASN1Encoder<AgentContactObjectPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AgentContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _encode_AgentContactObjectPtr */
/**
 * @summary Encodes a(n) AgentContactObjectPtr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentContactObjectPtr, encoded as an ASN.1 Element.
 */
export function _encode_AgentContactObjectPtr(
    value: AgentContactObjectPtr,
    elGetter: $.ASN1Encoder<AgentContactObjectPtr>
) {
    if (!_cached_encoder_for_AgentContactObjectPtr) {
        _cached_encoder_for_AgentContactObjectPtr = $._encode_choice<AgentContactObjectPtr>(
            {
                noContact: $._encodeNull,
                contact: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_AgentContactObjectPtr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AgentContactObjectPtr */

/* eslint-enable */
