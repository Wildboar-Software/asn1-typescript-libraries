/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EncryptedContentInfoType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentInfoType { AlgorithmIdentifierType } ::= SEQUENCE {
 * contentType                CONTENT-TYPE.&id({ContentSet}),
 * contentEncryptionAlgorithm    AlgorithmIdentifierType,
 * encryptedContent           [0] IMPLICIT OCTET STRING OPTIONAL }
 * ```
 *
 */
export class EncryptedContentInfoType<AlgorithmIdentifierType> {
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
        readonly contentEncryptionAlgorithm: AlgorithmIdentifierType,
        /**
         * @summary `encryptedContent`.
         * @public
         * @readonly
         */
        readonly encryptedContent: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a EncryptedContentInfoType
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedContentInfoType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedContentInfoType`.
     * @returns {EncryptedContentInfoType}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncryptedContentInfoType<any>]: EncryptedContentInfoType<any>[_K];
        }
    ): EncryptedContentInfoType<any> {
        return new EncryptedContentInfoType(
            _o.contentType,
            _o.contentEncryptionAlgorithm,
            _o.encryptedContent
        );
    }
}


/**
 * @summary The Leading Root Component Types of EncryptedContentInfoType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedContentInfoType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contentType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "contentEncryptionAlgorithm",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "encryptedContent",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of EncryptedContentInfoType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedContentInfoType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncryptedContentInfoType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedContentInfoType: $.ComponentSpec[] = [];


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) EncryptedContentInfoType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_EncryptedContentInfoType<
    AlgorithmIdentifierType
>(_decode_AlgorithmIdentifierType: $.ASN1Decoder<AlgorithmIdentifierType>): $.ASN1Decoder<EncryptedContentInfoType<AlgorithmIdentifierType>> {
    return function (
        el: _Element
    ): EncryptedContentInfoType<AlgorithmIdentifierType> {
        let contentType!: OBJECT_IDENTIFIER;
        let contentEncryptionAlgorithm!: AlgorithmIdentifierType;
        let encryptedContent: OPTIONAL<OCTET_STRING>;
        const callbacks: $.DecodingMap = {
            contentType: (_el: _Element): void => {
                contentType = $._decodeObjectIdentifier(_el);
            },
            contentEncryptionAlgorithm: (_el: _Element): void => {
                contentEncryptionAlgorithm = _decode_AlgorithmIdentifierType(
                    _el
                );
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
            _root_component_type_list_1_spec_for_EncryptedContentInfoType,
            _extension_additions_list_spec_for_EncryptedContentInfoType,
            _root_component_type_list_2_spec_for_EncryptedContentInfoType,
            undefined
        );
        return new EncryptedContentInfoType (
            contentType,
            contentEncryptionAlgorithm,
            encryptedContent
        );
    };
}


/**
 * @summary Returns a function that will encode a(n) EncryptedContentInfoType into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) EncryptedContentInfoType as an ASN.1 element.
 */
export function _get_encoder_for_EncryptedContentInfoType<
    AlgorithmIdentifierType
>(_encode_AlgorithmIdentifierType: $.ASN1Encoder<AlgorithmIdentifierType>): $.ASN1Encoder<EncryptedContentInfoType<AlgorithmIdentifierType>> {
    return function (
        value: EncryptedContentInfoType<AlgorithmIdentifierType>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ $._encodeObjectIdentifier(
                        value.contentType,
                        $.DER
                    ),
                    /* REQUIRED   */ _encode_AlgorithmIdentifierType(
                        value.contentEncryptionAlgorithm,
                        $.DER
                    ),
                    /* IF_ABSENT  */ value.encryptedContent === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              0,
                              () => $._encodeOctetString,
                              $.DER
                          )(value.encryptedContent, $.DER),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.DER
        );
    };
}

/* eslint-enable */
