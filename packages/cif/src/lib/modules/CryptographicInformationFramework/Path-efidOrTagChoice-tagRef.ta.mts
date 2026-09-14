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
 * @summary Path_efidOrTagChoice_tagRef
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path-efidOrTagChoice-tagRef ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Path_efidOrTagChoice_tagRef {
    constructor (
        /**
         * @summary `tag`.
         * @public
         * @readonly
         */
        readonly tag: OCTET_STRING,
        /**
         * @summary `efidOrPath`.
         * @public
         * @readonly
         */
        readonly efidOrPath: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a Path_efidOrTagChoice_tagRef
     * @description
     * 
     * This takes an `object` and converts it to a `Path_efidOrTagChoice_tagRef`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Path_efidOrTagChoice_tagRef`.
     * @returns {Path_efidOrTagChoice_tagRef}
     */
    public static _from_object (_o: { [_K in keyof (Path_efidOrTagChoice_tagRef)]: (Path_efidOrTagChoice_tagRef)[_K] }): Path_efidOrTagChoice_tagRef {
        return new Path_efidOrTagChoice_tagRef(_o.tag, _o.efidOrPath);
    }


}

/**
 * @summary The Leading Root Component Types of Path_efidOrTagChoice_tagRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Path_efidOrTagChoice_tagRef: $.ComponentSpec[] = [
    new $.ComponentSpec("tag", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("efidOrPath", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of Path_efidOrTagChoice_tagRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Path_efidOrTagChoice_tagRef: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Path_efidOrTagChoice_tagRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Path_efidOrTagChoice_tagRef: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Path_efidOrTagChoice_tagRef: $.ASN1Decoder<Path_efidOrTagChoice_tagRef> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Path_efidOrTagChoice_tagRef
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Path_efidOrTagChoice_tagRef (el: _Element): Path_efidOrTagChoice_tagRef {
    if (!_cached_decoder_for_Path_efidOrTagChoice_tagRef) { _cached_decoder_for_Path_efidOrTagChoice_tagRef = function (el: _Element): Path_efidOrTagChoice_tagRef {
    let tag!: OCTET_STRING;
    let efidOrPath: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "tag": (_el: _Element): void => { tag = $._decodeOctetString(_el); },
        "efidOrPath": (_el: _Element): void => { efidOrPath = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Path_efidOrTagChoice_tagRef,
        _extension_additions_list_spec_for_Path_efidOrTagChoice_tagRef,
        _root_component_type_list_2_spec_for_Path_efidOrTagChoice_tagRef,
        undefined,
    );
    return new Path_efidOrTagChoice_tagRef(
        tag,
        efidOrPath
    );
}; }
    return _cached_decoder_for_Path_efidOrTagChoice_tagRef(el);
}

let _cached_encoder_for_Path_efidOrTagChoice_tagRef: $.ASN1Encoder<Path_efidOrTagChoice_tagRef> | null = null;

/**
 * @summary Encodes a(n) Path_efidOrTagChoice_tagRef into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_efidOrTagChoice_tagRef, encoded as an ASN.1 Element.
 */
export
function _encode_Path_efidOrTagChoice_tagRef (value: Path_efidOrTagChoice_tagRef, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Path_efidOrTagChoice_tagRef) { _cached_encoder_for_Path_efidOrTagChoice_tagRef = function (value: Path_efidOrTagChoice_tagRef, elGetter: $.ASN1Encoder<Path_efidOrTagChoice_tagRef>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.tag, $.BER),
            /* IF_ABSENT  */ ((value.efidOrPath === undefined) ? undefined : $._encodeOctetString(value.efidOrPath, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Path_efidOrTagChoice_tagRef(value, elGetter);
}


/* eslint-enable */
