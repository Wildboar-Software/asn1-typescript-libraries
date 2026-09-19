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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACRScenario, _enum_for_ACRScenario, ACRScenario_eECInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, eECInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_eECExecutedViaSourceEES /* IMPORTED_LONG_ENUMERATION_ITEM */, eECExecutedViaSourceEES /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_eECExecutedViaTargetEES /* IMPORTED_LONG_ENUMERATION_ITEM */, eECExecutedViaTargetEES /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_sourceEASDecided /* IMPORTED_LONG_ENUMERATION_ITEM */, sourceEASDecided /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_sourceEESExecuted /* IMPORTED_LONG_ENUMERATION_ITEM */, sourceEESExecuted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_eELManagedACR /* IMPORTED_LONG_ENUMERATION_ITEM */, eELManagedACR /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ACRScenario, _encode_ACRScenario } from "../TS33128Payloads/ACRScenario.ta.mjs";
// export { ACRScenario, _enum_for_ACRScenario, ACRScenario_eECInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, eECInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_eECExecutedViaSourceEES /* IMPORTED_LONG_ENUMERATION_ITEM */, eECExecutedViaSourceEES /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_eECExecutedViaTargetEES /* IMPORTED_LONG_ENUMERATION_ITEM */, eECExecutedViaTargetEES /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_sourceEASDecided /* IMPORTED_LONG_ENUMERATION_ITEM */, sourceEASDecided /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_sourceEESExecuted /* IMPORTED_LONG_ENUMERATION_ITEM */, sourceEESExecuted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRScenario_eELManagedACR /* IMPORTED_LONG_ENUMERATION_ITEM */, eELManagedACR /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ACRScenario, _encode_ACRScenario } from "../TS33128Payloads/ACRScenario.ta.mjs";


/**
 * @summary ACRScenarios
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRScenarios  ::=  SET OF ACRScenario
 * ```
 */
export
type ACRScenarios = ACRScenario[]; // SetOfType

let _cached_decoder_for_ACRScenarios: $.ASN1Decoder<ACRScenarios> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACRScenarios
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACRScenarios (el: _Element): ACRScenarios {
    if (!_cached_decoder_for_ACRScenarios) { _cached_decoder_for_ACRScenarios = $._decodeSetOf<ACRScenario>(() => _decode_ACRScenario); }
    return _cached_decoder_for_ACRScenarios(el);
}

let _cached_encoder_for_ACRScenarios: $.ASN1Encoder<ACRScenarios> | null = null;

/**
 * @summary Encodes a(n) ACRScenarios into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACRScenarios, encoded as an ASN.1 Element.
 */
export
function _encode_ACRScenarios (value: ACRScenarios, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACRScenarios) { _cached_encoder_for_ACRScenarios = $._encodeSetOf<ACRScenario>(() => _encode_ACRScenario, $.BER); }
    return _cached_encoder_for_ACRScenarios(value, elGetter);
}


/* eslint-enable */
