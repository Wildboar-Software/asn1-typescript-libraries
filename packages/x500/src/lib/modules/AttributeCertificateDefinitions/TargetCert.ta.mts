/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta.mjs";
import {
    ObjectDigestInfo,
    _decode_ObjectDigestInfo,
    _encode_ObjectDigestInfo,
} from "../AttributeCertificateDefinitions/ObjectDigestInfo.ta.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
/**
 * @summary TargetCert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TargetCert ::= SEQUENCE {
 *   targetCertificate  IssuerSerial,
 *   targetName         GeneralName OPTIONAL,
 *   certDigestInfo     ObjectDigestInfo OPTIONAL }
 * ```
 *
 * @class
 */
export class TargetCert {
    constructor(
        /**
         * @summary `targetCertificate`.
         * @public
         * @readonly
         */
        readonly targetCertificate: IssuerSerial,
        /**
         * @summary `targetName`.
         * @public
         * @readonly
         */
        readonly targetName: OPTIONAL<GeneralName>,
        /**
         * @summary `certDigestInfo`.
         * @public
         * @readonly
         */
        readonly certDigestInfo: OPTIONAL<ObjectDigestInfo>
    ) {}

    /**
     * @summary Restructures an object into a TargetCert
     * @description
     *
     * This takes an `object` and converts it to a `TargetCert`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TargetCert`.
     * @returns {TargetCert}
     */
    public static _from_object(
        _o: { [_K in keyof TargetCert]: TargetCert[_K] }
    ): TargetCert {
        return new TargetCert(
            _o.targetCertificate,
            _o.targetName,
            _o.certDigestInfo
        );
    }
}

/**
 * @summary The Leading Root Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TargetCert: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "targetCertificate",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec("targetName", true, $.hasTagClass(_TagClass.context)),
    new $.ComponentSpec(
        "certDigestInfo",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TargetCert: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TargetCert: $.ComponentSpec[] = [];

let _cached_decoder_for_TargetCert: $.ASN1Decoder<TargetCert> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetCert
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TargetCert} The decoded data structure.
 */
export function _decode_TargetCert(el: _Element): TargetCert {
    if (!_cached_decoder_for_TargetCert) {
        _cached_decoder_for_TargetCert = function (el: _Element): TargetCert {
            let targetCertificate!: IssuerSerial;
            let targetName: OPTIONAL<GeneralName>;
            let certDigestInfo: OPTIONAL<ObjectDigestInfo>;
            const callbacks: $.DecodingMap = {
                targetCertificate: (_el: _Element): void => {
                    targetCertificate = _decode_IssuerSerial(_el);
                },
                targetName: (_el: _Element): void => {
                    targetName = _decode_GeneralName(_el);
                },
                certDigestInfo: (_el: _Element): void => {
                    certDigestInfo = _decode_ObjectDigestInfo(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TargetCert,
                _extension_additions_list_spec_for_TargetCert,
                _root_component_type_list_2_spec_for_TargetCert,
                undefined
            );
            return new TargetCert(
                targetCertificate,
                targetName,
                certDigestInfo
            );
        };
    }
    return _cached_decoder_for_TargetCert(el);
}

let _cached_encoder_for_TargetCert: $.ASN1Encoder<TargetCert> | null = null;

/**
 * @summary Encodes a(n) TargetCert into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetCert, encoded as an ASN.1 Element.
 */
export function _encode_TargetCert(
    value: TargetCert,
    _elGetter: $.ASN1Encoder<TargetCert>
): _Element {
    if (!_cached_encoder_for_TargetCert) {
        _cached_encoder_for_TargetCert = function (
            value: TargetCert        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IssuerSerial(
                            value.targetCertificate,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.targetName === undefined
                            ? undefined
                            : _encode_GeneralName(value.targetName, $.DER),
                        /* IF_ABSENT  */ value.certDigestInfo === undefined
                            ? undefined
                            : _encode_ObjectDigestInfo(
                                  value.certDigestInfo,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TargetCert(value, _elGetter);
}


/* eslint-enable */
