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
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BPUCertificateReferrerInformation */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION BPUCertificateReferrerInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUCertificateReferrerInformation */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'crlsReferrer',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUCertificateReferrerInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUCertificateReferrerInformation */
/**
 * @summary The Trailing Root Component Types of BPUCertificateReferrerInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUCertificateReferrerInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUCertificateReferrerInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUCertificateReferrerInformation */
/**
 * @summary The Extension Addition Component Types of BPUCertificateReferrerInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUCertificateReferrerInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUCertificateReferrerInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUCertificateReferrerInformation */
let _cached_decoder_for_BPUCertificateReferrerInformation: $.ASN1Decoder<BPUCertificateReferrerInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUCertificateReferrerInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BPUCertificateReferrerInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) BPUCertificateReferrerInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUCertificateReferrerInformation} The decoded data structure.
 */
export function _decode_BPUCertificateReferrerInformation(el: _Element) {
    if (!_cached_decoder_for_BPUCertificateReferrerInformation) {
        _cached_decoder_for_BPUCertificateReferrerInformation = function (
            el: _Element
        ): BPUCertificateReferrerInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bpuCertificateReferrer!: URI;
            let crlsReferrer: OPTIONAL<URI>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bpuCertificateReferrer: (_el: _Element): void => {
                    bpuCertificateReferrer = _decode_URI(_el);
                },
                crlsReferrer: (_el: _Element): void => {
                    crlsReferrer = _decode_URI(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BPUCertificateReferrerInformation,
                _extension_additions_list_spec_for_BPUCertificateReferrerInformation,
                _root_component_type_list_2_spec_for_BPUCertificateReferrerInformation,
                undefined
            );
            return new BPUCertificateReferrerInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                bpuCertificateReferrer,
                crlsReferrer
            );
        };
    }
    return _cached_decoder_for_BPUCertificateReferrerInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BPUCertificateReferrerInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUCertificateReferrerInformation */
let _cached_encoder_for_BPUCertificateReferrerInformation: $.ASN1Encoder<BPUCertificateReferrerInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUCertificateReferrerInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BPUCertificateReferrerInformation */
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
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_BPUCertificateReferrerInformation */

/* eslint-enable */
