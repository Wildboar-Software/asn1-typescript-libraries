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
 * @summary Identification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identification ::= SEQUENCE {
 *   category       IDENTIFICATION.&category({Categories}),
 *   identification IDENTIFICATION.&Identification({Categories}{@category}) }
 * ```
 *
 * @class
 */
export class Identification {
    constructor(
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OBJECT_IDENTIFIER,
        /**
         * @summary `identification`.
         * @public
         * @readonly
         */
        readonly identification: _Element
    ) {}

    /**
     * @summary Restructures an object into a Identification
     * @description
     *
     * This takes an `object` and converts it to a `Identification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Identification`.
     * @returns {Identification}
     */
    public static _from_object(
        _o: { [_K in keyof Identification]: Identification[_K] }
    ): Identification {
        return new Identification(_o.category, _o.identification);
    }
}


/**
 * @summary The Leading Root Component Types of Identification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Identification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'category',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'identification',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of Identification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Identification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Identification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Identification: $.ComponentSpec[] = [];


let _cached_decoder_for_Identification: $.ASN1Decoder<Identification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Identification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identification} The decoded data structure.
 */
export function _decode_Identification(el: _Element): Identification {
    if (!_cached_decoder_for_Identification) {
        _cached_decoder_for_Identification = function (
            el: _Element
        ): Identification {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Identification contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'category';
            sequence[1].name = 'identification';
            let category!: OBJECT_IDENTIFIER;
            let identification!: _Element;
            category = $._decodeObjectIdentifier(sequence[0]);
            identification = $._decodeAny(sequence[1]);
            return new Identification(category, identification);
        };
    }
    return _cached_decoder_for_Identification(el);
}


let _cached_encoder_for_Identification: $.ASN1Encoder<Identification> | null = null;


/**
 * @summary Encodes a(n) Identification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identification, encoded as an ASN.1 Element.
 */
export function _encode_Identification(
    value: Identification,
    elGetter: $.ASN1Encoder<Identification>
): _Element {
    if (!_cached_encoder_for_Identification) {
        _cached_encoder_for_Identification = function (
            value: Identification        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.category,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.identification,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Identification(value, elGetter);
}


/* eslint-enable */
