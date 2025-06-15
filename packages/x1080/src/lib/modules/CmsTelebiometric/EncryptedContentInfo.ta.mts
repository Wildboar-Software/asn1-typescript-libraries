/* eslint-disable */
import {
    OPTIONAL,
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
    EncryptedContentInfo_contentEncryptionAlgorithm,
    _decode_EncryptedContentInfo_contentEncryptionAlgorithm,
    _encode_EncryptedContentInfo_contentEncryptionAlgorithm,
} from '../CmsTelebiometric/EncryptedContentInfo-contentEncryptionAlgorithm.ta.mjs';
import {
    EncryptedContent,
    _decode_EncryptedContent,
    _encode_EncryptedContent,
} from '../CmsTelebiometric/EncryptedContent.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EncryptedContentInfo */
/**
 * @summary EncryptedContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentInfo ::= SEQUENCE {
 *   contentType                CONTENT-TYPE.&id ({EncryptedContentSet}),
 *   contentEncryptionAlgorithm SEQUENCE {
 *     algorithm                  ALGORITHM.&id ({SymmetricEncryptionAlgorithms}),
 *     parameter                  ALGORITHM.&Type
 *              ({SymmetricEncryptionAlgorithms}{@.algorithm})} OPTIONAL,
 *   encryptedContent       [0] IMPLICIT EncryptedContent OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class EncryptedContentInfo {
    constructor(
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: OBJECT_IDENTIFIER,
        /**
         * @summary `contentEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly contentEncryptionAlgorithm: OPTIONAL<EncryptedContentInfo_contentEncryptionAlgorithm>,
        /**
         * @summary `encryptedContent`.
         * @public
         * @readonly
         */
        readonly encryptedContent: OPTIONAL<EncryptedContent>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptedContentInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedContentInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedContentInfo`.
     * @returns {EncryptedContentInfo}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedContentInfo]: EncryptedContentInfo[_K] }
    ): EncryptedContentInfo {
        return new EncryptedContentInfo(
            _o.contentType,
            _o.contentEncryptionAlgorithm,
            _o.encryptedContent,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedContentInfo */
/**
 * @summary The Leading Root Component Types of EncryptedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'contentType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'contentEncryptionAlgorithm',
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'encryptedContent',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedContentInfo */
/**
 * @summary The Trailing Root Component Types of EncryptedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedContentInfo */
/**
 * @summary The Extension Addition Component Types of EncryptedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContentInfo */
let _cached_decoder_for_EncryptedContentInfo: $.ASN1Decoder<EncryptedContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedContentInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedContentInfo} The decoded data structure.
 */
export function _decode_EncryptedContentInfo(el: _Element) {
    if (!_cached_decoder_for_EncryptedContentInfo) {
        _cached_decoder_for_EncryptedContentInfo = function (
            el: _Element
        ): EncryptedContentInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contentType!: OBJECT_IDENTIFIER;
            let contentEncryptionAlgorithm: OPTIONAL<EncryptedContentInfo_contentEncryptionAlgorithm>;
            let encryptedContent: OPTIONAL<EncryptedContent>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contentType: (_el: _Element): void => {
                    contentType = $._decodeObjectIdentifier(_el);
                },
                contentEncryptionAlgorithm: (_el: _Element): void => {
                    contentEncryptionAlgorithm = _decode_EncryptedContentInfo_contentEncryptionAlgorithm(
                        _el
                    );
                },
                encryptedContent: (_el: _Element): void => {
                    encryptedContent = $._decode_implicit<EncryptedContent>(
                        () => _decode_EncryptedContent
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedContentInfo,
                _extension_additions_list_spec_for_EncryptedContentInfo,
                _root_component_type_list_2_spec_for_EncryptedContentInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EncryptedContentInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                contentType,
                contentEncryptionAlgorithm,
                encryptedContent,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EncryptedContentInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContentInfo */
let _cached_encoder_for_EncryptedContentInfo: $.ASN1Encoder<EncryptedContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedContentInfo */
/**
 * @summary Encodes a(n) EncryptedContentInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedContentInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedContentInfo(
    value: EncryptedContentInfo,
    elGetter: $.ASN1Encoder<EncryptedContentInfo>
) {
    if (!_cached_encoder_for_EncryptedContentInfo) {
        _cached_encoder_for_EncryptedContentInfo = function (
            value: EncryptedContentInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contentType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.contentEncryptionAlgorithm ===
                            undefined
                                ? undefined
                                : _encode_EncryptedContentInfo_contentEncryptionAlgorithm(
                                      value.contentEncryptionAlgorithm,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.encryptedContent ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_EncryptedContent,
                                      $.BER
                                  )(value.encryptedContent, $.BER),
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
    return _cached_encoder_for_EncryptedContentInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedContentInfo */

/* eslint-enable */
