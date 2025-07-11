/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttCertIssuer,
    _decode_AttCertIssuer,
    _encode_AttCertIssuer,
} from "../AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import {
    Holder,
    _decode_Holder,
    _encode_Holder,
} from "../AttributeCertificateDefinitions/Holder.ta.mjs";
/**
 * @summary HolderIssuerAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HolderIssuerAssertion ::= SEQUENCE {
 *   holder  [0]  Holder OPTIONAL,
 *   issuer  [1]  AttCertIssuer OPTIONAL,
 *   ... }
 * ```
 *
 */
export class HolderIssuerAssertion {
    constructor(
        /**
         * @summary `holder`.
         * @public
         * @readonly
         */
        readonly holder: OPTIONAL<Holder>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<AttCertIssuer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HolderIssuerAssertion
     * @description
     *
     * This takes an `object` and converts it to a `HolderIssuerAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HolderIssuerAssertion`.
     * @returns {HolderIssuerAssertion}
     */
    public static _from_object(
        _o: { [_K in keyof HolderIssuerAssertion]: HolderIssuerAssertion[_K] }
    ): HolderIssuerAssertion {
        return new HolderIssuerAssertion(
            _o.holder,
            _o.issuer,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of HolderIssuerAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HolderIssuerAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "holder",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of HolderIssuerAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HolderIssuerAssertion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of HolderIssuerAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HolderIssuerAssertion: $.ComponentSpec[] = [];

let _cached_decoder_for_HolderIssuerAssertion: $.ASN1Decoder<HolderIssuerAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HolderIssuerAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HolderIssuerAssertion} The decoded data structure.
 */
export function _decode_HolderIssuerAssertion(el: _Element): HolderIssuerAssertion {
    if (!_cached_decoder_for_HolderIssuerAssertion) {
        _cached_decoder_for_HolderIssuerAssertion = function (
            el: _Element
        ): HolderIssuerAssertion {
            let holder: OPTIONAL<Holder>;
            let issuer: OPTIONAL<AttCertIssuer>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                holder: (_el: _Element): void => {
                    holder = $._decode_implicit<Holder>(() => _decode_Holder)(
                        _el
                    );
                },
                issuer: (_el: _Element): void => {
                    issuer = $._decode_implicit<AttCertIssuer>(
                        () => _decode_AttCertIssuer
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_HolderIssuerAssertion,
                _extension_additions_list_spec_for_HolderIssuerAssertion,
                _root_component_type_list_2_spec_for_HolderIssuerAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new HolderIssuerAssertion(
                holder,
                issuer,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_HolderIssuerAssertion(el);
}

let _cached_encoder_for_HolderIssuerAssertion: $.ASN1Encoder<HolderIssuerAssertion> | null = null;

/**
 * @summary Encodes a(n) HolderIssuerAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HolderIssuerAssertion, encoded as an ASN.1 Element.
 */
export function _encode_HolderIssuerAssertion(
    value: HolderIssuerAssertion,
    elGetter: $.ASN1Encoder<HolderIssuerAssertion>
): _Element {
    if (!_cached_encoder_for_HolderIssuerAssertion) {
        _cached_encoder_for_HolderIssuerAssertion = function (
            value: HolderIssuerAssertion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.holder === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Holder,
                                      $.DER
                                  )(value.holder, $.DER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AttCertIssuer,
                                      $.DER
                                  )(value.issuer, $.DER),
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
    return _cached_encoder_for_HolderIssuerAssertion(value, elGetter);
}


/* eslint-enable */
