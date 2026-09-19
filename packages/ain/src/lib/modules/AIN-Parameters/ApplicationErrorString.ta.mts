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
import { ErrorCause, _decode_ErrorCause, _encode_ErrorCause } from "../AIN-Parameters/ErrorCause.ta.mjs";
// export { ErrorCause, _decode_ErrorCause, _encode_ErrorCause } from "../AIN-Parameters/ErrorCause.ta.mjs";
import { FailedMessage, _decode_FailedMessage, _encode_FailedMessage } from "../AIN-Parameters/FailedMessage.ta.mjs";
// export { FailedMessage, _decode_FailedMessage, _encode_FailedMessage } from "../AIN-Parameters/FailedMessage.ta.mjs";
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";


/**
 * @summary ApplicationErrorString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationErrorString ::= [55] IMPLICIT SEQUENCE{
 *         errorCause ErrorCause,
 *         failedMessage FailedMessage OPTIONAL,
 *         userID UserID OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ApplicationErrorString {
    constructor (
        /**
         * @summary `errorCause`.
         * @public
         * @readonly
         */
        readonly errorCause: ErrorCause,
        /**
         * @summary `failedMessage`.
         * @public
         * @readonly
         */
        readonly failedMessage: OPTIONAL<FailedMessage>,
        /**
         * @summary `userID`.
         * @public
         * @readonly
         */
        readonly userID: OPTIONAL<UserID>
    ) {}

    /**
     * @summary Restructures an object into a ApplicationErrorString
     * @description
     * 
     * This takes an `object` and converts it to a `ApplicationErrorString`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplicationErrorString`.
     * @returns {ApplicationErrorString}
     */
    public static _from_object (_o: { [_K in keyof (ApplicationErrorString)]: (ApplicationErrorString)[_K] }): ApplicationErrorString {
        return new ApplicationErrorString(_o.errorCause, _o.failedMessage, _o.userID);
    }


}

/**
 * @summary The Leading Root Component Types of ApplicationErrorString
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplicationErrorString: $.ComponentSpec[] = [
    new $.ComponentSpec("errorCause", false, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("failedMessage", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("userID", true, $.hasTag(_TagClass.context, 53))
];

/**
 * @summary The Trailing Root Component Types of ApplicationErrorString
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplicationErrorString: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplicationErrorString
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplicationErrorString: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplicationErrorString: $.ASN1Decoder<ApplicationErrorString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationErrorString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationErrorString (el: _Element): ApplicationErrorString {
    if (!_cached_decoder_for_ApplicationErrorString) { _cached_decoder_for_ApplicationErrorString = $._decode_implicit<ApplicationErrorString>(() => function (el: _Element): ApplicationErrorString {
    let errorCause!: ErrorCause;
    let failedMessage: OPTIONAL<FailedMessage>;
    let userID: OPTIONAL<UserID>;
    const callbacks: $.DecodingMap = {
        "errorCause": (_el: _Element): void => { errorCause = _decode_ErrorCause(_el); },
        "failedMessage": (_el: _Element): void => { failedMessage = _decode_FailedMessage(_el); },
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplicationErrorString,
        _extension_additions_list_spec_for_ApplicationErrorString,
        _root_component_type_list_2_spec_for_ApplicationErrorString,
        undefined,
    );
    return new ApplicationErrorString(
        errorCause,
        failedMessage,
        userID
    );
}); }
    return _cached_decoder_for_ApplicationErrorString(el);
}

let _cached_encoder_for_ApplicationErrorString: $.ASN1Encoder<ApplicationErrorString> | null = null;

/**
 * @summary Encodes a(n) ApplicationErrorString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationErrorString, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationErrorString (value: ApplicationErrorString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationErrorString) { _cached_encoder_for_ApplicationErrorString = $._encode_implicit(_TagClass.context, 55, () => function (value: ApplicationErrorString, elGetter: $.ASN1Encoder<ApplicationErrorString>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ErrorCause(value.errorCause, $.BER),
            /* IF_ABSENT  */ ((value.failedMessage === undefined) ? undefined : _encode_FailedMessage(value.failedMessage, $.BER)),
            /* IF_ABSENT  */ ((value.userID === undefined) ? undefined : _encode_UserID(value.userID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ApplicationErrorString(value, elGetter);
}


/* eslint-enable */
