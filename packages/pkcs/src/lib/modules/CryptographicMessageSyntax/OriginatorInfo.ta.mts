/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CertificateRevocationLists,
    _decode_CertificateRevocationLists,
    _encode_CertificateRevocationLists,
} from "../CryptographicMessageSyntax/CertificateRevocationLists.ta.mjs";
import {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from "../CryptographicMessageSyntax/CertificateSet.ta.mjs";

/**
 * @summary OriginatorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorInfo ::= SEQUENCE {
 *   certs  [0] IMPLICIT CertificateSet OPTIONAL,
 *   crls   [1] IMPLICIT CertificateRevocationLists OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class OriginatorInfo {
    constructor(
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: OPTIONAL<CertificateSet>,
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<CertificateRevocationLists>
    ) {}

    /**
     * @summary Restructures an object into a OriginatorInfo
     * @description
     *
     * This takes an `object` and converts it to a `OriginatorInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginatorInfo`.
     * @returns {OriginatorInfo}
     */
    public static _from_object(
        _o: { [_K in keyof OriginatorInfo]: OriginatorInfo[_K] }
    ): OriginatorInfo {
        return new OriginatorInfo(_o.certs, _o.crls);
    }
}


/**
 * @summary The Leading Root Component Types of OriginatorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OriginatorInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certs",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "crls",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of OriginatorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OriginatorInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of OriginatorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OriginatorInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_OriginatorInfo: $.ASN1Decoder<OriginatorInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorInfo} The decoded data structure.
 */
export function _decode_OriginatorInfo(el: _Element) {
    if (!_cached_decoder_for_OriginatorInfo) {
        _cached_decoder_for_OriginatorInfo = function (
            el: _Element
        ): OriginatorInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certs: OPTIONAL<CertificateSet>;
            let crls: OPTIONAL<CertificateRevocationLists>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certs: (_el: _Element): void => {
                    certs = $._decode_implicit<CertificateSet>(
                        () => _decode_CertificateSet
                    )(_el);
                },
                crls: (_el: _Element): void => {
                    crls = $._decode_implicit<CertificateRevocationLists>(
                        () => _decode_CertificateRevocationLists
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OriginatorInfo,
                _extension_additions_list_spec_for_OriginatorInfo,
                _root_component_type_list_2_spec_for_OriginatorInfo,
                undefined
            );
            return new OriginatorInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certs,
                crls
            );
        };
    }
    return _cached_decoder_for_OriginatorInfo(el);
}


let _cached_encoder_for_OriginatorInfo: $.ASN1Encoder<OriginatorInfo> | null = null;


/**
 * @summary Encodes a(n) OriginatorInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorInfo, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorInfo(
    value: OriginatorInfo,
    elGetter: $.ASN1Encoder<OriginatorInfo>
) {
    if (!_cached_encoder_for_OriginatorInfo) {
        _cached_encoder_for_OriginatorInfo = function (
            value: OriginatorInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.certs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  $.BER
                              )(value.certs, $.BER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertificateRevocationLists,
                                  $.BER
                              )(value.crls, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OriginatorInfo(value, elGetter);
}


/* eslint-enable */
