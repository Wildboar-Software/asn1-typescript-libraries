/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicGapCriteria, _decode_BasicGapCriteria, _encode_BasicGapCriteria } from "../IN-SSF-SCF-datatypes/BasicGapCriteria.ta.mjs";
// export { BasicGapCriteria, _decode_BasicGapCriteria, _encode_BasicGapCriteria } from "../IN-SSF-SCF-datatypes/BasicGapCriteria.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-SSF-SCF-datatypes/ScfID.ta.mjs";


/**
 * @summary CompoundCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundCriteria ::= SEQUENCE {
 *   basicGapCriteria  [0]  BasicGapCriteria,
 *   scfID             [1]  ScfID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CompoundCriteria {
    /**
     * @summary `basicGapCriteria`.
     * @public
     * @readonly
     */
    readonly basicGapCriteria: BasicGapCriteria;
    /**
     * @summary `scfID`.
     * @public
     * @readonly
     */
    readonly scfID: OPTIONAL<ScfID>;

    constructor (
        basicGapCriteria: BasicGapCriteria,
        scfID?: OPTIONAL<ScfID>
    ) {
        this.basicGapCriteria = basicGapCriteria;
        this.scfID = scfID;
    }

    /**
     * @summary Restructures an object into a CompoundCriteria
     * @description
     * 
     * This takes an `object` and converts it to a `CompoundCriteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompoundCriteria`.
     * @returns {CompoundCriteria}
     */
    public static _from_object (_o: { [_K in keyof (CompoundCriteria)]: (CompoundCriteria)[_K] }): CompoundCriteria {
        return new CompoundCriteria(_o.basicGapCriteria, _o.scfID);
    }


}

/**
 * @summary The Leading Root Component Types of CompoundCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompoundCriteria: $.ComponentSpec[] = [
    new $.ComponentSpec("basicGapCriteria", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CompoundCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompoundCriteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompoundCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompoundCriteria: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompoundCriteria: $.ASN1Decoder<CompoundCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundCriteria (el: _Element): CompoundCriteria {
    if (!_cached_decoder_for_CompoundCriteria) { _cached_decoder_for_CompoundCriteria = function (el: _Element): CompoundCriteria {
    let basicGapCriteria!: BasicGapCriteria;
    let scfID: OPTIONAL<ScfID>;
    const callbacks: $.DecodingMap = {
        "basicGapCriteria": (_el: _Element): void => { basicGapCriteria = $._decode_explicit<BasicGapCriteria>(() => _decode_BasicGapCriteria)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompoundCriteria,
        _extension_additions_list_spec_for_CompoundCriteria,
        _root_component_type_list_2_spec_for_CompoundCriteria,
        undefined,
    );
    return new CompoundCriteria(
        basicGapCriteria,
        scfID
    );
}; }
    return _cached_decoder_for_CompoundCriteria(el);
}

let _cached_encoder_for_CompoundCriteria: $.ASN1Encoder<CompoundCriteria> | null = null;

/**
 * @summary Encodes a(n) CompoundCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundCriteria (value: CompoundCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundCriteria) { _cached_encoder_for_CompoundCriteria = function (value: CompoundCriteria, elGetter: $.ASN1Encoder<CompoundCriteria>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_BasicGapCriteria, $.BER)(value.basicGapCriteria, $.BER));
    if (value.scfID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ScfID, $.BER)(value.scfID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CompoundCriteria(value, elGetter);
}


/* eslint-enable */
