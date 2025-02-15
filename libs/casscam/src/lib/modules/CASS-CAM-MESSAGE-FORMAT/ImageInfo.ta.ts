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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION ImageInfo */
/**
 * @summary ImageInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImageInfo ::= SEQUENCE {
 *   -- Download Server IP address
 *   -- Only when the image is not Common Image
 *   dSIP  OCTET STRING(SIZE (16)) OPTIONAL,
 *   -- Transport Mechanism (Carousel, TFTP, HTTP, etc.)
 *   -- 0x01 : Carousel
 *   -- 0x02 : TFTP
 *   -- 0x03 : HTTP
 *   -- 0x04 ~ 0xff : reserved
 *   tm    OCTET STRING(SIZE (1)),
 *   -- File Name
 *   -- Only when the image is not Common Image
 *   fn    PrintableString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ImageInfo {
    constructor (
        /**
         * @summary `dSIP`.
         * @public
         * @readonly
         */
        readonly dSIP: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tm`.
         * @public
         * @readonly
         */
        readonly tm: OCTET_STRING,
        /**
         * @summary `fn`.
         * @public
         * @readonly
         */
        readonly fn: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a ImageInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ImageInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ImageInfo`.
     * @returns {ImageInfo}
     */
    public static _from_object (_o: { [_K in keyof (ImageInfo)]: (ImageInfo)[_K] }): ImageInfo {
        return new ImageInfo(_o.dSIP, _o.tm, _o.fn);
    }


}
/* END_OF_SYMBOL_DEFINITION ImageInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ImageInfo */
/**
 * @summary The Leading Root Component Types of ImageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ImageInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("dSIP", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("tm", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("fn", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ImageInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ImageInfo */
/**
 * @summary The Trailing Root Component Types of ImageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ImageInfo: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ImageInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ImageInfo */
/**
 * @summary The Extension Addition Component Types of ImageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ImageInfo: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ImageInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ImageInfo */
let _cached_decoder_for_ImageInfo: $.ASN1Decoder<ImageInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ImageInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ImageInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ImageInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ImageInfo} The decoded data structure.
 */
export
function _decode_ImageInfo (el: _Element) {
    if (!_cached_decoder_for_ImageInfo) { _cached_decoder_for_ImageInfo = function (el: _Element): ImageInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let dSIP: OPTIONAL<OCTET_STRING>;
    let tm!: OCTET_STRING;
    let fn: OPTIONAL<PrintableString>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "dSIP": (_el: _Element): void => { dSIP = $._decodeOctetString(_el); },
        "tm": (_el: _Element): void => { tm = $._decodeOctetString(_el); },
        "fn": (_el: _Element): void => { fn = $._decodePrintableString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ImageInfo,
        _extension_additions_list_spec_for_ImageInfo,
        _root_component_type_list_2_spec_for_ImageInfo,
        undefined,
    );
    return new ImageInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        dSIP,
        tm,
        fn
    );
}; }
    return _cached_decoder_for_ImageInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ImageInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ImageInfo */
let _cached_encoder_for_ImageInfo: $.ASN1Encoder<ImageInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ImageInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ImageInfo */
/**
 * @summary Encodes a(n) ImageInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImageInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ImageInfo (value: ImageInfo, elGetter: $.ASN1Encoder<ImageInfo>) {
    if (!_cached_encoder_for_ImageInfo) { _cached_encoder_for_ImageInfo = function (value: ImageInfo, elGetter: $.ASN1Encoder<ImageInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dSIP === undefined) ? undefined : $._encodeOctetString(value.dSIP, $.BER)),
            /* REQUIRED   */ $._encodeOctetString(value.tm, $.BER),
            /* IF_ABSENT  */ ((value.fn === undefined) ? undefined : $._encodePrintableString(value.fn, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ImageInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ImageInfo */

/* eslint-enable */
