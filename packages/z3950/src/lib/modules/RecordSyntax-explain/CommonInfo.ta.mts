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
import { LanguageCode, _decode_LanguageCode, _encode_LanguageCode } from "../RecordSyntax-explain/LanguageCode.ta.mjs";
// export { LanguageCode, _decode_LanguageCode, _encode_LanguageCode } from "../RecordSyntax-explain/LanguageCode.ta.mjs";


/**
 * @summary CommonInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonInfo ::= SEQUENCE {
 *   dateAdded               [0]   IMPLICIT GeneralizedTime OPTIONAL,
 *   dateChanged             [1]   IMPLICIT GeneralizedTime OPTIONAL,
 *   expiry                  [2]   IMPLICIT GeneralizedTime OPTIONAL,
 *   humanString-Language    [3]   IMPLICIT LanguageCode OPTIONAL,
 *    -- following not to occur for brief:
 *   otherInfo                     OtherInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CommonInfo {
    constructor (
        /**
         * @summary `dateAdded`.
         * @public
         * @readonly
         */
        readonly dateAdded: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `dateChanged`.
         * @public
         * @readonly
         */
        readonly dateChanged: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `expiry`.
         * @public
         * @readonly
         */
        readonly expiry: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `humanString_Language`.
         * @public
         * @readonly
         */
        readonly humanString_Language: OPTIONAL<LanguageCode>,
        /**
         * @summary `otherInfo`.
         * @public
         * @readonly
         */
        readonly otherInfo: OPTIONAL<OtherInformation>
    ) {}

    /**
     * @summary Restructures an object into a CommonInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CommonInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonInfo`.
     * @returns {CommonInfo}
     */
    public static _from_object (_o: { [_K in keyof (CommonInfo)]: (CommonInfo)[_K] }): CommonInfo {
        return new CommonInfo(_o.dateAdded, _o.dateChanged, _o.expiry, _o.humanString_Language, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of CommonInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("dateAdded", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dateChanged", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("expiry", true, $.hasTag(_TagClass.context, 2)),
    /* FIXME: humanString-Language COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: otherInfo COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of CommonInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonInfo: $.ASN1Decoder<CommonInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonInfo (el: _Element): CommonInfo {
    if (!_cached_decoder_for_CommonInfo) { _cached_decoder_for_CommonInfo = function (el: _Element): CommonInfo {
    let dateAdded: OPTIONAL<GeneralizedTime>;
    let dateChanged: OPTIONAL<GeneralizedTime>;
    let expiry: OPTIONAL<GeneralizedTime>;
    let humanString_Language: OPTIONAL<LanguageCode>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "dateAdded": (_el: _Element): void => { dateAdded = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "dateChanged": (_el: _Element): void => { dateChanged = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "expiry": (_el: _Element): void => { expiry = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "humanString-Language": (_el: _Element): void => { humanString_Language = $._decode_implicit<LanguageCode>(() => _decode_LanguageCode)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonInfo,
        _extension_additions_list_spec_for_CommonInfo,
        _root_component_type_list_2_spec_for_CommonInfo,
        undefined,
    );
    return new CommonInfo(
        dateAdded,
        dateChanged,
        expiry,
        humanString_Language,
        otherInfo
    );
}; }
    return _cached_decoder_for_CommonInfo(el);
}

let _cached_encoder_for_CommonInfo: $.ASN1Encoder<CommonInfo> | null = null;

/**
 * @summary Encodes a(n) CommonInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CommonInfo (value: CommonInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonInfo) { _cached_encoder_for_CommonInfo = function (value: CommonInfo, elGetter: $.ASN1Encoder<CommonInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dateAdded === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeGeneralizedTime, $.BER)(value.dateAdded, $.BER)),
            /* IF_ABSENT  */ ((value.dateChanged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.dateChanged, $.BER)),
            /* IF_ABSENT  */ ((value.expiry === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.expiry, $.BER)),
            /* IF_ABSENT  */ ((value.humanString_Language === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LanguageCode, $.BER)(value.humanString_Language, $.BER)),
            /* IF_ABSENT  */ ((value.otherInfo === undefined) ? undefined : _encode_OtherInformation(value.otherInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonInfo(value, elGetter);
}


/* eslint-enable */
