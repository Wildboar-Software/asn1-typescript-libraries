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
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.js';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.js';
import { IncludedContent } from '../CmsTelebiometric/IncludedContent.osa.js';
export { IncludedContent } from '../CmsTelebiometric/IncludedContent.osa.js';

/* START_OF_SYMBOL_DEFINITION EncapsulatedContentInfo */
/**
 * @summary EncapsulatedContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncapsulatedContentInfo ::= SEQUENCE {
 *   eContentType     CONTENT-TYPE.&id({IncludedContent}),
 *   eContent     [0] EXPLICIT OCTET STRING
 *     (CONTAINING CONTENT-TYPE.&Type({IncludedContent}
 *      {@eContentType})) OPTIONAL }
 * ```
 *
 * @class
 */
export class EncapsulatedContentInfo {
    constructor(
        /**
         * @summary `eContentType`.
         * @public
         * @readonly
         */
        readonly eContentType: OBJECT_IDENTIFIER,
        /**
         * @summary `eContent`.
         * @public
         * @readonly
         */
        readonly eContent: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a EncapsulatedContentInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncapsulatedContentInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncapsulatedContentInfo`.
     * @returns {EncapsulatedContentInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncapsulatedContentInfo]: EncapsulatedContentInfo[_K];
        }
    ): EncapsulatedContentInfo {
        return new EncapsulatedContentInfo(_o.eContentType, _o.eContent);
    }
}
/* END_OF_SYMBOL_DEFINITION EncapsulatedContentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncapsulatedContentInfo */
/**
 * @summary The Leading Root Component Types of EncapsulatedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'eContentType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'eContent',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncapsulatedContentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncapsulatedContentInfo */
/**
 * @summary The Trailing Root Component Types of EncapsulatedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncapsulatedContentInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncapsulatedContentInfo */
/**
 * @summary The Extension Addition Component Types of EncapsulatedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncapsulatedContentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncapsulatedContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncapsulatedContentInfo */
let _cached_decoder_for_EncapsulatedContentInfo: $.ASN1Decoder<EncapsulatedContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncapsulatedContentInfo */

/* START_OF_SYMBOL_DEFINITION _decode_EncapsulatedContentInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncapsulatedContentInfo} The decoded data structure.
 */
export function _decode_EncapsulatedContentInfo(el: _Element) {
    if (!_cached_decoder_for_EncapsulatedContentInfo) {
        _cached_decoder_for_EncapsulatedContentInfo = function (
            el: _Element
        ): EncapsulatedContentInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let eContentType!: OBJECT_IDENTIFIER;
            let eContent: OPTIONAL<OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                eContentType: (_el: _Element): void => {
                    eContentType = $._decodeObjectIdentifier(_el);
                },
                eContent: (_el: _Element): void => {
                    eContent = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncapsulatedContentInfo,
                _extension_additions_list_spec_for_EncapsulatedContentInfo,
                _root_component_type_list_2_spec_for_EncapsulatedContentInfo,
                undefined
            );
            return new EncapsulatedContentInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                eContentType,
                eContent
            );
        };
    }
    return _cached_decoder_for_EncapsulatedContentInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncapsulatedContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncapsulatedContentInfo */
let _cached_encoder_for_EncapsulatedContentInfo: $.ASN1Encoder<EncapsulatedContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncapsulatedContentInfo */

/* START_OF_SYMBOL_DEFINITION _encode_EncapsulatedContentInfo */
/**
 * @summary Encodes a(n) EncapsulatedContentInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedContentInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncapsulatedContentInfo(
    value: EncapsulatedContentInfo,
    elGetter: $.ASN1Encoder<EncapsulatedContentInfo>
) {
    if (!_cached_encoder_for_EncapsulatedContentInfo) {
        _cached_encoder_for_EncapsulatedContentInfo = function (
            value: EncapsulatedContentInfo,
            elGetter: $.ASN1Encoder<EncapsulatedContentInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.eContentType,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.eContent === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.eContent, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncapsulatedContentInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncapsulatedContentInfo */

/* eslint-enable */
