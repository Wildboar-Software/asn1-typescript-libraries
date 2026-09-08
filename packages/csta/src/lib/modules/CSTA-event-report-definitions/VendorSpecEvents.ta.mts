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
import { PrivateEvent, _decode_PrivateEvent, _encode_PrivateEvent } from "../CSTA-private-event/PrivateEvent.ta.mjs";
// export { PrivateEvent, _decode_PrivateEvent, _encode_PrivateEvent } from "../CSTA-private-event/PrivateEvent.ta.mjs";


/**
 * @summary VendorSpecEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VendorSpecEvents ::=  CHOICE
 * {    privateEvent            [ 0] IMPLICIT PrivateEvent }
 * ```
 */
export
type VendorSpecEvents =
    { privateEvent: PrivateEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VendorSpecEvents: $.ASN1Decoder<VendorSpecEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VendorSpecEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VendorSpecEvents (el: _Element): VendorSpecEvents {
    if (!_cached_decoder_for_VendorSpecEvents) { _cached_decoder_for_VendorSpecEvents = $._decode_inextensible_choice<VendorSpecEvents>({
    "CONTEXT 0": [ "privateEvent", $._decode_implicit<PrivateEvent>(() => _decode_PrivateEvent) ]
}); }
    return _cached_decoder_for_VendorSpecEvents(el);
}

let _cached_encoder_for_VendorSpecEvents: $.ASN1Encoder<VendorSpecEvents> | null = null;

/**
 * @summary Encodes a(n) VendorSpecEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VendorSpecEvents, encoded as an ASN.1 Element.
 */
export
function _encode_VendorSpecEvents (value: VendorSpecEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VendorSpecEvents) { _cached_encoder_for_VendorSpecEvents = $._encode_choice<VendorSpecEvents>({
    "privateEvent": $._encode_implicit(_TagClass.context, 0, () => _encode_PrivateEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_VendorSpecEvents(value, elGetter);
}


/* eslint-enable */
