/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    PrintableString,
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


let _cached_decoder_for_ImageInfo: $.ASN1Decoder<ImageInfo> | null = null;


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


let _cached_encoder_for_ImageInfo: $.ASN1Encoder<ImageInfo> | null = null;


/**
 * @summary Encodes a(n) ImageInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImageInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ImageInfo (value: ImageInfo, elGetter: $.ASN1Encoder<ImageInfo>) {
    if (!_cached_encoder_for_ImageInfo) { _cached_encoder_for_ImageInfo = function (value: ImageInfo): _Element {
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


/* eslint-enable */
