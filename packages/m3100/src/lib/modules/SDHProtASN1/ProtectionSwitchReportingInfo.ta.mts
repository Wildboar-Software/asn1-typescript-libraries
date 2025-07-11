/* eslint-disable */
import {
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
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/pki-stub';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module';

/**
 * @summary ProtectionSwitchReportingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchReportingInfo ::= SEQUENCE {
 *   protectingUnit  RelativeDistinguishedName,
 *   additionalInfo  AdditionalInformation
 * }
 * ```
 *
 */
export class ProtectionSwitchReportingInfo {
    constructor(
        /**
         * @summary `protectingUnit`.
         * @public
         * @readonly
         */
        readonly protectingUnit: RelativeDistinguishedName,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: AdditionalInformation
    ) {}

    /**
     * @summary Restructures an object into a ProtectionSwitchReportingInfo
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionSwitchReportingInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionSwitchReportingInfo`.
     * @returns {ProtectionSwitchReportingInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectionSwitchReportingInfo]: ProtectionSwitchReportingInfo[_K];
        }
    ): ProtectionSwitchReportingInfo {
        return new ProtectionSwitchReportingInfo(
            _o.protectingUnit,
            _o.additionalInfo
        );
    }
}


/**
 * @summary The Leading Root Component Types of ProtectionSwitchReportingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionSwitchReportingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protectingUnit',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'additionalInfo',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of ProtectionSwitchReportingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionSwitchReportingInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ProtectionSwitchReportingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionSwitchReportingInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_ProtectionSwitchReportingInfo: $.ASN1Decoder<ProtectionSwitchReportingInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionSwitchReportingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionSwitchReportingInfo} The decoded data structure.
 */
export function _decode_ProtectionSwitchReportingInfo(el: _Element): ProtectionSwitchReportingInfo {
    if (!_cached_decoder_for_ProtectionSwitchReportingInfo) {
        _cached_decoder_for_ProtectionSwitchReportingInfo = function (
            el: _Element
        ): ProtectionSwitchReportingInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ProtectionSwitchReportingInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'protectingUnit';
            sequence[1].name = 'additionalInfo';
            let protectingUnit!: RelativeDistinguishedName;
            let additionalInfo!: AdditionalInformation;
            protectingUnit = _decode_RelativeDistinguishedName(sequence[0]);
            additionalInfo = _decode_AdditionalInformation(sequence[1]);
            return new ProtectionSwitchReportingInfo(
                protectingUnit,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_ProtectionSwitchReportingInfo(el);
}


let _cached_encoder_for_ProtectionSwitchReportingInfo: $.ASN1Encoder<ProtectionSwitchReportingInfo> | null = null;


/**
 * @summary Encodes a(n) ProtectionSwitchReportingInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionSwitchReportingInfo, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionSwitchReportingInfo(
    value: ProtectionSwitchReportingInfo,
    elGetter: $.ASN1Encoder<ProtectionSwitchReportingInfo>
): _Element {
    if (!_cached_encoder_for_ProtectionSwitchReportingInfo) {
        _cached_encoder_for_ProtectionSwitchReportingInfo = function (
            value: ProtectionSwitchReportingInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RelativeDistinguishedName(
                            value.protectingUnit,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AdditionalInformation(
                            value.additionalInfo,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionSwitchReportingInfo(value, elGetter);
}


/* eslint-enable */
