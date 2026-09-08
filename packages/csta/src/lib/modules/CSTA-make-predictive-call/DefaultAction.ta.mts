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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { DetectionAction, _enum_for_DetectionAction, DetectionAction_clearCalledConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, clearCalledConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, DetectionAction_remainConnected /* IMPORTED_LONG_ENUMERATION_ITEM */, remainConnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DetectionAction, _encode_DetectionAction } from "../CSTA-make-predictive-call/DetectionAction.ta.mjs";
// export { DetectionAction, _enum_for_DetectionAction, DetectionAction_clearCalledConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, clearCalledConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, DetectionAction_remainConnected /* IMPORTED_LONG_ENUMERATION_ITEM */, remainConnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DetectionAction, _encode_DetectionAction } from "../CSTA-make-predictive-call/DetectionAction.ta.mjs";


/**
 * @summary DefaultAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultAction  ::=  DetectionAction
 * ```
 */
export
type DefaultAction = DetectionAction; // DefinedType

let _cached_decoder_for_DefaultAction: $.ASN1Decoder<DefaultAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefaultAction (el: _Element): DefaultAction {
    if (!_cached_decoder_for_DefaultAction) { _cached_decoder_for_DefaultAction = _decode_DetectionAction; }
    return _cached_decoder_for_DefaultAction(el);
}

let _cached_encoder_for_DefaultAction: $.ASN1Encoder<DefaultAction> | null = null;

/**
 * @summary Encodes a(n) DefaultAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultAction, encoded as an ASN.1 Element.
 */
export
function _encode_DefaultAction (value: DefaultAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefaultAction) { _cached_encoder_for_DefaultAction = _encode_DetectionAction; }
    return _cached_encoder_for_DefaultAction(value, elGetter);
}


/* eslint-enable */
