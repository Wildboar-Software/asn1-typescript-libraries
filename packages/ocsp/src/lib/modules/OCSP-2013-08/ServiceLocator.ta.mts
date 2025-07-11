/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/pki-stub";
import {
    AuthorityInfoAccessSyntax,
    _decode_AuthorityInfoAccessSyntax,
    _encode_AuthorityInfoAccessSyntax,
} from "@wildboar/x500/PkiPmiExternalDataTypes";

/**
 * @summary ServiceLocator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceLocator ::= SEQUENCE {
 * issuer    Name,
 * locator   AuthorityInfoAccessSyntax }
 * ```
 *
 */
export class ServiceLocator {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `locator`.
         * @public
         * @readonly
         */
        readonly locator: AuthorityInfoAccessSyntax
    ) {}

    /**
     * @summary Restructures an object into a ServiceLocator
     * @description
     *
     * This takes an `object` and converts it to a `ServiceLocator`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceLocator`.
     * @returns {ServiceLocator}
     */
    public static _from_object(
        _o: { [_K in keyof ServiceLocator]: ServiceLocator[_K] }
    ): ServiceLocator {
        return new ServiceLocator(_o.issuer, _o.locator);
    }
}

/**
 * @summary The Leading Root Component Types of ServiceLocator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceLocator: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec(
        "locator",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of ServiceLocator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceLocator: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ServiceLocator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceLocator: $.ComponentSpec[] = [];

let _cached_decoder_for_ServiceLocator: $.ASN1Decoder<ServiceLocator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceLocator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceLocator} The decoded data structure.
 */
export function _decode_ServiceLocator(el: _Element): ServiceLocator {
    if (!_cached_decoder_for_ServiceLocator) {
        _cached_decoder_for_ServiceLocator = function (
            el: _Element
        ): ServiceLocator {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ServiceLocator contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "locator";
            let issuer!: Name;
            let locator!: AuthorityInfoAccessSyntax;
            issuer = _decode_Name(sequence[0]);
            locator = _decode_AuthorityInfoAccessSyntax(sequence[1]);
            return new ServiceLocator(issuer, locator);
        };
    }
    return _cached_decoder_for_ServiceLocator(el);
}

let _cached_encoder_for_ServiceLocator: $.ASN1Encoder<ServiceLocator> | null = null;

/**
 * @summary Encodes a(n) ServiceLocator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceLocator, encoded as an ASN.1 Element.
 */
export function _encode_ServiceLocator(
    value: ServiceLocator,
    elGetter: $.ASN1Encoder<ServiceLocator>
): _Element {
    if (!_cached_encoder_for_ServiceLocator) {
        _cached_encoder_for_ServiceLocator = function (
            value: ServiceLocator        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Name(value.issuer, $.DER),
                        /* REQUIRED   */ _encode_AuthorityInfoAccessSyntax(
                            value.locator,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ServiceLocator(value, elGetter);
}

/* eslint-enable */
