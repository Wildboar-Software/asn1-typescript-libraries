/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
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
    RelationshipInstance,
    _decode_RelationshipInstance,
    _encode_RelationshipInstance,
} from '../ChangeOverASN1Productions/RelationshipInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NoSuchRelationship */
/**
 * @summary NoSuchRelationship
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchRelationship ::= SEQUENCE {
 *   relationshipClass     OBJECT IDENTIFIER,
 *   relationshipBinding   OBJECT IDENTIFIER OPTIONAL,
 *   relationshipInstance  [0]  RelationshipInstance OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NoSuchRelationship {
    constructor(
        /**
         * @summary `relationshipClass`.
         * @public
         * @readonly
         */
        readonly relationshipClass: OBJECT_IDENTIFIER,
        /**
         * @summary `relationshipBinding`.
         * @public
         * @readonly
         */
        readonly relationshipBinding: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `relationshipInstance`.
         * @public
         * @readonly
         */
        readonly relationshipInstance: OPTIONAL<RelationshipInstance>
    ) {}

    /**
     * @summary Restructures an object into a NoSuchRelationship
     * @description
     *
     * This takes an `object` and converts it to a `NoSuchRelationship`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NoSuchRelationship`.
     * @returns {NoSuchRelationship}
     */
    public static _from_object(
        _o: { [_K in keyof NoSuchRelationship]: NoSuchRelationship[_K] }
    ): NoSuchRelationship {
        return new NoSuchRelationship(
            _o.relationshipClass,
            _o.relationshipBinding,
            _o.relationshipInstance
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NoSuchRelationship */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchRelationship */
/**
 * @summary The Leading Root Component Types of NoSuchRelationship
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoSuchRelationship: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'relationshipClass',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'relationshipBinding',
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'relationshipInstance',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchRelationship */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchRelationship */
/**
 * @summary The Trailing Root Component Types of NoSuchRelationship
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoSuchRelationship: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchRelationship */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchRelationship */
/**
 * @summary The Extension Addition Component Types of NoSuchRelationship
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoSuchRelationship: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchRelationship */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchRelationship */
let _cached_decoder_for_NoSuchRelationship: $.ASN1Decoder<NoSuchRelationship> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchRelationship */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchRelationship */
/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchRelationship
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchRelationship} The decoded data structure.
 */
export function _decode_NoSuchRelationship(el: _Element) {
    if (!_cached_decoder_for_NoSuchRelationship) {
        _cached_decoder_for_NoSuchRelationship = function (
            el: _Element
        ): NoSuchRelationship {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let relationshipClass!: OBJECT_IDENTIFIER;
            let relationshipBinding: OPTIONAL<OBJECT_IDENTIFIER>;
            let relationshipInstance: OPTIONAL<RelationshipInstance>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                relationshipClass: (_el: _Element): void => {
                    relationshipClass = $._decodeObjectIdentifier(_el);
                },
                relationshipBinding: (_el: _Element): void => {
                    relationshipBinding = $._decodeObjectIdentifier(_el);
                },
                relationshipInstance: (_el: _Element): void => {
                    relationshipInstance = $._decode_explicit<RelationshipInstance>(
                        () => _decode_RelationshipInstance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NoSuchRelationship,
                _extension_additions_list_spec_for_NoSuchRelationship,
                _root_component_type_list_2_spec_for_NoSuchRelationship,
                undefined
            );
            return new NoSuchRelationship /* SEQUENCE_CONSTRUCTOR_CALL */(
                relationshipClass,
                relationshipBinding,
                relationshipInstance
            );
        };
    }
    return _cached_decoder_for_NoSuchRelationship(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchRelationship */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchRelationship */
let _cached_encoder_for_NoSuchRelationship: $.ASN1Encoder<NoSuchRelationship> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchRelationship */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchRelationship */
/**
 * @summary Encodes a(n) NoSuchRelationship into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchRelationship, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchRelationship(
    value: NoSuchRelationship,
    elGetter: $.ASN1Encoder<NoSuchRelationship>
) {
    if (!_cached_encoder_for_NoSuchRelationship) {
        _cached_encoder_for_NoSuchRelationship = function (
            value: NoSuchRelationship        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.relationshipClass,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.relationshipBinding === undefined
                            ? undefined
                            : $._encodeObjectIdentifier(
                                  value.relationshipBinding,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.relationshipInstance ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RelationshipInstance,
                                  $.BER
                              )(value.relationshipInstance, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NoSuchRelationship(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchRelationship */

/* eslint-enable */
