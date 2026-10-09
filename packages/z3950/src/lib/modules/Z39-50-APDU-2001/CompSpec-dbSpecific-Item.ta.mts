/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
// export { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { Specification, _decode_Specification, _encode_Specification } from "../Z39-50-APDU-2001/Specification.ta.mjs";
// export { Specification, _decode_Specification, _encode_Specification } from "../Z39-50-APDU-2001/Specification.ta.mjs";


/**
 * @summary CompSpec_dbSpecific_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompSpec-dbSpecific-Item ::= SEQUENCE {
 *     db [1] DatabaseName,
 *     spec [2] IMPLICIT Specification
 * }
 * ```
 * 
 * @class
 */
export
class CompSpec_dbSpecific_Item {
    /**
     * @summary `db`.
     * @public
     * @readonly
     */
    readonly db: DatabaseName;
    /**
     * @summary `spec`.
     * @public
     * @readonly
     */
    readonly spec: Specification;

    constructor (
        db: DatabaseName,
        spec: Specification
    ) {
        this.db = db;
        this.spec = spec;
    }

    /**
     * @summary Restructures an object into a CompSpec_dbSpecific_Item
     * @description
     * 
     * This takes an `object` and converts it to a `CompSpec_dbSpecific_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompSpec_dbSpecific_Item`.
     * @returns {CompSpec_dbSpecific_Item}
     */
    public static _from_object (_o: { [_K in keyof (CompSpec_dbSpecific_Item)]: (CompSpec_dbSpecific_Item)[_K] }): CompSpec_dbSpecific_Item {
        return new CompSpec_dbSpecific_Item(_o.db, _o.spec);
    }


}

/**
 * @summary The Leading Root Component Types of CompSpec_dbSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompSpec_dbSpecific_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("db", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("spec", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CompSpec_dbSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompSpec_dbSpecific_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompSpec_dbSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompSpec_dbSpecific_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompSpec_dbSpecific_Item: $.ASN1Decoder<CompSpec_dbSpecific_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompSpec_dbSpecific_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompSpec_dbSpecific_Item (el: _Element): CompSpec_dbSpecific_Item {
    if (!_cached_decoder_for_CompSpec_dbSpecific_Item) { _cached_decoder_for_CompSpec_dbSpecific_Item = function (el: _Element): CompSpec_dbSpecific_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CompSpec-dbSpecific-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "db";
    sequence[1].name = "spec";
    let db!: DatabaseName;
    let spec!: Specification;
    db = $._decode_explicit<DatabaseName>(() => _decode_DatabaseName)(sequence[0]);
    spec = $._decode_implicit<Specification>(() => _decode_Specification)(sequence[1]);
    return new CompSpec_dbSpecific_Item(
        db,
        spec,

    );
}; }
    return _cached_decoder_for_CompSpec_dbSpecific_Item(el);
}

let _cached_encoder_for_CompSpec_dbSpecific_Item: $.ASN1Encoder<CompSpec_dbSpecific_Item> | null = null;

/**
 * @summary Encodes a(n) CompSpec_dbSpecific_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompSpec_dbSpecific_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CompSpec_dbSpecific_Item (value: CompSpec_dbSpecific_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompSpec_dbSpecific_Item) { _cached_encoder_for_CompSpec_dbSpecific_Item = function (value: CompSpec_dbSpecific_Item, elGetter: $.ASN1Encoder<CompSpec_dbSpecific_Item>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.db, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Specification, $.BER)(value.spec, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CompSpec_dbSpecific_Item(value, elGetter);
}


/* eslint-enable */
