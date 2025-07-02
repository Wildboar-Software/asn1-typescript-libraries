/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";


/**
 * @summary PreferredSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredSignatureAlgorithm ::= SEQUENCE {
 * sigIdentifier  AlgorithmIdentifier{SIGNATURE-ALGORITHM, {...}},
 * certIdentifier AlgorithmIdentifier{PUBLIC-KEY, {...}} OPTIONAL
 * }
 * ```
 *
 */
export class PreferredSignatureAlgorithm {
    constructor(
        /**
         * @summary `sigIdentifier`.
         * @public
         * @readonly
         */
        readonly sigIdentifier: AlgorithmIdentifier,
        /**
         * @summary `certIdentifier`.
         * @public
         * @readonly
         */
        readonly certIdentifier: OPTIONAL<AlgorithmIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a PreferredSignatureAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `PreferredSignatureAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PreferredSignatureAlgorithm`.
     * @returns {PreferredSignatureAlgorithm}
     */
    public static _from_object(
        _o: {
            [_K in keyof PreferredSignatureAlgorithm]: PreferredSignatureAlgorithm[_K];
        }
    ): PreferredSignatureAlgorithm {
        return new PreferredSignatureAlgorithm(
            _o.sigIdentifier,
            _o.certIdentifier
        );
    }
}


/**
 * @summary The Leading Root Component Types of PreferredSignatureAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PreferredSignatureAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sigIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "certIdentifier",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of PreferredSignatureAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PreferredSignatureAlgorithm: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PreferredSignatureAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PreferredSignatureAlgorithm: $.ComponentSpec[] = [];


let _cached_decoder_for_PreferredSignatureAlgorithm: $.ASN1Decoder<PreferredSignatureAlgorithm> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PreferredSignatureAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PreferredSignatureAlgorithm} The decoded data structure.
 */
export function _decode_PreferredSignatureAlgorithm(el: _Element): PreferredSignatureAlgorithm {
    if (!_cached_decoder_for_PreferredSignatureAlgorithm) {
        _cached_decoder_for_PreferredSignatureAlgorithm = function (
            el: _Element
        ): PreferredSignatureAlgorithm {
            let sigIdentifier!: AlgorithmIdentifier;
            let certIdentifier: OPTIONAL<AlgorithmIdentifier>;
            const callbacks: $.DecodingMap = {
                sigIdentifier: (_el: _Element): void => {
                    sigIdentifier = _decode_AlgorithmIdentifier(_el);
                },
                certIdentifier: (_el: _Element): void => {
                    certIdentifier = _decode_AlgorithmIdentifier(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PreferredSignatureAlgorithm,
                _extension_additions_list_spec_for_PreferredSignatureAlgorithm,
                _root_component_type_list_2_spec_for_PreferredSignatureAlgorithm,
                undefined
            );
            return new PreferredSignatureAlgorithm(
                sigIdentifier,
                certIdentifier
            );
        };
    }
    return _cached_decoder_for_PreferredSignatureAlgorithm(el);
}


let _cached_encoder_for_PreferredSignatureAlgorithm: $.ASN1Encoder<PreferredSignatureAlgorithm> | null = null;


/**
 * @summary Encodes a(n) PreferredSignatureAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreferredSignatureAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_PreferredSignatureAlgorithm(
    value: PreferredSignatureAlgorithm,
    elGetter: $.ASN1Encoder<PreferredSignatureAlgorithm>
): _Element {
    if (!_cached_encoder_for_PreferredSignatureAlgorithm) {
        _cached_encoder_for_PreferredSignatureAlgorithm = function (
            value: PreferredSignatureAlgorithm        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.sigIdentifier,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.certIdentifier === undefined
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.certIdentifier,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PreferredSignatureAlgorithm(value, elGetter);
}


/* eslint-enable */
