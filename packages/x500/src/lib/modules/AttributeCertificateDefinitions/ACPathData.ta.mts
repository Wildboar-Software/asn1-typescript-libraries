/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta.mjs";
/**
 * @summary ACPathData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACPathData ::= SEQUENCE {
 *   certificate           [0]  Certificate OPTIONAL,
 *   attributeCertificate  [1]  AttributeCertificate OPTIONAL,
 *   ... }
 * ```
 *
 */
export class ACPathData {
    constructor(
        /**
         * @summary `certificate`.
         * @public
         * @readonly
         */
        readonly certificate: OPTIONAL<Certificate>,
        /**
         * @summary `attributeCertificate`.
         * @public
         * @readonly
         */
        readonly attributeCertificate: OPTIONAL<AttributeCertificate>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACPathData
     * @description
     *
     * This takes an `object` and converts it to a `ACPathData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACPathData`.
     * @returns {ACPathData}
     */
    public static _from_object(
        _o: { [_K in keyof ACPathData]: ACPathData[_K] }
    ): ACPathData {
        return new ACPathData(
            _o.certificate,
            _o.attributeCertificate,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACPathData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificate",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "attributeCertificate",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACPathData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACPathData: $.ComponentSpec[] = [];

let _cached_decoder_for_ACPathData: $.ASN1Decoder<ACPathData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACPathData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACPathData} The decoded data structure.
 */
export function _decode_ACPathData(el: _Element): ACPathData {
    if (!_cached_decoder_for_ACPathData) {
        _cached_decoder_for_ACPathData = function (el: _Element): ACPathData {
            let certificate: OPTIONAL<Certificate>;
            let attributeCertificate: OPTIONAL<AttributeCertificate>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                certificate: (_el: _Element): void => {
                    certificate = $._decode_implicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                attributeCertificate: (_el: _Element): void => {
                    attributeCertificate = $._decode_implicit<AttributeCertificate>(
                        () => _decode_AttributeCertificate
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ACPathData,
                _extension_additions_list_spec_for_ACPathData,
                _root_component_type_list_2_spec_for_ACPathData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ACPathData(
                certificate,
                attributeCertificate,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ACPathData(el);
}

let _cached_encoder_for_ACPathData: $.ASN1Encoder<ACPathData> | null = null;

/**
 * @summary Encodes a(n) ACPathData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACPathData, encoded as an ASN.1 Element.
 */
export function _encode_ACPathData(
    value: ACPathData,
    elGetter: $.ASN1Encoder<ACPathData>
): _Element {
    if (!_cached_encoder_for_ACPathData) {
        _cached_encoder_for_ACPathData = function (
            value: ACPathData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificate === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Certificate,
                                      $.DER
                                  )(value.certificate, $.DER),
                            /* IF_ABSENT  */ value.attributeCertificate ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AttributeCertificate,
                                      $.DER
                                  )(value.attributeCertificate, $.DER),
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
    return _cached_encoder_for_ACPathData(value, elGetter);
}


/* eslint-enable */
