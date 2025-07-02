/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta.mjs";
import {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../CryptographicMessageSyntax/EncryptedContentInfo.ta.mjs";
import {
    UnprotectedAttributes,
    _decode_UnprotectedAttributes,
    _encode_UnprotectedAttributes,
} from "../CryptographicMessageSyntax/UnprotectedAttributes.ta.mjs";

/**
 * @summary EncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedData ::= SEQUENCE {
 *   version               CMSVersion,
 *   encryptedContentInfo  EncryptedContentInfo,
 *   unprotectedAttrs      [1] IMPLICIT UnprotectedAttributes OPTIONAL
 * }
 * ```
 *
 */
export class EncryptedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo,
        /**
         * @summary `unprotectedAttrs`.
         * @public
         * @readonly
         */
        readonly unprotectedAttrs: OPTIONAL<UnprotectedAttributes>
    ) {}

    /**
     * @summary Restructures an object into a EncryptedData
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedData`.
     * @returns {EncryptedData}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedData]: EncryptedData[_K] }
    ): EncryptedData {
        return new EncryptedData(
            _o.version,
            _o.encryptedContentInfo,
            _o.unprotectedAttrs
        );
    }
}


/**
 * @summary The Leading Root Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "encryptedContentInfo",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "unprotectedAttrs",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedData: $.ComponentSpec[] = [];


let _cached_decoder_for_EncryptedData: $.ASN1Decoder<EncryptedData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedData} The decoded data structure.
 */
export function _decode_EncryptedData(el: _Element): EncryptedData {
    if (!_cached_decoder_for_EncryptedData) {
        _cached_decoder_for_EncryptedData = function (
            el: _Element
        ): EncryptedData {
            let version!: CMSVersion;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttrs: OPTIONAL<UnprotectedAttributes>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                encryptedContentInfo: (_el: _Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                unprotectedAttrs: (_el: _Element): void => {
                    unprotectedAttrs = $._decode_implicit<UnprotectedAttributes>(
                        () => _decode_UnprotectedAttributes
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedData,
                _extension_additions_list_spec_for_EncryptedData,
                _root_component_type_list_2_spec_for_EncryptedData,
                undefined
            );
            return new EncryptedData(
                version,
                encryptedContentInfo,
                unprotectedAttrs
            );
        };
    }
    return _cached_decoder_for_EncryptedData(el);
}


let _cached_encoder_for_EncryptedData: $.ASN1Encoder<EncryptedData> | null = null;


/**
 * @summary Encodes a(n) EncryptedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedData(
    value: EncryptedData,
    elGetter: $.ASN1Encoder<EncryptedData>
): _Element {
    if (!_cached_encoder_for_EncryptedData) {
        _cached_encoder_for_EncryptedData = function (
            value: EncryptedData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UnprotectedAttributes,
                                  $.BER
                              )(value.unprotectedAttrs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedData(value, elGetter);
}


/* eslint-enable */
