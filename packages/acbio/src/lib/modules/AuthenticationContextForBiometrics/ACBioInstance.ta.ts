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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { ContentTypeACBio } from '../AuthenticationContextForBiometrics/ContentTypeACBio.osa.js';
export { ContentTypeACBio } from '../AuthenticationContextForBiometrics/ContentTypeACBio.osa.js';

/* START_OF_SYMBOL_DEFINITION ACBioInstance */
/**
 * @summary ACBioInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACBioInstance ::= SEQUENCE {
 *     contentType     CONTENT-TYPE.&id({ContentTypeACBio}),
 *     content         [0] EXPLICIT CONTENT-TYPE.&Type({ContentTypeACBio}{@contentType}) }
 * ```
 *
 * @class
 */
export class ACBioInstance {
    constructor(
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
    ) {}

    /**
     * @summary Restructures an object into a ACBioInstance
     * @description
     *
     * This takes an `object` and converts it to a `ACBioInstance`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACBioInstance`.
     * @returns {ACBioInstance}
     */
    public static _from_object(
        _o: { [_K in keyof ACBioInstance]: ACBioInstance[_K] }
    ): ACBioInstance {
        return new ACBioInstance(_o.contentType, _o.content);
    }
}
/* END_OF_SYMBOL_DEFINITION ACBioInstance */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ACBioInstance */
/**
 * @summary The Leading Root Component Types of ACBioInstance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACBioInstance: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'contentType',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ACBioInstance */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ACBioInstance */
/**
 * @summary The Trailing Root Component Types of ACBioInstance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACBioInstance: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ACBioInstance */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ACBioInstance */
/**
 * @summary The Extension Addition Component Types of ACBioInstance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACBioInstance: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ACBioInstance */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ACBioInstance */
let _cached_decoder_for_ACBioInstance: $.ASN1Decoder<ACBioInstance> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ACBioInstance */

/* START_OF_SYMBOL_DEFINITION _decode_ACBioInstance */
/**
 * @summary Decodes an ASN.1 element into a(n) ACBioInstance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACBioInstance} The decoded data structure.
 */
export function _decode_ACBioInstance(el: _Element) {
    if (!_cached_decoder_for_ACBioInstance) {
        _cached_decoder_for_ACBioInstance = function (
            el: _Element
        ): ACBioInstance {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ACBioInstance contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'contentType';
            sequence[1].name = 'content';
            let contentType!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            let content!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            contentType = $._decodeAny(
                /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ sequence[0]
            );
            content = $._decode_explicit<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(
                () => $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
            )(sequence[1]);
            return new ACBioInstance(contentType, content);
        };
    }
    return _cached_decoder_for_ACBioInstance(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ACBioInstance */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ACBioInstance */
let _cached_encoder_for_ACBioInstance: $.ASN1Encoder<ACBioInstance> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ACBioInstance */

/* START_OF_SYMBOL_DEFINITION _encode_ACBioInstance */
/**
 * @summary Encodes a(n) ACBioInstance into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACBioInstance, encoded as an ASN.1 Element.
 */
export function _encode_ACBioInstance(
    value: ACBioInstance,
    elGetter: $.ASN1Encoder<ACBioInstance>
) {
    if (!_cached_encoder_for_ACBioInstance) {
        _cached_encoder_for_ACBioInstance = function (
            value: ACBioInstance,
            elGetter: $.ASN1Encoder<ACBioInstance>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeAny(
                            /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.contentType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
                            $.BER
                        )(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ACBioInstance(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ACBioInstance */

/* eslint-enable */
