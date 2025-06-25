/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../PKIXCRMF-2009/Attributes.ta.mjs";


/**
 * @summary PrivateKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyInfo ::= SEQUENCE {
 *     version                   INTEGER,
 *     privateKeyAlgorithm       AlgorithmIdentifier{PUBLIC-KEY, {...}},
 *     privateKey                OCTET STRING,
 *             --  Structure of public key is in PUBLIC-KEY.&PrivateKey
 *     attributes                [0] IMPLICIT Attributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PrivateKeyInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary `privateKeyAlgorithm`.
         * @public
         * @readonly
         */
        readonly privateKeyAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `privateKey`.
         * @public
         * @readonly
         */
        readonly privateKey: OCTET_STRING,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<Attributes>
    ) {}

    /**
     * @summary Restructures an object into a PrivateKeyInfo
     * @description
     *
     * This takes an `object` and converts it to a `PrivateKeyInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateKeyInfo`.
     * @returns {PrivateKeyInfo}
     */
    public static _from_object(
        _o: { [_K in keyof PrivateKeyInfo]: PrivateKeyInfo[_K] }
    ): PrivateKeyInfo {
        return new PrivateKeyInfo(
            _o.version,
            _o.privateKeyAlgorithm,
            _o.privateKey,
            _o.attributes
        );
    }
}


/**
 * @summary The Leading Root Component Types of PrivateKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "privateKeyAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "privateKey",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "attributes",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of PrivateKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateKeyInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PrivateKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateKeyInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_PrivateKeyInfo: $.ASN1Decoder<PrivateKeyInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyInfo} The decoded data structure.
 */
export function _decode_PrivateKeyInfo(el: _Element): PrivateKeyInfo {
    if (!_cached_decoder_for_PrivateKeyInfo) {
        _cached_decoder_for_PrivateKeyInfo = function (
            el: _Element
        ): PrivateKeyInfo {
            let version!: INTEGER;
            let privateKeyAlgorithm!: AlgorithmIdentifier;
            let privateKey!: OCTET_STRING;
            let attributes: OPTIONAL<Attributes>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decodeInteger(_el);
                },
                privateKeyAlgorithm: (_el: _Element): void => {
                    privateKeyAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                privateKey: (_el: _Element): void => {
                    privateKey = $._decodeOctetString(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PrivateKeyInfo,
                _extension_additions_list_spec_for_PrivateKeyInfo,
                _root_component_type_list_2_spec_for_PrivateKeyInfo,
                undefined
            );
            return new PrivateKeyInfo (
                version,
                privateKeyAlgorithm,
                privateKey,
                attributes
            );
        };
    }
    return _cached_decoder_for_PrivateKeyInfo(el);
}


let _cached_encoder_for_PrivateKeyInfo: $.ASN1Encoder<PrivateKeyInfo> | null = null;


/**
 * @summary Encodes a(n) PrivateKeyInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyInfo(
    value: PrivateKeyInfo,
    elGetter: $.ASN1Encoder<PrivateKeyInfo>
): _Element {
    if (!_cached_encoder_for_PrivateKeyInfo) {
        _cached_encoder_for_PrivateKeyInfo = function (
            value: PrivateKeyInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.version, $.DER),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.privateKeyAlgorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.privateKey,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.attributes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Attributes,
                                  $.DER
                              )(value.attributes, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PrivateKeyInfo(value, elGetter);
}


/* eslint-enable */
