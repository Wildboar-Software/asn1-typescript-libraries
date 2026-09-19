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
import { UDMProblemDetailsCause, _decode_UDMProblemDetailsCause, _encode_UDMProblemDetailsCause } from "../TS33128Payloads/UDMProblemDetailsCause.ta.mjs";
// export { UDMProblemDetailsCause, _decode_UDMProblemDetailsCause, _encode_UDMProblemDetailsCause } from "../TS33128Payloads/UDMProblemDetailsCause.ta.mjs";


/**
 * @summary UDMProblemDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMProblemDetails ::= SEQUENCE
 * {
 *     cause        [1] UDMProblemDetailsCause OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMProblemDetails {
    constructor (
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<UDMProblemDetailsCause>
    ) {}

    /**
     * @summary Restructures an object into a UDMProblemDetails
     * @description
     * 
     * This takes an `object` and converts it to a `UDMProblemDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMProblemDetails`.
     * @returns {UDMProblemDetails}
     */
    public static _from_object (_o: { [_K in keyof (UDMProblemDetails)]: (UDMProblemDetails)[_K] }): UDMProblemDetails {
        return new UDMProblemDetails(_o.cause);
    }


}

/**
 * @summary The Leading Root Component Types of UDMProblemDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMProblemDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of UDMProblemDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMProblemDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMProblemDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMProblemDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMProblemDetails: $.ASN1Decoder<UDMProblemDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMProblemDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMProblemDetails (el: _Element): UDMProblemDetails {
    if (!_cached_decoder_for_UDMProblemDetails) { _cached_decoder_for_UDMProblemDetails = function (el: _Element): UDMProblemDetails {
    let cause: OPTIONAL<UDMProblemDetailsCause>;
    const callbacks: $.DecodingMap = {
        "cause": (_el: _Element): void => { cause = $._decode_explicit<UDMProblemDetailsCause>(() => _decode_UDMProblemDetailsCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMProblemDetails,
        _extension_additions_list_spec_for_UDMProblemDetails,
        _root_component_type_list_2_spec_for_UDMProblemDetails,
        undefined,
    );
    return new UDMProblemDetails(
        cause
    );
}; }
    return _cached_decoder_for_UDMProblemDetails(el);
}

let _cached_encoder_for_UDMProblemDetails: $.ASN1Encoder<UDMProblemDetails> | null = null;

/**
 * @summary Encodes a(n) UDMProblemDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMProblemDetails, encoded as an ASN.1 Element.
 */
export
function _encode_UDMProblemDetails (value: UDMProblemDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMProblemDetails) { _cached_encoder_for_UDMProblemDetails = function (value: UDMProblemDetails, elGetter: $.ASN1Encoder<UDMProblemDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_UDMProblemDetailsCause, $.BER)(value.cause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMProblemDetails(value, elGetter);
}


/* eslint-enable */
