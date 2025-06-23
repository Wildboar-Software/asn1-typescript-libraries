/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Version,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Version,
    _encode_Version,
} from '../AuthenticationContextForBiometrics/Version.ta.mjs';
import {
    BPUInformation,
    _decode_BPUInformation,
    _encode_BPUInformation,
} from '../AuthenticationContextForBiometrics/BPUInformation.ta.mjs';
import {
    BiometricProcess,
    _decode_BiometricProcess,
    _encode_BiometricProcess,
} from '../AuthenticationContextForBiometrics/BiometricProcess.ta.mjs';
import {
    BRTCertificateInformation,
    _decode_BRTCertificateInformation,
    _encode_BRTCertificateInformation,
} from '../AuthenticationContextForBiometrics/BRTCertificateInformation.ta.mjs';

/**
 * @summary ACBioContentInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACBioContentInformation ::= [14] IMPLICIT SEQUENCE {
 *     version                     Version DEFAULT v0,
 *     bpuInformation              BPUInformation,
 *     controlValue                OCTET STRING (SIZE(16)),
 *     biometricProcess            BiometricProcess,
 *     brtCertificateInformation   BRTCertificateInformation OPTIONAL }
 * ```
 *
 * @class
 */
export class ACBioContentInformation {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `bpuInformation`.
         * @public
         * @readonly
         */
        readonly bpuInformation: BPUInformation,
        /**
         * @summary `controlValue`.
         * @public
         * @readonly
         */
        readonly controlValue: OCTET_STRING,
        /**
         * @summary `biometricProcess`.
         * @public
         * @readonly
         */
        readonly biometricProcess: BiometricProcess,
        /**
         * @summary `brtCertificateInformation`.
         * @public
         * @readonly
         */
        readonly brtCertificateInformation: OPTIONAL<BRTCertificateInformation>
    ) {}

    /**
     * @summary Restructures an object into a ACBioContentInformation
     * @description
     *
     * This takes an `object` and converts it to a `ACBioContentInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACBioContentInformation`.
     * @returns {ACBioContentInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof ACBioContentInformation]: ACBioContentInformation[_K];
        }
    ): ACBioContentInformation {
        return new ACBioContentInformation(
            _o.version,
            _o.bpuInformation,
            _o.controlValue,
            _o.biometricProcess,
            _o.brtCertificateInformation
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return v0;
    }
}


/**
 * @summary The Leading Root Component Types of ACBioContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACBioContentInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'version',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'bpuInformation',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'controlValue',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'biometricProcess',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'brtCertificateInformation',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of ACBioContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACBioContentInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ACBioContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACBioContentInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_ACBioContentInformation: $.ASN1Decoder<ACBioContentInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ACBioContentInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACBioContentInformation} The decoded data structure.
 */
export function _decode_ACBioContentInformation(el: _Element) {
    if (!_cached_decoder_for_ACBioContentInformation) {
        _cached_decoder_for_ACBioContentInformation = $._decode_implicit<ACBioContentInformation>(
            () =>
                function (el: _Element): ACBioContentInformation {
                    let version: OPTIONAL<Version> =
                        ACBioContentInformation._default_value_for_version;
                    let bpuInformation!: BPUInformation;
                    let controlValue!: OCTET_STRING;
                    let biometricProcess!: BiometricProcess;
                    let brtCertificateInformation: OPTIONAL<BRTCertificateInformation>;
                    const callbacks: $.DecodingMap = {
                        version: (_el: _Element): void => {
                            version = _decode_Version(_el);
                        },
                        bpuInformation: (_el: _Element): void => {
                            bpuInformation = _decode_BPUInformation(_el);
                        },
                        controlValue: (_el: _Element): void => {
                            controlValue = $._decodeOctetString(_el);
                        },
                        biometricProcess: (_el: _Element): void => {
                            biometricProcess = _decode_BiometricProcess(_el);
                        },
                        brtCertificateInformation: (_el: _Element): void => {
                            brtCertificateInformation = _decode_BRTCertificateInformation(
                                _el
                            );
                        },
                    };
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_ACBioContentInformation,
                        _extension_additions_list_spec_for_ACBioContentInformation,
                        _root_component_type_list_2_spec_for_ACBioContentInformation,
                        undefined
                    );
                    return new ACBioContentInformation (
                        version,
                        bpuInformation,
                        controlValue,
                        biometricProcess,
                        brtCertificateInformation
                    );
                }
        );
    }
    return _cached_decoder_for_ACBioContentInformation(el);
}


let _cached_encoder_for_ACBioContentInformation: $.ASN1Encoder<ACBioContentInformation> | null = null;


/**
 * @summary Encodes a(n) ACBioContentInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACBioContentInformation, encoded as an ASN.1 Element.
 */
export function _encode_ACBioContentInformation(
    value: ACBioContentInformation,
    elGetter: $.ASN1Encoder<ACBioContentInformation>
) {
    if (!_cached_encoder_for_ACBioContentInformation) {
        _cached_encoder_for_ACBioContentInformation = $._encode_implicit(
            _TagClass.context,
            14,
            () =>
                function (
                    value: ACBioContentInformation                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.version === undefined ||
                                $.deepEq(
                                    value.version,
                                    ACBioContentInformation._default_value_for_version
                                )
                                    ? undefined
                                    : _encode_Version(value.version, $.BER),
                                /* REQUIRED   */ _encode_BPUInformation(
                                    value.bpuInformation,
                                    $.BER
                                ),
                                /* REQUIRED   */ $._encodeOctetString(
                                    value.controlValue,
                                    $.BER
                                ),
                                /* REQUIRED   */ _encode_BiometricProcess(
                                    value.biometricProcess,
                                    $.BER
                                ),
                                /* IF_ABSENT  */ value.brtCertificateInformation ===
                                undefined
                                    ? undefined
                                    : _encode_BRTCertificateInformation(
                                          value.brtCertificateInformation,
                                          $.BER
                                      ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_ACBioContentInformation(value, elGetter);
}


/* eslint-enable */
