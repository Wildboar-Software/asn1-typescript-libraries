/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/HASH.ta.mjs";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../PKCS7/ContentInfo.ta.mjs";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../PKCS7/DigestAlgorithmIdentifier.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta.mjs";


/**
 * @summary DigestedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestedData ::= SEQUENCE {
 *     version          Version,
 *     digestAlgorithm  DigestAlgorithmIdentifier,
 *     contentInfo      ContentInfo,
 *     digest           HASH{PKCS7-CONTENT-TYPE.&Type({PKCS7ContentTable})}
 * }
 * ```
 *
 */
export class DigestedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `contentInfo`.
         * @public
         * @readonly
         */
        readonly contentInfo: ContentInfo,
        /**
         * @summary `digest`.
         * @public
         * @readonly
         */
        readonly digest: HASH<_Element>
    ) {}

    /**
     * @summary Restructures an object into a DigestedData
     * @description
     *
     * This takes an `object` and converts it to a `DigestedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigestedData`.
     * @returns {DigestedData}
     */
    public static _from_object(
        _o: { [_K in keyof DigestedData]: DigestedData[_K] }
    ): DigestedData {
        return new DigestedData(
            _o.version,
            _o.digestAlgorithm,
            _o.contentInfo,
            _o.digest
        );
    }
}


/**
 * @summary The Leading Root Component Types of DigestedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DigestedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "digestAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "contentInfo",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "digest",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of DigestedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DigestedData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DigestedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DigestedData: $.ComponentSpec[] = [];


let _cached_decoder_for_DigestedData: $.ASN1Decoder<DigestedData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DigestedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestedData} The decoded data structure.
 */
export function _decode_DigestedData(el: _Element): DigestedData {
    if (!_cached_decoder_for_DigestedData) {
        _cached_decoder_for_DigestedData = function (
            el: _Element
        ): DigestedData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "DigestedData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "digestAlgorithm";
            sequence[2].name = "contentInfo";
            sequence[3].name = "digest";
            let version!: Version;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let contentInfo!: ContentInfo;
            let digest!: HASH<_Element>;
            version = _decode_Version(sequence[0]);
            digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[1]);
            contentInfo = _decode_ContentInfo(sequence[2]);
            digest = _get_decoder_for_HASH<_Element>($._decodeAny)(sequence[3]);
            return new DigestedData(
                version,
                digestAlgorithm,
                contentInfo,
                digest
            );
        };
    }
    return _cached_decoder_for_DigestedData(el);
}


let _cached_encoder_for_DigestedData: $.ASN1Encoder<DigestedData> | null = null;


/**
 * @summary Encodes a(n) DigestedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestedData, encoded as an ASN.1 Element.
 */
export function _encode_DigestedData(
    value: DigestedData,
    elGetter: $.ASN1Encoder<DigestedData>
): _Element {
    if (!_cached_encoder_for_DigestedData) {
        _cached_encoder_for_DigestedData = function (
            value: DigestedData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ContentInfo(
                            value.contentInfo,
                            $.BER
                        ),
                        /* REQUIRED   */ _get_encoder_for_HASH<_Element>(
                            $._encodeAny
                        )(value.digest, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DigestedData(value, elGetter);
}


/* eslint-enable */
