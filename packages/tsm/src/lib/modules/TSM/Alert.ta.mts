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
import { AlertLevel, _enum_for_AlertLevel, AlertLevel_warning /* IMPORTED_LONG_ENUMERATION_ITEM */, warning /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertLevel_fatal /* IMPORTED_LONG_ENUMERATION_ITEM */, fatal /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertLevel, _encode_AlertLevel } from "../TSM/AlertLevel.ta.mjs";
// export { AlertLevel, _enum_for_AlertLevel, AlertLevel_warning /* IMPORTED_LONG_ENUMERATION_ITEM */, warning /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertLevel_fatal /* IMPORTED_LONG_ENUMERATION_ITEM */, fatal /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertLevel, _encode_AlertLevel } from "../TSM/AlertLevel.ta.mjs";
import { AlertDescription, _enum_for_AlertDescription, AlertDescription_close_notify /* IMPORTED_LONG_ENUMERATION_ITEM */, close_notify /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unexpected_message /* IMPORTED_LONG_ENUMERATION_ITEM */, unexpected_message /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_bad_record_mac /* IMPORTED_LONG_ENUMERATION_ITEM */, bad_record_mac /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_decryption_failed /* IMPORTED_LONG_ENUMERATION_ITEM */, decryption_failed /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_record_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, record_overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_decompression_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, decompression_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_handshake_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, handshake_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_bad_certificate /* IMPORTED_LONG_ENUMERATION_ITEM */, bad_certificate /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unsupported_certificate /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupported_certificate /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_certificate_revoked /* IMPORTED_LONG_ENUMERATION_ITEM */, certificate_revoked /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_certificate_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, certificate_expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_certificate_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, certificate_unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_illegal_parameter /* IMPORTED_LONG_ENUMERATION_ITEM */, illegal_parameter /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unknown_ca /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown_ca /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_access_denied /* IMPORTED_LONG_ENUMERATION_ITEM */, access_denied /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_decode_error /* IMPORTED_LONG_ENUMERATION_ITEM */, decode_error /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_decrypt_error /* IMPORTED_LONG_ENUMERATION_ITEM */, decrypt_error /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_export_restriction /* IMPORTED_LONG_ENUMERATION_ITEM */, export_restriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_protocol_version /* IMPORTED_LONG_ENUMERATION_ITEM */, protocol_version /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_insufficient_security /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficient_security /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_internal_error /* IMPORTED_LONG_ENUMERATION_ITEM */, internal_error /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_user_canceled /* IMPORTED_LONG_ENUMERATION_ITEM */, user_canceled /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_no_renegotiation /* IMPORTED_LONG_ENUMERATION_ITEM */, no_renegotiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unsupported_extension /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupported_extension /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_certificate_unobtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, certificate_unobtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unrecognized_name /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognized_name /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_bad_certificate_status_response /* IMPORTED_LONG_ENUMERATION_ITEM */, bad_certificate_status_response /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_bad_certificate_hash_value /* IMPORTED_LONG_ENUMERATION_ITEM */, bad_certificate_hash_value /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unacceptable_model /* IMPORTED_LONG_ENUMERATION_ITEM */, unacceptable_model /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unacceptable_biometrics /* IMPORTED_LONG_ENUMERATION_ITEM */, unacceptable_biometrics /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unsupported_biometrics /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupported_biometrics /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertDescription, _encode_AlertDescription } from "../TSM/AlertDescription.ta.mjs";
// export { AlertDescription, _enum_for_AlertDescription, AlertDescription_close_notify /* IMPORTED_LONG_ENUMERATION_ITEM */, close_notify /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unexpected_message /* IMPORTED_LONG_ENUMERATION_ITEM */, unexpected_message /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_bad_record_mac /* IMPORTED_LONG_ENUMERATION_ITEM */, bad_record_mac /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_decryption_failed /* IMPORTED_LONG_ENUMERATION_ITEM */, decryption_failed /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_record_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, record_overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_decompression_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, decompression_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_handshake_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, handshake_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_bad_certificate /* IMPORTED_LONG_ENUMERATION_ITEM */, bad_certificate /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unsupported_certificate /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupported_certificate /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_certificate_revoked /* IMPORTED_LONG_ENUMERATION_ITEM */, certificate_revoked /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_certificate_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, certificate_expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_certificate_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, certificate_unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_illegal_parameter /* IMPORTED_LONG_ENUMERATION_ITEM */, illegal_parameter /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unknown_ca /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown_ca /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_access_denied /* IMPORTED_LONG_ENUMERATION_ITEM */, access_denied /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_decode_error /* IMPORTED_LONG_ENUMERATION_ITEM */, decode_error /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_decrypt_error /* IMPORTED_LONG_ENUMERATION_ITEM */, decrypt_error /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_export_restriction /* IMPORTED_LONG_ENUMERATION_ITEM */, export_restriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_protocol_version /* IMPORTED_LONG_ENUMERATION_ITEM */, protocol_version /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_insufficient_security /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficient_security /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_internal_error /* IMPORTED_LONG_ENUMERATION_ITEM */, internal_error /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_user_canceled /* IMPORTED_LONG_ENUMERATION_ITEM */, user_canceled /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_no_renegotiation /* IMPORTED_LONG_ENUMERATION_ITEM */, no_renegotiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unsupported_extension /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupported_extension /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_certificate_unobtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, certificate_unobtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unrecognized_name /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognized_name /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_bad_certificate_status_response /* IMPORTED_LONG_ENUMERATION_ITEM */, bad_certificate_status_response /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_bad_certificate_hash_value /* IMPORTED_LONG_ENUMERATION_ITEM */, bad_certificate_hash_value /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unacceptable_model /* IMPORTED_LONG_ENUMERATION_ITEM */, unacceptable_model /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unacceptable_biometrics /* IMPORTED_LONG_ENUMERATION_ITEM */, unacceptable_biometrics /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertDescription_unsupported_biometrics /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupported_biometrics /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertDescription, _encode_AlertDescription } from "../TSM/AlertDescription.ta.mjs";


