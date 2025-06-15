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
    SystemsMgtOperation,
    _decode_SystemsMgtOperation,
    _encode_SystemsMgtOperation,
} from '../GrmAttributeDefinitionModule/SystemsMgtOperation.ta.mjs';
import {
    RoleOrRelationshipObject,
    _decode_RoleOrRelationshipObject,
    _encode_RoleOrRelationshipObject,
} from '../GrmAttributeDefinitionModule/RoleOrRelationshipObject.ta.mjs';
/**
 * @summary MapsToPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MapsToPair ::= SEQUENCE {
 *   systemsMgtOperation       SystemsMgtOperation,
 *   roleOrRelationshipObject  RoleOrRelationshipObject
 * }
 * ```
 *
 * @class
 */
export class MapsToPair {
    constructor(
        /**
         * @summary `systemsMgtOperation`.
         * @public
         * @readonly
         */
        readonly systemsMgtOperation: SystemsMgtOperation,
        /**
         * @summary `roleOrRelationshipObject`.
         * @public
         * @readonly
         */
        readonly roleOrRelationshipObject: RoleOrRelationshipObject
    ) {}

    /**
     * @summary Restructures an object into a MapsToPair
     * @description
     *
     * This takes an `object` and converts it to a `MapsToPair`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MapsToPair`.
     * @returns {MapsToPair}
     */
    public static _from_object(
        _o: { [_K in keyof MapsToPair]: MapsToPair[_K] }
    ): MapsToPair {
        return new MapsToPair(
            _o.systemsMgtOperation,
            _o.roleOrRelationshipObject
        );
    }
}

/**
 * @summary The Leading Root Component Types of MapsToPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MapsToPair: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'systemsMgtOperation',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'roleOrRelationshipObject',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of MapsToPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MapsToPair: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MapsToPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MapsToPair: $.ComponentSpec[] = [];

let _cached_decoder_for_MapsToPair: $.ASN1Decoder<MapsToPair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MapsToPair
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MapsToPair} The decoded data structure.
 */
export function _decode_MapsToPair(el: _Element) {
    if (!_cached_decoder_for_MapsToPair) {
        _cached_decoder_for_MapsToPair = function (el: _Element): MapsToPair {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'MapsToPair contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'systemsMgtOperation';
            sequence[1].name = 'roleOrRelationshipObject';
            let systemsMgtOperation!: SystemsMgtOperation;
            let roleOrRelationshipObject!: RoleOrRelationshipObject;
            systemsMgtOperation = _decode_SystemsMgtOperation(sequence[0]);
            roleOrRelationshipObject = _decode_RoleOrRelationshipObject(
                sequence[1]
            );
            return new MapsToPair(
                systemsMgtOperation,
                roleOrRelationshipObject
            );
        };
    }
    return _cached_decoder_for_MapsToPair(el);
}

let _cached_encoder_for_MapsToPair: $.ASN1Encoder<MapsToPair> | null = null;

/**
 * @summary Encodes a(n) MapsToPair into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MapsToPair, encoded as an ASN.1 Element.
 */
export function _encode_MapsToPair(
    value: MapsToPair,
    elGetter: $.ASN1Encoder<MapsToPair>
) {
    if (!_cached_encoder_for_MapsToPair) {
        _cached_encoder_for_MapsToPair = function (
            value: MapsToPair        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SystemsMgtOperation(
                            value.systemsMgtOperation,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_RoleOrRelationshipObject(
                            value.roleOrRelationshipObject,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MapsToPair(value, elGetter);
}


/* eslint-enable */
