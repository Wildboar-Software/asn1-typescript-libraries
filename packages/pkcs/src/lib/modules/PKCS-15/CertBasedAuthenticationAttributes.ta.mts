/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CertBasedAuthenticationAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertBasedAuthenticationAttributes ::= SEQUENCE {
 *     cha OCTET STRING,
 *     ...
 * }
 * ```
 *
 * @class
 */
export class CertBasedAuthenticationAttributes {
    constructor(
        /**
         * @summary `cha`.
         * @public
         * @readonly
         */
        readonly cha: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertBasedAuthenticationAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CertBasedAuthenticationAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertBasedAuthenticationAttributes`.
     * @returns {CertBasedAuthenticationAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof CertBasedAuthenticationAttributes]: CertBasedAuthenticationAttributes[_K];
        }
    ): CertBasedAuthenticationAttributes {
        return new CertBasedAuthenticationAttributes(
            _o.cha,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of CertBasedAuthenticationAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cha",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of CertBasedAuthenticationAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertBasedAuthenticationAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_CertBasedAuthenticationAttributes: $.ASN1Decoder<CertBasedAuthenticationAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertBasedAuthenticationAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertBasedAuthenticationAttributes} The decoded data structure.
 */
export function _decode_CertBasedAuthenticationAttributes(el: _Element): CertBasedAuthenticationAttributes {
    if (!_cached_decoder_for_CertBasedAuthenticationAttributes) {
        _cached_decoder_for_CertBasedAuthenticationAttributes = function (
            el: _Element
        ): CertBasedAuthenticationAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertBasedAuthenticationAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "cha";
            let cha!: OCTET_STRING;
            cha = $._decodeOctetString(sequence[0]);
            return new CertBasedAuthenticationAttributes(
                cha,
                sequence.slice(1)
            );
        };
    }
    return _cached_decoder_for_CertBasedAuthenticationAttributes(el);
}


let _cached_encoder_for_CertBasedAuthenticationAttributes: $.ASN1Encoder<CertBasedAuthenticationAttributes> | null = null;


/**
 * @summary Encodes a(n) CertBasedAuthenticationAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertBasedAuthenticationAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CertBasedAuthenticationAttributes(
    value: CertBasedAuthenticationAttributes,
    elGetter: $.ASN1Encoder<CertBasedAuthenticationAttributes>
): _Element {
    if (!_cached_encoder_for_CertBasedAuthenticationAttributes) {
        _cached_encoder_for_CertBasedAuthenticationAttributes = function (
            value: CertBasedAuthenticationAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeOctetString(
                                value.cha,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertBasedAuthenticationAttributes(
        value,
        elGetter
    );
}


/* eslint-enable */
