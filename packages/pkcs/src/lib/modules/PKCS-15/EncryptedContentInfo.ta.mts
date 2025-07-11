/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary EncryptedContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentInfo {Type} ::= SEQUENCE {
 *     contentType OBJECT IDENTIFIER,
 *     contentEncryptionAlgorithm AlgorithmIdentifier{{ContentEncryptionAlgorithms}},
 *     encryptedContent [0] OCTET STRING OPTIONAL
 * }(CONSTRAINED BY {
 *     -- 'encryptedContent' shall be the result of encrypting DER-encoded
 *     -- value of type -- Type})
 * ```
 *
 */
export class EncryptedContentInfo<_Type> {
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
        readonly contentEncryptionAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `encryptedContent`.
         * @public
         * @readonly
         */
        readonly encryptedContent: OPTIONAL<OCTET_STRING>
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
        _o: {
            [_K in keyof EncryptedContentInfo<any>]: EncryptedContentInfo<any>[_K];
        }
    ): EncryptedContentInfo<any> {
        return new EncryptedContentInfo(
            _o.contentType,
            _o.contentEncryptionAlgorithm,
            _o.encryptedContent
        );
    }
}


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
        "contentType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "contentEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "encryptedContent",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of EncryptedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncryptedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [];


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) EncryptedContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_EncryptedContentInfo<Type>(
    _decode_Type: $.ASN1Decoder<Type>
): $.ASN1Decoder<EncryptedContentInfo<Type>> {
    return function (el: _Element): EncryptedContentInfo<Type> {
        let contentType!: OBJECT_IDENTIFIER;
        let contentEncryptionAlgorithm!: AlgorithmIdentifier;
        let encryptedContent: OPTIONAL<OCTET_STRING>;
        const callbacks: $.DecodingMap = {
            contentType: (_el: _Element): void => {
                contentType = $._decodeObjectIdentifier(_el);
            },
            contentEncryptionAlgorithm: (_el: _Element): void => {
                contentEncryptionAlgorithm = _decode_AlgorithmIdentifier(_el);
            },
            encryptedContent: (_el: _Element): void => {
                encryptedContent = $._decode_implicit<OCTET_STRING>(
                    () => $._decodeOctetString
                )(_el);
            },
        };
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_EncryptedContentInfo,
            _extension_additions_list_spec_for_EncryptedContentInfo,
            _root_component_type_list_2_spec_for_EncryptedContentInfo,
            undefined
        );
        return new EncryptedContentInfo(
            contentType,
            contentEncryptionAlgorithm,
            encryptedContent
        );
    };
}


/**
 * @summary Returns a function that will encode a(n) EncryptedContentInfo into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) EncryptedContentInfo as an ASN.1 element.
 */
export function _get_encoder_for_EncryptedContentInfo<Type>(
    _encode_Type: $.ASN1Encoder<Type>
): $.ASN1Encoder<EncryptedContentInfo<Type>> {
    return function (
        value: EncryptedContentInfo<Type>,
        _elGetter: $.ASN1Encoder<EncryptedContentInfo<Type>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ $._encodeObjectIdentifier(
                        value.contentType,
                        $.BER
                    ),
                    /* REQUIRED   */ _encode_AlgorithmIdentifier(
                        value.contentEncryptionAlgorithm,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.encryptedContent === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              0,
                              () => $._encodeOctetString,
                              $.BER
                          )(value.encryptedContent, $.BER),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
        );
    };
}

/* eslint-enable */
