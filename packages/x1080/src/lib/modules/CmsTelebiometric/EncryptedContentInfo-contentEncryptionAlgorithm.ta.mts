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
import { ALGORITHM } from '@wildboar/x500/src/lib/modules/AuthenticationFramework/ALGORITHM.oca.mjs';
export { ALGORITHM } from '@wildboar/x500/src/lib/modules/AuthenticationFramework/ALGORITHM.oca.mjs';
import { SymmetricEncryptionAlgorithms } from '../CmsTelebiometric/SymmetricEncryptionAlgorithms.osa.mjs';
export { SymmetricEncryptionAlgorithms } from '../CmsTelebiometric/SymmetricEncryptionAlgorithms.osa.mjs';

/* START_OF_SYMBOL_DEFINITION EncryptedContentInfo_contentEncryptionAlgorithm */
/**
 * @summary EncryptedContentInfo_contentEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentInfo-contentEncryptionAlgorithm ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class EncryptedContentInfo_contentEncryptionAlgorithm {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: _Element
    ) {}

    /**
     * @summary Restructures an object into a EncryptedContentInfo_contentEncryptionAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedContentInfo_contentEncryptionAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedContentInfo_contentEncryptionAlgorithm`.
     * @returns {EncryptedContentInfo_contentEncryptionAlgorithm}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncryptedContentInfo_contentEncryptionAlgorithm]: EncryptedContentInfo_contentEncryptionAlgorithm[_K];
        }
    ): EncryptedContentInfo_contentEncryptionAlgorithm {
        return new EncryptedContentInfo_contentEncryptionAlgorithm(
            _o.algorithm,
            _o.parameter
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedContentInfo_contentEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm */
/**
 * @summary The Leading Root Component Types of EncryptedContentInfo_contentEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'algorithm',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec('parameter', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm */
/**
 * @summary The Trailing Root Component Types of EncryptedContentInfo_contentEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm */
/**
 * @summary The Extension Addition Component Types of EncryptedContentInfo_contentEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedContentInfo_contentEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContentInfo_contentEncryptionAlgorithm */
let _cached_decoder_for_EncryptedContentInfo_contentEncryptionAlgorithm: $.ASN1Decoder<EncryptedContentInfo_contentEncryptionAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContentInfo_contentEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedContentInfo_contentEncryptionAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedContentInfo_contentEncryptionAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedContentInfo_contentEncryptionAlgorithm} The decoded data structure.
 */
export function _decode_EncryptedContentInfo_contentEncryptionAlgorithm(
    el: _Element
) {
    if (!_cached_decoder_for_EncryptedContentInfo_contentEncryptionAlgorithm) {
        _cached_decoder_for_EncryptedContentInfo_contentEncryptionAlgorithm = function (
            el: _Element
        ): EncryptedContentInfo_contentEncryptionAlgorithm {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EncryptedContentInfo-contentEncryptionAlgorithm contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'algorithm';
            sequence[1].name = 'parameter';
            let algorithm!: OBJECT_IDENTIFIER;
            let parameter!: _Element;
            algorithm = $._decodeObjectIdentifier(sequence[0]);
            parameter = $._decodeAny(sequence[1]);
            return new EncryptedContentInfo_contentEncryptionAlgorithm(
                algorithm,
                parameter
            );
        };
    }
    return _cached_decoder_for_EncryptedContentInfo_contentEncryptionAlgorithm(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedContentInfo_contentEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContentInfo_contentEncryptionAlgorithm */
let _cached_encoder_for_EncryptedContentInfo_contentEncryptionAlgorithm: $.ASN1Encoder<EncryptedContentInfo_contentEncryptionAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContentInfo_contentEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedContentInfo_contentEncryptionAlgorithm */
/**
 * @summary Encodes a(n) EncryptedContentInfo_contentEncryptionAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedContentInfo_contentEncryptionAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedContentInfo_contentEncryptionAlgorithm(
    value: EncryptedContentInfo_contentEncryptionAlgorithm,
    elGetter: $.ASN1Encoder<EncryptedContentInfo_contentEncryptionAlgorithm>
) {
    if (!_cached_encoder_for_EncryptedContentInfo_contentEncryptionAlgorithm) {
        _cached_encoder_for_EncryptedContentInfo_contentEncryptionAlgorithm = function (
            value: EncryptedContentInfo_contentEncryptionAlgorithm,
            elGetter: $.ASN1Encoder<EncryptedContentInfo_contentEncryptionAlgorithm>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedContentInfo_contentEncryptionAlgorithm(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedContentInfo_contentEncryptionAlgorithm */

/* eslint-enable */
