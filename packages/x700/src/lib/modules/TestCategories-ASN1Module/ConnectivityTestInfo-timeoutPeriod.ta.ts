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
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.js';
export {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.js';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.js';
export {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.js';

/* START_OF_SYMBOL_DEFINITION ConnectivityTestInfo_timeoutPeriod */
/**
 * @summary ConnectivityTestInfo_timeoutPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityTestInfo-timeoutPeriod ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ConnectivityTestInfo_timeoutPeriod =
    | { timeUnits: Timespec } /* CHOICE_ALT_ROOT */
    | { attributeId: AttributeId } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectivityTestInfo_timeoutPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityTestInfo_timeoutPeriod */
let _cached_decoder_for_ConnectivityTestInfo_timeoutPeriod: $.ASN1Decoder<ConnectivityTestInfo_timeoutPeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityTestInfo_timeoutPeriod */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectivityTestInfo_timeoutPeriod */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityTestInfo_timeoutPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityTestInfo_timeoutPeriod} The decoded data structure.
 */
export function _decode_ConnectivityTestInfo_timeoutPeriod(el: _Element) {
    if (!_cached_decoder_for_ConnectivityTestInfo_timeoutPeriod) {
        _cached_decoder_for_ConnectivityTestInfo_timeoutPeriod = $._decode_inextensible_choice<ConnectivityTestInfo_timeoutPeriod>(
            {
                'CONTEXT 22': ['timeUnits', _decode_Timespec],
                'CONTEXT 23': ['timeUnits', _decode_Timespec],
                'CONTEXT 24': ['timeUnits', _decode_Timespec],
                'CONTEXT 25': ['timeUnits', _decode_Timespec],
                'CONTEXT 26': ['timeUnits', _decode_Timespec],
                'CONTEXT 27': ['timeUnits', _decode_Timespec],
                'CONTEXT 28': ['timeUnits', _decode_Timespec],
                'CONTEXT 0': ['attributeId', _decode_AttributeId],
                'CONTEXT 1': ['attributeId', _decode_AttributeId],
            }
        );
    }
    return _cached_decoder_for_ConnectivityTestInfo_timeoutPeriod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectivityTestInfo_timeoutPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityTestInfo_timeoutPeriod */
let _cached_encoder_for_ConnectivityTestInfo_timeoutPeriod: $.ASN1Encoder<ConnectivityTestInfo_timeoutPeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityTestInfo_timeoutPeriod */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectivityTestInfo_timeoutPeriod */
/**
 * @summary Encodes a(n) ConnectivityTestInfo_timeoutPeriod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityTestInfo_timeoutPeriod, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityTestInfo_timeoutPeriod(
    value: ConnectivityTestInfo_timeoutPeriod,
    elGetter: $.ASN1Encoder<ConnectivityTestInfo_timeoutPeriod>
) {
    if (!_cached_encoder_for_ConnectivityTestInfo_timeoutPeriod) {
        _cached_encoder_for_ConnectivityTestInfo_timeoutPeriod = $._encode_choice<ConnectivityTestInfo_timeoutPeriod>(
            {
                timeUnits: _encode_Timespec,
                attributeId: _encode_AttributeId,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectivityTestInfo_timeoutPeriod(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectivityTestInfo_timeoutPeriod */

/* eslint-enable */
