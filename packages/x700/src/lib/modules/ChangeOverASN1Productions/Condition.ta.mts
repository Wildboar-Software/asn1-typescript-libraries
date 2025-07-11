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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip';
/**
 * @summary Condition
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Condition ::= SEQUENCE {object   ObjectInstance,
 *                         details  SET OF Attribute
 * }
 * ```
 *
 */
export class Condition {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: ObjectInstance,
        /**
         * @summary `details`.
         * @public
         * @readonly
         */
        readonly details: Attribute[]
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
        return new Condition(_o.object, _o.details);
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
    new $.ComponentSpec('object', false, $.hasAnyTag),
    new $.ComponentSpec(
        'details',
        false,
        $.hasTag(_TagClass.universal, 17)
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
            sequence[0].name = 'object';
            sequence[1].name = 'details';
            let object!: ObjectInstance;
            let details!: Attribute[];
            object = _decode_ObjectInstance(sequence[0]);
            details = $._decodeSetOf<Attribute>(() => _decode_Attribute)(
                sequence[1]
            );
            return new Condition(object, details);
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
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.object,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<Attribute>(
                            () => _encode_Attribute,
                            $.BER
                        )(value.details, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Condition(value, elGetter);
}


/* eslint-enable */
