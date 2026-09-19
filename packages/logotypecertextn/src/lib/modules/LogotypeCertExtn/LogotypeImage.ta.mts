/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LogotypeDetails, _decode_LogotypeDetails, _encode_LogotypeDetails } from "../LogotypeCertExtn/LogotypeDetails.ta.mjs";
// export { LogotypeDetails, _decode_LogotypeDetails, _encode_LogotypeDetails } from "../LogotypeCertExtn/LogotypeDetails.ta.mjs";
import { LogotypeImageInfo, _decode_LogotypeImageInfo, _encode_LogotypeImageInfo } from "../LogotypeCertExtn/LogotypeImageInfo.ta.mjs";
// export { LogotypeImageInfo, _decode_LogotypeImageInfo, _encode_LogotypeImageInfo } from "../LogotypeCertExtn/LogotypeImageInfo.ta.mjs";


/**
 * @summary LogotypeImage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeImage ::= SEQUENCE {
 *    imageDetails    LogotypeDetails,
 *    imageInfo       LogotypeImageInfo OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogotypeImage {
    constructor (
        /**
         * @summary `imageDetails`.
         * @public
         * @readonly
         */
        readonly imageDetails: LogotypeDetails,
        /**
         * @summary `imageInfo`.
         * @public
         * @readonly
         */
        readonly imageInfo: OPTIONAL<LogotypeImageInfo>
    ) {}

    /**
     * @summary Restructures an object into a LogotypeImage
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeImage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeImage`.
     * @returns {LogotypeImage}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeImage)]: (LogotypeImage)[_K] }): LogotypeImage {
        return new LogotypeImage(_o.imageDetails, _o.imageInfo);
    }


}

/**
 * @summary The Leading Root Component Types of LogotypeImage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeImage: $.ComponentSpec[] = [
    new $.ComponentSpec("imageDetails", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("imageInfo", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of LogotypeImage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeImage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeImage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeImage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeImage: $.ASN1Decoder<LogotypeImage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeImage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeImage (el: _Element): LogotypeImage {
    if (!_cached_decoder_for_LogotypeImage) { _cached_decoder_for_LogotypeImage = function (el: _Element): LogotypeImage {
    let imageDetails!: LogotypeDetails;
    let imageInfo: OPTIONAL<LogotypeImageInfo>;
    const callbacks: $.DecodingMap = {
        "imageDetails": (_el: _Element): void => { imageDetails = _decode_LogotypeDetails(_el); },
        "imageInfo": (_el: _Element): void => { imageInfo = _decode_LogotypeImageInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogotypeImage,
        _extension_additions_list_spec_for_LogotypeImage,
        _root_component_type_list_2_spec_for_LogotypeImage,
        undefined,
    );
    return new LogotypeImage(
        imageDetails,
        imageInfo
    );
}; }
    return _cached_decoder_for_LogotypeImage(el);
}

let _cached_encoder_for_LogotypeImage: $.ASN1Encoder<LogotypeImage> | null = null;

/**
 * @summary Encodes a(n) LogotypeImage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeImage, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeImage (value: LogotypeImage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeImage) { _cached_encoder_for_LogotypeImage = function (value: LogotypeImage, elGetter: $.ASN1Encoder<LogotypeImage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LogotypeDetails(value.imageDetails, $.BER),
            /* IF_ABSENT  */ ((value.imageInfo === undefined) ? undefined : _encode_LogotypeImageInfo(value.imageInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeImage(value, elGetter);
}


/* eslint-enable */
