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
 * @summary SIPGeolocationHeaderInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPGeolocationHeaderInfo ::= SEQUENCE
 * {
 *     locationValue [1] UTF8String,
 *     cidInfo       [2] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SIPGeolocationHeaderInfo {
    constructor (
        /**
         * @summary `locationValue`.
         * @public
         * @readonly
         */
        readonly locationValue: UTF8String,
        /**
         * @summary `cidInfo`.
         * @public
         * @readonly
         */
        readonly cidInfo: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a SIPGeolocationHeaderInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SIPGeolocationHeaderInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPGeolocationHeaderInfo`.
     * @returns {SIPGeolocationHeaderInfo}
     */
    public static _from_object (_o: { [_K in keyof (SIPGeolocationHeaderInfo)]: (SIPGeolocationHeaderInfo)[_K] }): SIPGeolocationHeaderInfo {
        return new SIPGeolocationHeaderInfo(_o.locationValue, _o.cidInfo);
    }


}

/**
 * @summary The Leading Root Component Types of SIPGeolocationHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPGeolocationHeaderInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cidInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SIPGeolocationHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPGeolocationHeaderInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPGeolocationHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPGeolocationHeaderInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPGeolocationHeaderInfo: $.ASN1Decoder<SIPGeolocationHeaderInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPGeolocationHeaderInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPGeolocationHeaderInfo (el: _Element): SIPGeolocationHeaderInfo {
    if (!_cached_decoder_for_SIPGeolocationHeaderInfo) { _cached_decoder_for_SIPGeolocationHeaderInfo = function (el: _Element): SIPGeolocationHeaderInfo {
    let locationValue!: UTF8String;
    let cidInfo: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "locationValue": (_el: _Element): void => { locationValue = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cidInfo": (_el: _Element): void => { cidInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIPGeolocationHeaderInfo,
        _extension_additions_list_spec_for_SIPGeolocationHeaderInfo,
        _root_component_type_list_2_spec_for_SIPGeolocationHeaderInfo,
        undefined,
    );
    return new SIPGeolocationHeaderInfo(
        locationValue,
        cidInfo
    );
}; }
    return _cached_decoder_for_SIPGeolocationHeaderInfo(el);
}

let _cached_encoder_for_SIPGeolocationHeaderInfo: $.ASN1Encoder<SIPGeolocationHeaderInfo> | null = null;

/**
 * @summary Encodes a(n) SIPGeolocationHeaderInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPGeolocationHeaderInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SIPGeolocationHeaderInfo (value: SIPGeolocationHeaderInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPGeolocationHeaderInfo) { _cached_encoder_for_SIPGeolocationHeaderInfo = function (value: SIPGeolocationHeaderInfo, elGetter: $.ASN1Encoder<SIPGeolocationHeaderInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.locationValue, $.BER),
            /* IF_ABSENT  */ ((value.cidInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.cidInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SIPGeolocationHeaderInfo(value, elGetter);
}


/* eslint-enable */
