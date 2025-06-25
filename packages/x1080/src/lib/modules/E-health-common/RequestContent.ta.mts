/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    RequestContent_content,
    _decode_RequestContent_content,
    _encode_RequestContent_content,
} from '../E-health-common/RequestContent-content.ta.mjs';

/**
 * @summary RequestContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestContent ::= SEQUENCE {
 *   contentType       INTERACTIVE-OPERATION.&content-req,
 *   content           SEQUENCE {
 *     invokId           INTEGER (0..MAX)                       OPTIONAL,
 *     sessionType       INTERACTIVE-OPERATION.&sessionType,
 *     sessionId         INTEGER (0..MAX),
 *     requirement   [0] INTERACTIVE-OPERATION.&requirements    DEFAULT none,
 *     voice-options [1] INTERACTIVE-OPERATION.&Voice-options   OPTIONAL,
 *     video-options [2] INTERACTIVE-OPERATION.&Video-options   OPTIONAL,
 *     request       [3] INTERACTIVE-OPERATION.&Request,
 *     exchangeMode  [4] INTERACTIVE-OPERATION.&exchangeMode    DEFAULT sync,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class RequestContent {
    constructor(
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: OBJECT_IDENTIFIER,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: RequestContent_content,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestContent
     * @description
     *
     * This takes an `object` and converts it to a `RequestContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestContent`.
     * @returns {RequestContent}
     */
    public static _from_object(
        _o: { [_K in keyof RequestContent]: RequestContent[_K] }
    ): RequestContent {
        return new RequestContent(
            _o.contentType,
            _o.content,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of RequestContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'contentType',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of RequestContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestContent: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RequestContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestContent: $.ComponentSpec[] = [];


let _cached_decoder_for_RequestContent: $.ASN1Decoder<RequestContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RequestContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestContent} The decoded data structure.
 */
export function _decode_RequestContent(el: _Element): RequestContent {
    if (!_cached_decoder_for_RequestContent) {
        _cached_decoder_for_RequestContent = function (
            el: _Element
        ): RequestContent {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RequestContent contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'contentType';
            sequence[1].name = 'content';
            let contentType!: OBJECT_IDENTIFIER;
            let content!: RequestContent_content;
            contentType = $._decodeObjectIdentifier(sequence[0]);
            content = _decode_RequestContent_content(sequence[1]);
            return new RequestContent(contentType, content, sequence.slice(2));
        };
    }
    return _cached_decoder_for_RequestContent(el);
}


let _cached_encoder_for_RequestContent: $.ASN1Encoder<RequestContent> | null = null;


/**
 * @summary Encodes a(n) RequestContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestContent, encoded as an ASN.1 Element.
 */
export function _encode_RequestContent(
    value: RequestContent,
    elGetter: $.ASN1Encoder<RequestContent>
): _Element {
    if (!_cached_encoder_for_RequestContent) {
        _cached_encoder_for_RequestContent = function (
            value: RequestContent        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contentType,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_RequestContent_content(
                                value.content,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RequestContent(value, elGetter);
}


/* eslint-enable */
