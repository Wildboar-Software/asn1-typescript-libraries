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



/**
 * @summary SecurityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityInfo ::= SEQUENCE {
 *     protocol        OBJECT IDENTIFIER,
 *     requiredData    ANY DEFINED BY protocol,
 *     optionalData    ANY DEFINED BY protocol OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SecurityInfo {
    constructor (
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OBJECT_IDENTIFIER,
// FIXME: readonly requiredData: AnyType,
// FIXME: readonly optionalData: AnyType
    ) {}

    /**
     * @summary Restructures an object into a SecurityInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityInfo`.
     * @returns {SecurityInfo}
     */
    public static _from_object (_o: { [_K in keyof (SecurityInfo)]: (SecurityInfo)[_K] }): SecurityInfo {
        return new SecurityInfo(_o.protocol, _o., _o.);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("requiredData", false, $.hasAnyTag),
    new $.ComponentSpec("optionalData", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SecurityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityInfo: $.ASN1Decoder<SecurityInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityInfo (el: _Element): SecurityInfo {
    if (!_cached_decoder_for_SecurityInfo) { _cached_decoder_for_SecurityInfo = function (el: _Element): SecurityInfo {
    let protocol!: OBJECT_IDENTIFIER;
    let requiredData!: /* FIXME: requiredData COULD_NOT_COMPILE_TYPE */;
    let optionalData: OPTIONAL</* FIXME: optionalData COULD_NOT_COMPILE_TYPE */>;
    const callbacks: $.DecodingMap = {
        "protocol": (_el: _Element): void => { protocol = $._decodeObjectIdentifier(_el); },
        "requiredData": (_el: _Element): void => { requiredData = $._decodeAny(_el); },
        "optionalData": (_el: _Element): void => { optionalData = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SecurityInfo,
        _extension_additions_list_spec_for_SecurityInfo,
        _root_component_type_list_2_spec_for_SecurityInfo,
        undefined,
    );
    return new SecurityInfo(
        protocol,
        requiredData,
        optionalData
    );
}; }
    return _cached_decoder_for_SecurityInfo(el);
}

let _cached_encoder_for_SecurityInfo: $.ASN1Encoder<SecurityInfo> | null = null;

/**
 * @summary Encodes a(n) SecurityInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityInfo (value: SecurityInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityInfo) { _cached_encoder_for_SecurityInfo = function (value: SecurityInfo, elGetter: $.ASN1Encoder<SecurityInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeAny(value.requiredData, $.BER),
            /* IF_ABSENT  */ ((value.optionalData === undefined) ? undefined : $._encodeAny(value.optionalData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityInfo(value, elGetter);
}


/* eslint-enable */
