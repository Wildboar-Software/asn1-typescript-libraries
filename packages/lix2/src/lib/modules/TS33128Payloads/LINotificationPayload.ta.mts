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
import { LINotificationMessage, _decode_LINotificationMessage, _encode_LINotificationMessage } from "../TS33128Payloads/LINotificationMessage.ta.mjs";
// export { LINotificationMessage, _decode_LINotificationMessage, _encode_LINotificationMessage } from "../TS33128Payloads/LINotificationMessage.ta.mjs";


/**
 * @summary LINotificationPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotificationPayload ::= SEQUENCE
 * {
 *     lINotificationPayloadOID         [1] RELATIVE-OID,
 *     notification                     [2] LINotificationMessage
 * }
 * ```
 * 
 * @class
 */
export
class LINotificationPayload {
    constructor (
        /**
         * @summary `lINotificationPayloadOID`.
         * @public
         * @readonly
         */
        readonly lINotificationPayloadOID: RELATIVE_OID,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: LINotificationMessage
    ) {}

    /**
     * @summary Restructures an object into a LINotificationPayload
     * @description
     * 
     * This takes an `object` and converts it to a `LINotificationPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LINotificationPayload`.
     * @returns {LINotificationPayload}
     */
    public static _from_object (_o: { [_K in keyof (LINotificationPayload)]: (LINotificationPayload)[_K] }): LINotificationPayload {
        return new LINotificationPayload(_o.lINotificationPayloadOID, _o.notification);
    }


}

/**
 * @summary The Leading Root Component Types of LINotificationPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LINotificationPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("lINotificationPayloadOID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notification", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LINotificationPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LINotificationPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LINotificationPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LINotificationPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LINotificationPayload: $.ASN1Decoder<LINotificationPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LINotificationPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LINotificationPayload (el: _Element): LINotificationPayload {
    if (!_cached_decoder_for_LINotificationPayload) { _cached_decoder_for_LINotificationPayload = function (el: _Element): LINotificationPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LINotificationPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lINotificationPayloadOID";
    sequence[1].name = "notification";
    let lINotificationPayloadOID!: RELATIVE_OID;
    let notification!: LINotificationMessage;
    lINotificationPayloadOID = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    notification = $._decode_explicit<LINotificationMessage>(() => _decode_LINotificationMessage)(sequence[1]);
    return new LINotificationPayload(
        lINotificationPayloadOID,
        notification,

    );
}; }
    return _cached_decoder_for_LINotificationPayload(el);
}

let _cached_encoder_for_LINotificationPayload: $.ASN1Encoder<LINotificationPayload> | null = null;

/**
 * @summary Encodes a(n) LINotificationPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LINotificationPayload, encoded as an ASN.1 Element.
 */
export
function _encode_LINotificationPayload (value: LINotificationPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LINotificationPayload) { _cached_encoder_for_LINotificationPayload = function (value: LINotificationPayload, elGetter: $.ASN1Encoder<LINotificationPayload>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeRelativeOID, $.BER)(value.lINotificationPayloadOID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_LINotificationMessage, $.BER)(value.notification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LINotificationPayload(value, elGetter);
}


/* eslint-enable */
