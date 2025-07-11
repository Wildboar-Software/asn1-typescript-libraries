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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';

/**
 * @summary BPUCertificateReferrerInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUCertificateReferrerInformation ::= SEQUENCE {
 *     bpuCertificateReferrer      URI,
 *     crlsReferrer                URI OPTIONAL }
 * ```
 *
 */
export class BPUCertificateReferrerInformation {
    constructor(
        /**
         * @summary `bpuCertificateReferrer`.
         * @public
         * @readonly
         */
        readonly bpuCertificateReferrer: URI,
        /**
         * @summary `crlsReferrer`.
         * @public
         * @readonly
         */
        readonly crlsReferrer: OPTIONAL<URI>
    ) {}

    /**
     * @summary Restructures an object into a BPUCertificateReferrerInformation
     * @description
     *
     * This takes an `object` and converts it to a `BPUCertificateReferrerInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUCertificateReferrerInformation`.
     * @returns {BPUCertificateReferrerInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof BPUCertificateReferrerInformation]: BPUCertificateReferrerInformation[_K];
        }
    ): BPUCertificateReferrerInformation {
        return new BPUCertificateReferrerInformation(
            _o.bpuCertificateReferrer,
            _o.crlsReferrer
        );
    }
}


/**
 * @summary The Leading Root Component Types of BPUCertificateReferrerInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BPUCertificateReferrerInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'bpuCertificateReferrer',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'crlsReferrer',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of BPUCertificateReferrerInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUCertificateReferrerInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BPUCertificateReferrerInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUCertificateReferrerInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_BPUCertificateReferrerInformation: $.ASN1Decoder<BPUCertificateReferrerInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUCertificateReferrerInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUCertificateReferrerInformation} The decoded data structure.
 */
export function _decode_BPUCertificateReferrerInformation(el: _Element): BPUCertificateReferrerInformation {
    if (!_cached_decoder_for_BPUCertificateReferrerInformation) {
        _cached_decoder_for_BPUCertificateReferrerInformation = function (
            el: _Element
        ): BPUCertificateReferrerInformation {
            let bpuCertificateReferrer!: URI;
            let crlsReferrer: OPTIONAL<URI>;
            const callbacks: $.DecodingMap = {
                bpuCertificateReferrer: (_el: _Element): void => {
                    bpuCertificateReferrer = _decode_URI(_el);
                },
                crlsReferrer: (_el: _Element): void => {
                    crlsReferrer = _decode_URI(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BPUCertificateReferrerInformation,
                _extension_additions_list_spec_for_BPUCertificateReferrerInformation,
                _root_component_type_list_2_spec_for_BPUCertificateReferrerInformation,
                undefined
            );
            return new BPUCertificateReferrerInformation (
                bpuCertificateReferrer,
                crlsReferrer
            );
        };
    }
    return _cached_decoder_for_BPUCertificateReferrerInformation(el);
}


let _cached_encoder_for_BPUCertificateReferrerInformation: $.ASN1Encoder<BPUCertificateReferrerInformation> | null = null;


/**
 * @summary Encodes a(n) BPUCertificateReferrerInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUCertificateReferrerInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUCertificateReferrerInformation(
    value: BPUCertificateReferrerInformation,
    elGetter: $.ASN1Encoder<BPUCertificateReferrerInformation>
): _Element {
    if (!_cached_encoder_for_BPUCertificateReferrerInformation) {
        _cached_encoder_for_BPUCertificateReferrerInformation = function (
            value: BPUCertificateReferrerInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_URI(
                            value.bpuCertificateReferrer,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.crlsReferrer === undefined
                            ? undefined
                            : _encode_URI(value.crlsReferrer, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BPUCertificateReferrerInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
