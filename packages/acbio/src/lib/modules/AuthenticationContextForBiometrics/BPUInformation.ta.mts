/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    BPUCertificateReferrerInformation,
    _decode_BPUCertificateReferrerInformation,
    _encode_BPUCertificateReferrerInformation,
} from '../AuthenticationContextForBiometrics/BPUCertificateReferrerInformation.ta.mjs';
import {
    BPUReportInformation,
    _decode_BPUReportInformation,
    _encode_BPUReportInformation,
} from '../AuthenticationContextForBiometrics/BPUReportInformation.ta.mjs';

/**
 * @summary BPUInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUInformation ::= SEQUENCE {
 *     bpuCertificateReferrerInformation   BPUCertificateReferrerInformation OPTIONAL,
 *     bpuReportInformation                BPUReportInformation }
 * ```
 *
 * @class
 */
export class BPUInformation {
    constructor(
        /**
         * @summary `bpuCertificateReferrerInformation`.
         * @public
         * @readonly
         */
        readonly bpuCertificateReferrerInformation: OPTIONAL<BPUCertificateReferrerInformation>,
        /**
         * @summary `bpuReportInformation`.
         * @public
         * @readonly
         */
        readonly bpuReportInformation: BPUReportInformation
    ) {}

    /**
     * @summary Restructures an object into a BPUInformation
     * @description
     *
     * This takes an `object` and converts it to a `BPUInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUInformation`.
     * @returns {BPUInformation}
     */
    public static _from_object(
        _o: { [_K in keyof BPUInformation]: BPUInformation[_K] }
    ): BPUInformation {
        return new BPUInformation(
            _o.bpuCertificateReferrerInformation,
            _o.bpuReportInformation
        );
    }
}


/**
 * @summary The Leading Root Component Types of BPUInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BPUInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'bpuCertificateReferrerInformation',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'bpuReportInformation',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of BPUInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BPUInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_BPUInformation: $.ASN1Decoder<BPUInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUInformation} The decoded data structure.
 */
export function _decode_BPUInformation(el: _Element) {
    if (!_cached_decoder_for_BPUInformation) {
        _cached_decoder_for_BPUInformation = function (
            el: _Element
        ): BPUInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bpuCertificateReferrerInformation: OPTIONAL<BPUCertificateReferrerInformation>;
            let bpuReportInformation!: BPUReportInformation;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bpuCertificateReferrerInformation: (_el: _Element): void => {
                    bpuCertificateReferrerInformation = _decode_BPUCertificateReferrerInformation(
                        _el
                    );
                },
                bpuReportInformation: (_el: _Element): void => {
                    bpuReportInformation = _decode_BPUReportInformation(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BPUInformation,
                _extension_additions_list_spec_for_BPUInformation,
                _root_component_type_list_2_spec_for_BPUInformation,
                undefined
            );
            return new BPUInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                bpuCertificateReferrerInformation,
                bpuReportInformation
            );
        };
    }
    return _cached_decoder_for_BPUInformation(el);
}


let _cached_encoder_for_BPUInformation: $.ASN1Encoder<BPUInformation> | null = null;


/**
 * @summary Encodes a(n) BPUInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUInformation(
    value: BPUInformation,
    elGetter: $.ASN1Encoder<BPUInformation>
) {
    if (!_cached_encoder_for_BPUInformation) {
        _cached_encoder_for_BPUInformation = function (
            value: BPUInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.bpuCertificateReferrerInformation ===
                        undefined
                            ? undefined
                            : _encode_BPUCertificateReferrerInformation(
                                  value.bpuCertificateReferrerInformation,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_BPUReportInformation(
                            value.bpuReportInformation,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BPUInformation(value, elGetter);
}


/* eslint-enable */
