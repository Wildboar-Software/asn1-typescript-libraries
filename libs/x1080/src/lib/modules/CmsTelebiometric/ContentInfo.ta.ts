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
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';
import { TelebSupportedcontentTypes } from '../CmsTelebiometric/TelebSupportedcontentTypes.osa';
export { TelebSupportedcontentTypes } from '../CmsTelebiometric/TelebSupportedcontentTypes.osa';

/* START_OF_SYMBOL_DEFINITION ContentInfo */
/**
 * @summary ContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentInfo ::= SEQUENCE {
 *   contentType  CONTENT-TYPE.&id ({TelebSupportedcontentTypes}),
 *   content      CONTENT-TYPE.&Type
 *           ({TelebSupportedcontentTypes}{@contentType}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ContentInfo {
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
        readonly content: OPTIONAL<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
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
        return new ContentInfo(
            _o.contentType,
            _o.content,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ContentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContentInfo */
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
        'contentType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec('content', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContentInfo */
/**
 * @summary The Trailing Root Component Types of ContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContentInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContentInfo */
/**
 * @summary The Extension Addition Component Types of ContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentInfo */
let _cached_decoder_for_ContentInfo: $.ASN1Decoder<ContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ContentInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentInfo} The decoded data structure.
 */
export function _decode_ContentInfo(el: _Element) {
    if (!_cached_decoder_for_ContentInfo) {
        _cached_decoder_for_ContentInfo = function (el: _Element): ContentInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contentType!: OBJECT_IDENTIFIER;
            let content: OPTIONAL<_Element>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contentType: (_el: _Element): void => {
                    contentType = $._decodeObjectIdentifier(_el);
                },
                content: (_el: _Element): void => {
                    content = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContentInfo,
                _extension_additions_list_spec_for_ContentInfo,
                _root_component_type_list_2_spec_for_ContentInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContentInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                contentType,
                content,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContentInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentInfo */
let _cached_encoder_for_ContentInfo: $.ASN1Encoder<ContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ContentInfo */
/**
 * @summary Encodes a(n) ContentInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentInfo, encoded as an ASN.1 Element.
 */
export function _encode_ContentInfo(
    value: ContentInfo,
    elGetter: $.ASN1Encoder<ContentInfo>
) {
    if (!_cached_encoder_for_ContentInfo) {
        _cached_encoder_for_ContentInfo = function (
            value: ContentInfo,
            elGetter: $.ASN1Encoder<ContentInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contentType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.content === undefined
                                ? undefined
                                : $._encodeAny(value.content, $.BER),
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
    return _cached_encoder_for_ContentInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentInfo */

/* eslint-enable */
