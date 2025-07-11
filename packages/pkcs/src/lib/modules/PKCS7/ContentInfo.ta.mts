/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ContentInfo
 * @description
 *
 * NOTE: This was modified from the original definition in ITU X.420 to make
 * `pkcs7-content` explicitly encoded, because the ITU X.420 definition uses
 * implicit encoding, which conflicts with the authoritative IETF RFC version.
 * `pkcs7-content` was also made optional.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentInfo ::= SEQUENCE {
 *     content-type   PKCS7-CONTENT-TYPE.&id({PKCS7ContentTable}),
 *     pkcs7-content  [0] EXPLICIT PKCS7-CONTENT-TYPE.&Type({PKCS7ContentTable}) OPTIONAL
 * }
 * ```
 *
 */
export class ContentInfo {
    constructor(
        /**
         * @summary `content_type`.
         * @public
         * @readonly
         */
        readonly content_type: OBJECT_IDENTIFIER,
        /**
         * @summary `pkcs7_content`.
         * @public
         * @readonly
         */
        readonly pkcs7_content: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a ContentInfo
     * @description
     *
     * This takes an `object` and converts it to a `ContentInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContentInfo`.
     * @returns {ContentInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ContentInfo]: ContentInfo[_K] }
    ): ContentInfo {
        return new ContentInfo(_o.content_type, _o.pkcs7_content);
    }
}


/**
 * @summary The Leading Root Component Types of ContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "content-type",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "pkcs7-content",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of ContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContentInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContentInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_ContentInfo: $.ASN1Decoder<ContentInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentInfo} The decoded data structure.
 */
export function _decode_ContentInfo(el: _Element): ContentInfo {
    if (!_cached_decoder_for_ContentInfo) {
        _cached_decoder_for_ContentInfo = function (el: _Element): ContentInfo {
            let content_type!: OBJECT_IDENTIFIER;
            let pkcs7_content: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                "content-type": (_el: _Element): void => {
                    content_type = $._decodeObjectIdentifier(_el);
                },
                "pkcs7-content": (_el: _Element): void => {
                    pkcs7_content = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContentInfo,
                _extension_additions_list_spec_for_ContentInfo,
                _root_component_type_list_2_spec_for_ContentInfo,
                undefined
            );
            return new ContentInfo (
                content_type,
                pkcs7_content
            );
        };
    }
    return _cached_decoder_for_ContentInfo(el);
}


let _cached_encoder_for_ContentInfo: $.ASN1Encoder<ContentInfo> | null = null;


/**
 * @summary Encodes a(n) ContentInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentInfo, encoded as an ASN.1 Element.
 */
export function _encode_ContentInfo(
    value: ContentInfo,
    elGetter: $.ASN1Encoder<ContentInfo>
): _Element {
    if (!_cached_encoder_for_ContentInfo) {
        _cached_encoder_for_ContentInfo = function (
            value: ContentInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.content_type,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.pkcs7_content === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.pkcs7_content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ContentInfo(value, elGetter);
}


/* eslint-enable */
