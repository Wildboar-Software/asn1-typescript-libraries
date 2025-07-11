/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta.mjs";
import {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary CertificateListExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListExactAssertion ::= SEQUENCE {
 *   issuer             Name,
 *   thisUpdate         Time,
 *   distributionPoint  DistributionPointName OPTIONAL }
 * ```
 *
 */
export class CertificateListExactAssertion {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `thisUpdate`.
         * @public
         * @readonly
         */
        readonly thisUpdate: Time,
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>
    ) {}

    /**
     * @summary Restructures an object into a CertificateListExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListExactAssertion`.
     * @returns {CertificateListExactAssertion}
     */
    public static _from_object(
        _o:
            {
                [_K in keyof CertificateListExactAssertion]: CertificateListExactAssertion[_K];
            }
    ): CertificateListExactAssertion {
        return new CertificateListExactAssertion(
            _o.issuer,
            _o.thisUpdate,
            _o.distributionPoint
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec("thisUpdate", false, $.hasAnyTag),
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificateListExactAssertion: $.ASN1Decoder<CertificateListExactAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListExactAssertion} The decoded data structure.
 */
export function _decode_CertificateListExactAssertion(el: _Element): CertificateListExactAssertion {
    if (!_cached_decoder_for_CertificateListExactAssertion) {
        _cached_decoder_for_CertificateListExactAssertion = function (
            el: _Element
        ): CertificateListExactAssertion {
            let issuer!: Name;
            let thisUpdate!: Time;
            let distributionPoint: OPTIONAL<DistributionPointName>;
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                thisUpdate: (_el: _Element): void => {
                    thisUpdate = _decode_Time(_el);
                },
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = _decode_DistributionPointName(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListExactAssertion,
                _extension_additions_list_spec_for_CertificateListExactAssertion,
                _root_component_type_list_2_spec_for_CertificateListExactAssertion,
                undefined
            );
            return new CertificateListExactAssertion(
                issuer,
                thisUpdate,
                distributionPoint
            );
        };
    }
    return _cached_decoder_for_CertificateListExactAssertion(el);
}

let _cached_encoder_for_CertificateListExactAssertion: $.ASN1Encoder<CertificateListExactAssertion> | null = null;

/**
 * @summary Encodes a(n) CertificateListExactAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListExactAssertion(
    value: CertificateListExactAssertion,
    elGetter: $.ASN1Encoder<CertificateListExactAssertion>
): _Element {
    if (!_cached_encoder_for_CertificateListExactAssertion) {
        _cached_encoder_for_CertificateListExactAssertion = function (
            value: CertificateListExactAssertion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Name(value.issuer, $.DER),
                        /* REQUIRED   */ _encode_Time(value.thisUpdate, $.DER),
                        /* IF_ABSENT  */ value.distributionPoint === undefined
                            ? undefined
                            : _encode_DistributionPointName(
                                  value.distributionPoint,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertificateListExactAssertion(value, elGetter);
}


/* eslint-enable */
