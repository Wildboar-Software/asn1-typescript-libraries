/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PrivateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyUsagePeriod ::= SEQUENCE {
 *   notBefore  [0]  GeneralizedTime OPTIONAL,
 *   notAfter   [1]  GeneralizedTime OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., notBefore  PRESENT } |
 *    WITH COMPONENTS {..., notAfter   PRESENT } )
 * ```
 *
 * @class
 */
export class PrivateKeyUsagePeriod {
    constructor(
        /**
         * @summary `notBefore`.
         * @public
         * @readonly
         */
        readonly notBefore: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `notAfter`.
         * @public
         * @readonly
         */
        readonly notAfter: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivateKeyUsagePeriod
     * @description
     *
     * This takes an `object` and converts it to a `PrivateKeyUsagePeriod`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateKeyUsagePeriod`.
     * @returns {PrivateKeyUsagePeriod}
     */
    public static _from_object(
        _o: { [_K in keyof PrivateKeyUsagePeriod]: PrivateKeyUsagePeriod[_K] }
    ): PrivateKeyUsagePeriod {
        return new PrivateKeyUsagePeriod(
            _o.notBefore,
            _o.notAfter,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notBefore",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "notAfter",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [];

let _cached_decoder_for_PrivateKeyUsagePeriod: $.ASN1Decoder<PrivateKeyUsagePeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyUsagePeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyUsagePeriod} The decoded data structure.
 */
export function _decode_PrivateKeyUsagePeriod(el: _Element) {
    if (!_cached_decoder_for_PrivateKeyUsagePeriod) {
        _cached_decoder_for_PrivateKeyUsagePeriod = function (
            el: _Element
        ): PrivateKeyUsagePeriod {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notBefore: OPTIONAL<GeneralizedTime>;
            let notAfter: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                notBefore: (_el: _Element): void => {
                    notBefore = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                notAfter: (_el: _Element): void => {
                    notAfter = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod,
                _extension_additions_list_spec_for_PrivateKeyUsagePeriod,
                _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateKeyUsagePeriod(
                /* SEQUENCE_CONSTRUCTOR_CALL */ notBefore,
                notAfter,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateKeyUsagePeriod(el);
}

let _cached_encoder_for_PrivateKeyUsagePeriod: $.ASN1Encoder<PrivateKeyUsagePeriod> | null = null;

/**
 * @summary Encodes a(n) PrivateKeyUsagePeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyUsagePeriod, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyUsagePeriod(
    value: PrivateKeyUsagePeriod,
    elGetter: $.ASN1Encoder<PrivateKeyUsagePeriod>
) {
    if (!_cached_encoder_for_PrivateKeyUsagePeriod) {
        _cached_encoder_for_PrivateKeyUsagePeriod = function (
            value: PrivateKeyUsagePeriod        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.notBefore === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.notBefore, $.DER),
                            /* IF_ABSENT  */ value.notAfter === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.notAfter, $.DER),
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
    return _cached_encoder_for_PrivateKeyUsagePeriod(value, elGetter);
}


/* eslint-enable */
