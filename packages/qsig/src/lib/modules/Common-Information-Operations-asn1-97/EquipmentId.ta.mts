/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type IA5String,
    type OPTIONAL,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EquipmentId
 * @description
 *
 * Identity of equipment involved in the call, for another user or PINX
 * (ECMA-251 §6.3.1). All three elements are optional. Network-wide
 * uniqueness is outside the scope of ECMA-251. The standard does not assign
 * distinct roles to nodeId, groupId, and unitId beyond those names.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentId ::= SEQUENCE {
 *     nodeId [1] IMPLICIT IA5String (SIZE(1..10)) OPTIONAL,
 *     groupId [2] IMPLICIT IA5String (SIZE(1..10)) OPTIONAL,
 *     unitId [3] IMPLICIT IA5String (SIZE(1..10)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EquipmentId {
    /**
     * @summary `nodeId`.
     * @description
     *
     * ECMA-251 §6.3.1 names this element and does not distinguish it from
     * the other EquipmentId elements. Length 1..10. Network-wide uniqueness
     * is outside the scope of the standard.
     * @public
     * @readonly
     */
    readonly nodeId: OPTIONAL<IA5String>;
    /**
     * @summary `groupId`.
     * @description
     *
     * ECMA-251 §6.3.1 names this element and does not distinguish it from
     * the other EquipmentId elements. Length 1..10. Network-wide uniqueness
     * is outside the scope of the standard.
     * @public
     * @readonly
     */
    readonly groupId: OPTIONAL<IA5String>;
    /**
     * @summary `unitId`.
     * @description
     *
     * ECMA-251 §6.3.1 names this element and does not distinguish it from
     * the other EquipmentId elements. Length 1..10. Network-wide uniqueness
     * is outside the scope of the standard.
     * @public
     * @readonly
     */
    readonly unitId: OPTIONAL<IA5String>;

    constructor (
        nodeId?: OPTIONAL<IA5String>,
        groupId?: OPTIONAL<IA5String>,
        unitId?: OPTIONAL<IA5String>
    ) {
        this.nodeId = nodeId;
        this.groupId = groupId;
        this.unitId = unitId;
    
        if (nodeId !== undefined && (nodeId.length < 1 || nodeId.length > 10)) {
            throw new ASN1SizeError("EquipmentId.nodeId violates SIZE constraint");
        }
        if (groupId !== undefined && (groupId.length < 1 || groupId.length > 10)) {
            throw new ASN1SizeError("EquipmentId.groupId violates SIZE constraint");
        }
        if (unitId !== undefined && (unitId.length < 1 || unitId.length > 10)) {
            throw new ASN1SizeError("EquipmentId.unitId violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EquipmentId
     * @description
     * 
     * This takes an `object` and converts it to a `EquipmentId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EquipmentId`.
     * @returns {EquipmentId}
     */
    public static _from_object (_o: { [_K in keyof (EquipmentId)]: (EquipmentId)[_K] }): EquipmentId {
        return new EquipmentId(_o.nodeId, _o.groupId, _o.unitId);
    }

}

/**
 * @summary The Leading Root Component Types of EquipmentId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EquipmentId: $.ComponentSpec[] = [
    new $.ComponentSpec("nodeId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("groupId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("unitId", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EquipmentId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EquipmentId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EquipmentId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EquipmentId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EquipmentId: $.ASN1Decoder<EquipmentId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EquipmentId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EquipmentId (el: _Element): EquipmentId {
    if (!_cached_decoder_for_EquipmentId) { _cached_decoder_for_EquipmentId = function (el: _Element): EquipmentId {
    let nodeId: OPTIONAL<IA5String>;
    let groupId: OPTIONAL<IA5String>;
    let unitId: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "nodeId": (_el: _Element): void => { nodeId = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "groupId": (_el: _Element): void => { groupId = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "unitId": (_el: _Element): void => { unitId = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EquipmentId,
        _extension_additions_list_spec_for_EquipmentId,
        _root_component_type_list_2_spec_for_EquipmentId,
        undefined,
    );
    return new EquipmentId(
        nodeId,
        groupId,
        unitId
    );
}; }
    return _cached_decoder_for_EquipmentId(el);
}

let _cached_encoder_for_EquipmentId: $.ASN1Encoder<EquipmentId> | null = null;

/**
 * @summary Encodes a(n) EquipmentId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquipmentId, encoded as an ASN.1 Element.
 */
export
function _encode_EquipmentId (value: EquipmentId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EquipmentId) { _cached_encoder_for_EquipmentId = function (value: EquipmentId, _elGetter: $.ASN1Encoder<EquipmentId>): _Element {
    const _components: _Element[] = [];
    if (value.nodeId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.nodeId, $.BER));
    }
    if (value.groupId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.groupId, $.BER));
    }
    if (value.unitId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER)(value.unitId, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EquipmentId(value, elGetter);
}

/* eslint-enable */
