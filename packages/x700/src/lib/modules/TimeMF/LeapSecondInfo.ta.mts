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
    LeapIndication,
    _enum_for_LeapIndication,
    _decode_LeapIndication,
    _encode_LeapIndication,
} from '../TimeMF/LeapIndication.ta.mjs';
import {
    DateOfLeap,
    _decode_DateOfLeap,
    _encode_DateOfLeap,
} from '../TimeMF/DateOfLeap.ta.mjs';
/**
 * @summary LeapSecondInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LeapSecondInfo ::= SEQUENCE {
 *   leapIndication  LeapIndication,
 *   dateOfLeap      DateOfLeap
 * }
 * ```
 *
 * @class
 */
export class LeapSecondInfo {
    constructor(
        /**
         * @summary `leapIndication`.
         * @public
         * @readonly
         */
        readonly leapIndication: LeapIndication,
        /**
         * @summary `dateOfLeap`.
         * @public
         * @readonly
         */
        readonly dateOfLeap: DateOfLeap
    ) {}

    /**
     * @summary Restructures an object into a LeapSecondInfo
     * @description
     *
     * This takes an `object` and converts it to a `LeapSecondInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LeapSecondInfo`.
     * @returns {LeapSecondInfo}
     */
    public static _from_object(
        _o: { [_K in keyof LeapSecondInfo]: LeapSecondInfo[_K] }
    ): LeapSecondInfo {
        return new LeapSecondInfo(_o.leapIndication, _o.dateOfLeap);
    }

    /**
     * @summary The enum used as the type of the component `leapIndication`
     * @public
     * @static
     */

    public static _enum_for_leapIndication = _enum_for_LeapIndication;
}

/**
 * @summary The Leading Root Component Types of LeapSecondInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LeapSecondInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'leapIndication',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'dateOfLeap',
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
];

/**
 * @summary The Trailing Root Component Types of LeapSecondInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LeapSecondInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of LeapSecondInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LeapSecondInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_LeapSecondInfo: $.ASN1Decoder<LeapSecondInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LeapSecondInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LeapSecondInfo} The decoded data structure.
 */
export function _decode_LeapSecondInfo(el: _Element): LeapSecondInfo {
    if (!_cached_decoder_for_LeapSecondInfo) {
        _cached_decoder_for_LeapSecondInfo = function (
            el: _Element
        ): LeapSecondInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'LeapSecondInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'leapIndication';
            sequence[1].name = 'dateOfLeap';
            let leapIndication!: LeapIndication;
            let dateOfLeap!: DateOfLeap;
            leapIndication = _decode_LeapIndication(sequence[0]);
            dateOfLeap = _decode_DateOfLeap(sequence[1]);
            return new LeapSecondInfo(leapIndication, dateOfLeap);
        };
    }
    return _cached_decoder_for_LeapSecondInfo(el);
}

let _cached_encoder_for_LeapSecondInfo: $.ASN1Encoder<LeapSecondInfo> | null = null;

/**
 * @summary Encodes a(n) LeapSecondInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LeapSecondInfo, encoded as an ASN.1 Element.
 */
export function _encode_LeapSecondInfo(
    value: LeapSecondInfo,
    elGetter: $.ASN1Encoder<LeapSecondInfo>
): _Element {
    if (!_cached_encoder_for_LeapSecondInfo) {
        _cached_encoder_for_LeapSecondInfo = function (
            value: LeapSecondInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_LeapIndication(
                            value.leapIndication,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_DateOfLeap(
                            value.dateOfLeap,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LeapSecondInfo(value, elGetter);
}


/* eslint-enable */
