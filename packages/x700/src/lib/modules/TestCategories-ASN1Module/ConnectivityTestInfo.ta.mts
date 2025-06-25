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
    ConnectivityTestInfo_timeoutPeriod,
    _decode_ConnectivityTestInfo_timeoutPeriod,
    _encode_ConnectivityTestInfo_timeoutPeriod,
} from '../TestCategories-ASN1Module/ConnectivityTestInfo-timeoutPeriod.ta.mjs';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/**
 * @summary ConnectivityTestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityTestInfo ::= SEQUENCE {
 *   timeoutPeriod
 *     [0] EXPLICIT CHOICE {timeUnits    Timespec,
 *                          attributeId  AttributeId},
 *   effectiveTime  [1]  Timespec
 * }
 * ```
 *
 * @class
 */
export class ConnectivityTestInfo {
    constructor(
        /**
         * @summary `timeoutPeriod`.
         * @public
         * @readonly
         */
        readonly timeoutPeriod: ConnectivityTestInfo_timeoutPeriod,
        /**
         * @summary `effectiveTime`.
         * @public
         * @readonly
         */
        readonly effectiveTime: Timespec
    ) {}

    /**
     * @summary Restructures an object into a ConnectivityTestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ConnectivityTestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectivityTestInfo`.
     * @returns {ConnectivityTestInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ConnectivityTestInfo]: ConnectivityTestInfo[_K] }
    ): ConnectivityTestInfo {
        return new ConnectivityTestInfo(_o.timeoutPeriod, _o.effectiveTime);
    }
}

/**
 * @summary The Leading Root Component Types of ConnectivityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectivityTestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'timeoutPeriod',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'effectiveTime',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ConnectivityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectivityTestInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ConnectivityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectivityTestInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ConnectivityTestInfo: $.ASN1Decoder<ConnectivityTestInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityTestInfo} The decoded data structure.
 */
export function _decode_ConnectivityTestInfo(el: _Element): ConnectivityTestInfo {
    if (!_cached_decoder_for_ConnectivityTestInfo) {
        _cached_decoder_for_ConnectivityTestInfo = function (
            el: _Element
        ): ConnectivityTestInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ConnectivityTestInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'timeoutPeriod';
            sequence[1].name = 'effectiveTime';
            let timeoutPeriod!: ConnectivityTestInfo_timeoutPeriod;
            let effectiveTime!: Timespec;
            timeoutPeriod = $._decode_explicit<ConnectivityTestInfo_timeoutPeriod>(
                () => _decode_ConnectivityTestInfo_timeoutPeriod
            )(sequence[0]);
            effectiveTime = $._decode_explicit<Timespec>(
                () => _decode_Timespec
            )(sequence[1]);
            return new ConnectivityTestInfo(timeoutPeriod, effectiveTime);
        };
    }
    return _cached_decoder_for_ConnectivityTestInfo(el);
}

let _cached_encoder_for_ConnectivityTestInfo: $.ASN1Encoder<ConnectivityTestInfo> | null = null;

/**
 * @summary Encodes a(n) ConnectivityTestInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityTestInfo(
    value: ConnectivityTestInfo,
    elGetter: $.ASN1Encoder<ConnectivityTestInfo>
): _Element {
    if (!_cached_encoder_for_ConnectivityTestInfo) {
        _cached_encoder_for_ConnectivityTestInfo = function (
            value: ConnectivityTestInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ConnectivityTestInfo_timeoutPeriod,
                            $.BER
                        )(value.timeoutPeriod, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Timespec,
                            $.BER
                        )(value.effectiveTime, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectivityTestInfo(value, elGetter);
}


/* eslint-enable */
