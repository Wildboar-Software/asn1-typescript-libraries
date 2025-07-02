/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Content,
    _decode_Content,
    _encode_Content,
} from "../CMSSigncryption/Content.ta.mjs";
import { Mode, _decode_Mode, _encode_Mode } from "../CMSSigncryption/Mode.ta.mjs";

/**
 * @summary ContentInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentInformation ::= SEQUENCE {
 * mode         Mode,
 * content    Content OPTIONAL
 * }
 * ```
 *
 */
export class ContentInformation {
    constructor(
        /**
         * @summary `mode`.
         * @public
         * @readonly
         */
        readonly mode: Mode,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: OPTIONAL<Content>
    ) {}

    /**
     * @summary Restructures an object into a ContentInformation
     * @description
     *
     * This takes an `object` and converts it to a `ContentInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContentInformation`.
     * @returns {ContentInformation}
     */
    public static _from_object(
        _o: { [_K in keyof ContentInformation]: ContentInformation[_K] }
    ): ContentInformation {
        return new ContentInformation(_o.mode, _o.content);
    }
}


/**
 * @summary The Leading Root Component Types of ContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContentInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mode",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "content",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of ContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContentInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContentInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_ContentInformation: $.ASN1Decoder<ContentInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ContentInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentInformation} The decoded data structure.
 */
export function _decode_ContentInformation(el: _Element): ContentInformation {
    if (!_cached_decoder_for_ContentInformation) {
        _cached_decoder_for_ContentInformation = function (
            el: _Element
        ): ContentInformation {
            let mode!: Mode;
            let content: OPTIONAL<Content>;
            const callbacks: $.DecodingMap = {
                mode: (_el: _Element): void => {
                    mode = _decode_Mode(_el);
                },
                content: (_el: _Element): void => {
                    content = _decode_Content(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContentInformation,
                _extension_additions_list_spec_for_ContentInformation,
                _root_component_type_list_2_spec_for_ContentInformation,
                undefined
            );
            return new ContentInformation (
                mode,
                content
            );
        };
    }
    return _cached_decoder_for_ContentInformation(el);
}


let _cached_encoder_for_ContentInformation: $.ASN1Encoder<ContentInformation> | null = null;


/**
 * @summary Encodes a(n) ContentInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentInformation, encoded as an ASN.1 Element.
 */
export function _encode_ContentInformation(
    value: ContentInformation,
    elGetter: $.ASN1Encoder<ContentInformation>
): _Element {
    if (!_cached_encoder_for_ContentInformation) {
        _cached_encoder_for_ContentInformation = function (
            value: ContentInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Mode(value.mode, $.DER),
                        /* IF_ABSENT  */ value.content === undefined
                            ? undefined
                            : _encode_Content(value.content, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ContentInformation(value, elGetter);
}


/* eslint-enable */
