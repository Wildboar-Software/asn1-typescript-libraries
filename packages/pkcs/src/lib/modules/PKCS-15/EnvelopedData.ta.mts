/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "@wildboar/x500/InformationFramework";
import {
    OriginatorInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo,
} from "../CryptographicMessageSyntax/OriginatorInfo.ta.mjs";
import {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from "../CryptographicMessageSyntax/RecipientInfos.ta.mjs";
import {
    EncryptedContentInfo,
    _get_decoder_for_EncryptedContentInfo,
    _get_encoder_for_EncryptedContentInfo,
} from "../PKCS-15/EncryptedContentInfo.ta.mjs";
import {
    EnvelopedData_version,
    _get_decoder_for_EnvelopedData_version,
    _get_encoder_for_EnvelopedData_version,
} from "../PKCS-15/EnvelopedData-version.ta.mjs";


/**
 * @summary EnvelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopedData {Type} ::= SEQUENCE {
 *     version INTEGER{v0(0),v1(1),v2(2),v3(3),v4(4)}(v0|v1|v2,...),
 *     originatorInfo [0] OriginatorInfo OPTIONAL,
 *     recipientInfos  RecipientInfos,
 *     encryptedContentInfo EncryptedContentInfo{Type},
 *     unprotectedAttrs [1] SET SIZE (1..MAX) OF Attribute OPTIONAL
 * }
 * ```
 *
 */
export class EnvelopedData<Type> {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: EnvelopedData_version,
        /**
         * @summary `originatorInfo`.
         * @public
         * @readonly
         */
        readonly originatorInfo: OPTIONAL<OriginatorInfo>,
        /**
         * @summary `recipientInfos`.
         * @public
         * @readonly
         */
        readonly recipientInfos: RecipientInfos,
        /**
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo<Type>,
        /**
         * @summary `unprotectedAttrs`.
         * @public
         * @readonly
         */
        readonly unprotectedAttrs: OPTIONAL<Attribute[]>
    ) {}

    /**
     * @summary Restructures an object into a EnvelopedData
     * @description
     *
     * This takes an `object` and converts it to a `EnvelopedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnvelopedData`.
     * @returns {EnvelopedData}
     */
    public static _from_object(
        _o: { [_K in keyof EnvelopedData<any>]: EnvelopedData<any>[_K] }
    ): EnvelopedData<any> {
        return new EnvelopedData(
            _o.version,
            _o.originatorInfo,
            _o.recipientInfos,
            _o.encryptedContentInfo,
            _o.unprotectedAttrs
        );
    }
}


/**
 * @summary The Leading Root Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnvelopedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "originatorInfo",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "recipientInfos",
        false,
        $.hasTag(_TagClass.universal, 17)
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
 * @summary The Trailing Root Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnvelopedData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnvelopedData: $.ComponentSpec[] = [];


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) EnvelopedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_EnvelopedData<Type>(
    _decode_Type: $.ASN1Decoder<Type>
): $.ASN1Decoder<EnvelopedData<Type>> {
    return function (el: _Element): EnvelopedData<Type> {
        let version!: EnvelopedData_version;
        let originatorInfo: OPTIONAL<OriginatorInfo>;
        let recipientInfos!: RecipientInfos;
        let encryptedContentInfo!: EncryptedContentInfo<Type>;
        let unprotectedAttrs: OPTIONAL<Attribute[]>;
        const callbacks: $.DecodingMap = {
            version: (_el: _Element): void => {
                version = _get_decoder_for_EnvelopedData_version<Type>(
                    _decode_Type
                )(_el);
            },
            originatorInfo: (_el: _Element): void => {
                originatorInfo = $._decode_implicit<OriginatorInfo>(
                    () => _decode_OriginatorInfo
                )(_el);
            },
            recipientInfos: (_el: _Element): void => {
                recipientInfos = _decode_RecipientInfos(_el);
            },
            encryptedContentInfo: (_el: _Element): void => {
                encryptedContentInfo = _get_decoder_for_EncryptedContentInfo<Type>(
                    _decode_Type
                )(_el);
            },
            unprotectedAttrs: (_el: _Element): void => {
                unprotectedAttrs = $._decode_implicit<Attribute[]>(() =>
                    $._decodeSetOf<Attribute>(() => _decode_Attribute)
                )(_el);
            },
        };
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_EnvelopedData,
            _extension_additions_list_spec_for_EnvelopedData,
            _root_component_type_list_2_spec_for_EnvelopedData,
            undefined
        );
        return new EnvelopedData(
            version,
            originatorInfo,
            recipientInfos,
            encryptedContentInfo,
            unprotectedAttrs
        );
    };
}


/**
 * @summary Returns a function that will encode a(n) EnvelopedData into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) EnvelopedData as an ASN.1 element.
 */
export function _get_encoder_for_EnvelopedData<Type>(
    _encode_Type: $.ASN1Encoder<Type>
): $.ASN1Encoder<EnvelopedData<Type>> {
    return function (
        value: EnvelopedData<Type>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _get_encoder_for_EnvelopedData_version<Type>(
                        _encode_Type
                    )(value.version, $.BER),
                    /* IF_ABSENT  */ value.originatorInfo === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              0,
                              () => _encode_OriginatorInfo,
                              $.BER
                          )(value.originatorInfo, $.BER),
                    /* REQUIRED   */ _encode_RecipientInfos(
                        value.recipientInfos,
                        $.BER
                    ),
                    /* REQUIRED   */ _get_encoder_for_EncryptedContentInfo<Type>(
                        _encode_Type
                    )(value.encryptedContentInfo, $.BER),
                    /* IF_ABSENT  */ value.unprotectedAttrs === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              1,
                              () =>
                                  $._encodeSetOf<Attribute>(
                                      () => _encode_Attribute,
                                      $.BER
                                  ),
                              $.BER
                          )(value.unprotectedAttrs, $.BER),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
        );
    };
}

/* eslint-enable */
