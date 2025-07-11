/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
/**
 * @summary SpecificallyIdentified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecificallyIdentified ::= SEQUENCE {
 *   name    GeneralName,
 *   issuer  GeneralName OPTIONAL,
 *   serial  CertificateSerialNumber OPTIONAL }
 *   (WITH COMPONENTS { ..., issuer PRESENT, serial PRESENT } |
 *   (WITH COMPONENTS { ..., issuer ABSENT, serial ABSENT }))
 * ```
 *
 */
export class SpecificallyIdentified {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: GeneralName,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralName>,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: OPTIONAL<CertificateSerialNumber>
    ) {}

    /**
     * @summary Restructures an object into a SpecificallyIdentified
     * @description
     *
     * This takes an `object` and converts it to a `SpecificallyIdentified`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecificallyIdentified`.
     * @returns {SpecificallyIdentified}
     */
    public static _from_object(
        _o: { [_K in keyof SpecificallyIdentified]: SpecificallyIdentified[_K] }
    ): SpecificallyIdentified {
        return new SpecificallyIdentified(_o.name, _o.issuer, _o.serial);
    }
}

/**
 * @summary The Leading Root Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasAnyTag),
    new $.ComponentSpec("issuer", true, $.hasTagClass(_TagClass.context)),
    new $.ComponentSpec(
        "serial",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [];

let _cached_decoder_for_SpecificallyIdentified: $.ASN1Decoder<SpecificallyIdentified> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpecificallyIdentified
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecificallyIdentified} The decoded data structure.
 */
export function _decode_SpecificallyIdentified(el: _Element): SpecificallyIdentified {
    if (!_cached_decoder_for_SpecificallyIdentified) {
        _cached_decoder_for_SpecificallyIdentified = function (
            el: _Element
        ): SpecificallyIdentified {
            let name!: GeneralName;
            let issuer: OPTIONAL<GeneralName>;
            let serial: OPTIONAL<CertificateSerialNumber>;
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = _decode_GeneralName(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_GeneralName(_el);
                },
                serial: (_el: _Element): void => {
                    serial = _decode_CertificateSerialNumber(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SpecificallyIdentified,
                _extension_additions_list_spec_for_SpecificallyIdentified,
                _root_component_type_list_2_spec_for_SpecificallyIdentified,
                undefined
            );
            return new SpecificallyIdentified(
                name,
                issuer,
                serial
            );
        };
    }
    return _cached_decoder_for_SpecificallyIdentified(el);
}

let _cached_encoder_for_SpecificallyIdentified: $.ASN1Encoder<SpecificallyIdentified> | null = null;

/**
 * @summary Encodes a(n) SpecificallyIdentified into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificallyIdentified, encoded as an ASN.1 Element.
 */
export function _encode_SpecificallyIdentified(
    value: SpecificallyIdentified,
    elGetter: $.ASN1Encoder<SpecificallyIdentified>
): _Element {
    if (!_cached_encoder_for_SpecificallyIdentified) {
        _cached_encoder_for_SpecificallyIdentified = function (
            value: SpecificallyIdentified        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralName(value.name, $.DER),
                        /* IF_ABSENT  */ value.issuer === undefined
                            ? undefined
                            : _encode_GeneralName(value.issuer, $.DER),
                        /* IF_ABSENT  */ value.serial === undefined
                            ? undefined
                            : _encode_CertificateSerialNumber(
                                  value.serial,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SpecificallyIdentified(value, elGetter);
}


/* eslint-enable */
