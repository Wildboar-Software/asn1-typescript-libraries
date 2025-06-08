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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { INTERACTIVE_OPERATION } from '../E-health-common/INTERACTIVE-OPERATION.oca';
export { INTERACTIVE_OPERATION } from '../E-health-common/INTERACTIVE-OPERATION.oca';
import {
    ErrorContent_content,
    _decode_ErrorContent_content,
    _encode_ErrorContent_content,
} from '../E-health-common/ErrorContent-content.ta';
export {
    ErrorContent_content,
    _decode_ErrorContent_content,
    _encode_ErrorContent_content,
} from '../E-health-common/ErrorContent-content.ta';

/* START_OF_SYMBOL_DEFINITION ErrorContent */
/**
 * @summary ErrorContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorContent ::= SEQUENCE {
 *   contentType   INTERACTIVE-OPERATION.&content-err,
 *   content       SEQUENCE {
 *     invokId       INTEGER (0..MAX)  OPTIONAL,
 *     sessionType   INTERACTIVE-OPERATION.&sessionType,
 *     sessionId     INTEGER (0..MAX),
 *     error         INTERACTIVE-OPERATION.&Error,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class ErrorContent {
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
        readonly content: ErrorContent_content,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ErrorContent
     * @description
     *
     * This takes an `object` and converts it to a `ErrorContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorContent`.
     * @returns {ErrorContent}
     */
    public static _from_object(
        _o: { [_K in keyof ErrorContent]: ErrorContent[_K] }
    ): ErrorContent {
        return new ErrorContent(
            _o.contentType,
            _o.content,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ErrorContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ErrorContent */
/**
 * @summary The Leading Root Component Types of ErrorContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ErrorContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'contentType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ErrorContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ErrorContent */
/**
 * @summary The Trailing Root Component Types of ErrorContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ErrorContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ErrorContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ErrorContent */
/**
 * @summary The Extension Addition Component Types of ErrorContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ErrorContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ErrorContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorContent */
let _cached_decoder_for_ErrorContent: $.ASN1Decoder<ErrorContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorContent */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorContent */
/**
 * @summary Decodes an ASN.1 element into a(n) ErrorContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorContent} The decoded data structure.
 */
export function _decode_ErrorContent(el: _Element) {
    if (!_cached_decoder_for_ErrorContent) {
        _cached_decoder_for_ErrorContent = function (
            el: _Element
        ): ErrorContent {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ErrorContent contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'contentType';
            sequence[1].name = 'content';
            let contentType!: OBJECT_IDENTIFIER;
            let content!: ErrorContent_content;
            contentType = $._decodeObjectIdentifier(sequence[0]);
            content = _decode_ErrorContent_content(sequence[1]);
            return new ErrorContent(contentType, content, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ErrorContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ErrorContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorContent */
let _cached_encoder_for_ErrorContent: $.ASN1Encoder<ErrorContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorContent */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorContent */
/**
 * @summary Encodes a(n) ErrorContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorContent, encoded as an ASN.1 Element.
 */
export function _encode_ErrorContent(
    value: ErrorContent,
    elGetter: $.ASN1Encoder<ErrorContent>
) {
    if (!_cached_encoder_for_ErrorContent) {
        _cached_encoder_for_ErrorContent = function (
            value: ErrorContent,
            elGetter: $.ASN1Encoder<ErrorContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contentType,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ErrorContent_content(
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
    return _cached_encoder_for_ErrorContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ErrorContent */

/* eslint-enable */
