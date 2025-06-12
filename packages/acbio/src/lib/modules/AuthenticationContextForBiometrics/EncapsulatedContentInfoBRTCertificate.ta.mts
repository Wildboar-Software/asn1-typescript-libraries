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
import { ContentTypeBRTCertificateContentInfo } from '../AuthenticationContextForBiometrics/ContentTypeBRTCertificateContentInfo.osa.mjs';
export { ContentTypeBRTCertificateContentInfo } from '../AuthenticationContextForBiometrics/ContentTypeBRTCertificateContentInfo.osa.mjs';

/* START_OF_SYMBOL_DEFINITION EncapsulatedContentInfoBRTCertificate */
/**
 * @summary EncapsulatedContentInfoBRTCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncapsulatedContentInfoBRTCertificate ::= SEQUENCE {
 *     eContentType    CONTENT-TYPE.&id({ContentTypeBRTCertificateContentInfo}),
 *     eContent        [0] CONTENT-TYPE.&Type({ContentTypeBRTCertificateContentInfo}{@eContentType})}
 * ```
 *
 * @class
 */
export class EncapsulatedContentInfoBRTCertificate {
    constructor(
        /**
         * @summary `eContentType`.
         * @public
         * @readonly
         */
        readonly eContentType: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        /**
         * @summary `eContent`.
         * @public
         * @readonly
         */
        readonly eContent: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
    ) {}

    /**
     * @summary Restructures an object into a EncapsulatedContentInfoBRTCertificate
     * @description
     *
     * This takes an `object` and converts it to a `EncapsulatedContentInfoBRTCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncapsulatedContentInfoBRTCertificate`.
     * @returns {EncapsulatedContentInfoBRTCertificate}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncapsulatedContentInfoBRTCertificate]: EncapsulatedContentInfoBRTCertificate[_K];
        }
    ): EncapsulatedContentInfoBRTCertificate {
        return new EncapsulatedContentInfoBRTCertificate(
            _o.eContentType,
            _o.eContent
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncapsulatedContentInfoBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncapsulatedContentInfoBRTCertificate */
/**
 * @summary The Leading Root Component Types of EncapsulatedContentInfoBRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfoBRTCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'eContentType',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'eContent',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncapsulatedContentInfoBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncapsulatedContentInfoBRTCertificate */
/**
 * @summary The Trailing Root Component Types of EncapsulatedContentInfoBRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfoBRTCertificate: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncapsulatedContentInfoBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncapsulatedContentInfoBRTCertificate */
/**
 * @summary The Extension Addition Component Types of EncapsulatedContentInfoBRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncapsulatedContentInfoBRTCertificate: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncapsulatedContentInfoBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncapsulatedContentInfoBRTCertificate */
let _cached_decoder_for_EncapsulatedContentInfoBRTCertificate: $.ASN1Decoder<EncapsulatedContentInfoBRTCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncapsulatedContentInfoBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_EncapsulatedContentInfoBRTCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedContentInfoBRTCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncapsulatedContentInfoBRTCertificate} The decoded data structure.
 */
export function _decode_EncapsulatedContentInfoBRTCertificate(el: _Element) {
    if (!_cached_decoder_for_EncapsulatedContentInfoBRTCertificate) {
        _cached_decoder_for_EncapsulatedContentInfoBRTCertificate = function (
            el: _Element
        ): EncapsulatedContentInfoBRTCertificate {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EncapsulatedContentInfoBRTCertificate contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'eContentType';
            sequence[1].name = 'eContent';
            let eContentType!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            let eContent!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            eContentType = $._decodeAny(
                /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ sequence[0]
            );
            eContent = $._decode_implicit<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(
                () => $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
            )(sequence[1]);
            return new EncapsulatedContentInfoBRTCertificate(
                eContentType,
                eContent
            );
        };
    }
    return _cached_decoder_for_EncapsulatedContentInfoBRTCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncapsulatedContentInfoBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncapsulatedContentInfoBRTCertificate */
let _cached_encoder_for_EncapsulatedContentInfoBRTCertificate: $.ASN1Encoder<EncapsulatedContentInfoBRTCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncapsulatedContentInfoBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_EncapsulatedContentInfoBRTCertificate */
/**
 * @summary Encodes a(n) EncapsulatedContentInfoBRTCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedContentInfoBRTCertificate, encoded as an ASN.1 Element.
 */
export function _encode_EncapsulatedContentInfoBRTCertificate(
    value: EncapsulatedContentInfoBRTCertificate,
    elGetter: $.ASN1Encoder<EncapsulatedContentInfoBRTCertificate>
) {
    if (!_cached_encoder_for_EncapsulatedContentInfoBRTCertificate) {
        _cached_encoder_for_EncapsulatedContentInfoBRTCertificate = function (
            value: EncapsulatedContentInfoBRTCertificate,
            elGetter: $.ASN1Encoder<EncapsulatedContentInfoBRTCertificate>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeAny(
                            /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.eContentType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
                            $.BER
                        )(value.eContent, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncapsulatedContentInfoBRTCertificate(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EncapsulatedContentInfoBRTCertificate */

/* eslint-enable */
