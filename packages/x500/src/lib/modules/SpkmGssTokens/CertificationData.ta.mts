/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta.mjs";
import {
    CertificationPath,
    _decode_CertificationPath,
    _encode_CertificationPath,
} from "../SpkmGssTokens/CertificationPath.ta.mjs";
/**
 * @summary CertificationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationData ::= SEQUENCE {
 *   certificationPath          [0]  CertificationPath OPTIONAL,
 *   certificateRevocationList  [1]  CertificateList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CertificationData {
    constructor(
        /**
         * @summary `certificationPath`.
         * @public
         * @readonly
         */
        readonly certificationPath?: OPTIONAL<CertificationPath>,
        /**
         * @summary `certificateRevocationList`.
         * @public
         * @readonly
         */
        readonly certificateRevocationList?: OPTIONAL<CertificateList>
    ) {}

    /**
     * @summary Restructures an object into a CertificationData
     * @description
     *
     * This takes an `object` and converts it to a `CertificationData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationData`.
     * @returns {CertificationData}
     */
    public static _from_object(
        _o: { [_K in keyof CertificationData]: CertificationData[_K] }
    ): CertificationData {
        return new CertificationData(
            _o.certificationPath,
            _o.certificateRevocationList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificationPath",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "certificateRevocationList",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationData: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificationData: $.ASN1Decoder<CertificationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationData} The decoded data structure.
 */
export function _decode_CertificationData(el: _Element) {
    if (!_cached_decoder_for_CertificationData) {
        _cached_decoder_for_CertificationData = function (
            el: _Element
        ): CertificationData {
            let certificationPath: OPTIONAL<CertificationPath>;
            let certificateRevocationList: OPTIONAL<CertificateList>;
            const callbacks: $.DecodingMap = {
                certificationPath: (_el: _Element): void => {
                    certificationPath = $._decode_implicit<CertificationPath>(
                        () => _decode_CertificationPath
                    )(_el);
                },
                certificateRevocationList: (_el: _Element): void => {
                    certificateRevocationList = $._decode_implicit<CertificateList>(
                        () => _decode_CertificateList
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificationData,
                _extension_additions_list_spec_for_CertificationData,
                _root_component_type_list_2_spec_for_CertificationData,
                undefined
            );
            return new CertificationData(
                certificationPath,
                certificateRevocationList
            );
        };
    }
    return _cached_decoder_for_CertificationData(el);
}

let _cached_encoder_for_CertificationData: $.ASN1Encoder<CertificationData> | null = null;

/**
 * @summary Encodes a(n) CertificationData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationData, encoded as an ASN.1 Element.
 */
export function _encode_CertificationData(
    value: CertificationData,
    elGetter: $.ASN1Encoder<CertificationData>
) {
    if (!_cached_encoder_for_CertificationData) {
        _cached_encoder_for_CertificationData = function (
            value: CertificationData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.certificationPath === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificationPath,
                                  $.DER
                              )(value.certificationPath, $.DER),
                        /* IF_ABSENT  */ value.certificateRevocationList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertificateList,
                                  $.DER
                              )(value.certificateRevocationList, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertificationData(value, elGetter);
}


/* eslint-enable */
