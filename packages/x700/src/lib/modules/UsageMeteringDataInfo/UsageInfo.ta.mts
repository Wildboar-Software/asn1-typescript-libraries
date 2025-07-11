/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
/**
 * @summary UsageInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageInfo ::= SEQUENCE {
 *   serviceType  UMF-USAGE.&id({UsageInfoSet}),
 *   usageData    UMF-USAGE.&Value({UsageInfoSet}{@serviceType})
 * }
 * ```
 *
 */
export class UsageInfo {
    constructor(
        /**
         * @summary `serviceType`.
         * @public
         * @readonly
         */
        readonly serviceType: OBJECT_IDENTIFIER,
        /**
         * @summary `usageData`.
         * @public
         * @readonly
         */
        readonly usageData: _Element
    ) {}

    /**
     * @summary Restructures an object into a UsageInfo
     * @description
     *
     * This takes an `object` and converts it to a `UsageInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UsageInfo`.
     * @returns {UsageInfo}
     */
    public static _from_object(
        _o: { [_K in keyof UsageInfo]: UsageInfo[_K] }
    ): UsageInfo {
        return new UsageInfo(_o.serviceType, _o.usageData);
    }
}

/**
 * @summary The Leading Root Component Types of UsageInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UsageInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'serviceType',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec('usageData', false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of UsageInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UsageInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UsageInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UsageInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_UsageInfo: $.ASN1Decoder<UsageInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UsageInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsageInfo} The decoded data structure.
 */
export function _decode_UsageInfo(el: _Element): UsageInfo {
    if (!_cached_decoder_for_UsageInfo) {
        _cached_decoder_for_UsageInfo = function (el: _Element): UsageInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'UsageInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'serviceType';
            sequence[1].name = 'usageData';
            let serviceType!: OBJECT_IDENTIFIER;
            let usageData!: _Element;
            serviceType = $._decodeObjectIdentifier(sequence[0]);
            usageData = $._decodeAny(sequence[1]);
            return new UsageInfo(serviceType, usageData);
        };
    }
    return _cached_decoder_for_UsageInfo(el);
}

let _cached_encoder_for_UsageInfo: $.ASN1Encoder<UsageInfo> | null = null;

/**
 * @summary Encodes a(n) UsageInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsageInfo, encoded as an ASN.1 Element.
 */
export function _encode_UsageInfo(
    value: UsageInfo,
    elGetter: $.ASN1Encoder<UsageInfo>
): _Element {
    if (!_cached_encoder_for_UsageInfo) {
        _cached_encoder_for_UsageInfo = function (
            value: UsageInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.serviceType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.usageData, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UsageInfo(value, elGetter);
}


/* eslint-enable */
