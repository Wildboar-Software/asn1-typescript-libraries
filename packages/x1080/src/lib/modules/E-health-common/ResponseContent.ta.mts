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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ResponseContent_content,
    _decode_ResponseContent_content,
    _encode_ResponseContent_content,
} from '../E-health-common/ResponseContent-content.ta.mjs';

/**
 * @summary ResponseContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseContent ::= SEQUENCE {
 *   contentType   INTERACTIVE-OPERATION.&content-rsp,
 *   content       SEQUENCE {
 *     invokId       INTEGER (0..MAX)  OPTIONAL,
 *     sessionType   INTERACTIVE-OPERATION.&sessionType,
 *     sessionId     INTEGER (0..MAX),
 *     response      INTERACTIVE-OPERATION.&Response,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class ResponseContent {
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
        readonly content: ResponseContent_content,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResponseContent
     * @description
     *
     * This takes an `object` and converts it to a `ResponseContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResponseContent`.
     * @returns {ResponseContent}
     */
    public static _from_object(
        _o: { [_K in keyof ResponseContent]: ResponseContent[_K] }
    ): ResponseContent {
        return new ResponseContent(
            _o.contentType,
            _o.content,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of ResponseContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseContent: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of ResponseContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseContent: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ResponseContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseContent: $.ComponentSpec[] = [];


let _cached_decoder_for_ResponseContent: $.ASN1Decoder<ResponseContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResponseContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseContent} The decoded data structure.
 */
export function _decode_ResponseContent(el: _Element) {
    if (!_cached_decoder_for_ResponseContent) {
        _cached_decoder_for_ResponseContent = function (
            el: _Element
        ): ResponseContent {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ResponseContent contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'contentType';
            sequence[1].name = 'content';
            let contentType!: OBJECT_IDENTIFIER;
            let content!: ResponseContent_content;
            contentType = $._decodeObjectIdentifier(sequence[0]);
            content = _decode_ResponseContent_content(sequence[1]);
            return new ResponseContent(contentType, content, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ResponseContent(el);
}


let _cached_encoder_for_ResponseContent: $.ASN1Encoder<ResponseContent> | null = null;


/**
 * @summary Encodes a(n) ResponseContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseContent, encoded as an ASN.1 Element.
 */
export function _encode_ResponseContent(
    value: ResponseContent,
    elGetter: $.ASN1Encoder<ResponseContent>
) {
    if (!_cached_encoder_for_ResponseContent) {
        _cached_encoder_for_ResponseContent = function (
            value: ResponseContent        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contentType,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ResponseContent_content(
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
    return _cached_encoder_for_ResponseContent(value, elGetter);
}


/* eslint-enable */
