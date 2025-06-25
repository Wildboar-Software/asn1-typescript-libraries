/* eslint-disable */
import {
    INTEGER,
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
 * @summary LockedInCondition
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LockedInCondition ::= SEQUENCE {
 *   settingWindowTime    [0]  INTEGER, -- number of seconds
 *   releasingWindowTime  [1]  INTEGER, -- number of seconds
 *   hitsCount            [2]  INTEGER
 * }
 * ```
 *
 * @class
 */
export class LockedInCondition {
    constructor(
        /**
         * @summary `settingWindowTime`.
         * @public
         * @readonly
         */
        readonly settingWindowTime: INTEGER,
        /**
         * @summary `releasingWindowTime`.
         * @public
         * @readonly
         */
        readonly releasingWindowTime: INTEGER,
        /**
         * @summary `hitsCount`.
         * @public
         * @readonly
         */
        readonly hitsCount: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a LockedInCondition
     * @description
     *
     * This takes an `object` and converts it to a `LockedInCondition`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LockedInCondition`.
     * @returns {LockedInCondition}
     */
    public static _from_object(
        _o: { [_K in keyof LockedInCondition]: LockedInCondition[_K] }
    ): LockedInCondition {
        return new LockedInCondition(
            _o.settingWindowTime,
            _o.releasingWindowTime,
            _o.hitsCount
        );
    }
}


/**
 * @summary The Leading Root Component Types of LockedInCondition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LockedInCondition: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'settingWindowTime',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'releasingWindowTime',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'hitsCount',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of LockedInCondition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LockedInCondition: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of LockedInCondition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LockedInCondition: $.ComponentSpec[] = [];


let _cached_decoder_for_LockedInCondition: $.ASN1Decoder<LockedInCondition> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LockedInCondition
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LockedInCondition} The decoded data structure.
 */
export function _decode_LockedInCondition(el: _Element): LockedInCondition {
    if (!_cached_decoder_for_LockedInCondition) {
        _cached_decoder_for_LockedInCondition = function (
            el: _Element
        ): LockedInCondition {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'LockedInCondition contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'settingWindowTime';
            sequence[1].name = 'releasingWindowTime';
            sequence[2].name = 'hitsCount';
            let settingWindowTime!: INTEGER;
            let releasingWindowTime!: INTEGER;
            let hitsCount!: INTEGER;
            settingWindowTime = $._decode_implicit<INTEGER>(
                () => $._decodeInteger
            )(sequence[0]);
            releasingWindowTime = $._decode_implicit<INTEGER>(
                () => $._decodeInteger
            )(sequence[1]);
            hitsCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[2]
            );
            return new LockedInCondition(
                settingWindowTime,
                releasingWindowTime,
                hitsCount
            );
        };
    }
    return _cached_decoder_for_LockedInCondition(el);
}


let _cached_encoder_for_LockedInCondition: $.ASN1Encoder<LockedInCondition> | null = null;


/**
 * @summary Encodes a(n) LockedInCondition into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LockedInCondition, encoded as an ASN.1 Element.
 */
export function _encode_LockedInCondition(
    value: LockedInCondition,
    elGetter: $.ASN1Encoder<LockedInCondition>
): _Element {
    if (!_cached_encoder_for_LockedInCondition) {
        _cached_encoder_for_LockedInCondition = function (
            value: LockedInCondition        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.settingWindowTime, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.releasingWindowTime, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => $._encodeInteger,
                            $.BER
                        )(value.hitsCount, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LockedInCondition(value, elGetter);
}


/* eslint-enable */
