/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-SSF-SCF-datatypes/ScfID.ta.mjs";


/**
 * @summary TraceItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceItem ::= SET {scf  [0]  ScfID,
 *                           ...
 * }
 * ```
 * 
 * @class
 */
export
class TraceItem {
    /**
     * @summary `scf`.
     * @public
     * @readonly
     */
    readonly scf: ScfID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        scf: ScfID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.scf = scf;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TraceItem
     * @description
     * 
     * This takes an `object` and converts it to a `TraceItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceItem`.
     * @returns {TraceItem}
     */
    public static _from_object (_o: { [_K in keyof (TraceItem)]: (TraceItem)[_K] }): TraceItem {
        return new TraceItem(_o.scf, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TraceItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TraceItem: $.ComponentSpec[] = [
    new $.ComponentSpec("scf", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of TraceItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TraceItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TraceItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TraceItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TraceItem: $.ASN1Decoder<TraceItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceItem (el: _Element): TraceItem {
    if (!_cached_decoder_for_TraceItem) { _cached_decoder_for_TraceItem = function (el: _Element): TraceItem {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let scf!: ScfID;
    const _unrecognizedExtensionsList: _Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "scf": (_el: _Element): void => { scf = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TraceItem,
        _extension_additions_list_spec_for_TraceItem,
        _root_component_type_list_2_spec_for_TraceItem,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new TraceItem( /* SET_CONSTRUCTOR_CALL */
        scf,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TraceItem(el);
}

let _cached_encoder_for_TraceItem: $.ASN1Encoder<TraceItem> | null = null;

/**
 * @summary Encodes a(n) TraceItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceItem, encoded as an ASN.1 Element.
 */
export
function _encode_TraceItem (value: TraceItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceItem) { _cached_encoder_for_TraceItem = function (value: TraceItem, elGetter: $.ASN1Encoder<TraceItem>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ScfID, $.BER)(value.scf, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TraceItem(value, elGetter);
}


/* eslint-enable */
