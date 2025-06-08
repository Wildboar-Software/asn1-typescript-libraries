/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    BPUCertificateReferrerInformation,
    _decode_BPUCertificateReferrerInformation,
    _encode_BPUCertificateReferrerInformation,
} from '../AuthenticationContextForBiometrics/BPUCertificateReferrerInformation.ta';
export {
    BPUCertificateReferrerInformation,
    _decode_BPUCertificateReferrerInformation,
    _encode_BPUCertificateReferrerInformation,
} from '../AuthenticationContextForBiometrics/BPUCertificateReferrerInformation.ta';
import {
    BPUReportInformation,
    _decode_BPUReportInformation,
    _encode_BPUReportInformation,
} from '../AuthenticationContextForBiometrics/BPUReportInformation.ta';
export {
    BPUReportInformation,
    _decode_BPUReportInformation,
    _encode_BPUReportInformation,
} from '../AuthenticationContextForBiometrics/BPUReportInformation.ta';

/* START_OF_SYMBOL_DEFINITION BPUInformation */
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
/* END_OF_SYMBOL_DEFINITION BPUInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUInformation */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bpuReportInformation',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUInformation */
/**
 * @summary The Trailing Root Component Types of BPUInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUInformation */
/**
 * @summary The Extension Addition Component Types of BPUInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUInformation */
let _cached_decoder_for_BPUInformation: $.ASN1Decoder<BPUInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BPUInformation */
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
/* END_OF_SYMBOL_DEFINITION _decode_BPUInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUInformation */
let _cached_encoder_for_BPUInformation: $.ASN1Encoder<BPUInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BPUInformation */
/**
 * @summary Encodes a(n) BPUInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUInformation(
    value: BPUInformation,
    elGetter: $.ASN1Encoder<BPUInformation>
) {
    if (!_cached_encoder_for_BPUInformation) {
        _cached_encoder_for_BPUInformation = function (
            value: BPUInformation,
            elGetter: $.ASN1Encoder<BPUInformation>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_BPUInformation */

/* eslint-enable */
