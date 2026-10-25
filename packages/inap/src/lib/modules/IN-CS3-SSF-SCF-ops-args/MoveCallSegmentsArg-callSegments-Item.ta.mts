/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { initialCallSegment } from "../IN-CS3-SSF-SCF-datatypes/initialCallSegment.va.mjs";
// export { initialCallSegment } from "../IN-CS3-SSF-SCF-datatypes/initialCallSegment.va.mjs";


/**
 * @summary MoveCallSegmentsArg_callSegments_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MoveCallSegmentsArg-callSegments-Item ::=
 * SEQUENCE {
 *   sourceCallSegment [0] CallSegmentID DEFAULT initialCallSegment,
 *   newCallSegment [1] CallSegmentID,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class MoveCallSegmentsArg_callSegments_Item {
    /**
     * @summary `sourceCallSegment`.
     * @public
     * @readonly
     */
    readonly sourceCallSegment: OPTIONAL<CallSegmentID>;
    /**
     * @summary `newCallSegment`.
     * @public
     * @readonly
     */
    readonly newCallSegment: CallSegmentID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sourceCallSegment: OPTIONAL<CallSegmentID>,
        newCallSegment: CallSegmentID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sourceCallSegment = sourceCallSegment;
        this.newCallSegment = newCallSegment;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MoveCallSegmentsArg_callSegments_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MoveCallSegmentsArg_callSegments_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MoveCallSegmentsArg_callSegments_Item`.
     * @returns {MoveCallSegmentsArg_callSegments_Item}
     */
    public static _from_object (_o: { [_K in keyof (MoveCallSegmentsArg_callSegments_Item)]: (MoveCallSegmentsArg_callSegments_Item)[_K] }): MoveCallSegmentsArg_callSegments_Item {
        return new MoveCallSegmentsArg_callSegments_Item(_o.sourceCallSegment, _o.newCallSegment, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `sourceCallSegment`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_sourceCallSegment (): INTEGER { return initialCallSegment; }
}

/**
 * @summary The Leading Root Component Types of MoveCallSegmentsArg_callSegments_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MoveCallSegmentsArg_callSegments_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceCallSegment", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newCallSegment", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MoveCallSegmentsArg_callSegments_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MoveCallSegmentsArg_callSegments_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MoveCallSegmentsArg_callSegments_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MoveCallSegmentsArg_callSegments_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MoveCallSegmentsArg_callSegments_Item: $.ASN1Decoder<MoveCallSegmentsArg_callSegments_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MoveCallSegmentsArg_callSegments_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MoveCallSegmentsArg_callSegments_Item (el: _Element): MoveCallSegmentsArg_callSegments_Item {
    if (!_cached_decoder_for_MoveCallSegmentsArg_callSegments_Item) { _cached_decoder_for_MoveCallSegmentsArg_callSegments_Item = function (el: _Element): MoveCallSegmentsArg_callSegments_Item {
    let sourceCallSegment: OPTIONAL<CallSegmentID> = MoveCallSegmentsArg_callSegments_Item._default_value_for_sourceCallSegment;
    let newCallSegment!: CallSegmentID;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sourceCallSegment": (_el: _Element): void => { sourceCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "newCallSegment": (_el: _Element): void => { newCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MoveCallSegmentsArg_callSegments_Item,
        _extension_additions_list_spec_for_MoveCallSegmentsArg_callSegments_Item,
        _root_component_type_list_2_spec_for_MoveCallSegmentsArg_callSegments_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MoveCallSegmentsArg_callSegments_Item(
        sourceCallSegment,
        newCallSegment,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MoveCallSegmentsArg_callSegments_Item(el);
}

let _cached_encoder_for_MoveCallSegmentsArg_callSegments_Item: $.ASN1Encoder<MoveCallSegmentsArg_callSegments_Item> | null = null;

/**
 * @summary Encodes a(n) MoveCallSegmentsArg_callSegments_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MoveCallSegmentsArg_callSegments_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MoveCallSegmentsArg_callSegments_Item (value: MoveCallSegmentsArg_callSegments_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MoveCallSegmentsArg_callSegments_Item) { _cached_encoder_for_MoveCallSegmentsArg_callSegments_Item = function (value: MoveCallSegmentsArg_callSegments_Item, elGetter: $.ASN1Encoder<MoveCallSegmentsArg_callSegments_Item>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sourceCallSegment !== undefined && !$.deepEq(value.sourceCallSegment, MoveCallSegmentsArg_callSegments_Item._default_value_for_sourceCallSegment)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallSegmentID, $.BER)(value.sourceCallSegment, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.newCallSegment, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MoveCallSegmentsArg_callSegments_Item(value, elGetter);
}


/* eslint-enable */
