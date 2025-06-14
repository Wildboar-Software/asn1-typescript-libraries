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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    DistributedSoftware,
    _decode_DistributedSoftware,
    _encode_DistributedSoftware,
} from '../SWMF/DistributedSoftware.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/* START_OF_SYMBOL_DEFINITION InstallInfo */
/**
 * @summary InstallInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InstallInfo ::= SEQUENCE {
 *   targetSoftware  SET OF DistributedSoftware,
 *   installInfo     SET OF ManagementExtension
 * }
 * ```
 *
 * @class
 */
export class InstallInfo {
    constructor(
        /**
         * @summary `targetSoftware`.
         * @public
         * @readonly
         */
        readonly targetSoftware: DistributedSoftware[],
        /**
         * @summary `installInfo`.
         * @public
         * @readonly
         */
        readonly installInfo: ManagementExtension[]
    ) {}

    /**
     * @summary Restructures an object into a InstallInfo
     * @description
     *
     * This takes an `object` and converts it to a `InstallInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InstallInfo`.
     * @returns {InstallInfo}
     */
    public static _from_object(
        _o: { [_K in keyof InstallInfo]: InstallInfo[_K] }
    ): InstallInfo {
        return new InstallInfo(_o.targetSoftware, _o.installInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION InstallInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InstallInfo */
/**
 * @summary The Leading Root Component Types of InstallInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InstallInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'targetSoftware',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'installInfo',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InstallInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InstallInfo */
/**
 * @summary The Trailing Root Component Types of InstallInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InstallInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InstallInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InstallInfo */
/**
 * @summary The Extension Addition Component Types of InstallInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InstallInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InstallInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InstallInfo */
let _cached_decoder_for_InstallInfo: $.ASN1Decoder<InstallInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InstallInfo */

/* START_OF_SYMBOL_DEFINITION _decode_InstallInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) InstallInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InstallInfo} The decoded data structure.
 */
export function _decode_InstallInfo(el: _Element) {
    if (!_cached_decoder_for_InstallInfo) {
        _cached_decoder_for_InstallInfo = function (el: _Element): InstallInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'InstallInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'targetSoftware';
            sequence[1].name = 'installInfo';
            let targetSoftware!: DistributedSoftware[];
            let installInfo!: ManagementExtension[];
            targetSoftware = $._decodeSetOf<DistributedSoftware>(
                () => _decode_DistributedSoftware
            )(sequence[0]);
            installInfo = $._decodeSetOf<ManagementExtension>(
                () => _decode_ManagementExtension
            )(sequence[1]);
            return new InstallInfo(targetSoftware, installInfo);
        };
    }
    return _cached_decoder_for_InstallInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InstallInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InstallInfo */
let _cached_encoder_for_InstallInfo: $.ASN1Encoder<InstallInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InstallInfo */

/* START_OF_SYMBOL_DEFINITION _encode_InstallInfo */
/**
 * @summary Encodes a(n) InstallInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InstallInfo, encoded as an ASN.1 Element.
 */
export function _encode_InstallInfo(
    value: InstallInfo,
    elGetter: $.ASN1Encoder<InstallInfo>
) {
    if (!_cached_encoder_for_InstallInfo) {
        _cached_encoder_for_InstallInfo = function (
            value: InstallInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSetOf<DistributedSoftware>(
                            () => _encode_DistributedSoftware,
                            $.BER
                        )(value.targetSoftware, $.BER),
                        /* REQUIRED   */ $._encodeSetOf<ManagementExtension>(
                            () => _encode_ManagementExtension,
                            $.BER
                        )(value.installInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InstallInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InstallInfo */

/* eslint-enable */
