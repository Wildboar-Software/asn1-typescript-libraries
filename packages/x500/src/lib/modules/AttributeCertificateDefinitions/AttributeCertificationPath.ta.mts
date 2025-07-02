/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ACPathData,
    _decode_ACPathData,
    _encode_ACPathData,
} from "../AttributeCertificateDefinitions/ACPathData.ta.mjs";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
/**
 * @summary AttributeCertificationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificationPath ::= SEQUENCE {
 *   attributeCertificate  AttributeCertificate,
 *   acPath                SEQUENCE OF ACPathData OPTIONAL,
 *   ... }
 * ```
 *
 */
export class AttributeCertificationPath {
    constructor(
        /**
         * @summary `attributeCertificate`.
         * @public
         * @readonly
         */
        readonly attributeCertificate: AttributeCertificate,
        /**
         * @summary `acPath`.
         * @public
         * @readonly
         */
        readonly acPath: OPTIONAL<ACPathData[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificationPath
     * @description
     *
     * This takes an `object` and converts it to a `AttributeCertificationPath`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificationPath`.
     * @returns {AttributeCertificationPath}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeCertificationPath]: AttributeCertificationPath[_K];
            }
        >
    ): AttributeCertificationPath {
        return new AttributeCertificationPath(
            _o.attributeCertificate,
            _o.acPath,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeCertificate",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "acPath",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [];

let _cached_decoder_for_AttributeCertificationPath: $.ASN1Decoder<AttributeCertificationPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificationPath} The decoded data structure.
 */
export function _decode_AttributeCertificationPath(el: _Element): AttributeCertificationPath {
    if (!_cached_decoder_for_AttributeCertificationPath) {
        _cached_decoder_for_AttributeCertificationPath = function (
            el: _Element
        ): AttributeCertificationPath {
            let attributeCertificate!: AttributeCertificate;
            let acPath: OPTIONAL<ACPathData[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                attributeCertificate: (_el: _Element): void => {
                    attributeCertificate = _decode_AttributeCertificate(_el);
                },
                acPath: (_el: _Element): void => {
                    acPath = $._decodeSequenceOf<ACPathData>(
                        () => _decode_ACPathData
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeCertificationPath,
                _extension_additions_list_spec_for_AttributeCertificationPath,
                _root_component_type_list_2_spec_for_AttributeCertificationPath,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeCertificationPath(
                attributeCertificate,
                acPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeCertificationPath(el);
}

let _cached_encoder_for_AttributeCertificationPath: $.ASN1Encoder<AttributeCertificationPath> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificationPath into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificationPath(
    value: AttributeCertificationPath,
    elGetter: $.ASN1Encoder<AttributeCertificationPath>
): _Element {
    if (!_cached_encoder_for_AttributeCertificationPath) {
        _cached_encoder_for_AttributeCertificationPath = function (
            value: AttributeCertificationPath        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeCertificate(
                                value.attributeCertificate,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.acPath === undefined
                                ? undefined
                                : $._encodeSequenceOf<ACPathData>(
                                      () => _encode_ACPathData,
                                      $.DER
                                  )(value.acPath, $.DER),
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
    return _cached_encoder_for_AttributeCertificationPath(value, elGetter);
}


/* eslint-enable */
