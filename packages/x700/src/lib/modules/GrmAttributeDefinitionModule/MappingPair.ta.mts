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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RelationshipOperation,
    _decode_RelationshipOperation,
    _encode_RelationshipOperation,
} from '../GrmAttributeDefinitionModule/RelationshipOperation.ta.mjs';
import {
    MapsTo,
    _decode_MapsTo,
    _encode_MapsTo,
} from '../GrmAttributeDefinitionModule/MapsTo.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MappingPair */
/**
 * @summary MappingPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingPair ::= SEQUENCE {
 *   relationshipOperation  RelationshipOperation,
 *   mapsTo                 MapsTo
 * }
 * ```
 *
 * @class
 */
export class MappingPair {
    constructor(
        /**
         * @summary `relationshipOperation`.
         * @public
         * @readonly
         */
        readonly relationshipOperation: RelationshipOperation,
        /**
         * @summary `mapsTo`.
         * @public
         * @readonly
         */
        readonly mapsTo: MapsTo
    ) {}

    /**
     * @summary Restructures an object into a MappingPair
     * @description
     *
     * This takes an `object` and converts it to a `MappingPair`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MappingPair`.
     * @returns {MappingPair}
     */
    public static _from_object(
        _o: { [_K in keyof MappingPair]: MappingPair[_K] }
    ): MappingPair {
        return new MappingPair(_o.relationshipOperation, _o.mapsTo);
    }
}
/* END_OF_SYMBOL_DEFINITION MappingPair */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MappingPair */
/**
 * @summary The Leading Root Component Types of MappingPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MappingPair: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'relationshipOperation',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mapsTo',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MappingPair */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MappingPair */
/**
 * @summary The Trailing Root Component Types of MappingPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MappingPair: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MappingPair */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MappingPair */
/**
 * @summary The Extension Addition Component Types of MappingPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MappingPair: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MappingPair */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MappingPair */
let _cached_decoder_for_MappingPair: $.ASN1Decoder<MappingPair> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MappingPair */

/* START_OF_SYMBOL_DEFINITION _decode_MappingPair */
/**
 * @summary Decodes an ASN.1 element into a(n) MappingPair
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MappingPair} The decoded data structure.
 */
export function _decode_MappingPair(el: _Element) {
    if (!_cached_decoder_for_MappingPair) {
        _cached_decoder_for_MappingPair = function (el: _Element): MappingPair {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'MappingPair contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'relationshipOperation';
            sequence[1].name = 'mapsTo';
            let relationshipOperation!: RelationshipOperation;
            let mapsTo!: MapsTo;
            relationshipOperation = _decode_RelationshipOperation(sequence[0]);
            mapsTo = _decode_MapsTo(sequence[1]);
            return new MappingPair(relationshipOperation, mapsTo);
        };
    }
    return _cached_decoder_for_MappingPair(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MappingPair */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MappingPair */
let _cached_encoder_for_MappingPair: $.ASN1Encoder<MappingPair> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MappingPair */

/* START_OF_SYMBOL_DEFINITION _encode_MappingPair */
/**
 * @summary Encodes a(n) MappingPair into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MappingPair, encoded as an ASN.1 Element.
 */
export function _encode_MappingPair(
    value: MappingPair,
    elGetter: $.ASN1Encoder<MappingPair>
) {
    if (!_cached_encoder_for_MappingPair) {
        _cached_encoder_for_MappingPair = function (
            value: MappingPair        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RelationshipOperation(
                            value.relationshipOperation,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MapsTo(value.mapsTo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MappingPair(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MappingPair */

/* eslint-enable */
