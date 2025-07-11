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
    AttributeSel_attSelect,
    _decode_AttributeSel_attSelect,
    _encode_AttributeSel_attSelect,
} from '../Pbact-access/AttributeSel-attSelect.ta.mjs';

/**
 * @summary AttributeSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeSel ::= SEQUENCE {
 *   attSelect           CHOICE {
 *     allAttr        [0]  SEQUENCE {
 *       attrOper1      [0]  AttributeOperations OPTIONAL,
 *       ... },
 *     attributes     [1]  SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *       select              SEQUENCE SIZE (1..MAX) OF ATTRIBUTE.&id,
 *       attrOper2      [0]  AttributeOperations OPTIONAL,
 *       ... },
 *     ... },
 *   ... }
 * ```
 *
 */
export class AttributeSel {
    constructor(
        /**
         * @summary `attSelect`.
         * @public
         * @readonly
         */
        readonly attSelect: AttributeSel_attSelect,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeSel
     * @description
     *
     * This takes an `object` and converts it to a `AttributeSel`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeSel`.
     * @returns {AttributeSel}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeSel]: AttributeSel[_K] }
    ): AttributeSel {
        return new AttributeSel(_o.attSelect, _o._unrecognizedExtensionsList);
    }
}


/**
 * @summary The Leading Root Component Types of AttributeSel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeSel: $.ComponentSpec[] = [
    new $.ComponentSpec('attSelect', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of AttributeSel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeSel: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AttributeSel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeSel: $.ComponentSpec[] = [];


let _cached_decoder_for_AttributeSel: $.ASN1Decoder<AttributeSel> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSel} The decoded data structure.
 */
export function _decode_AttributeSel(el: _Element): AttributeSel {
    if (!_cached_decoder_for_AttributeSel) {
        _cached_decoder_for_AttributeSel = function (
            el: _Element
        ): AttributeSel {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    'AttributeSel contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attSelect';
            let attSelect!: AttributeSel_attSelect;
            attSelect = _decode_AttributeSel_attSelect(sequence[0]);
            return new AttributeSel(attSelect, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AttributeSel(el);
}


let _cached_encoder_for_AttributeSel: $.ASN1Encoder<AttributeSel> | null = null;


/**
 * @summary Encodes a(n) AttributeSel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSel, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSel(
    value: AttributeSel,
    elGetter: $.ASN1Encoder<AttributeSel>
): _Element {
    if (!_cached_encoder_for_AttributeSel) {
        _cached_encoder_for_AttributeSel = function (
            value: AttributeSel        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeSel_attSelect(
                                value.attSelect,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeSel(value, elGetter);
}


/* eslint-enable */
