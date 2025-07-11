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
 * @summary Bandwidth_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bandwidth-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class Bandwidth_Item {
    constructor(
        /**
         * @summary `ingress`.
         * @public
         * @readonly
         */
        readonly ingress: INTEGER,
        /**
         * @summary `egress`.
         * @public
         * @readonly
         */
        readonly egress: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a Bandwidth_Item
     * @description
     *
     * This takes an `object` and converts it to a `Bandwidth_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Bandwidth_Item`.
     * @returns {Bandwidth_Item}
     */
    public static _from_object(
        _o: { [_K in keyof Bandwidth_Item]: Bandwidth_Item[_K] }
    ): Bandwidth_Item {
        return new Bandwidth_Item(_o.ingress, _o.egress);
    }
}


/**
 * @summary The Leading Root Component Types of Bandwidth_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Bandwidth_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'ingress',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'egress',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of Bandwidth_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Bandwidth_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Bandwidth_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Bandwidth_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_Bandwidth_Item: $.ASN1Decoder<Bandwidth_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Bandwidth_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bandwidth_Item} The decoded data structure.
 */
export function _decode_Bandwidth_Item(el: _Element): Bandwidth_Item {
    if (!_cached_decoder_for_Bandwidth_Item) {
        _cached_decoder_for_Bandwidth_Item = function (
            el: _Element
        ): Bandwidth_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Bandwidth-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'ingress';
            sequence[1].name = 'egress';
            let ingress!: INTEGER;
            let egress!: INTEGER;
            ingress = $._decodeInteger(sequence[0]);
            egress = $._decodeInteger(sequence[1]);
            return new Bandwidth_Item(ingress, egress);
        };
    }
    return _cached_decoder_for_Bandwidth_Item(el);
}


let _cached_encoder_for_Bandwidth_Item: $.ASN1Encoder<Bandwidth_Item> | null = null;


/**
 * @summary Encodes a(n) Bandwidth_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bandwidth_Item, encoded as an ASN.1 Element.
 */
export function _encode_Bandwidth_Item(
    value: Bandwidth_Item,
    elGetter: $.ASN1Encoder<Bandwidth_Item>
): _Element {
    if (!_cached_encoder_for_Bandwidth_Item) {
        _cached_encoder_for_Bandwidth_Item = function (
            value: Bandwidth_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.ingress, $.BER),
                        /* REQUIRED   */ $._encodeInteger(value.egress, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Bandwidth_Item(value, elGetter);
}


/* eslint-enable */
