/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CSAID, _decode_CSAID, _encode_CSAID } from "../IN-CS3-SSF-SCF-datatypes/CSAID.ta.mjs";
// export { CSAID, _decode_CSAID, _encode_CSAID } from "../IN-CS3-SSF-SCF-datatypes/CSAID.ta.mjs";
import { MoveCallSegmentsArg_callSegments_Item, _decode_MoveCallSegmentsArg_callSegments_Item, _encode_MoveCallSegmentsArg_callSegments_Item } from "../IN-CS3-SSF-SCF-ops-args/MoveCallSegmentsArg-callSegments-Item.ta.mjs";
// export { MoveCallSegmentsArg_callSegments_Item, _decode_MoveCallSegmentsArg_callSegments_Item, _encode_MoveCallSegmentsArg_callSegments_Item } from "../IN-CS3-SSF-SCF-ops-args/MoveCallSegmentsArg-callSegments-Item.ta.mjs";
import { MoveCallSegmentsArg_legs_Item, _decode_MoveCallSegmentsArg_legs_Item, _encode_MoveCallSegmentsArg_legs_Item } from "../IN-CS3-SSF-SCF-ops-args/MoveCallSegmentsArg-legs-Item.ta.mjs";
// export { MoveCallSegmentsArg_legs_Item, _decode_MoveCallSegmentsArg_legs_Item, _encode_MoveCallSegmentsArg_legs_Item } from "../IN-CS3-SSF-SCF-ops-args/MoveCallSegmentsArg-legs-Item.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary MoveCallSegmentsArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MoveCallSegmentsArg ::= SEQUENCE {
 *   targetCallSegmentAssociation  [0]  CSAID,
 *   callSegments
 *     [1]  SEQUENCE OF
 *            SEQUENCE {sourceCallSegment
 *                        [0]  CallSegmentID DEFAULT initialCallSegment,
 *                      newCallSegment     [1]  CallSegmentID,
 *                      ...},
 *   legs
 *     [2]  SEQUENCE OF
 *            SEQUENCE {sourceLeg  [0]  LegID,
 *                      newLeg     [1]  LegID,
 *                      ...},
 *   extensions                    [3]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class MoveCallSegmentsArg {
    /**
     * @summary `targetCallSegmentAssociation`.
     * @public
     * @readonly
     */
    readonly targetCallSegmentAssociation: CSAID;
    /**
     * @summary `callSegments`.
     * @public
     * @readonly
     */
    readonly callSegments: MoveCallSegmentsArg_callSegments_Item[];
    /**
     * @summary `legs`.
     * @public
     * @readonly
     */
    readonly legs: MoveCallSegmentsArg_legs_Item[];
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        targetCallSegmentAssociation: CSAID,
        callSegments: MoveCallSegmentsArg_callSegments_Item[],
        legs: MoveCallSegmentsArg_legs_Item[],
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.targetCallSegmentAssociation = targetCallSegmentAssociation;
        this.callSegments = callSegments;
        this.legs = legs;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MoveCallSegmentsArg
     * @description
     * 
     * This takes an `object` and converts it to a `MoveCallSegmentsArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MoveCallSegmentsArg`.
     * @returns {MoveCallSegmentsArg}
     */
    public static _from_object (_o: { [_K in keyof (MoveCallSegmentsArg)]: (MoveCallSegmentsArg)[_K] }): MoveCallSegmentsArg {
        return new MoveCallSegmentsArg(_o.targetCallSegmentAssociation, _o.callSegments, _o.legs, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MoveCallSegmentsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MoveCallSegmentsArg: $.ComponentSpec[] = [
    new $.ComponentSpec("targetCallSegmentAssociation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callSegments", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legs", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MoveCallSegmentsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MoveCallSegmentsArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MoveCallSegmentsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MoveCallSegmentsArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MoveCallSegmentsArg: $.ASN1Decoder<MoveCallSegmentsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MoveCallSegmentsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MoveCallSegmentsArg (el: _Element): MoveCallSegmentsArg {
    if (!_cached_decoder_for_MoveCallSegmentsArg) { _cached_decoder_for_MoveCallSegmentsArg = function (el: _Element): MoveCallSegmentsArg {
    let targetCallSegmentAssociation!: CSAID;
    let callSegments!: MoveCallSegmentsArg_callSegments_Item[];
    let legs!: MoveCallSegmentsArg_legs_Item[];
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "targetCallSegmentAssociation": (_el: _Element): void => { targetCallSegmentAssociation = $._decode_implicit<CSAID>(() => _decode_CSAID)(_el); },
        "callSegments": (_el: _Element): void => { callSegments = $._decode_implicit<MoveCallSegmentsArg_callSegments_Item[]>(() => $._decodeSequenceOf<MoveCallSegmentsArg_callSegments_Item>(() => _decode_MoveCallSegmentsArg_callSegments_Item))(_el); },
        "legs": (_el: _Element): void => { legs = $._decode_implicit<MoveCallSegmentsArg_legs_Item[]>(() => $._decodeSequenceOf<MoveCallSegmentsArg_legs_Item>(() => _decode_MoveCallSegmentsArg_legs_Item))(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MoveCallSegmentsArg,
        _extension_additions_list_spec_for_MoveCallSegmentsArg,
        _root_component_type_list_2_spec_for_MoveCallSegmentsArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MoveCallSegmentsArg(
        targetCallSegmentAssociation,
        callSegments,
        legs,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MoveCallSegmentsArg(el);
}

let _cached_encoder_for_MoveCallSegmentsArg: $.ASN1Encoder<MoveCallSegmentsArg> | null = null;

/**
 * @summary Encodes a(n) MoveCallSegmentsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MoveCallSegmentsArg, encoded as an ASN.1 Element.
 */
export
function _encode_MoveCallSegmentsArg (value: MoveCallSegmentsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MoveCallSegmentsArg) { _cached_encoder_for_MoveCallSegmentsArg = function (value: MoveCallSegmentsArg, elGetter: $.ASN1Encoder<MoveCallSegmentsArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CSAID, $.BER)(value.targetCallSegmentAssociation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MoveCallSegmentsArg_callSegments_Item>(() => _encode_MoveCallSegmentsArg_callSegments_Item, $.BER), $.BER)(value.callSegments, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<MoveCallSegmentsArg_legs_Item>(() => _encode_MoveCallSegmentsArg_legs_Item, $.BER), $.BER)(value.legs, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MoveCallSegmentsArg(value, elGetter);
}


/* eslint-enable */
