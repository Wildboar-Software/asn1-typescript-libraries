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
 * @summary Condition
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Condition ::= SEQUENCE {
 *   id     CONDITION.&id({Conditions}),
 *   value  CONDITION.&Type({Conditions}{@id})
 * }
 * ```
 *
 */
export class Condition {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element
    ) {}

    /**
     * @summary Restructures an object into a Condition
     * @description
     *
     * This takes an `object` and converts it to a `Condition`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Condition`.
     * @returns {Condition}
     */
    public static _from_object(
        _o: { [_K in keyof Condition]: Condition[_K] }
    ): Condition {
        return new Condition(_o.id, _o.value);
    }
}


/**
 * @summary The Leading Root Component Types of Condition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Condition: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'id',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'value',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of Condition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Condition: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Condition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Condition: $.ComponentSpec[] = [];


let _cached_decoder_for_Condition: $.ASN1Decoder<Condition> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Condition
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Condition} The decoded data structure.
 */
export function _decode_Condition(el: _Element): Condition {
    if (!_cached_decoder_for_Condition) {
        _cached_decoder_for_Condition = function (el: _Element): Condition {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Condition contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'id';
            sequence[1].name = 'value';
            let id!: OBJECT_IDENTIFIER;
            let value!: _Element;
            id = $._decodeObjectIdentifier(sequence[0]);
            value = $._decodeAny(sequence[1]);
            return new Condition(id, value);
        };
    }
    return _cached_decoder_for_Condition(el);
}


let _cached_encoder_for_Condition: $.ASN1Encoder<Condition> | null = null;


/**
 * @summary Encodes a(n) Condition into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Condition, encoded as an ASN.1 Element.
 */
export function _encode_Condition(
    value: Condition,
    elGetter: $.ASN1Encoder<Condition>
): _Element {
    if (!_cached_encoder_for_Condition) {
        _cached_encoder_for_Condition = function (
            value: Condition        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.id,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Condition(value, elGetter);
}


/* eslint-enable */
