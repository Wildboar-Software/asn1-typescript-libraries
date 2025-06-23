/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../PkiPmiWrapper/EncryptedKey.ta.mjs";
import {
    EncryptedPdu,
    _decode_EncryptedPdu,
    _encode_EncryptedPdu,
} from "../PkiPmiWrapper/EncryptedPdu.ta.mjs";
import {
    EncryptedPduInfo_pduEncryptionAlgorithm,
    _decode_EncryptedPduInfo_pduEncryptionAlgorithm,
    _encode_EncryptedPduInfo_pduEncryptionAlgorithm,
} from "../PkiPmiWrapper/EncryptedPduInfo-pduEncryptionAlgorithm.ta.mjs";
/**
 * @summary EncryptedPduInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPduInfo ::= SEQUENCE {
 *   pduType                 WRAPPED-PDU.&id ({SupportedPduSet}),
 *   encryptedKey            EncryptedKey OPTIONAL,
 *   pduEncryptionAlgorithm  SEQUENCE {
 *     algorithm               ALGORITHM.&id ({SymmetricEncryptionAlgorithms}),
 *     parameter               ALGORITHM.&Type
 *                   ({SymmetricEncryptionAlgorithms}{@.algorithm})} OPTIONAL,
 *   encryptedPdu        [0] EncryptedPdu,
 *   ... }
 * ```
 *
 * @class
 */
export class EncryptedPduInfo {
    constructor(
        /**
         * @summary `pduType`.
         * @public
         * @readonly
         */
        readonly pduType: OBJECT_IDENTIFIER,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: OPTIONAL<EncryptedKey>,
        /**
         * @summary `pduEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly pduEncryptionAlgorithm: OPTIONAL<EncryptedPduInfo_pduEncryptionAlgorithm>,
        /**
         * @summary `encryptedPdu`.
         * @public
         * @readonly
         */
        readonly encryptedPdu: EncryptedPdu,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptedPduInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedPduInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedPduInfo`.
     * @returns {EncryptedPduInfo}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedPduInfo]: EncryptedPduInfo[_K] }
    ): EncryptedPduInfo {
        return new EncryptedPduInfo(
            _o.pduType,
            _o.encryptedKey,
            _o.pduEncryptionAlgorithm,
            _o.encryptedPdu,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pduType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "encryptedKey",
        true,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "pduEncryptionAlgorithm",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "encryptedPdu",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EncryptedPduInfo: $.ASN1Decoder<EncryptedPduInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPduInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedPduInfo} The decoded data structure.
 */
export function _decode_EncryptedPduInfo(el: _Element) {
    if (!_cached_decoder_for_EncryptedPduInfo) {
        _cached_decoder_for_EncryptedPduInfo = function (
            el: _Element
        ): EncryptedPduInfo {
            let pduType!: OBJECT_IDENTIFIER;
            let encryptedKey: OPTIONAL<EncryptedKey>;
            let pduEncryptionAlgorithm: OPTIONAL<EncryptedPduInfo_pduEncryptionAlgorithm>;
            let encryptedPdu!: EncryptedPdu;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                pduType: (_el: _Element): void => {
                    pduType = $._decodeObjectIdentifier(_el);
                },
                encryptedKey: (_el: _Element): void => {
                    encryptedKey = _decode_EncryptedKey(_el);
                },
                pduEncryptionAlgorithm: (_el: _Element): void => {
                    pduEncryptionAlgorithm = _decode_EncryptedPduInfo_pduEncryptionAlgorithm(
                        _el
                    );
                },
                encryptedPdu: (_el: _Element): void => {
                    encryptedPdu = $._decode_explicit<EncryptedPdu>(
                        () => _decode_EncryptedPdu
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedPduInfo,
                _extension_additions_list_spec_for_EncryptedPduInfo,
                _root_component_type_list_2_spec_for_EncryptedPduInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EncryptedPduInfo(
                pduType,
                encryptedKey,
                pduEncryptionAlgorithm,
                encryptedPdu,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EncryptedPduInfo(el);
}

let _cached_encoder_for_EncryptedPduInfo: $.ASN1Encoder<EncryptedPduInfo> | null = null;

/**
 * @summary Encodes a(n) EncryptedPduInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPduInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedPduInfo(
    value: EncryptedPduInfo,
    elGetter: $.ASN1Encoder<EncryptedPduInfo>
) {
    if (!_cached_encoder_for_EncryptedPduInfo) {
        _cached_encoder_for_EncryptedPduInfo = function (
            value: EncryptedPduInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.pduType,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.encryptedKey === undefined
                                ? undefined
                                : _encode_EncryptedKey(
                                      value.encryptedKey,
                                      $.DER
                                  ),
                            /* IF_ABSENT  */ value.pduEncryptionAlgorithm ===
                            undefined
                                ? undefined
                                : _encode_EncryptedPduInfo_pduEncryptionAlgorithm(
                                      value.pduEncryptionAlgorithm,
                                      $.DER
                                  ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_EncryptedPdu,
                                $.DER
                            )(value.encryptedPdu, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_EncryptedPduInfo(value, elGetter);
}


/* eslint-enable */
