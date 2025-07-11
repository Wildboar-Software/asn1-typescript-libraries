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
    Capacity,
    _decode_Capacity,
    _encode_Capacity,
} from '../M3100ASN1TypeModule2/Capacity.ta.mjs';

/**
 * @summary Capacities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Capacities ::= SEQUENCE {
 *   availableLinkCapacity     Capacity,
 *   maxProvisionableCapacity  Capacity,
 *   potentialLinkCapacity     Capacity,
 *   provisionedLinkCapacity   Capacity
 * }
 * ```
 *
 */
export class Capacities {
    constructor(
        /**
         * @summary `availableLinkCapacity`.
         * @public
         * @readonly
         */
        readonly availableLinkCapacity: Capacity,
        /**
         * @summary `maxProvisionableCapacity`.
         * @public
         * @readonly
         */
        readonly maxProvisionableCapacity: Capacity,
        /**
         * @summary `potentialLinkCapacity`.
         * @public
         * @readonly
         */
        readonly potentialLinkCapacity: Capacity,
        /**
         * @summary `provisionedLinkCapacity`.
         * @public
         * @readonly
         */
        readonly provisionedLinkCapacity: Capacity
    ) {}

    /**
     * @summary Restructures an object into a Capacities
     * @description
     *
     * This takes an `object` and converts it to a `Capacities`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Capacities`.
     * @returns {Capacities}
     */
    public static _from_object(
        _o: { [_K in keyof Capacities]: Capacities[_K] }
    ): Capacities {
        return new Capacities(
            _o.availableLinkCapacity,
            _o.maxProvisionableCapacity,
            _o.potentialLinkCapacity,
            _o.provisionedLinkCapacity
        );
    }
}


/**
 * @summary The Leading Root Component Types of Capacities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Capacities: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'availableLinkCapacity',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'maxProvisionableCapacity',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'potentialLinkCapacity',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'provisionedLinkCapacity',
        false,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of Capacities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Capacities: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Capacities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Capacities: $.ComponentSpec[] = [];


let _cached_decoder_for_Capacities: $.ASN1Decoder<Capacities> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Capacities
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Capacities} The decoded data structure.
 */
export function _decode_Capacities(el: _Element): Capacities {
    if (!_cached_decoder_for_Capacities) {
        _cached_decoder_for_Capacities = function (el: _Element): Capacities {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    'Capacities contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'availableLinkCapacity';
            sequence[1].name = 'maxProvisionableCapacity';
            sequence[2].name = 'potentialLinkCapacity';
            sequence[3].name = 'provisionedLinkCapacity';
            let availableLinkCapacity!: Capacity;
            let maxProvisionableCapacity!: Capacity;
            let potentialLinkCapacity!: Capacity;
            let provisionedLinkCapacity!: Capacity;
            availableLinkCapacity = _decode_Capacity(sequence[0]);
            maxProvisionableCapacity = _decode_Capacity(sequence[1]);
            potentialLinkCapacity = _decode_Capacity(sequence[2]);
            provisionedLinkCapacity = _decode_Capacity(sequence[3]);
            return new Capacities(
                availableLinkCapacity,
                maxProvisionableCapacity,
                potentialLinkCapacity,
                provisionedLinkCapacity
            );
        };
    }
    return _cached_decoder_for_Capacities(el);
}


let _cached_encoder_for_Capacities: $.ASN1Encoder<Capacities> | null = null;


/**
 * @summary Encodes a(n) Capacities into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capacities, encoded as an ASN.1 Element.
 */
export function _encode_Capacities(
    value: Capacities,
    elGetter: $.ASN1Encoder<Capacities>
): _Element {
    if (!_cached_encoder_for_Capacities) {
        _cached_encoder_for_Capacities = function (
            value: Capacities        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Capacity(
                            value.availableLinkCapacity,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Capacity(
                            value.maxProvisionableCapacity,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Capacity(
                            value.potentialLinkCapacity,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Capacity(
                            value.provisionedLinkCapacity,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Capacities(value, elGetter);
}


/* eslint-enable */
