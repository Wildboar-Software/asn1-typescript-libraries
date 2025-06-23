/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
    AutoRestoreSource,
    _decode_AutoRestoreSource,
    _encode_AutoRestoreSource,
} from '../SWMF/AutoRestoreSource.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary AutoRestoreReportInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoRestoreReportInfo ::= SEQUENCE {
 *   source          AutoRestoreSource,
 *   success         BOOLEAN, -- TRUE for success
 *   additionalInfo  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AutoRestoreReportInfo {
    constructor(
        /**
         * @summary `source`.
         * @public
         * @readonly
         */
        readonly source: AutoRestoreSource,
        /**
         * @summary `success`.
         * @public
         * @readonly
         */
        readonly success: BOOLEAN,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a AutoRestoreReportInfo
     * @description
     *
     * This takes an `object` and converts it to a `AutoRestoreReportInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoRestoreReportInfo`.
     * @returns {AutoRestoreReportInfo}
     */
    public static _from_object(
        _o: { [_K in keyof AutoRestoreReportInfo]: AutoRestoreReportInfo[_K] }
    ): AutoRestoreReportInfo {
        return new AutoRestoreReportInfo(
            _o.source,
            _o.success,
            _o.additionalInfo
        );
    }
}

/**
 * @summary The Leading Root Component Types of AutoRestoreReportInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoRestoreReportInfo: $.ComponentSpec[] = [
    new $.ComponentSpec('source', false, $.hasAnyTag),
    new $.ComponentSpec(
        'success',
        false,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of AutoRestoreReportInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoRestoreReportInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AutoRestoreReportInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoRestoreReportInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_AutoRestoreReportInfo: $.ASN1Decoder<AutoRestoreReportInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoRestoreReportInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoRestoreReportInfo} The decoded data structure.
 */
export function _decode_AutoRestoreReportInfo(el: _Element) {
    if (!_cached_decoder_for_AutoRestoreReportInfo) {
        _cached_decoder_for_AutoRestoreReportInfo = function (
            el: _Element
        ): AutoRestoreReportInfo {
            let source!: AutoRestoreSource;
            let success!: BOOLEAN;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            const callbacks: $.DecodingMap = {
                source: (_el: _Element): void => {
                    source = _decode_AutoRestoreSource(_el);
                },
                success: (_el: _Element): void => {
                    success = $._decodeBoolean(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decodeSetOf<ManagementExtension>(
                        () => _decode_ManagementExtension
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoRestoreReportInfo,
                _extension_additions_list_spec_for_AutoRestoreReportInfo,
                _root_component_type_list_2_spec_for_AutoRestoreReportInfo,
                undefined
            );
            return new AutoRestoreReportInfo (
                source,
                success,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_AutoRestoreReportInfo(el);
}

let _cached_encoder_for_AutoRestoreReportInfo: $.ASN1Encoder<AutoRestoreReportInfo> | null = null;

/**
 * @summary Encodes a(n) AutoRestoreReportInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoRestoreReportInfo, encoded as an ASN.1 Element.
 */
export function _encode_AutoRestoreReportInfo(
    value: AutoRestoreReportInfo,
    elGetter: $.ASN1Encoder<AutoRestoreReportInfo>
) {
    if (!_cached_encoder_for_AutoRestoreReportInfo) {
        _cached_encoder_for_AutoRestoreReportInfo = function (
            value: AutoRestoreReportInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AutoRestoreSource(
                            value.source,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBoolean(value.success, $.BER),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encodeSetOf<ManagementExtension>(
                                  () => _encode_ManagementExtension,
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoRestoreReportInfo(value, elGetter);
}


/* eslint-enable */