/**
 * @summary Alert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Alert ::= SEQUENCE {
 * level            AlertLevel,
 * description        AlertDescription
 * }
 * ```
 * 
 * @class
 */
export
class Alert {
    constructor (
        /**
         * @summary `level`.
         * @public
         * @readonly
         */
        readonly level: AlertLevel,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: AlertDescription
    ) {}

    /**
     * @summary Restructures an object into a Alert
     * @description
     * 
     * This takes an `object` and converts it to a `Alert`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Alert`.
     * @returns {Alert}
     */
    public static _from_object (_o: { [_K in keyof (Alert)]: (Alert)[_K] }): Alert {
        return new Alert(_o.level, _o.description);
    }

        /**
         * @summary The enum used as the type of the component `level`
         * @public
         * @static
         */

    public static _enum_for_level = _enum_for_AlertLevel;        /**
         * @summary The enum used as the type of the component `description`
         * @public
         * @static
         */

    public static _enum_for_description = _enum_for_AlertDescription;
}

/**
 * @summary The Leading Root Component Types of Alert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Alert: $.ComponentSpec[] = [
    new $.ComponentSpec("level", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("description", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Alert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Alert: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Alert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Alert: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Alert: $.ASN1Decoder<Alert> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Alert
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Alert (el: _Element): Alert {
    if (!_cached_decoder_for_Alert) { _cached_decoder_for_Alert = function (el: _Element): Alert {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Alert contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "level";
    sequence[1].name = "description";
    let level!: AlertLevel;
    let description!: AlertDescription;
    level = _decode_AlertLevel(sequence[0]);
    description = _decode_AlertDescription(sequence[1]);
    return new Alert(
        level,
        description,

    );
}; }
    return _cached_decoder_for_Alert(el);
}

let _cached_encoder_for_Alert: $.ASN1Encoder<Alert> | null = null;

/**
 * @summary Encodes a(n) Alert into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Alert, encoded as an ASN.1 Element.
 */
export
function _encode_Alert (value: Alert, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Alert) { _cached_encoder_for_Alert = function (value: Alert, elGetter: $.ASN1Encoder<Alert>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlertLevel(value.level, $.BER),
            /* REQUIRED   */ _encode_AlertDescription(value.description, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Alert(value, elGetter);
}


/* eslint-enable */
